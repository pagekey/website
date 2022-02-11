---
title: 'Take Your Linux Workspace Anywhere: Backup for Nerds'
featured_image: /img/articles/linux-workspace.jpg
featured_image_alt: "A Computer Workspace"
date: "2018-11-24"
---

How many times have you sat down at a new Linux computer and felt like you were starting all over again? All of those aliases, every little helper file and script - gone. This new computer is a shell of its former self (pun intended). Your heart warms as you think back to the comfort and productivity that came with your Linux workstation at home. If only there were a way to take everything you know and love on the go...

Thankfully, there is!

If you don't feel like setting it up yourself, you can clone the pre-finished skeleton I made [on Github](https://github.com/stephengrice/linux-workspace).

# All of your Tools, Mobile

I'm going to show you how to create your own `linux-workspace` that you can regenerate anywhere. Once we have this set up, all you'll need is an internet connection to take it with you.

Essentially, we will be creating a set of common files and scripts that will enable you to clone any code repositories you may have stored online. All of it will be version-controlled with Git, meaning that you can track any changes made.

There are two parts to this little code contraption. The first is `sync-home.bash`. This script provides a way to track changes for important files in your home area, such as `.bashrc`, `.vimrc`, and the like. You simply edit these files from the `home` folder within the repository and commit/push your changes. This keeps all of your files neatly tracked. Meanwhile, `sync-home.bash` will copy them into place whenever you want so that you can start using them.

The second script packs a punch: `clone-repos.py` is what makes this all work . As input, it uses a comma-separated list of repositories stored in `repos.csv`. From this list, it clones these repositories one-by-one into the `wkdir` directory (shorthand for working directory).

This is a smooth solution if you frequently find yourself writing code or developing software of any kind. For me, the most time consuming part of making this happen was organizing all of my existing files into Git repositories and pushing them to websites like Bitbucket and Github.

# Going Remote

If you're like me, when you want to code, you code. You don't start by thinking how to organize every last file on your computer, or how to track every change you make. Your goal is to explore and learn, not to categorize and label. Occasionally, though, you'll need to find something you did months ago, and this is when the hunt begins. Like a madman, you'll search folders high and low for that outlying scoundrel, that scrap of unscrupulous scripting. As you scour the seemingly endless tree of one-off attempts at web apps and random sneezes of game ideas, you may be wondering if there's a better way.

This is why it is so important to get into the habit of working within a Git repository (or some other kind of version control). Even if what you're doing isn't particularly structured, you can always set up a general-purpose practice repository where anything goes. The main idea is to get any kind of code that you touch into a repository so that you can upload it to Github, Bitbucket, or wherever else you may store code online.

Once it's been pushed to one or more sites, the files are available in multiple locations, so you can rest assured that they're safe. When there's a fire, your laptop is stolen, or you finally chuck the poor thing across the room in anger, you'll be glad that all of your precious code is backed up the smart way.

# Setup for Success

