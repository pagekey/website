---
layout: post
title: 'Getting Started - PageKeasy Python (1 of 6)'
keywords: learning, ideas, education, productivity, engineering, software engineering, technology, python, scripting, pagekey, pagekeasy
author: stephengrice
categories: ['Python', 'Tutorial', 'Scripting']
---

Welcome to PageKeasy Python. In this short six-part series, you're going to learn all of the skills you need to be proficient and powerful when using Python for any purpose, from parsing files and automating tasks to building graphical applications.

To begin the series, we will concentrate on the absolute basics that you need to know to get up-and-running with Python. **As a prerequisite,** it's expected that you already have Python installed on your system somehow. I'm going to assume you're using Ubuntu Linux (or at least WSL on Windows 10), but this should all work on other operating systems as well.

# Python 2 or Python 3?

The differences between Python 2 and Python 3 are not negligible - they are not interchangeable. However, since both are still in common use, this tutorial will note differences between the two.

# Fire Up the Interpreter!

Being an interpreted language, it could not be easier to get our hands dirty and start interacting with the language. To begin an interactive Python session, open a terminal window and type `python`. If you're using Python 3, type `python3`. The version will print, and then you should see a prompt:

```
>>>
```

It's time to execute our first line of Python code, ever. Type the following into the interpreter:

```python
>>> print("Hello world!")
```

This snippet will work in both Python 2 and Python 3. Note that the parentheses are optional in Python 2. However, omitting them in Python 3 will cause an error. When in doubt, it's better to just use parentheses.

# Scripts

We don't need to type out an entire program every time we want to execute it. Instead, we can create scripts, which can be run all at once.

To begin, open a file and call it "hello.py". Type:

```bash
vi hello.py
```

## The Shebang

There are two ways of running a script: as an argument to `python` or `python3`, or on it's own (i.e. `./hello.py`). The **shebang**, always written on the first line, specifies the program that will execute our script, allowing us to run it using `./`. If we don't include this, the system will default to whichever shell you're using, which usually ends with lots of errors. Interpreting a Python script as if it's written in Bash just doesn't work.

Here's our shebang:

```
#!/usr/bin/env python
```

[Note the differences between using env and using direct path. Research this]

## Variables and User Input

Let's make this a little more interesting. We're going to read something from the user, store it in a variable, and then print that variable. You'll grow to love variables, if you don't already, because they store away values for later use.

The function in python to read a string of text from the user is `raw_input()`. We'll use it in the script below:

```python
print("Please enter your name:")
name = raw_input()
print("Greetings, %s." % name)
```

The output will look like this:

```bash
$ ./hello.py
Please enter your name:
Steve
Greetings, Steve.
```

You may notice something strange in the above code. What's the deal with all of the percent signs?

These are **substitutions**. The `%s` is a placeholder for a string (s stands for string). There are also placeholders for other data types, but I use string the most. Whenever you write a string in Python, followed by `% (val,val,val)`, each value in that tuple is substituted in order into the string. If the number of placeholders and the number of values provided after the string don't match, you'll get an error.
