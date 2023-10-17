---
title: "FINALLY! The Blog SSG I've Been Looking For"
date: 2023-10-15
authors:
  - steve
tags:
  - productivity
slug: material-for-mkdocs
---

I've tried at least 8 solutions for how to host my tech blog online, and Material for Mkdocs takes the cake. It has everything I need and more, and it all comes working out of the box.

This post is about briefly documenting some of the solutions I've tried in the past, along with their pros and cons, and how they compare to Material for Mkdocs.

<!-- more -->

![type:video](https://www.youtube.com/embed/iGdf6C3VfBE)

## Getting Started with Material for Mkdocs

It couldn't be easier to get started. Just do this:

```bash
pip install mkdocs-material
mkdir my-site
cd my-site
mkdocs new .
```

Then apply the Material theme by editing `mkdocs.yml` to be:

```yaml
site_name: My Docs
theme:
  name: material
```

If you want to get started with a blog, you can steal the configuration from the [documentation](https://squidfunk.github.io/mkdocs-material/blog/2022/09/12/blog-support-just-landed/#configuration).

Now try out your site:

```bash
mkdocs serve
```

Finally, you can build a static version of your site to host on the internet:

```bash
mkdocs build
```

## Past Solutions

This is by no means a comprehensive review, but to give you an idea of how many times I've messed with this problem, here's a list of other blog solutions I've tried out (in no particular order):

- [Wordpress](https://wordpress.org/about/) (Yikes)
- [Ghost](https://ghost.org/docs/)
- [Docusaurus](https://docusaurus.io/)
- [Hugo](https://gohugo.io/)
- [Flutter](https://flutter.dev/) (an ambitious attempt to build a custom blog)
- [Jekyll](https://jekyllrb.com/)
- [Markdown Sitegen](/category/markdown-sitegen) (Another attempt at building a custom blog)
- Custom [Next.js](https://nextjs.org/) site (Again with the DIY blog!)

## Code Tour - Current Solution

Check out the video for this part!

## Material for Mkdocs - It Just Works

Check out the video for this part!

## Side Note: SquidFunk

Check out the video for this part!
