Writing Your First Kernel Module

Centos or Ubuntu... Whichever will compile.

Worked on Ubuntu!
Standard tutorial followed in Linux docs:
https://www.tldp.org/LDP/lkmpg/2.6/html/x121.html

Hello world, goodbye world in dmesg
insmod, rmmod, modinfo all work

That was too easy.
Now:
* Build hello world kernel module (already done)
  * Use _ _ init and _ _ exit macros
* Create a very simple device or device file
* That's it

Creating device
Hmmm...

Jumping in with the rough draft.

-------------------------------------------

Writing Your First Kernel Module

So we've already [built the kernel from source](/blog/2018/03/03/compile-the-linux-kernel-from-source.html) and even [modified the source code](/blog/2018/03/23/simple-linux-kernel-source-modifications.html). While these were some pretty cool parlor tricks, isn't it about time we learned something useful?

Well, I can't promise that, but today we'll take the first step in that direction by building a Linux kernel module.

The Linux kernel is structured so that you can add extended functionality without modifying the core source. These added *modules* can be compiled into the source, or added dynamically. The one we write today will be inserted dynamically, becoming usable without a system reboot.

While writing a kernel module is definitely safer than modifying the source, it can still mess up your system a lot more than a user space application, so proceed with caution.

# User Space vs. Kernel space

Hold on - What was that last part about a safe space? Oh, you mean user space!

In the world of kernel developers, where wise old men tug their beards and discuss the virtues and shortcomings of Round Robin scheduling and virtual memory schemes, there are but two paths that a budding programmer can follow - that of the User Space, and that of the Kernel Space.

User space applications cover most things that we think of for software development - these are your browsers, email clients, video games, web servers... and so forth. They are the shining towers that we admire, but we sometimes fail to see the infrastructure that supports them. Even a mighty skyscraper must have a solid base.(a little bit much on the descriptions) Kernel space code involves everything that makes the operating system run. It is the host to all user applications. System calls, memory management, process management, scheduling, threading, device management, and much more are handled in kernel space. Much as a great _________ is one that goes unnoticed, a beautiful kernel handles all the code under the hood seamlessly.

# What can a kernel module do?

Not much if I'm writing it.

Jokes aside, kernel modules can be anything from a device driver to a new type of file system.

# Create the Module

Enough talk. Let's get to work! The first thing we'll need to create our kernel module is a `Makefile`. If you're not familiar with `make`, it's a build tool that lets you automate redundant tasks like compilation, cleanup, and so forth. For very small projects, it may seem like a convenience, but as things become more complex, a good `Makefile` is essential. Ours will be fairly straightforward. Create a blank directory, `cd` to it, and open `Makefile` in your favorite text editor:

```
obj-m += hello-world.o
all:
  make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
  make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
```

The first line uses the `make` Domain Specific Language (DSL) to append `hello-world.o` to the `obj-m` variable.

A few takeaways:
* `obj-m` is referenced in another `Makefile` (But where in that file? only see it in a comment)
* For all of your Bash enthusiasts out there, you'll recognize `$()`. Much like bash, this operator substitutes  the result of what executes between the parentheses into the file. It's important not to confuse this with the Bash or shell version of this, however. The code that is executed between the parentheses of `$()` in a `Makefile` *must* be in the `make` DSL, not in bash/shell.
  * Furthermore, `shell` is a `make` builtin that allows you to execute shell commands. (bash, ksh, csh, or whatever your heart desires in the way of shells)
* `PWD` is another `make` builtin that does exactly what the shell `pwd` (print working directory) does. In fact, replacing `$(PWD)` with `$(shell pwd)` would produce the exact same result. (Try it!)

The reason we're setting the `obj-m` variable is because we're about to call `make` again, which invokes the `Makefile` found at `/lib/modules/(your kernel version here)/build/Makefile`.

Blah blah blah.

So, now let's get to coding.

Edit `hello-world.c` and add the following code:

{% highlight c %}
#include <linux/module.h>
#include <linux/kernel.h>

int init_module(void)
{
  printk(KERN_INFO "Hello world.\n");
  return 0;
}
void cleanup_module(void)
{
  printk(KERN_INFO "Goodbye world.\n");
}
{% endhighlight %}

Save this file. Type `make`. If all goes well and there are no errors, several files will be created in the current directory. The important one to note is `hello-world.ko`.

If you're wondering why there is never a comma between `KERN_INFO` and your message in `printk`, it's because `KERN_INFO` is a macro. In fact, this and all other `printk` macros are defined in [`/include/linux/kern_levels.h`](https://github.com/torvalds/linux/blob/master/include/linux/kern_levels.h) in the Linux source code.

# Installing the Module

Time to test out our hard-earned module. While in the same directory, type `sudo insmod hello-world.ko`. If no errors are present, it must have worked. Verify this with `dmesg`. In my case, it looked something like this:

![dmesg with Hello](/blog/assets/img/articles/kernel-module/dmesg1.png)
*Did you say something?*

So, that worked well enough. Try out `modinfo hello-world.ko` to see some more generic information about the module you just made.

Okay, that's enough fun for one day. Let's rip that thing right back out of the kernel. Type: `sudo rmmod hello-world.ko` and again check `dmesg`:

![dmesg with Hello and Goodbye](/blog/assets/img/articles/kernel-module/dmesg2.png)
*You say goodbye... And I say hello.*

How beautiful. The circle of life is complete. They sure do grow up fast.

# Conclusion

Well, I sure hope this was a hootin' good time for you. We wrote our first kernel module, compiled it, and did a good old hot swap into the running kernel. All in all, it was a good start. The future is bright for you, young kernalist. If you so dare, you can attempt to write a device driver kernel module. I'll leave that up to you for now. Until then, keep coding.

Sources & Other Useful Links:
https://www.apriorit.com/dev-blog/195-simple-driver-for-linux-os
https://blog.sourcerer.io/writing-a-simple-linux-kernel-module-d9dc3762c234
https://www.tldp.org/LDP/lkmpg/2.6/html/x245.html
https://www.safaribooksonline.com/library/view/linux-device-drivers/0596005903/ch02.html
https://stackoverflow.com/questions/38492059/why-doesnt-the-function-printk-use-a-comma-to-separate-parameters
