---
layout: post
title: 'Working with Files - PageKeasy Python (2 of 6)'
keywords: learning, ideas, education, productivity, engineering, software engineering, technology, python, scripting, pagekey, pagekeasy, files
author: stephengrice
categories: ['Python', 'Tutorial', 'Scripting']
draft: true
---

[Picture]

[Part 1]()

I'm glad you made your way back to PageKeasy Python, Part 2. In this lesson, we'll be discussing the tools you'll need to open, read from, and properly close files in Python. There are some subtle differences between versions that we'll cover. When we finish, you'll have one of the most important foundational blocks laid for processing massive amount of data, parsing, and automating to your heart's content.

# Open

Before you can do anything to a file, you have to open it up. This basically lets Python know that it should get it work on all the details in the background so that the file is ready to provide data to your program.

Don't forget that there are different modes for editing. The most important ones are 'r', 'w', and 'a', which stand for "read", "write", and "append" respectively.

"Read" means that you cannot change the file - you can only read the contents. "Write" means that you will overwrite the entire existing file with whatever you write to it. "Append" means you will add onto the end of the file without overwriting it.

In any version of Python, the syntax for opening is:

`f = open("<filename>", <mode>)`

For example,

```
f = open('test.txt', 'a')
```

Keep in mind that the file mode is optional. The default mode, [look it up], is used if you do not specify one. Also, note that in most cases, double and single quotes are interchangable in Python.

## Opening in Python 3: `with`

For a while, I thought that the designers of Python 3 were just trying to make our lives harder. With a little patience, though, it becomes clear that `with` is actually saving us time and headaches.

The `with` keyword is recommended for Python 3 because it specifies an entire indented block where a file is valid. It's used like this:

```python
[confirm this syntax is right]
with f = open('file.txt'):
  # work with f in this block
print("done with f")
# Outside of the block - f automatically closed
```

When the indented block is over, marked above with a print statement, the `f` file we said we would be using in the `with` block is automatically closed. There's nothing to forget!

# Read

Once we have the file open, what do we do with it?

The preferred way of doing this varies from Python 2 to Python 3.

## Reading: `for`

One of my favorite things about Python is that you can do some serious damage with nothing more than a simple `for` loop. We'll use this method to loop through each line in a file.

For example, to print every line in a file, you would type:

```python
f = open('myfile.txt')
for line in f:
  print line
```

In the above, the value of each line in the file is assigned to the `line` variable. You can change `f` and `line` to whatever you want - they are variables.

The simplicity of this method is hard to beat. Each line of the file is set to a string, you process it, and you move on.

## Special Case: `while`

Sometimes, a `for` loop isn't enough. You may need more granularity in your control of the file. For example, you may want to process certain parts of a file differently. In this case, you can use `while` in conjunction with the `<file>.readline()` method.

Check out this data file:

```
# employees.txt
You're entering the employee database.
What follows is a listing of all employees.
EID | LName | FName | Age
0     Jones   Jim     42
1     Phillips John   51
2     Tiller   Suzy   45
3     Jovi     Bon    12   
```

In the above, if we used a `for` loop, we would have to read all of the lines, even the text that contains no data.

The following code snippet uses a while loop to process the data in two parts: before the data and the data itself.

```python
f = open('employees.txt')
line = f.readline()
while len(line) > 0:
  if line.startswith('EID'):
    break # We found the data!
  line = f.readline() # Next!
# Part two: we found the data
while len(line) > 0:
  print("Processing employee: %s" % line)
f.close()
```

As you can see, `readline` gets the next line in the file. As long as it's not empty, we can keep going. It's only empty when we've reached the end of the file. Even blank lines will contain `\n`, the newline character.

# Write

[finish this]
???? f.write('string')?
Writing to a file is a breeze. First, be aware of which mode you opened the file in. As a refresher, 'w' or "write" mode will overwrite the file, whereas 'a' or "append" will just add onto the end.

When you've opened the file properly, just use the `.write()` method to write something to the file!

```python
f = open('myfile.txt', 'w')
f.write('Hello World!')
f.close()
```

# Close

Closing files is simple, which makes it very easy to forget. Not closing files can cause problems in your program, so don't do it!

To close a file, simply call its `close()` method:

```python
f.close()
```

Recall that if you're using the `with` statement available in Python 3, you don't need to close anything. It gets taken care of for you.

# File Progress: 100%

Congratulations - you're a file guru. You have learned the skills necessary to get up to your elbows in Python file parsing. Before you ride off into the scripting sunset, continue to [part 3] (coming soon) where we'll discuss how to work with strings. This will really allow you to morph the files you read from to be exactly what you want!
