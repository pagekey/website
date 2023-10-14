---
title: How to Implement a Stack in Python
date: 2017-06-22
authors:
  - steve
categories:
  - Data Structures & Algorithms
tags:
  - python
  - tutorial
slug: stack
---

![Stack of rocks](stack.jpg)

There's no other data structure like the Stack. In only a few minutes, you can have a fully working implementation that can be used to solve a wide variety of problems. Stacks are useful for anything from reversing a string to language processing applications - not to mention the fact that many programming languages (and probably your operating system) rely on a Stack to function.

<!-- more -->

**Click [here][stack-src] for the full Stack source code. Also, [here][stack-test] is the test code.**

![type:video](https://www.youtube.com/embed/5MOy9VYKczY)

## An Analogy

The Stack data structure is well-named - it very much resembles a stack of papers, or a tower of blocks, or any pile of objects where all adding and removing occurs at the top of the pile. Just think - you can't remove a quarter in the middle of a stack of coins without knocking the whole thing over!

For our purposes, imagine you have a long, thin cardboard box. Your box can hold many different objects, but you can only interact with the contents of your box through the top. This box is your Stack. If you (__gently!__) slide a green plate into the box, it will rest at the bottom, still visible and accessible from someone looking in. After this, if you add an orange plate to your box, you will only have access to the orange plate. To get to the green plate, you need to first reach in and remove the orange plate. Keep this analogy in your mind as we move forward.

## Setup

Our Stack will have three operations - `push`, `pop`, and `peek`. Before we get to the nitty gritty of their implementation, though, we need to setup the class for the `Stack`, as well as a `Node` class to hold whatever we put in our Stack. The Node that we create for our Stack will be identical to **[the Node we made for our LinkedList][linked-list-article]** in the last post.

Our Stack will have two fields - `self.top`, which is the item on the top of the Stack, and `self.size`. The field `self.top` is similar to `self.head` or `self.tail` in a LinkedList. What makes it special is that it is the **only** Node accessible to the user of the `Stack`. All other nodes are hidden until that `self.top` Node is removed.

```python
class Node(object):
	def __init__(self, d):
		self.data = d
		self.next_node = None

class Stack(object):
	def __init__(self):
		self.top = None
		self.size = 0
```

## Push it

When you `push` something onto your Stack, you place it on top. This is akin to sliding a plate into your long box. The plate you add becomes the new top plate, and all the ones underneath become inaccessible.

The first step to making this work is creating a Node object to hold the data you're holding. Then, tie this `new_node` to the Node referenced by the Stack's `self.top` variable: `new_node.next_node = self.top`. Now, set your `new_node` as the new top of the Stack.

```python
	def push(self, d):
		new_node = Node(d)
		if self.top:
			new_node.next_node = self.top
		self.top = new_node
		self.size += 1
```

The nodes are linked together exactly like a Singly Linked List. The only differences are the operations used to manipulate the data.

## Take a peek

What happens when you need to look at what's in your Stack? You just peek down inside, that's all! The method `peek` is used to access the top data entry in a Stack __without changing the Stack itself__. It's not destructive - after all, it's just a harmless peek!

```python
	def peek(self):
		return self.top.data
```

## Pop it

Now, let's get serious. We need to completely remove something from our stack and look at it. We want to do something with it, and more importantly, we want whatever is below it to become the new `self.top` so that we can access it, too. When we `pop` something from the stack, we pull an object out, removing it from the stack. More specifically, the `pop` method returns `self.top` just like `peek`, but it also removes whatever Node is located at `self.top`, changing it to reference the next Node down.

```python
	def pop(self):
		result = self.top.data
		self.top = self.top.next_node
		self.size -= 1
		return result
```

## Challenges

Let's put this knowledge to use! I have two programming challenges to try. If you get stuck, I'll give you a link to my solutions.

Each challenge should use the stack we just built, so either put your functions in the same source file as your stack, or create a challenges source file in the same directory and write `from stack import Stack` at the top.

### First Challenge: Reverse a string

Implement a method, `reverse(s)`, which uses our Stack to reverse the input string `s`. For hints about completing this challenge, check out the video at the top of the article.

### Second Challenge: Evaluate a postfix string

Implement a method, `eval_postfix(postfix_string)`, which returns a number representing the value of the input `postfix_string`. A Stack makes this much easier. Assume that the input has no spaces - each character in the string is a number or one of the following operator characters: `'+', '-', '*', '/'`

Hint: Push all operands. When you find an operator, pop twice, calculate based on the operator, and push the result.

Another hint: When you're finished, the only thing in the stack will be the answer. Pop and return this.

### Solutions

Don't peek! I hope you tried your best! Anyway, [here](https://github.com/pagekeysolutions/education/blob/master/Stack/challenges.py) are my solutions to the challenges.

## Full Code and Testing

That's all there is to it! Part of the beauty of a Stack is its simplicity.

If you want to see all of the code for our finished Stack, [check out the source][stack-src] on Github. I also wrote a few [tests][stack-test], which cover some of the important functionality of our Stack (though I can't guarantee 100% coverage!). Thanks for reading!

[stack-src]: https://github.com/pagekeysolutions/education/blob/master/Stack/stack.py
[stack-test]: https://github.com/pagekeysolutions/education/blob/master/Stack/test_stack.py
[linked-list-article]: ../linked-lists-in-python/index.md