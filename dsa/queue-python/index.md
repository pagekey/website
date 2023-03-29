---
title: How to Implement a Queue in Python
date: "2017-06-23"
authors: [steve]
tags: [data-structs-and-algs]
path: /blog/dsa/queue-python/
---

![One after the other...](@post/queue.jpg)

You may hate the line at the DMV, but without it, things might turn into a rough-and-tumble free for all! In the same way that a line keeps raging motorists from getting out of hand, a Queue helps your computer keep its ducks in a row. The Queue functions very much like a line of people. It's a First-In, First-Out (FIFO) data structure, so no cutting!

<!--truncate-->

## Starting Out

Bear with me. Our basic Queue data structure and accompanying Node will look like this:

```python
class Node(object):
	def __init__(self, d):
		self.data = d
		self.prev_node = None
		self.next_node = None

class Queue(object):
	def __init__(self):
		self.head = None
		self.tail = None
		self.size = 0
```

## enqueue

Take a number, buddy. When you get in line, you're involved in the `enqueue` operation. You begin your journey to the front desk at the back, or `tail`, of the Queue. The `tail` attribute is just a pointer; it's like a big flag or arrow saying, "This person (or object) is last in line!" Talk about embarrassing...

In our hypothetical DMV line, everyone is holding their driver's license in their pocket. This registration is your `data`, making you a `Node` in the Queue. Our Queue will be implemented as a Double-Ended Linked List, which means that every Node will point to the `next` data item in the queue. So, each person in our line will have to point at the next person in line. Perhaps rudely, they'll need to jerk a thumb over their shoulder at the `prev`ious person in line, too.

When you're joining the line, the first thing you need to do is point at the current `tail`. Then, move the hypothetical arrow and declare yourself as the new `tail` reference.

In code, this would look like:

```python
	def enqueue(self, d):
		new_node = Node(d)
		if self.size > 0:
			self.tail.prev_node = new_node
			new_node.next_node = self.tail
			self.tail = new_node
		else:
			self.head = new_node
			self.tail = new_node
		self.size += 1
```

## dequeue

You've been waiting for an hour, and finally shuffled to the front of the line. The man at the desk yells, "Next!" and you rush to the desk.

Something special just happened. You've been `dequeue`'d. Congratulations.

In order to `dequeue` something from the list, you first grab the Node from the front. Then, set `self.head = self.head.prev_node`. In other words, move the `head` pointer to the previous person in line. Now, return the `data` from Node you just removed from the Queue. It's important to store this in a temporary variable. Otherwise, you'll be returning the data of something still in the Queue. An important part of `dequeue` is that the item you return has been removed from the queue.

```python
	def dequeue(self):
		if self.head == None:
			return None
		result = self.head
		self.head = self.head.prev_node
		self.size -= 1
		return result.data
```

## peek

Let's say that you just made it to the front of the line. All the clerks are busy, but you know someone who works there. Your long time pal looks up from a pile of work and yells, "What's going on?"

How did they know you were there? They had to `peek` at the front of the line to recognize your face.

This operation is very simple. All you need to do is ask the first person in line to pull out their driver's license for a moment. In other words, just return `self.head.data`.

```python
	def peek(self):
		return self.head.data
```

## Full Source and Tests

Feel free to check out the source of the entire Queue [on Github][queue-src]. If it interests you, the code I used to test it is [here][queue-test]. Thanks for reading!

[queue-src]: https://github.com/pagekeysolutions/education/blob/master/Queue/queue.py
[queue-test]: https://github.com/pagekeysolutions/education/blob/master/Queue/test_queue.py
