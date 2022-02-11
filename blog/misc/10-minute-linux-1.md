---
title: "10 Minute Linux Crash Course - Everything You Need to Get Started Now"
date: "2020-11-30"
---

Some of us grew up clicking around in MS Paint on Windows. Others may enjoyed the luxurious interface afforded by Mac OS. Still others may have been stuck with nothing more than a cell phone, or even just a TI-84 calculator.

Regardless of your humble beginnings, I want to congratulate you on taking things to the next level by jumping headfirst into the world of Linux. Whatever your reason for dipping your toes in these waters, I'm sure you won't regret it! Anyone involved with computers will almost certainly encounter Linux at some point in their career, so now is the time for you to get ahead of things and figure out how to use the dang thing!

All you'll need is a little patience and about 10 minutes to get started! Read on.

Disclaimer: the video is 10 minutes, but the article may be a bit more verbose. :)

<!--truncate-->

<iframe className="youtube-video-player" src="https://www.youtube.com/embed/XKvmgtOidYU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Making Moves (Navigating the System)

One of the first things you need to know how to do when you're learning to use the computer is how to move around. For Windows or Mac, everything is graphical. Some Linux distributions have a Graphical User Interface (GUI) as well, but Real Linux happens on the command line. From now on, we're throwing off the GUI security blanket and diving straight into the command-line!

### `ls`

By far, the most common command on Linux is `ls`, which `l`i`s`ts the files in the current directory. Instead of opening a window and seeing a folder's files there, you'll instead be in a terminal window whose *current working directory* is set to some folder on your hard drive. `ls` shows you everything in that folder.

Here is an example of what using `ls` may look like:

```bash
steve@surface01:folder$ ls
file1.txt  file2.txt  image.jpg
steve@surface01:folder$
```

In the above, you can see that we typed `ls` and hit enter, showing the contents of our current folder. As it turns out, the folder contains three files: `file1.txt`, `file2.txt`, and `image.jpg`.

The `ls` command on its own hides files that start with a "`.`". To really see **all** the files, you can use `ls -a`:

```bash
steve@surface01:folder$ ls -a
.  ..  file1.txt  file2.txt  image.jpg
steve@surface01:folder$
```

You can view extra information about the files with the **long** version of the command, `ls -l`:

```bash
steve@surface01:folder$ ls -l
total 0
-rw-r--r-- 1 steve steve 0 Nov 28 14:11 file1.txt
-rw-r--r-- 1 steve steve 0 Nov 28 14:11 file2.txt
-rw-r--r-- 1 steve steve 0 Nov 28 14:11 image.jpg
steve@surface01:folder$
```

You can use them together with `ls -al` (or `ls -la`):

```bash
steve@surface01:folder$ ls -al
total 8
drwxr-xr-x  2 steve steve 4096 Nov 28 14:11 .
drwxr-xr-x 28 steve steve 4096 Nov 28 12:38 ..
-rw-r--r--  1 steve steve    0 Nov 28 14:11 file1.txt
-rw-r--r--  1 steve steve    0 Nov 28 14:11 file2.txt
-rw-r--r--  1 steve steve    0 Nov 28 14:11 image.jpg
steve@surface01:folder$
```

### `cd`

What if there's nothing in this folder that we're particularly interested in? Are we out of luck?

No! The `cd` command, or **current directory**, will come to the rescue! We use this command to change the current working directory to somewhere else on the system.

For example, say I need a break from work. In that case, I'll head over to my games folder:

```bash
steve@surface01:games$ cd /home/steve/games
steve@surface01:games$ ls
cod.sh  minecraft.sh
steve@surface01:games$
```

As you can see, typing `ls` again now shows the files inside the **games** folder in my home directory. If the path `/home/steve/does_not_exist` isn't a real folder on your computer, you'll get an error:

```bash
steve@surface01:folder$ cd /home/steve/does_not_exist
-bash: cd: /home/steve/does_not_exist: No such file or directory
steve@surface01:folder$
```

