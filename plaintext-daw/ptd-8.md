---
title: "New arch, new me | plaintext daw 8"
date: "2023-02-08"
authors: [steve]
youtube: 2Wd7-y4lhbg
path: /blog/ptd-8
---

<YouTubePlayer youtubeLink={frontmatter.youtube} />

In this video, we review/merge some PRs, then get started implementing a new architecture. The first order of business is to add a ResourceManager to handle all the complex things we do to load wav/mp3 files and generate sounds using our Synth.

<!-- truncate -->

### Timestamps

- 0:00 Wild Intro
- 0:24 MP3 to NP Code Review/Merge (#7)
- 0:59 Merging Support Synth Instruments (#6)
- 2:04 New Branch for Re-Arch
- 2:17 Creating Test Files for TDD
- 2:50 Smoke Test, Other Failures
- 3:02 ResourceManager: The Big Idea
- 4:07 ResourceManager TDD
- 4:40 Breaking everything because I can
- 5:54 MERGE CONFLICT?!?
- 5:58 Synth clips
- 7:05 Validating fields
- 7:19 Coverage report with pytest-cov
- 7:39 Recap