Again, I want to let you know that you can still get out of this - the repository I set up [here](https://github.com/stephengrice/linux-workspace) can be forked or cloned to get started in a jiffy. However, if you're the DIY type, I respect that - read on!

First things first - as mentioned above, you'll want to make sure all of the repositories that you want access to in your workspace are uploaded to some kind of external source code hosting service, whether it's self-hosted or one of the big names.

# Handling Home Files

It won't be hard to get a grip on your home files. First, create a `home` directory in your `linux-workspace` repository. This is where you'll keep all of the files you need in your home area to keep life going smoothly. Next, we need a script to install those files whenever we want them. Luckily, I've already taken care of this part for you. Open a text editor, and get ready to write `sync-home.bash`:

```bash
#!/bin/bash
WARNED=false
for f in `ls -A home`; do
        if [ -e ~/$f ] && ! $WARNED; then
                echo Warning: Files will be overwritten if you continue.
                while true; do
                        echo -n "Continue? (y/n): "
                        read user_in
                        if [ "$user_in" = "y" ]; then
                                WARNED=true
                                break
                        elif [ "$user_in" = "n" ]; then
                                exit 0
                        fi
                done
        fi
        echo Copying home/$f into place...
        cp home/$f ~
done
echo Done
```

This script doesn't do a whole lot. Basically, it loops through every file in the `home` directory of your workspace. For each of these files, it first checks if the file already exists in your real home area. If it does, it warns you that your files could be overwritten. If you understand the risks and would rather have the script run to completion without asking for permission, just comment out lines 4–16 above.

After checking in that you're okay with files being overwritten, the script will copy everything in the `linux-workspace/home` folder into your actual Linux home area (`~`). With this, all of those little files, like `.bashrc` and `.vimrc`, will be instantly available. This means all of your personal customizations to the shell, such as shortcuts, aliases, and other related features, will now be available to you.

# Lasso your Repos

How great would it be to regenerate all of the folders you work with, anywhere, without relying on cumbersome cloud services like OneDrive or Google Drive? It's possible, and it's not that hard. We only need a few files.

First, we will create a list of repositories. You can format this list however you want, but any structural changes must be reflected in the script we're about to write that actually performs the sync. For mine, I just created two columns in a CSV format. The first column is the local location where the code will live within your `linux-workspace`. The other is the URL to the remote source of the repository, where we will be cloning from. Here's a sample from mine:

```bash
github/stephengrice, git@github.com:stephengrice/linux-workspace
```

In the above example, the local directory `github/stephengrice` will be created, and `linux-workspace` will be cloned into it from the remote address.

Now we just need a script to sync things up.

# Sync Simply

Before we get started, go through each one of your old repositories and make sure you didn't leave anything uncommitted (type `git status`). If you have anything lingering around, I would recommend creating  a commit to ensure these changes are tracked. I usually just use "Commit old changes" as the commit message. I had to do this many times while pushing all of my repositories to remote. This generic message had to do, as I didn't have time to dive back into each project and figure out where I left off.

Once you've done that, push every repository - and not just the `master` branch. Use `git push --all` to ensure that everything on your local computer is also on the remote site. When this is the case, we can regenerate all of our local repositories with our sync script. After that, we can delete the originals, since the newly cloned repositories are identical.

With all of that said, here's our sync script:

```python
#!/usr/bin/env python3
import csv, os
WORKING_DIRECTORY_NAME = 'wkdir'
if __name__ == "__main__":
	with open('repos.csv') as file:
		csv_data = csv.reader(file, delimiter=',')
		for row in csv_data:
			remote_path = row[1]
			local_path = row[0]
			if os.path.exists('%s/%s' % (WORKING_DIRECTORY_NAME, local_path)):
				print('Already exists: %s' % local_path)
			else:
				print('Cloning repository...')
				command = 'git clone %s wkdir/%s' % (remote_path, local_path)
				print(command)
				os.system(command)
```

My college programming professors would have a heart attack. No comments! What kind of monster have I become?

Not to worry, professor - the script is actually fairly clear cut. Allow me to document it in the next few paragraphs.

The top of the script is defining which Python interpreter to use, importing libraries, and setting constants. The real magic begins when we open `repos.csv`. You may recall that this file contains two columns - first, where we want to store the repo locally, and second, the address of the remote repository we'll be cloning from. For each of the repositories in the file, it checks if it exists locally, and if it doesn't, it clones the remote.

If you get tired of typing out your password every single time, it may be a good idea to copy your public key file (located in `~/.ssh/id_rsa.pub`) into your Github and/or Bitbucket profile. You may also be interested in [pushing out your SSH keys](/blog/misc/push-ssh-keys) if you have local Git servers.

I decided to use Python, because it's quick, straightforward, and a lot more powerful than Bash (no offense to die-hard shell-scripters!). Feel free to make your own script in whichever language tickles your fancy.

# Alias Setup

Most people do a majority of their work from their home area. It's exceedingly easy to get there - type `cd`, and you're done. With this in mind, I thought it may be inconvenient to move all the way over to your Linux workspace every time you want to do something. To get around this, I set up a short alias that allows you to jump to `linux-workspace`, and it's been working great for me.

While you can use whatever name you want for this alias, I named it `wkdir`. To get this alias working, just edit your `.bashrc` file in the `home` directory of the repository. Add this line:

```bash
alias wkdir='cd ~/linux-workspace/wkdir'
```

Type the following to finish settings things up:

```bash
cd ~/linux-workspace
./sync-home.bash
source ~/.bashrc
```

Now, try it out! Just type `wkdir`, anytime, anywhere.

# Pulling It All Together

With all of this in place, we can adopt the following workflow:

## Initial Setup

1. If you have not already, organize all of your code into Git repositories. Push each of them to some kind of remote site (like Github or Bitbucket).

2. Set up `repos.csv`. This defines where you want each repository to be stored on your local machine. This should only be necessary one time, unless you add new repositories.

## Use

1. For each computer you want to use this on in the future, use `clone-repos.py` to clone everything defined in `repos.csv` to your local machine.

2. Run `sync-home.bash` to add all of your home files and aliases to this computer, if you defined any. If you want immediate access to your aliases, you can run `source ~/.bashrc`. This way, you won't need to restart or reopen your terminal session.

3. Enjoy your new work environment! Switch to your work area, choose a repository, and get coding.

With all these tips in mind, you can move away from cloud storage for code repositories and Linux files. You now have the power to forge your own path, and customize the way you do work to your heart's content. Happy computing!
