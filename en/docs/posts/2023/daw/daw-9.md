---
title: "DAW9: Advanced TDD with Pytest"
date: 2023-02-10
authors:
  - steve
categories:
  - Plaintext DAW
tags:
  - python
slug: daw-9
youtube: 6hYB9ml5hHg
---

In this video, we use patch.object to test that other methods in the class are called while keeping the test scoped to a single unit - true unit tests!

We also continue to apply Test Driven Development (TDD) to create our ResourceManager class, which will serve as a great foundation for the application when it's complete.

<!-- more -->

![type:video](https://www.youtube.com/embed/6hYB9ml5hHg)

### Timestamps

- 0:00 Lessons Learned
- 0:54 Merging PR  #10 from LTstrange
- 1:44 Figuring out next steps
- 2:11 Starting get_song
- 2:21 Implementing check_types and refactor
- 3:38 Implementing get_song
- 3:52 Adding patch.object
- 4:16 WARNING! False test pass with called_with method
- 5:11 Changing the Song class
- 5:36 Getting fancy with assert_has_calls
- 6:08 Implementing get_pattern
- 6:10 TIP! Argument order for patch decorators
- 6:43 Finishing up get_song
- 7:09 Reordering methods in both files
- 8:06 Implementing get_instrument
- 8:17 Implementing get_pattern
- 8:36 Implementing get_note
