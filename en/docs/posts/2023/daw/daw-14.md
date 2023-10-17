---
title: "DAW14: Deciphering State Management in Tauri"
date: 2023-03-06
authors:
  - steve
categories:
  - Plaintext DAW
tags:
  - python
slug: daw-14
---

Through trial and error, I discover how Tauri manages state - and how NOT to manage state in Rust (using mutable global variables).

<!-- more -->

![type:video](https://www.youtube.com/embed/_AKLn4nXDJ0)

### Timestamps

- 0:00 Intro/Summary
- 0:46 Merging #13 (LTstrange)
- 2:02 Where we left off with Tauri
- 2:20 Researching global mutable state (don't do it)
- 3:23 Simple Tauri State Management article (thank you!)
- 3:56 Strange Mutex, manage, Default syntax
- 4:17 Set state working
- 4:35 Tauri hot reload rocks
- 4:47 New files
- 5:11 How to get Rust state into JavaScript
- 6:52 Wrapping up
