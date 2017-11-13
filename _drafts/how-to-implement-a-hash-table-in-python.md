---
layout: post
title: How to Implement a Hash Table in Python
---

This tutorial will shop you how to implement a hash table with **separate chaining**. It's not the most efficient method, but it is the simplest way to start out in my opinion.

# Background

Hash tables are great for so many interesting programming problems. I always love to incorporate a hash table into a problem, and they can provide a clean solution to an issue that would be a mess otherwise.

For the longest time, I wondered how hash tables were created. I wanted to make my own, but didn't know how. Luckily, I found [James Routley's awesome post](https://github.com/jamesroutley/write-a-hash-table) detailing how to implement one in C. For anyone interested, I highly recommend it.

Using this knowledge, I ported the Hash Table to Python. Through this tutorial, I hope to lay out the essential ideas behind this data structure in a clear, concise manner.

# The Basics
