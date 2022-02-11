---
title: "OS2: Running Our First Bootloader"
date: "2020-01-01"
authors: [steve]
tags: [operating-systems]
---

<iframe className="youtube-video-player" src="https://www.youtube.com/embed/1lAuJoPZ3Q0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

In this video, we install qemu and nasm so that we can build our first bootloader and run it.

<!--truncate-->

Command for getting the first bootloader code:

```bash
wget https://raw.githubusercontent.com/pagekeysolutions/education/master/OS/video2/first.asm
```

Command for getting the Makefile:

```bash
wget https://raw.githubusercontent.com/pagekeysolutions/education/master/OS/video2/Makefile
```

Sources:

* <https://stackoverflow.com/questions/34268518/creating-a-bootable-iso-image-with-custom-bootloader>

* <http://mikeos.sourceforge.net/write-your-own-os.html>

Notes for this video (and all others) are on the wiki: <https://github.com/stephengrice/pkos/wiki>

Latest source can be found at the main repo: <https://github.com/stephengrice/pkos>