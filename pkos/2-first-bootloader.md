---
title: "OS2: First Bootloader"
date: "2020-01-01"
authors: [steve]
tags: [pkos]
youtube: 1lAuJoPZ3Q0
project: pkos
---

import YouTubePlayer from '@site/src/components/YouTubePlayer';

<YouTubePlayer youtubeLink={frontmatter.youtube} />

In this video, we install qemu and nasm so that we can build our first bootloader and run it.

<!--truncate-->

## Notes

Command for getting the first bootloader code:

```bash
wget https://raw.githubusercontent.com/pagekeysolutions/education/master/OS/video2/first.asm
```

Command for getting the Makefile:

```bash
wget https://raw.githubusercontent.com/pagekeysolutions/education/master/OS/video2/Makefile
```

## Sources

* [https://stackoverflow.com/questions/34268518/creating-a-bootable-iso-image-with-custom-bootloader](https://stackoverflow.com/questions/34268518/creating-a-bootable-iso-image-with-custom-bootloader)

* [http://mikeos.sourceforge.net/write-your-own-os.html](http://mikeos.sourceforge.net/write-your-own-os.html)

## Code

- [Link to tag](https://github.com/pagekeysolutions/pkos/releases/tag/vid%2Fos002)
- [Diff from previous video](https://github.com/pagekeysolutions/pkos/compare/vid/os001..vid/os002)