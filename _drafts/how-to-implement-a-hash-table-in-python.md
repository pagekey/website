---
layout: post
title: How to Implement a Hash Table in Python
---

This tutorial will show you how to implement a hash table with **separate chaining**. It's not the most efficient method, but it is the simplest way to start out in my opinion.

# Background

Hash tables are great for so many interesting programming problems. I always love to incorporate a hash table into a problem, and they can provide a clean solution to an issue that would be a mess otherwise.

For the longest time, I wondered how hash tables were created. I wanted to make my own, but didn't know how. Luckily, I found [James Routley's awesome post](https://github.com/jamesroutley/write-a-hash-table) detailing how to implement one in C. For anyone interested, I highly recommend it.

Using this knowledge, I ported the Hash Table to Python. Through this tutorial, I hope to lay out the essential ideas behind this data structure in a clear, concise manner.

# The Basics

If you've ever used a dictionary in Python or an associative array in a language like PHP, you've probably used a hash table. Sometimes, a flat area just isn't enough - you need to store and access your data by a **key**, not just by an integer index.

The hash table we build will be used like this:

{% highlight python %}
ht = HashTable()
phone_numbers = ["555-555-5555", "444-444-4444"]
ht.insert("phoneDirectory", phone_numbers)
phone_numbers = None
... # later on...
phone_numbers = ht.find("phoneDirectory")
# find() retrieved our list object
# phone_numbers is now equal to ["555-555-5555", "444-444-4444"]
{% endhighlight %}

How does this work under the hood? As it turns out, your key (`phoneDirectory` in this example) is converted into an index. This index is used for storing and retrieving the value from the hash table's internal array. All those messy details are hidden from the user - they just have to worry about `insert()`, `find()`, and `remove()`.

# Fields

Let's start out nice and easy. Our hash table will need a few things to keep it together. It needs a `size`, which will be the number of elements that have been inserted. It needs a `capacity`, which will determine the size of our internal array. Last, it needs `buckets` - this is the internal array, storing each inserted value in a "bucket" based on the provided key.

{% highlight python %}
class HashTable:
	def __init__(self):
		self.capacity = INITIAL_CAPACITY
		self.size = 0
		self.buckets = [None] * self.capacity
{% endhighlight %}

Note the `INITIAL_CAPACITY` variable, arbitrarily set to 50 in my example class. This defines the size of our internal array. In an open-addressed, double-hashed hash table, it's important that the capacity is prime, and that it can be changed. On the other hand, in our separate chaining hash table, we set the capacity once and never change it, regardless of how many elements are stored. This is good for simplicity, but bad for scalability.

# HashTable Node

Sorry, you don't get a break from Nodes yet. HashTable will need its own version of a Node:

{% highlight python %}
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None
{% endhighlight %}

Look familiar? Node has a `next` field because it's actually part of a LinkedList. Because the HashTable uses **separate chaining**, each bucket will actually contain a LinkedList of nodes containing the objects stored at that index. This is a method of **collision resolution.**

# Collisions

Whenever two keys have the same hash value, it is considered a collision. What should our hash table do? If it just wrote the data into the location anyway, we would be losing the object that is already stored there. With separate chaining, we create a Linked List with each node for a given hash value. When we need to look up one of those nodes, we go through the list until we find the one matching the requested key.

There are other, far more efficient ways of handling this, but separate chaining seems to be the simplest method.

# Methods

Now we can really get started. Let's jump into our hash table's methods.

## Hash

Our hash method needs to take our key, which will be a string of any length, and produce an index for our internal `buckets` array.

For your reference, the following are some characteristics of a good hash function:

1) Hash is determined by the data being hashed.

2) Hash function uses all of the input data.

3) Function outputs are uniformly distributed.

4) Hash function generates a very different output for similar strings.

For our purposes the most important characteristic that our function must have is **uniformity**. We would like our hash values to be as evenly distributed among our buckets as possible, to take full advantage of each bucket and avoid collisions.

To understand why, consider an extreme case: Our hash function will be `h(x) = 1`. That's right, a constant value. So what happens? Every time we hash a key, the output is 1, meaning that we assign that node to bucket 1. With every single node under bucket 1, our HashTable becomes nothing more than a bloated LinkedList!

![Uniform Bucket Distribution (good)][buckets_uniform]
![Non-Uniform Bucket Distribution (bad)][buckets_nonuniform]

## Insert

To insert a node into our HashTable, we will follow these steps:

1. Increment size of hash table.

2. Compute index of node using hash function.

3. If the bucket is empty, create a new node and add it.

4. Otherwise, there is a linked list of at least one node at this index. Iterate to the end of the list and add a new node there.

This is reflected in the following code:

{% highlight python %}
def insert(self, key, value):
	# 1. Increment size
	self.size += 1
	# 2. Compute index of key
	index = self.hash(key)
	# Go to the node corresponding to the hash
	node = self.buckets[index]
	# 3. If bucket is empty:
	if node is None:
		# Create node, add it, return
		self.buckets[index] = Node(key, value)
		return
	# 4. Iterate to the end of the linked list at provided index
	prev = node
	while node is not None:
		prev = node
		node = node.next
	# Add a new node at the end of the list with provided key/value
	prev.next = Node(key, value)
{% endhighlight %}

## Find

Once we have stored the data, we will need to retrieve it at some point. To do this, we'll perform the following steps:

1. Compute the hash (index) for the provided key.

2. Go to the bucket for that index.

3. Iterate the nodes in that linked list until the key is found, or the end of the list is reached.

4. Return the value of the found node, or None if not found.

This idea would be expressed in code like this:

{% highlight python %}
def find(self, key):
	# 1. Compute hash
	index = self.hash(key)
	# 2. Go to first node in list at bucket
	node = self.buckets[index]
	# 3. Traverse the linked list at this node
	while node is not None and node.key != key:
		node = node.next
	# 4. Now, node is the requested key/value pair or None
	if node is None:
		# Not found
		return None
	else:
		# Found - return the data value
		return node.value
{% endhighlight %}

## Remove

Removing an element is similar to removing an element from a linked list. This method will return the data value removed, or None if the requested node was not found.

1. Compute hash for key to determine index.

2. Iterate linked list of nodes. Continue until end of list or until key is found.

3. If the key is not found, return None.

4. Otherwise, remove the node from the linked list and return the node value.

This would be reflected in code as such:

{% highlight python %}
def remove(self, key):
	# 1. Compute hash
	index = self.hash(key)
	node = self.buckets[index]
	prev = None
	# 2. Iterate to the requested node
	while node is not None and node.key != key:
		prev = node
		node = node.next
	# Now, node is either the requested node or none
	if node is None:
		# 3. Key not found
		return None
	else:
		# 4. The key was found.
		self.size -= 1
		result = node.value
		# Delete this element in linked list
		if prev is None:
			node = None
		else:
			prev.next = prev.next.next
		# Return the deleted language
		return result
{% endhighlight %}

For more information about removing a node from a linked list, see my [LinkedList article](/blog/2017/06/20/linked-lists-in-python.html).

# Applications

Hash tables can be useful in a wide variety of computer science applications. Once you learn how to use them, you won't be able to stop! It seems at every turn there is a new application for the Hash table.

# Source

Source found at:

[buckets_uniform]: /blog/assets/img/articles/hashtable/buckets_nonuniform.png "HashTable Buckets with Non-Uniform Distribution"

[buckets_nonuniform]: /blog/assets/img/articles/hashtable/buckets_uniform.png "HashTable Buckets with Uniform Distribution"
