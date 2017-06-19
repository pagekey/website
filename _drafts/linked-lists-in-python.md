---
layout: post
title: Linked Lists in Python
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/KZVU2X4Dw8w" frameborder="0" allowfullscreen></iframe>

Need a quick run down on a classic data structure? Look no further.

**Click [here](https://github.com/stephengrice/youtube/blob/master/LinkedList/linked_list.py) for the full LinkedList source code. Also, [here](https://github.com/stephengrice/youtube/blob/master/LinkedList/test_linked_list.py) is the test code.**

A linked list is an ordered collection of elements. The thing that makes it special is how it stores data. Behind the scenes, each number, string, object, or other value you may need to keep track of is stored in a Node. Each Node references its successor.

In this case, we will be talking about a **singly linked list**, meaning that each node only has one reference, to the **next** node. For a __doubly linked list__, there would be an additional reference to the **previous** node.

# Nodes and Ropes

The concept of a **node** is central to linked lists. A linked list node contains two important fields: `next_node` and `data`. `next_node` refers to another node object, the next element in the list. `data` refers to whatever you are actually storing in the list.

An easy way to visualize a linked list is by picturing each node as a box. The box has space for your `data`, which may be a name, a number, an object, or any other information. The box also has a hole with a rope coming out - this rope is `next`. When you create your list and add elements, you are essentially tying each `node` box to the next one in line.

Putting this idea into code will yield the following `Node` object:

{% highlight python %}
class Node(object):
	def __init__(self, d):
		self.next_node = None
		self.data = d
{% endhighlight %}

# List Setup - Heads and Tails

Unlike a regular flat array, we can't access each list item by index. Instead, we must iterate from one of two points of reference: the `head` and the `tail` of the list. Think of these as the only two "handles" we have to grab the list by. From the `head`, we can work our way down the list by following `next` references unitl we reach the tail.

{% highlight python %}
class LinkedList(object):
	def __init__(self):
		self.head = None
		self.tail = None
		self.size = 0
{% endhighlight %}

# Adding elements

Adding an element to a list involves updating the `next` references of surrounding nodes to integrate it into the list, "tying" all the ropes in their proper places. The simpelst situation to consider is when a node is added to the end of a list. In this case, simply update `tail.next_node` to point to your new node. At this point, the new node is the last element in the list, so you should update `tail` to reflect this.

Note that if the list is empty, you only need to set `head` and `tail` to your new list node. In either case, increment the list's size by one.

{% highlight python %}
	# Add d to tail of list
	def add(self, d):
		new_node = Node(d)
		if self.tail:
			self.tail.next_node = new_node
			self.tail = new_node
		else:
			self.head = new_node
			self.tail = new_node
		self.size += 1
{% endhighlight %}

Adding a node at a specific index in the list is a more complex operation.

# Removing elements

# Finding elements

# Testing
