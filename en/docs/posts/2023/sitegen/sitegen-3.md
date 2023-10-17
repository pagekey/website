---
title: "jumping thru hoops for CSS | markdown sitegen 3"
date: 2023-02-03
authors: [steve]
youtube: xfIKCp-k1VQ
project: markdown-sitegen
path: /blog/mdsg-3
---

<YouTubePlayer youtubeLink={frontmatter.youtube} />

Let's add some basic styling - to do that, we'll need to (1) copy static files and (2) pass in some sort of relative path for the templates to use as a reference point.

<!-- truncate -->

### Timestamps

- 0:00 Intro
- 1:45 Roadmap
- 2:29 Setting up nesting
- 3:13 Explaining relative paths (rambling)
- 4:24 get_root_path implementation/test
- 5:26 Apologetic spaghetti code
- 5:33 Unapologetic spaghetti code
- 5:41 More get_root_path explanation
- 6:19 CSS is working!
- 6:37 Basic site layout
- 7:00 How to add Google fonts to your CSS
- 7:22 One-liner to build and test in browser
- 7:32 What's next
