---
layout: post
title: How to Implement a Linked List in Python
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/KZVU2X4Dw8w" frameborder="0" allowfullscreen></iframe>

Need a quick run down on a classic data structure? Look no further.

**Click [here][list-src] for the full LinkedList source code. Also, [here][list-test] is the test code.**

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

Note that if the list is empty, you only need to set `head` and `tail` to your new list node. In either case, increment the list's size by one. Adding a node to the end of the list is completed in O(1) time.

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

Adding a node at a specific index in the list is a more complex operation. To do this, you need to iterate the list to find the `current_node` at the index you will be inserting the new data, as well as the `previous` node. Once you have these references, tie the previous node to the new node, and the new node to the rest of the list. In code, this would mean setting `previous.next_node = new_node` and `new_node.next_node = current_node`.

{% highlight python %}
	# Return True if d is in list, false otherwise
	def find(self, d):
		current_node = self.head
		while current_node:
			if current_node.data == d:
				return True
			current_node = current_node.next_node
		return False
{% endhighlight %}

# Removing elements

Removing an element is fairly straightforward, though it may seem counterintuitive at first. You need two references: `previous`, the node __before__ the one you are deleting, and `node`, the one you are deleting. Once you have checked and found the `data` you need in `node`, simply set `previous.next_node = node.next_node`. This snippet of code is reassigning the previous node from pointing to the node we are deleting to the node beyond it. In this way, the `node` we are deleting is not set as the `next_node` of any other node. Since nothing references it, it is as good as gone - Garbage collection will see that it gets deleted.

Once you have the `previous` and `node` references, the remove operation has a time complexity of O(1).

{% highlight python %}
	# Remove d; return True if successful, false otherwise
	def remove(self, d):
		previous_node = None
		current_node = self.head
		while current_node:
			if current_node.data == d:
				if previous_node:
					previous_node.next_node = current_node.next_node
				else:
					self.head = current_node.next_node
				self.size -= 1
				return True
			previous_node = current_node
			current_node = current_node.next_node
		return False
{% endhighlight %}

# Finding elements

Finding an element in your linked list is not as simple as jumping to the index you would like to access. The only way we can interact with the list is through the `head` node, `tail` node, and the links between them. To begin the find operation, set a variable `current_node` to `self.head`. Then, begin a loop. For each iteration, check if you found the data you are `find`ing. If you found it, great - return `True`, or the data, or the node; what you return depends on how you plan to use the Linked List. If you did not find it, set `current_node = current_node.next_node`, and begin the next iteration. This assignment moves your `current_node` pointer onto the next list element, allowing you to perform your check on every item in the list.

{% highlight python %}
	# Return True if d is in list, false otherwise
	def find(self, d):
		current_node = self.head
		while current_node:
			if current_node.data == d:
				return True
			current_node = current_node.next_node
		return False
{% endhighlight %}

# Testing

Typing `python3` on the command prompt will bring up an interactive shell in which you can interact with your new Linked List. Just make sure that you import it. If your linked list is stored in `linked_list.py`, then simply type `from linked_list import LinkedList`.

However, I find it tiresome to constantly run through all the methods to make sure they work and that a small change didn't break them. For this reason, I use python's `unittest` framework to run a series of tests over and over on my list until I get it right. You can use [the tests I wrote][list-test] as a template if you want to get started with unit testing in Python. To run tests, open a terminal and type `python3 -m unittest test_linked_list.py`. To run any files with the name prefix `test_`, type `python3 -m unittest discover` to run them all.

# Full Source

If you want to see all of the code for our finished LinkedList, [check out the source][list-src]] on Github.

[list-src]: https://github.com/stephengrice/youtube/blob/master/LinkedList/linked_list.py
[list-test]: https://github.com/stephengrice/youtube/blob/master/LinkedList/test_linked_list.py