---
layout: post
title: How to Implement a Binary Search Tree in Python
---

Decisions, decisions... Life is all about choices! Usually there are so many ways to go; an infinite stretch of roads stretches in front of you, an endless gradient of details...

For Binary Search Trees, it's a lot easier. A Binary Search Tree (BST) gives you two choices: left or right, less or greater, 0 or 1 (hence **binary**).

# Overview

A BST is a great choice for storing data that is easily sorted. For flat arrays, searching for, inserting, and deleting data will loop through every element, yielding an average efficiency of O(n). With a Binary Search Tree, each step down the tree cuts down the remaining nodes by up to half. For this reason, search on a BST is O(log(n)) on average.

# Insert

# Find

# Remove

I'm trying my best to relate all of these data structures to the real world, but `remove` is where I draw the line. For some reason, this code is ridiculously complicated, and it's best to just bite the bullet and break it down into a set of well-defined cases.

# Traversals

# Full Source and Tests
