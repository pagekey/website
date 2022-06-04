---
title: "Getting Started with React (Create React App)"
date: "2022-05-23"
authors: [steve]
youtube: qGsFYSWTMFY
---

import YouTubePlayer from '@site/src/components/YouTubePlayer';

<YouTubePlayer youtubeLink={frontmatter.youtube} />

In this lesson, we learn about how to quickly get started with React (JavaScript framework) using Facebook's Create React App project generator.

<!--truncate-->

## Timestamps

- 0:00 Intro
- 0:48 Setup - nvm, npm, node
- 1:47 Generate the project
- 2:15 Code changes
- 4:55 Outro

## Steps

1. If you don't already have `npm` and `node` installed, use `nvm` to get going quickly. Run the following to install:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
bash # or restart your terminal
nvm install 16
```

2. Generate the project.

```bash
npx create-react-app exampleapp
cd exampleapp
```

3. Start the app in your browser.

```bash
npm start
```

4. Edit the source code as desired! See the video for live edits.
