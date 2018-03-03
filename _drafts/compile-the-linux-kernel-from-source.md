---
layout: post
title: How to Compile the Linux Kernel from Source
---

Linux is everywhere, and there are plenty of Linux distributions available providing great out-of-the-box features. But what happens when you need to make an intricate, low-level change to system functionality? What if you wanted to get into kernel development and start to understand one of the world's largest open source projects?

The first step to doing all of these things is compiling the Linux kernel from source. While it may seem tedious or trivial at first, this process will get you down in the weeds of the OS, allowing you to turn modules on or off, search for kernel features, and even examine (and if you're brave, tweak) the raw source code that runs everything on your Linux machine!

1. Install all dependencies.

Let's jump right in. The code is nothing without the toolchain that compiles it! We'll make use of our handy package managers to get everything we need.

If you use `apt-get` (**Debian / Ubuntu**), use the following:
```
sudo apt-get install git build-essential
```
If you use `yum` (**Centos, RHEL, etc.**):
```
sudo yum install git rpm-build redhat-rpm-config asciidoc hmaccalc perl-ExtUtils-Embed pesign xmlto
sudo yum install audit-libs-devel binutils-devel elfutils-devel elfutils-libelf-devel
sudo yum install ncurses-devel newt-devel numactl-devel pciutils-devel python-devel zlib-devel
```

2. Clone the source.

The absolute latest, bleeding edge version of the source is found on the Github account of Linus Torvalds himself, the mastermind behind Linux! You can check it out [here](https://www.github.com/torvalds/linux).

To clone this, find a place to keep it (your home area is fine) and type the following:

```
git clone https://www.github.com/torvalds/linux.git
```

This will create a clone in a `linux` folder wherever you ran the command. Make sure you have a steady connection - this may take a while!

If you have a spotty connection, or you're in a hurry, you can create a **shallow clone**, which will clone only the **most recent commit**, rather than the entire history:

```
git clone --depth 1 https://www.github.com/torvalds/linux.git
```

3. Optional: Determine number of processors.

Building the kernel is a fairly labor intensive task for your computer. If you're not utilizing all of your processors, it will take much, much longer.

If you know how many CPUs your computer has, great. If not, examine the output of `cat /proc/cpuinfo`. Though you should verify this by examining the file yourself, the following command should give you the exact number of processors you have:

```
cat /proc/cpuinfo | grep processor | wc -l
```

Make note of this number - it will be important in the next few steps.

4. Configure the kernel.

Even Linux geeks like to use a GUI once in a while! The menuconfig program will turn your terminal into a mini-windowing system, allowing you to select which parts of the kernel are included in your build. To begin, run the following:

```
cd linux
make menuconfig
```

While in this program, you can use your arrow keys and enter/space bar to navigate and select modules. Another helpful trick is to press the `/` key, which will allow you to search. As an example, type `/HDMI` to get information on HDMI drivers in the kernel.

Once you have finished, select `< Save >` and press `< Ok >` to write to a `.config` file in that directory. After this, feel free to `< Exit >` the menu.

Another option is to use the `make config` command, but this isn't recommended. It will use the command line to ask you a long series of questions, requiring you to manually verify almost every setting in the kernel.

5. bzImage

It's time for the moment of truth (one of them, anyway). We're going to create bzImage, which stands for "Big Zimage." Don't worry about what this means - just think of it as another step in the pipeline.

Remember the number of processors you found in step 3? Now's the time to use it. Run the following, where <NUMBER OF PROCESSORS> is your answer from Step 3:
```
make bzImage -j<NUMBER OF PROCESSORS>
```

For example, if your computer has 4 processors, you would use:
```
make bzImage -j4
```

This `-j` option specifies the **number of jobs** to use when running the `make` command. By using (at least) one job for each processor, you will take better advantage of your CPU's resources and speed up the build process significantly.

While there is some debate over the exact jobs-to-processors ratio that provides the optimal performance, using a 1:1 ratio as a rule of thumb should work well enough getting started. Since the effectiveness of this may vary depending on what the job is, feel free to mess around with other numbers, benchmark results, and find what works best.

6. make modules [-j]
7. make modules_install
8. make install

Now it's built! Next we need to use it somewhere.

1. Move the files onto the system you want to try it on.
2. Copy to /boot.
3. sudo update-grub
4. Observe uname -r.
4. Reboot
6. New kernel should be active! Observe uname -r.

Keep an eye out for next article: Simple modifications to kernel source.
Even later: Creating basic kernel module.

Sources:
https://wiki.centos.org/HowTos/I_need_the_Kernel_Source
ftp://ftp.wayne.edu/ldp/en/Kernel-HOWTO/ar01s10.html