Notice how the path above begins with a slash ("`/`"). When you see this in Linux, it's called an **absolute path**. This means that you're giving the *exact* path to a file or folder on your system. The alternative is to use a **relative path**, which we'll talk about below.

### `pwd`

In case you get completely turned around, you can use the `pwd` command, or **print working directory**, to tell you exactly where you are on the computer.

After running the `cd` command in the above example, this is the output of the `pwd` command:

```bash
steve@surface01:folder$ cd /home/steve/games
steve@surface01:games$ pwd
/home/steve/games
steve@surface01:games$
```

### Relative Paths

There are two special directories you'll want to worry about: `.` and `..`. Yes, you read that right - they're called "dot" and "dot dot". What the heck does that mean?

The single dot, `.`, stands for the **current directory**. The double dot, `..`, stands for the **parent directory**. Anything that uses one of these two special folders, or that does not begin with a slash, is considered a **relative path**.

Say that we're back in my `games` folder, and I want to move up a folder into the `/home/steve` directory. One way to do this would be to type the whole path in the command, as `cd /home/steve`. However, you might as well save your fingers some work! Just type `cd ..` and it will do the same job.

```bash
steve@surface01:games$ pwd
/home/steve/games
steve@surface01:games$ cd ..
steve@surface01:~$ pwd
/home/steve
steve@surface01:~$
steve@surface01:~$ cd games
steve@surface01:games$ pwd
/home/steve/games
steve@surface01:games$
```

It may not seem like a big deal, but paths can get quite long. When you're 20 folders deep, you definitely won't want to type the entire path out to move up a folder!

Another powerful part of this is that you can chain the dot-folders. To move up two directories instead of one, it's as easy as:

```bash
steve@surface01:games$ pwd
/home/steve/games
steve@surface01:games$ cd ../..
steve@surface01:home$ pwd
/home
steve@surface01:home$
```

Notice that I moved from `/home/steve/games` all the way up to `/home`. Much quicker!

Now that you now know the basics of moving around, let's get our hands dirty and mess with some files.

## Get Organized! (File Manipulation)

### `cat`

The fluffiest of all Linux commands, `cat` is also one of the most useful. It's job is not to eat all of your kibble or crawl on your keyboard, but instead to **output the contents of any file on your computer**. This is handy if you want to check what's inside of something without popping open a text editor, but it's also priceless when using **piping**, discussed below.

It's incredibly simple to use. Just type `cat <name_of_file>`. Here's an example - say that I keep my dog's name is a text file in case I forget it:

```bash
steve@surface01:folder$ ls
dog_name.txt
steve@surface01:folder$ cat dog_name.txt
Doggo
steve@surface01:folder$
```

As you can see, we've printed the contents of `dog_name.txt` to the terminal for all the world to see!

### `touch`

If you need to create an empty file, maybe as a placeholder or just to prove that you have permission to do it, you can use the touch command.

```bash
steve@surface01:folder$ ls
steve@surface01:folder$ touch my_file.txt
steve@surface01:folder$ ls
my_file.txt
steve@surface01:folder$ cat my_file.txt
steve@surface01:folder$
```

There it is!

### `mkdir`

The `mkdir` command lets you **make a directory**. Check it out:

```bash
steve@surface01:folder$ ls
my_file.txt
steve@surface01:folder$ mkdir folder1
steve@surface01:folder$ ls
folder1  my_file.txt
steve@surface01:folder$ touch folder1/other_file.txt
steve@surface01:folder$ cd folder1/
steve@surface01:folder1$ ls
other_file.txt
steve@surface01:folder1$ cd ..
steve@surface01:folder$ ls
folder1  my_file.txt
steve@surface01:folder$
```

If you need to make multiple nested directories all at once, you'll have to use `mkdir -p`.

