---
draft: true
---

How Not To Use OneDrive - A Lesson Learned Years Late

Cloud storage is amazing - it syncs all of our documents and files, and then we can get to them *anywhere*. I love not having to think about where this or that file is - I can just check my OneDrive and it's there!

However, when I got a new Surface tablet a few years ago, which came with Microsoft OneDrive, I went a little power-crazy with the beauty of cloud computing. Seeing the opportunity to be more organized and have access to my files anywhere, I decided I would make good use of the 1 TB of storage OneDrive gives you and sync ALL of my files! Even my Git repositories!

This is where the problem arises. Every Git repository contains a hidden folder, `.git`, where it stores all of the metadata that makes all of Git's awesome features possible. This folder contains the revision history for every file in the repository since you got started. To provide this level of granularity, Git needs to create a few files. Well, maybe more than a few; I checked, and the `.git` directory of a brand new repository can contain as many as [______] files! That's on the initial commit - we haven't even started tracking version differences yet!

It took me years of cursing at my computer and wondering why OneDrive was always chugging along, but never actually syncing anything, to finally figure it out. Perhaps, I pondered, OneDrive isn't made to handle _____ (millions?) of individual files, each with their own properties.

So how did I fix it? I separated my repositories from my OneDrive, creating a custom [Linux workspace] that was a much better (and more flexible) solution for managing my code and my development-related files.

Removing all of those repositories from my OneDrive folders felt like a burden off my shoulders, and I'm sure OneDrive would have agreed! As soon as they were gone, I checked the status window and saw it eagerly syncing all of the documents it had been unable to get to. After all this time of thinking there was something wrong with my Surface, or with the OneDrive software, or with my network, or with *anything* else, the issue turned out to be how I was using the software.

Have you ever stored code repositories in OneDrive? How did it work out for you?
