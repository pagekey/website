---
title: A Simple Modification to the Linux Source
---

Brainstorm and Notes:
* The Linux source is very complex and has many parts
* It can be hard to get a grasp on where to start
* Once you find the entry point, it's not as bad.
* More before the actual coding:
	* How the kernel works
	* Where the entry point is
* Modification: Goal is to print something, do some math. In other words, write some code!
	* Important note about printkern and where to find messages
		* /var/log/messages or journalctl
	* Simple print and force return - I tried this and caused a kernel panic
		* My original intention - have it print something to the screen and stop all execution.
			* Analogy - It's like doing heart surgery with a shovel
	 	* Well, let's try putting the print AFTER it does all the important stuff..
			* Note that most code syntax errors will be caught in make bzImage step. May also get a few warnings (declaration and assignment on same line illegal in some strict versions of C)
			* It worked, the kernel booted (we didn't kill it!)
			* Problem: Nothing in journalctl (Ubuntu) or /var/log/messages (other OSes)
			* First message: printing the Linux version
			* Maybe we caught it before the dang logger started.
		* Time to follow a trail....
			* https://elixir.bootlin.com/linux/latest/source/init/main.c#L946
			* first looked up run_init_process (init/main.c)
			* do_execve (fs/exec.c)
			* do_execveat_common (fs/exec.c)
			* Okay, this is like spaghetti code to me
		* I need more info regarding the boot process
			* http://glennastory.net/boot/linux.html
			* So it saves the kernel string..... and prints it, as I can see in line 2 of our output
			* So I'll look for that.
			* In source: `grep printk * -r | grep "Command line"`
				* Almost immediately finds arch/alpha/kernel/setup.c
				* Hm! New init code I didn't know about!
				* Seems platform specific? File titled "bootup setup stuff"
				* Adding our debug code directly after this printk
				* Whoops! Apparently there's a kernel/setup.c for every architecture. Should have used my arch: x86
				* Pasted this code into that file instead
				* It worked! See journalctl
* Build the kernel and set it to boot - See [this] article
* Good stuff

Our nine lines:
```
printk(KERN_DEBUG "Hello this is Steve calling, I'm currently trapped in your kernel.");
printk(KERN_DEBUG "Hello, yep, it's me here.");
int math = 5;
int i;
int ans;
for (i = 0; i < 5; i++) {
    ans = math + i;
		printk(KERN_DEBUG "The value of math + i is %i", ans);
}
```
-------------------------------------
Outline
* Introduction - Keep this quick since the body is so long
	* The Linux source is very complex and has many parts
		* List 3 of the major parts, "and more" ?
	* It can be hard to get a grasp on where to start
	* Once you find the entry point, it's not as bad. (Google it)
	* More before the actual coding:
		* How the kernel works, how it initializes
			* http://glennastory.net/boot/linux.html
		* Where the entry point is
			* Quick google search yields init/main.c
* Body - Actual modification
	* Prerequisite: Check out [my article] on how to build kernel from source
	* Goal: to print something, do some math. In other words, write some code!
		* Include our code snippet here
		* Analogy: Doing this with something as intricate as the kernel is like heart surgery with a shovel
			* Or trying to tune your car engine with a welding torch, when you have no experience with either!
	* Talk about printk and where system logs are
		* /var/log/messages or journalctl
	* Attempt 1: Insert snippet as first lines of kernel_init and return!
		* Include snippet of where it is, init/main.c
		* This didn't work out so well
		* kernelpanic[1-2].png
	* Attempt 2: Put it after the "important stuff" in kernel_init
		* Include snippet
		* Well, it boots... But checking journalctl gives nothing!
		* syslog-pre-success.png
		* Poof! Where is it??
	* Attempt 3: Find a point where we know printk works. (An anchor)
		* In source: `grep printk * -r | grep "Command line"`
		* Look what we found: /arch/* /kernel/setup.c
		* Make sure you match your processor architecture - in my case it was x86
		* Include snippet
		* Success!
		* syslog-success.png
* Conclusion
	* After several attempts, we were able to inject our own code into the kernel
	* Highly complex software, but we made a change and (eventually) even got it to run w/o breaking!
	* I made some mistakes and learned a bit about how the kernel works in the process.
	* I would encourage you to try the same thing - learn by doing!









Simple Linux Kernel Source Changes You Can Make TODAY

The Linux kernel is one of the most complex pieces of software known to man. The source code that comprises it is highly complex. Knowing this, I was wondering what it would take to pick apart such a beast and actually begin to understand it. The key to understanding, like anything else, is to learn by doing. The [entire source repository]() is available to view in a browser, and more than 95% of it is written in C. How hard could it be to write a little C code?

As it turns out, harder than expected. Keep reading to get the full rundown on how I edited the kernel source,  built it, broke it (more than once), and finally made a simple change that outputted to the system logs.

Before we start, you may want to check out how to [build the kernel](http://pagekeysolutions.com/blog/2018/03/03/compile-the-linux-kernel-from-source.html), since we'll just be talking code in this article.

# Modifications

Let's get our hands dirty. Today our goal will be to add a snippet of code that does some math for us, and prints several lines to the system log using `printk`. The snippet we will be using is as follows:

{% highlight c %}
printk(KERN_DEBUG "Hello this is Steve calling, I'm currently trapped in your kernel.");
printk(KERN_DEBUG "Hello, yep, it's me here.");
int math = 5;
int i;
int ans;
for (i = 0; i < 5; i++) {
    ans = math + i;
		printk(KERN_DEBUG "The value of math + i is %i", ans);
}
{% endhighlight %}

## Kernel printing

Note that the above code makes use of the `printkern` function. This is the function that prints to `/var/log/messages`, or for newer versions of Ubuntu, `journalctl`.

## Entry Point

A quick Google search told me that the kernel entry point is located in `init/main.c`. This fascinated me - I hoped that at least knowing where execution began would allow me to slowly unravel the kernel source code. I also thought it would be easy to make changes here, in one of the most important parts of the kernel.

Reading through the source led me to believe that the true start of execution was in this file, at `static int kernel_init(void)`.

## First Attempt - Panic!

My first thought for how to go about this was to find the kernel entry point, insert my code at the beginning of the function, and `return`. The code looked something like this:

<!-- {% highlight c %} -->
```
static int __ref kernel_init(void *unused)
{
	printk(KERN_DEBUG "Hello this is Steve calling, I'm currently trapped in your kernel.");
	// The rest of our snippet ...
	...
	return 0;
  int ret;
	// The rest of the function, never to be executed
	...
}
```
<!-- {% endhighlight %} -->

I hoped that when the machine booted, it would display my message and nothing else. The result was a little bit different... It caused a kernel panic!

![Screenshot of Kernel Panic]({{ "/assets/img/articles/kernel-src/kernel_panic2.jpg" | absolute_url }})
*Panic! At The Kernel*

At this point, I realized that the `kernel_init` function probably does some important stuff, and that cutting it off at the first line may not have been the best strategy.

## Trying Again

My next attempt involved moving the print statement to the end of the function, where (hopefully) all of the important setup tasks have already been completed.

```
static int __ref kernel_init(void *unused)
{
	// Important stuff...
	...
	if (ramdisk_execute_command) {
			ret = run_init_process(ramdisk_execute_command);
			if (!ret)
					return 0;
			pr_err("Failed to execute %s (error %d)\n",
						 ramdisk_execute_command, ret);
	}
	printk(KERN_DEBUG "Hello this is Steve calling, I'm currently trapped in your kernel.");
	// The rest of our snippet ...
	...
}
```

This time, building the kernel succeeded (albeit with a warning due to my sloppy coding skills) and the system booted without crashing. Despite this, I couldn't help but be disappointed when I checked the logs:

![System Logs without our messages](/blog/assets/img/articles/kernel-src/syslog-pre-success.png)
*Poof! Where is it?!*

It was progress, but something was still wrong. My only guess was that we started trying to print things before anything was ready to record them. So, I started to follow the spaghetti...

## Digging In

I needed to find a place where `printk` will work. I decided to see where some of these other messages were being outputted. In the system log, the second message is `Command line: BOOT_IMAGE=...`. So, I searched the source for this message:

```
grep printk * -r | grep "Command line"
```

This almost immediately yielded some files in the `arch` directory. At first, I just edited the first file that came up (`arch/alpha/kernel/setup.c`), but this didn't work. `arch` is short for architecture, meaning that I would have to edit the source for the architecture of my target system. In my case, this was `arch/x86/kernel/setup.c`.

I found the relevant line in this file, and inserted our code snippet below it:

```
#else
    printk(KERN_INFO "Command line: %s\n", boot_command_line);
		// Here goes nothing!!
		printk(KERN_DEBUG "Hello this is Steve calling, I'm currently trapped in your kernel.");
		printk(KERN_DEBUG "Hello, yep, it's me here.");
		int math = 5;
		int i;
		int ans;
		for (i = 0; i < 5; i++) {
		    ans = math + i;
				printk(KERN_DEBUG "The value of math + i is %i", ans);
		}
#endif
```







hi