```bash
steve@surface01:folder$ mkdir lots/of/nested/folders
mkdir: cannot create directory ‘lots/of/nested/folders’: No such file or directory
steve@surface01:folder$ mkdir -p lots/of/nested/folders
steve@surface01:folder$ ls
lots
steve@surface01:folder$ du -a
4       ./lots/of/nested/folders
8       ./lots/of/nested
12      ./lots/of
16      ./lots
20      .
steve@surface01:folder$ find .
.
./lots
./lots/of
./lots/of/nested
./lots/of/nested/folders
steve@surface01:folder$
```

Notice that we used the `du -a` command to see all of the folders. While `du` stands for **disk utilization**, it can also be helpful to show an entire folder structure rather than a single directory. Another option to perform the same task is `find .`.

### `rmdir`

If you want to **remove a directory**, `rmdir` is the way to go.

```bash
steve@surface01:folder$ mkdir img
steve@surface01:folder$ ls
img
steve@surface01:folder$ rmdir img
steve@surface01:folder$ ls
steve@surface01:folder$
```

It doesn't always work though. What if the directory has something in it?

```bash
steve@surface01:folder$ ls
steve@surface01:folder$ mkdir testdir
steve@surface01:folder$ touch testdir/testfile.txt
steve@surface01:folder$ find .
.
./testdir
./testdir/testfile.txt
steve@surface01:folder$ rmdir testdir
rmdir: failed to remove 'testdir': Directory not empty
steve@surface01:folder$ ls
testdir
steve@surface01:folder$
```

In order to delete a directory with something in it, we'll have to use the `rm` command, explained below.

### `mv`

The `mv` command serves two purposes. You can **move** a file, and you can also **rename** a file. If you think about it, this is pretty much the same thing anyway. If you rename a file, it's a lot like you're moving it to a new path in the same directory.

```bash
steve@surface01:folder$ touch myfile.txt
steve@surface01:folder$ ls
myfile.txt
steve@surface01:folder$ mv myfile.txt not_my_file.txt
steve@surface01:folder$ ls
not_my_file.txt
steve@surface01:folder$
```

### `rm`

Sadly, we have to let some of our files go sometimes. When that time comes, `rm` lets you **remove files**.

```bash
steve@surface01:folder$ ls
not_my_file.txt
steve@surface01:folder$ rm not_my_file.txt
rm: remove regular empty file 'not_my_file.txt'? y
steve@surface01:folder$ ls
steve@surface01:folder$
```

So long!

What if you want to **remove a directory**? You'll have to use `rm -r` instead. The `-r` stands for **recursive**.

```bash
steve@surface01:folder$ ls
steve@surface01:folder$ mkdir testdir
steve@surface01:folder$ touch testdir/testfile.txt
steve@surface01:folder$ find .
.
./testdir
./testdir/testfile.txt
steve@surface01:folder$ rm -r testdir
rm: descend into directory 'testdir'? y
rm: remove regular empty file 'testdir/testfile.txt'? y
rm: remove directory 'testdir'? y
steve@surface01:folder$ ls
steve@surface01:folder$
```

Notice how it asks you for *every single file*. If you're deleting a directory with thousands of files, this is not going to work. To **force** it to delete the files without asking, add `-f` to the command:

```bash
steve@surface01:folder$ ls
steve@surface01:folder$ mkdir testdir
steve@surface01:folder$ touch testdir/testfile.txt
steve@surface01:folder$ find .
.
./testdir
./testdir/testfile.txt
steve@surface01:folder$ rm -rf testdir
steve@surface01:folder$ ls
steve@surface01:folder$
```

**Be careful with this one**, as you can damage your system beyond repair. **Never run anything like `rm -rf /`** as you will delete everything (assuming you have permission) and brick your system. It's like deleting system32 on Windows - anyone telling you to run this command does not have good intentions!

## Wrap Up

Well done - you now know the basics of navigating around a Linux system.

If you enjoyed this article, **please subscribe to our mailing list using the form below**. Thanks for reading!