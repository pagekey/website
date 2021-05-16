---
layout: post
title: 'Crunching Numbers - PageKeasy Python (4 of 6)'
keywords: learning, ideas, education, productivity, engineering, software engineering, technology, python, scripting, pagekey, pagekeasy, math, mathematics
author: stephengrice
categories: ['Python', 'Tutorial', 'Scripting']
draft: true
---

Python is well-known for its flexible and easy interface for processing data. One essential part of that interface is the various math libraries provided. These easy-to-use libraries may be a part of why so many easy-to-use AI libraries are implemented in Python! [Todo: I completely made that up, so maybe delete it]

We're going to cover a few of the most important math functions that you can use in Python.

# Basic Operators

There are a few basic math operators you see everywhere. You'll see them in Python as well, with a few small exceptions.

First, **addition** is done with `+`, as one would expect. **Subtraction** is done with `-`.

Similarly, **multiplication** and **division** are performed using `*` and `/`, respectively.

[todo: what am i missing]

Finally, **exponents** can be calculated using `**`. With this operator, put the base on the left and the exponent on the right.

Here are a few examples of these operators in use:

```
>>> 3 + 5
8
>>> 5 - 3
2
>>> 5 * 5
25
>>> 25 / 5
5
>>> 5**2
25
>>>
```

# Trigonometry

Another common feature of a programming language is the ability to perform basic trigonometric functions. In Python, they are fairly straightforward. In order to use these functions, we'll have to import the `math` library. You can do it with this line of code:

```python
import math
```

Now, we're good to go. The trigonometric functions are mostly self-explanatory: `math.sin(x)`, `math.cos(x)`, and `math.tan(x)`.

Inverse trig functions are denoted with `asin`, `acos`, and `atan`. Another function available is the `atan2` function, which takes two arguments - `y` and `x`. AND hyperbolic - `asinh`, etc.

# Special Math

??? Cool functions?

* Math.factorial(x)
* math.degrees(radians)
* math.radians(degrees)
* math.pi
* math.e
* math.ceil
* math.floor

More info: https://docs.python.org/2/library/math.html


Calculus?
