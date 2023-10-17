---
title: A Simple Modification to the Linux Source
draft: true
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
