---
layout: post
title: 'Getting Started - PageKeasy Python (1 of 6)'
keywords: [learning, ideas, education, productivity, engineering, software engineering, technology, python, scripting, pagekey, pagekeasy]
author: stephengrice
categories: ['Python', 'Tutorial', 'Scripting']
draft: true
---

\[Custom picture\]

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

# Case Study: Mad Lib

Next, we'll combine the things we learned above to make a (somewhat) useful program: A Mad Lib! You can get really creative with this one. Unfortunately, I did not. :)

Let's look at our program:

```python
#!/usr/bin/env python
print("Enter a noun:")
noun1 = raw_input()
print("Enter an adjective:")
adjective1 = raw_input()
print("Enter a verb:")
verb1 = raw_input()
print("Enter another noun:")
noun2 = raw_input()

result = "There was once a %s. It was a %s %s. One day, it had to %s. As a result, the %s became a %s." % (noun1,adjective1,noun1,verb1,noun1,noun2)

print("Here's your Mad Lib:")
print(result)
```

Enter this into a file called `mad_lib.py`. This will be our script!!!!

In the first line, notice the shebang we spoke about earlier. In this case, I'm using Python 2, but it also works if you use Python 3. Try it for yourself. [TODO - actually try it]

Following the shebang, there are two lines that begin a pattern. The first line is a prompt, using the print command. This will simply send a message to the screen that the user can see.

After that, we make use of `raw_input()`. We take whatever the user types, and store it in a variable called `noun1`.

We repeat this process for the other words we need from the user: `adjective1`, `verb1`, and `noun2`.

Then, we create our Mad Lib story using a substitution. We write our story, and every time we want to use one of the user's words, we type `%s` to indicate its location. Then, at the end of the string, we provide a tuple in parentheses showing the order that the words should be substituted.

Lastly, we print `result`, which is our story with user input substituted in.

Here's an example of when you run the above program:

```
Enter a noun:
cat
Enter an adjective:
crazy
Enter a verb:
bark
Enter another noun:
dog
Here's your Mad Lib:
There was once a cat. It was a crazy cat. One day, it had to bark. As a result, the cat became a dog.
```

# A Running Start

There you have it - we've learned the basics of Python and written our first semi-useful program! Feel free to embellish on this example and create the funniest Mad Lib you can think of. Post what you end up with in the comments.

When you feel that you're ready, keep the fun going in [Part 2] (coming soon)
