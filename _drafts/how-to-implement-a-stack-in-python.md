---
layout: post
title: How to Implement a Stack in Python
---

There's no other data structure like the stack. In only a few minutes, you can have a fully working implementation that can be used to solve a wide variety of problems. Stacks are useful for anything from reversing a string to language processing applications - not to mention the fact that many programming languages (and probably your operating system) rely on a stack to function.

**Click [here][stack-src] for the full Stack source code. Also, [here][stack-test] is the test code.**

# An Analogy

Stack is well-named - it very much resembles a stack of papers, or a tower of blocks, or something similar. Imagine you have a long, thin cardboard box. Your box can hold many different objects, but you can only interact with the contents of your box through the top. This box is your Stack. If you (__gently!__) put a green plate in the box, you can reach back in and pick it up. After this, if you add an orange plate to your box, you will only have access to the orange plate. To get to the green plate, you need to first reach in and remove the orange plate. Keep this mental model in your head as we move forward.

# Setup

Our Stack will have three operations - `push`, `pop`, and `peek`. Before we get to the nitty gritty of their implementation, though, we need to setup the class for the `Stack`, as well as a `Node` class to hold whatever we put in our `Stack`. The `Node` that we create for our `Stack` will be identical to **[the Node we made for our LinkedList][linked-list-article]** in the last post.

Our `Stack` will only have two fields - `self.top`, which is the item on the top of the `Stack`, and `self.size`. The field `self.top` is similar to `self.head` or `self.tail` in a LinkedList.

{% highlight python %}
class Node(object):
	def __init__(self, d):
		self.data = d
		self.next_node = None

class Stack(object):
	def __init__(self):
		self.top = None
		self.size = 0
{% endhighlight %}

# Push it

# Pop it

# Take a peek

# Full Code and Testing

If you want to see all of the code for our finished Stack, [check out the source][stack-src] on Github.

[stack-src]: https://github.com/stephengrice/youtube/blob/master/Stack/stack.py
[stack-test]: https://github.com/stephengrice/youtube/blob/master/Stack/test_stack.py
[linked-list-article]: http://stephengrice.com/blog/2017/06/20/linked-lists-in-python.html