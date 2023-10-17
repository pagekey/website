---
title: "DAW10: ResourceManager is DONE"
date: 2023-02-12
authors:
  - steve
categories:
  - Plaintext DAW
tags:
  - python
slug: daw-10
---

At last, we've finished refactoring all the code into a single, well-tested ResourceManager class and updated the CLI to call this new code. All tests are passing; we have some new code debt, but that's okay for now.

<!-- more -->

![type:video](https://www.youtube.com/embed/c_Ym_6fpIDA)

### Timestamps

- 0:00 Merging #11 by LTstrange
- 1:27 Debugging test failure
- 2:04 Writing test_get_instrument from Git
- 5:40 Mocking get_clip calls
- 7:16 Tip: How to check what is being called
- 7:59 How to patch external dependencies
- 9:10 clone_git_repo implementation
- 12:23 Catching a mistake with the tests!
- 13:33 FULL TEST of new architecture
- 15:14 Why the config loader method is good
- 15:40 Finally working
- 16:02 What's next / outro
