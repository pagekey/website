---
slug: 1
title: "#1 Get your feet wet with coding"
youtube: rM8BZdOA_60
---

import YouTubePlayer from '@site/src/components/YouTubePlayer';

<YouTubePlayer youtubeLink={frontMatter.youtube} />

Coding is not scary! It's really easy to get started.

Send this video to anyone you know who wants to get started with programming, but doesn't know how.

<!--truncate-->

Source code is available at: https://github.com/pagekeysolutions/pfl

## Timestamps


- 0:00 Coding is not scary
- 1:24 Enter REPL.IT
- 2:35 First line
- 2:57 Break things (Errors)
- 3:37 First Loop
- 4:11 Make a design (Challenge)
- 4:28 Recap

## Summary

This video sets us up on the [REPL.IT website](https://replit.com) and gets us to the point where we have an interactive Python terminal. In a little over two minutes, we see how to write our first line of code:

```python
print("Hello world")
```

Get used to this message - it's usually the first thing you do to break ground in a new programming language. Now that we know we can print something to the screen, let's try adding some more messages:

```python
print("Hello world")
print("Hello world")
print("Hello world")
print("Hello world")
```

Copy-pasting is great and all, but there's a better way. The true power of code comes from our ability to automate mundane tasks like this in an efficient way. With the following **loop**, we can execute our first line of code 20 times:

```python
for i in range(20):
    print("Hello world")
```

Notice how easy it would be to change the 20 to something larger or smaller. Just a few keystrokes and you can go from 20 to 100,000. Imagine how much time (and space in your computer's memory) it would take to copy and paste that line 100,00 times!

To close, we'll make a little design to solidify what we've learned. This is a challenge for you - try to use the `print` statement to make something cool on the screen. As a bonus, see if you can incorporate a loop in your design. I'm not much of an artist, so what I came up with is pretty underwhelming:

```python
print("  o  ")
print(" ooo ")
print("ooooo")
print(" ooo ")
print("  o  ")
```

The Sims, anyone?

Hope you enjoyed and learned something from this first lesson! Even if this was a piece of cake for you, consider sending it to someone who may benefit from a quick intro to coding - let's show people that it's not as hard as it sounds!

[Original blog post](/blog/ftp/1-get-your-feet-wet)
