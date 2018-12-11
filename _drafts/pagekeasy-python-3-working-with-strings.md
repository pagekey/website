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
# Print the first three characters (index 0 inclusive to 3 exclusive)
>>> a[0:3]
# Shorthand for the above
>>> a[:3]
# Print the last three characters ()
>>> a[-3:]
# uhhhh
```

[TODO: Actually check out the specifics on this one.]

# Convert Object to String

Sometimes, you need to store a text representation of something. If you don't, you may get some kind of error, complaining of having the wrong data type. This is common when using int or floating point numbers where a string is expected.

You can convert whatever you want to a string using the `str()` method. For example, to convert the number `1` to a string, use:

```python
>>> str(1)
"1"
```

The same goes for other data types. You can convert to integer using `int()` and convert to float using `float()`. For example:

```python
>>> int("1")
1
>>> float(1)
1.0
```

# Special __str__ Method

Using `str()` may work for built-in types, but what happens if we use it with our own custom object? Check this out.

```python
>>> class Car:
>>>   pass
>>>
>>> c = Car()
>>> print(str(c))
<__main__.Car instance at 0x7f7d70fc4c20>
```

What the heck is that? Instead of this ugly representation, showing us useless information such as location in memory, we can write our own method that will be called anyone uses `str()` on our object. It's used like this:

```python
>>> class Car:
>>>   def __init__(self, color):
>>>     self.color = color
>>>   def __str__(self):
>>>     return "<My Car - Color: %s>" % self.color
>>>
>>> c = Car('green')
>>> print(str(c))
<My Car - Color: green>
```

Now that's a *lot* prettier. And a lot more informative!

# Onward!

Thanks for reading. Now you can make some gnarly strings, man.
