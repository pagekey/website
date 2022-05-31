---
title: Push Out Your SSH Keys - Jump Nodes in a Jiffy!
date: "2018-04-16"
authors: [steve]
---

![Man doing a backflip](@post/backflip.jpg)

Every day, system administrators, students, professors, and everyday computer users struggle with entering their password on the command line. With each passing jump from one system to another, ten seconds tick by. Whoops, that's a mistake - make it 30!

Over time, entering your password every time you want to move between nodes using SSH can become a real hassle. The benefits from "pushing out" your SSH keys, or making all of the nodes you typically jump to trust your public key, will save you more time with every use, snowballing from seconds, to minutes, to hours!

This article describes two ways of pushing out your keys: The easy way, and the hard way.

<!--truncate-->

*Photo by [Oliver Sjöström](https://www.pexels.com/photo/man-wearing-blue-shorts-about-to-dive-on-body-of-water-1098365/)*

## Prerequisite

To complete these steps, you'll need to generate a public/private keypair if you haven't already. Run this command:

```bash
ls ~/.ssh
```

If you see `id_rsa.pub` and `id_rsa` in there, then you're all set. If not, run this command:

```bash
ssh-keygen -t rsa -b 4096
```

Press enter when prompted, keeping default values for now. If you want to know more about how you can customize your keys and make them more or less secure, feel free to Google it!

## Background

If you've never looked into it, SSH may seem mysterious - you enter an IP or hostname, and just like that, you've got a terminal window acting like you're on that machine! It seems crazy, but really, it's just two computer programs running. The first is the **ssh client**, and the other is the **ssh server**, or the **ssh daemon**. As you'll see, both can be running on the same machine at the same time.

The server runs on the machine whose data you're trying to access. It watches the network constantly, looking for new connections, and when it finds one, starting a new terminal session. The client is the program that actually goes out and requests access.

When you're authenticating, or logging in, there are at least two ways of getting in. The first is with a password, which I'm sure you're already accustomed to. The SSH client securely transfers the password over the network and the server checks it against the corresponding user account on that machine.

Another way to authenticate is with a **public / private keypair,** which you should have generated using the steps above. A public / private keypair is like a lock and key. Your private key is a secret that only you should have access to - anyone else who has it can pretend to be you! The public key, however, can be distributed to anyone and everyone who wants to send you data or verify that you are who you say you are. Thanks to the math behind these keys, it's computationally infeasible (read: too hard, even for computers, to figure out in any reasonable amount of time) for you to reverse them.

## The Hard Way

You may be thinking, "Hey, what's the deal? This is 2018, and I want my results now. I want the easy, Google-verified, one-liner method to accomplishing this."

Well, my friend, there is a reason we're starting with the hard way: Learning! If you want to get your one-liner and move on, feel free to scroll on down to the next section. In the mean time, the rest of us will be up here, finding out a bit more about how SSH really works.

When you've generated the public / private keypair as directed, there will be a `.ssh` directory in your home area containing some special files. Remember to use `ls -al` to see **all** the files, even "hidden" ones that begin with a dot.

One of the files in the `.ssh` directory is the `authorized_keys` file. If it exists, this file is used by the SSH program to detect whether or not someone is allowed to connect using a specific public / private keypair.

To get our keys "pushed out", the public key from each node must be in the `authorized_keys` file. Assume that you're pushing keys from a **source** node to a **destination** node with the goal of not needing password entry to jump between these machines. We'll follow these steps:

1. From your source node, securely copy your public key to the destination node's home directory:

    ```bash
    # From source node:
    scp ~/.ssh/id_rsa.pub DESTINATION_HOSTNAME_OR_IP:~
    ```

2. Login to your destination node with SSH. Sorry, you'll still need to enter a password this time.

    ```bash
    ssh DESTINATION_HOSTNAME_OR_IP
    ```

3. Put the public key file we just copied over into the `authorized_keys` file on your destination. This way, we know to "trust" the source node. **NOTE:** Make sure you use the append operator `>>` and NOT the redirect operator `>`. Otherwise, you'll overwrite any existing keys and have to push everything all over again!

    ```bash
    # From destination node:
    cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
    # Now we can remove this public key from our home directory
    rm ~/id_rsa.pub
    ```

4. We've successfully told our destination node to trust the source node. Now we'll repeat steps 1 - 4 in reverse order, so that our source trusts our destination. In other words, we have to go both ways to make sure that passwords are not needed TO or FROM the nodes in question.

    ```bash
    # Still on destination node:
    scp ~/.ssh/id_rsa.pub SOURCE_HOSTNAME_OR_IP:~
    ssh SOURCE_HOSTNAME_OR_IP
    cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
    rm ~/id_rsa.pub
    ```

That about does it for the hard way. But it sure was a lot of work - and a lot of password typing! There's a better way, though. Stay tuned for...

## The Easy Way

Luckily, there is a handy little tool called `ssh-copy-id` that takes care of most of these steps for us. We can push keys from a source node to a destination node in just one line, like this:

```bash
# From source node:
ssh-copy-id -i ~/.ssh/id_rsa.pub DESTINATION_HOSTNAME_OR_IP
```

The `-i` command specifies which public / private key pair, or **identity**, you want to use. You can use `ssh-keygen` to generate more than one pair, if desired or required.

Once you run that command and enter the password when prompted, you should be able to login to the destination node without a password. Try it out. Did it work? While you're at it, push keys the other way:

```bash
# From desintation node:
ssh-copy-id -i ~/.ssh/id_rsa.pub SOURCE_HOSTNAME_OR_IP
```

All done! Wasn't that easy?

## Final Thoughts

That's all for this quick SSH tip. If you liked this article, have comments or concerns, or just want to express yourself, leave a comment below. Check out some of the other articles on this blog for more technical info, or even try [our YouTube channel][youtube-channel] on for size. Thanks for reading!

[youtube-channel]: https://www.youtube.com/channel/UCNlWYe5_RcwWTrLP8m1oidw
