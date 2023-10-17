---
title: "10 Minute Linux Crash Course - Everything You Need to Get Started Now (Part 2)"
draft: true
path: /blog/misc/10-minute-linux-1/
---

## Getting Crafty (Text Editors)

Pretty much everything is a file in Linux, so text editors are vitally important. You can do just about everything you need to on a Linux system with no GUI windows, just a terminal window and a text editor. This, of course, is a double edged sword - it's convenient, but can be intimidating if you're not comfortable with a terminal. Luckily, you're reading this tutorial, so you'll be warm and cozy with that type of thing soon enough!

### `nano`

TODO

### `vim`

TODO

### Other notable text editors

gedit TODO

emacs TODO

## THe Power of Pipes

TODO

### `head`

TODO

### `tail`

TODO

## `grep`: Always win at hide and seek

TODO

## Under Control - Managing Processes

### `ps`

If you want to **list running processes**, then use the `ps` command.

By default, it ...

TODO (-ef)

### `kill`

Though some think it is inhumane, it is sometimes necessary to kill processes that you no longer need.

be careful not to kill something in the middle of something - could corrupt files etc.

TODO

## Read the Manual! - Man Pages

TODO

## Linux Distributions

### Common Distributions

TODO

### System Info

TODO

### What distro am I on?

TODO

## Install It All - Package Managers

If all the software you needed came bundled when you install the operating system, it would take days to install, and we'd need a huge hard drive.

Luckily, package managers let us install only the packages we need from the internet. With a single command, you can add new programs to your system that can do just about anything.

### `apt`

TODO

### `yum`

TODO

### `pacman`

TODO

### `emerge`

TODO

## Coding Crew - Compilers and Interpreters

Programmer or not, you'd be missing out if you didn't take advantage of the power afforded to you by being able to easily write your own scripts and compile your own programs.

### `gcc`, `g++`

The GNU C Compiler (`gcc`) and `g++` are tools used to compile C and C++ programs. While the commands used to invoke these programs can get very long and complex, it's easy to get started. Just use your favorite text editor to put this in `test.c`:

```c
#include <stdio.h>
int main() {
  printf("Hello world\n");
  return 0;
}
```

Now compile it:

```bash
steve@surface01:folder$ gcc test.c -o test
steve@surface01:folder$ ls
test  test.c
steve@surface01:folder$
```

As you can see, we have created an executable file named `test`. Run it like this:

```bash
steve@surface01:games$ ./test
Hello world
steve@surface01:games$
```

Nice work!

### `python`, `python3`

There are two flavors of Python you should be familiar with. The first is `python2`, which is an older version of the language that still comes pre-installed on many systems. `python3` is the newest version of the language; you'll want to use this unless you have a good reason to use the old one. You can check which versions are installed like this:

```bash
steve@surface01:folder$ python2 --version
Python 2.7.18rc1
steve@surface01:folder$ python3 --version
Python 3.8.2
steve@surface01:folder$ 
```

Python couldn't be easier to get started with. Since it's an interpreted language, you don't even need to create a file. Kick off the interactive shell like this:

```bash
steve@surface01:folder$ python
Python 3.8.2 (default, Jul 16 2020, 14:00:26)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello world")
Hello world
>>> exit()
steve@surface01:folder$
```

### And many more!

Other programming languages, such as Ruby, Node.JS, Go, Rust, and so forth, are easy to install and get started with. If you need to know about one of them in particular, try searching for "install *language* on *distribution*," where *distribution* is your Linux distribution.

## Warp Up

Congratulations! If you followed along, you now know all the basics of using Linux effectively!

Since you're on such a roll, [why not try your hand at Python?](/blog/quick-python)

If you're feeling especially ambitious, [you could try making your own operating system from scratch.](/blog/os)

Either way, if you enjoyed this article, **please subscribe to our mailing list using the form below**. Thanks for reading!