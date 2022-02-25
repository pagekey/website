---
title: "#1 Initial Setup"
---

<iframe className="youtube-video-player" src="https://www.youtube.com/embed/hO16sBPMe34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Let's code a workout app from scratch. Why? Watch the video and find out.

<!--truncate-->

Source code is available at: https://github.com/pagekeysolutions/pfl

## Timestamps


- 0:00 The idea and why bother?
- 1:22 Today's progress
- 3:36 Existing Python scripts/data

## Summary

Here's a quick recap on what I did to get this far. It's not much!

1. Generate a new flutter project.

```bash
flutter create
```

2. Update the application ID, which must be unique
    - Ctl-Shift-F to search the entire project in Android Studio 
    - Find instances of `com.example`
    - Replace with `com.pagekeysolutions`

3. Start getting Google API set up
    - I followed (part of) this article: https://betterprogramming.pub/the-minimum-guide-for-using-google-drive-api-with-flutter-9207e4cb05ba
	- Most of the work for this video was setting up Firebase. Just follow this article for this.
	- I was able to get "Login with Google" working on Android (though there were some warnings about it not being a verified app - we can worry about this later)

4. I set up the [repo](https://github.com/pagekeysolutions/pfl), made it public, and made a video.

If you're trying to re-create my results exactly, note that I committed the "Initial commit" **directly** after running `flutter create`. Hopefully this makes my changes easier to follow.

[Original blog post](/blog/pfl/1-initial-setup)