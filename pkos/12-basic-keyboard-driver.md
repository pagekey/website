---
title: "OS12: Basic Keyboard Driver (x86 Interrupts)"
date: "2020-08-12"
authors: [steve]
tags: [pkos]
youtube: YtnNX074jMU
project: pkos
path: /blog/pkos-12/
redirects: [/blog/pkos/12-basic-keyboard-driver/]
---

import YouTubePlayer from '@site/src/components/YouTubePlayer';

<YouTubePlayer youtubeLink={frontmatter.youtube} />

In this video, we learn about interrupts and write our own basic keyboard driver!

<!--truncate-->

## Timestamps

- 0:00 Lecture
- 9:58 What we're building
- 10:39 Updates to Makefile, add .gdbinit file
- 12:32 Updates to kernel.asm
- 18:08 Updates to kernel.c
- 28:28 Compiler error fixes; working demo again
- 29:06 GDB debugging skills; making the keyboard map from scratch

## Code

- [Link to tag](https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos012)
- [Diff from previous video](https://github.com/pagekeysolutions/pkos/compare/vid/os011..vid/os012)
