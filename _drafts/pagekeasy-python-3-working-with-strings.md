---
layout: post
title: 'Working with Strings - PageKeasy Python (3 of 6)'
keywords: learning, ideas, education, productivity, engineering, software engineering, technology, python, scripting, pagekey, pagekeasy, files
author: stephengrice
categories: ['Python', 'Tutorial', 'Scripting']
---

Welcome to part 3.

We'll cover the following string-related topics:

* What's a string
* Is it "in" there? Checking for presence
* Chopping up substrings
* Splitting strings
* Convert object to string: `str()`
* Special __str__ method

# What's a String?

A string is a sequence of characters.

# Is it "in" there?

A common problem is determining whether one string is in another. This may be useful when you need to check for keywords in a line. For this, we can use the `in` keyword as part of a conditional statement. Here's how it looks in code:

```python
favorite_fruit = "I like bananas and oranges"
if "oranges" in favorite_fruit:
  print("Orange you glad I asked?")
else:
  print("Nope!")
```

If you haven't guessed, "Orange you glad I asked?" will be what is printed out.

A practical use case for this would be looking up a key in a configuration file. Say you need to get the IP address from this file:

```
# config.txt
hostname = localhost
port = 2022
ip_address = 192.168.1.1
mode = fast
```

You can now [open up the file]() and use a for loop to scan until you find the line containing the IP:

```python
f = open('config.txt')
ip_line = None
for line in f:
  if 'ip_address' in line:
    ip_line = line
```

This will set `ip_line` to `ip_address = 192.168.1.1`.

If you're starting a web server or other process, you'll know this isn't helpful - you need to IP by itself. To do this, we have a few options: splitting strings and creating substrings.

# Splitting Strings

Using the `split` method in Python will turn a regular string into an array of strings. It "splits" it up based on whichever delimiter, or separator, you pass to it. By default, `split` uses any kind of whitespace as the delimiter.

Here's a live example:

```python
>>> a = 'I will split this.'
>>> a.split()
['I', 'will', 'split', 'this.']
>>> b = 'I,am,comma,separated.'
>>> b.split(',')
['I','am','comma','separated']
```

Remember our `ip_line` from above? We now have the power to get the IP itself. Check it out:

```python
# assume ip_line is set
ip_split = ip_line.split()
# ip_split: ['ip_address', '=', '192.168.1.1']
# Now we can access the IP directly, at position 2
ip_address = ip_split[2]
# ip_address: '192.168.1.1'
```

# Chopping Up Substrings

Sometimes, splitting everything up into an array of separate strings is overkill. We might just need to trim a few characters off of the front or back of the string. Python's substring operator makes it very easy to get a range of characters within a string.

It works a lot like an array would, using square brackets `[ ]`.

The syntax is something like `substring = my_string[start:end]`, where `my_string` is any string and `start` and `end` are positions within that string.

Here's an example:

```python
>>> a = '012345'
[continue here!!!!!!!!!!!!!!!]
```

# Convert Object to String

# Special __str__ Method

# Onward!

Thanks for reading. Now you can make some gnarly strings, man.
