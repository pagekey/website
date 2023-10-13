---
title: "How to Get Up and Running with Scikit-Learn"
date: "2021-04-17"
authors: [steve]
path: /blog/misc/getting-started-scikit-learn/
---

![Wall panels](/blog/img/wall-panels.jpg)

Machine learning is fascinating, but it can be overwhelming if you're just getting started. Luckily, scikit-learn is an open-source machine learning library that allows you to jump in and gain hands-on experience immediately, harnessing the power of almost 2,000 contributors without reading a single scientific paper.

If this sounds interesting to you, read on. In this article, we're going to learn what scikit-learn is, how to install it, and how to run it using Python and Jupyter Notebooks.

<!--truncate-->

*Photo by [Meruyert Gonullu](https://www.pexels.com/@meruyert-bissimbayeva?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)*

## What is scikit-learn?

In 2007, David Cournapeau started a project during Google's Summer of Code that would have an impact for years to come. His project eventually morphed into [scikit-learn](https://github.com/scikit-learn/scikit-learn), a collection of open-source machine learning libraries used by countless people across the globe.

Thanks to the hard work of Cournapeau, along with 1,952 other contributors (at the time of writing), we now have a library that drastically lowers the barrier of entry for learning the basics of machine learning and beginning to harness its power in our careers, or even our everyday lives.

## Core Installation

### 1) Install Python

You'll need Python installed before you can use scikit-learn. There are plenty of guides online that will tell you how to install Python, but it's a very straightforward process anyway. You can probably just go to the Python [Downloads page](https://www.python.org/downloads/) and figure it out yourself.

If you'd like to get it done in 90 seconds or less, I made videos for just that purpose! Click [here](/blog/lte-90-sec/install-python-windows) to get started on Windows, or [here](/blog/lte-90-sec/install-python-ubuntu) if you use Ubuntu.

Note that the instructions below are tailored to **Linux users**. You may need to make a few tweaks to the shell commands to get them working on Mac/Windows, but it probably won't be anything wildly different.

### 2) Create a virtual environment

This step is technically optional, but it's good practice to use virtual environments based on what you're working on. This way, if you need one version of a package for one project, and a different version for another, you can just switch virtual environments instead of reinstalling everything every time you switch from working on one project to another.

If you've never created a virtual environment before, you'll want to create a folder to hold all of them. I prefer to use the `venv` folder in my home directory, but feel free to change this if you' like to put them somewhere else.

```bash
cd ~
mkdir venv
cd venv
python3 -m venv sklearn
```

This will create a new virtual environment named `sklearn`. Now that you've created it, you'll need to activate it. Remember to activate your virtual environment **every time you want to use scikit-learn**.

```bash
source ~/venv/sklearn/bin/activate
```

Your shell should now have "`(sklearn)`" at the beginning of each line in your terminal. If you want to quit the virtual environment at any point, you can just type `deactivate`.

### 3) Install the scikit-learn package

Installing scikit-learn is as simple as typing in a pip command:

```bash
pip install -U scikit-learn
```

### 4) Check your installation

The scikit-learn website provides a few snippets to check if everything is working as expected. Copy-and-paste the one below to try it out yourself.

```bash
python -c "import sklearn; sklearn.show_versions()"
echo $?
```

You should see a lot of information printed about your `scikit-learn` installation and the system you're running on. If you get a `0` as output after `echo $?`, then it means the command exited successfully - you're good to go!

## Development Environment

Almost as important as having the software installed is **how will you use it?** Getting your development environment situated can be the hardest part.

There are an infinite number of ways that you can customize your development environment. For our purposes today, we'll focus on (1) using Python without any extra IDEs to help us out, and (2) how to use my preferred IDE, Visual Studio Code, which has plenty of helpful extensions to make our work with scikit-learn move more smoothly.

### Pure Python

Working with scikit-learn in pure Python is always an option. It may not be the best for learning, because the only way to explain what's happening with each line is to add comments, which can get messy. It's also up to you to figure out how to download others' code and get it running. However, knowing how to set these things up will be required if you want to integrate machine learning into a real application that others can use.

Using scikit-learn in this way doesn't require any additional software. You can open up a `test.py` file in your favorite text editor, `import sklearn`, and go to town! Then, just run the script with `python test.py`.

If you want to get more advanced, you can distribute your package using a `setup.py` file and [distutils](https://docs.python.org/3/library/distutils.html), or get fancy with something like [Poetry](https://python-poetry.org/).

If you're just getting started with learning or you're only interested in data analytics, then read on - the next option may be more your speed.

### Jupyter Notebooks

If you haven't tried them already, [Jupyter Notebooks](https://jupyter.org/) are an amazing way of presenting information and code. You're able to mix Markdown and interactive Python code blocks in a single document, allowing you to easily walk through code, executing a single block at a time with a clear understanding of what is happening every step of the way.

Getting started with Jupyter is as easy as typing the following:

```bash
pip install notebook
jupyter notebook
```

This will install the required pip package and start a Jupyter Notebook server. This server will be accessible in your web browser, allowing you to create, view, and edit `.ipynb` files. `ipynb` stands for Interactive Python Notebook, which is so named because Jupyter Notebooks was previously named IPython Notebooks [1].

As an example, here is the output when I run `jupyter notebook`:

```bash
 [I 16:31:31.879 NotebookApp] Serving notebooks from local directory: /home/steve
 [I 16:31:31.882 NotebookApp] Jupyter Notebook 6.1.4 is running at:
 [I 16:31:31.882 NotebookApp] http://localhost:8888/?token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 [I 16:31:31.883 NotebookApp]  or http://127.0.0.1:8888/?token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 [I 16:31:31.883 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
```

As you can see, the server is running at `http://localhost:8888`. To start using Jupyter, simply open this link in a web browser.

#### VSCode Extension

I'll briefly note that if you already use [Visual Studio Code](https://code.visualstudio.com/), there is a Jupyter Notebooks extension that you can use to edit and run `.ipynb` notebooks right in your IDE. No need to leave, start a server, open a browser, any of that - it's all integrated into a single window. I guess that's why they call it an **integrated** development environment!

I've tried both approaches, and I find this one to be much easier. But it's up to you to choose your favorite!

## Next Steps

With any luck, you've just installed scikit-learn (and maybe Jupyter Notebooks too). Your computer should be revved up and ready to roll with some machine learning! Stay tuned for more tutorials like this one that will build on this knowledge.

## References

[1] [https://jupyter.org/about](https://jupyter.org/about)
