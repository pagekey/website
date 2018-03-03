---
layout: post
title: How to Compile the Linux Kernel from Source
---

Linux is everywhere, and there are plenty of Linux distributions available providing great out-of-the-box features. But what happens when you need to make an intricate, low-level change to system functionality? What if you wanted to get into kernel development and start to understand one of the world's largest open source projects?

The first step to doing all of these things is compiling the Linux kernel from source. While it may seem tedious or trivial at first, this process will get you down in the weeds of the OS, allowing you to turn modules on or off, search for kernel features, and even examine (and if you're brave, tweak) the raw source code that runs everything on your Linux machine!

1. Install all dependencies (esp. git)
2. Clone with git
3. Optional: Determine number of processors.
4. make menuconfig
  * Other option (don't user this): make config (from scratch!)
4. make bzImage [-j_]
5. make modules [-j]
6. make modules_install
7. make install

Now it's built! Next we need to use it somewhere.

1. Move the files onto the system you want to try it on.
2. Copy to /boot.
3. sudo update-grub
4. Observe uname -r.
4. Reboot
6. New kernel should be active! Observe uname -r.

Keep an eye out for next article: Simple modifications to kernel source.
Even later: Creating basic kernel module.
