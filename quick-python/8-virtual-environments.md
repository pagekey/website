---
title: "Quick Python 8: Virtual Environments"
date: "2021-06-11"
authors: [steve]
tags: [quick-python]
youtube: O5rH_fsOOJM
project: quick-python
path: /blog/quick-python/8-virtual-environments/
---

import YouTubePlayer from '@site/src/components/YouTubePlayer';

<YouTubePlayer youtubeLink={frontmatter.youtube} />

In this video, we learn how to create, manage, and remove Python Virtual Environments.

<!--truncate-->

**[Here's a link to the source code.](https://github.com/pagekeysolutions/education/tree/master/Quick_Python/08_Installing_Packages)**

-----

## Quick Tips

### Commands

```bash
python3 -m venv <path>
```

Creates a virutal environment located at `<path>`

```bash
source <path>/bin/activate
```

Activates a virtual environment

```bash
deactivate
```

Deactivates a virutal environment

### Bonus: Bash Alias for Quick Switching

Paste this function into your `~/.bashrc` or `~/.bash_aliases` file and restart your shell. It assumes you keep your virtual environments in the `~/venv` folder.

```bash
venv() {
    source ~/venv/$1/bin/activate
}
```

Switch to the venv with `venv <NAME>` and get out of it by typing `deactivate`.

Example:

```bash
python3 -m venv ~/venv/my-env
venv my-env
# do stuff in your environment. When done:
deactivate
```

-----

If you liked this video, check out the whole [Quick Python series](/projects/quick-python) and be sure to sign up using the form below to get notified of new posts! Thanks for checking this one out.