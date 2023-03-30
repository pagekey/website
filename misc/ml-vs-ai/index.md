---
title: "The Nuanced Truth: Exploring Differences Between ML and AI"
date: "2021-04-11"
authors: [steve]
path: /blog/misc/ml-vs-ai/
---

![Cute robot](/img/cute-robot.jpeg)

Everyone has heard of machine learning and artificial intelligence at this point, right?

There is an insane amount of buzz around ML and AI, and for good reason. The techniques available to us today allow for mind-blowing applications that would have seemed like magic just a few years ago.

I've researched all that I can across the web, and I've come up with an analogy: **Machine learning** is a kind of tool that we can use to make our computers do what we want. Every time you learn a new machine learning technique, you add another tool to you toolbelt.

When you have an assortment of tools at your disposal, you might try your hand at building something rather complex with them, something that requires all of those tools to work together in unison. It's likely that you'd try to build something that exhibits **artificial intelligence**. In this way, machine learning techniques are the tools, **artificial intelligence** is the house, and you are the carpenter!

Let's dive in a bit deeper and see if this analogy holds true.

<!--truncate-->

*Photo by [Alex Knight](https://www.pexels.com/@agk42?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)*

## Artificial Intelligence

Artificial Intelligence is the top of the hierarchy, encompassing all other topics that we'll discuss today. The broad definition provided by IBM is "any human-like intelligence exhibited by a computer, robot, or other machine" [1]. This encompassing a lot, from the facial recognition software your phone uses to make you look like a cat, to expert systems that help doctors and surgeons make more effective decisions [2].

### Weak AI vs. Strong AI

Weak, or Narrow, Artificial Intelligence is an AI application that is "trained and focused to perform specific tasks" [1]. This is the technology that drives pretty much everything we see today, including Google Assistant, Siri, Alexa, and IBM's Watson (which won Jeopardy that one time - [remember?](https://www.techrepublic.com/article/ibm-watson-the-inside-story-of-how-the-jeopardy-winning-supercomputer-was-born-and-what-it-wants-to-do-next/)). This is why "weak" is not necessarily the best way to describe it; there are plenty of things that have been accomplished with Weak/Narrow AI.

Strong AI, or Artificial General Intelligence, is something that "can solve many types or classes of problems and even choose the problems it wants to solve without human intervention" [1]. There is still no real-world example of Strong AI - it's only a concept. There are plenty of science fiction examples though, but not all of them present a favorable view. [Skynet](https://en.wikipedia.org/wiki/Skynet_(Terminator)), anyone?

## Machine Learning

IBM defines machine learning as software that is "focused on building applications that learn from data and improve their accuracy over time without being programmed to do so" [3]. This means that you can train your computer to make decisions without having to specify every single possible case with an `if/else` or `switch` statement. Imagine trying to find a way to tell your computer to recognize a cat based on pixels. Just getting one image right would take hundreds, or perhaps thousands, of statements, and then that would only work for a single image! Instead, machine learning enables **pattern recognition** so that you can train your computer to get the gist of what you're looking for, and then let it make the calls.

Though closely related, ML and AI are distinct topics that must be considered and understood separately. Gary Sims from Android Authority sums it up quite well in his YouTube video on the topic [4]: **Machine learning** is a process by which a machine learns from its experience, and generally involves **recognizing patterns and doing something useful with them**. On the other hand, artificial intelligence involves **creativity, abstract thinking, and analysis** within a specific context. While achieving artificial intelligence will almost certainly require the use of ML techniques, it is clear that AI refers to a high-level concept of a computer's abilities, whereas ML generally describes techniques for pattern-matching and extracting specific insights from a dataset.

So why is this so confusing? Gary hints at an answer: "artificial intelligence" tends to double as a marketing technique. When you hear a company claim that they use "artificial intelligence" without explaining how, they're usually trying to sell you something.

### Types of Machine Learning

The machine learning technique that you apply depends on what you're using it for. In particular, there are three main considerations [3]:

* Is your data labeled or unlabeled?
* How much data will be available?
* What type of problem are you trying to solve?

Some algorithms can be used both for labeled and unlabeled data. For example, "Nearest Neighbors" is a broad category of algorithms. Scikit-learn, one of the most popular open-source libraries for machine learning, says that their `neighbors` package "provides functionality for unsupervised and supervised neighbors-based learning methods" [5].

However, focusing on whether the data at hand is labeled provides a starting point for divvying up the algorithms into their most common uses.

#### Supervised Learning: When Data is Labeled

When labels are provided for data, it's like having the answers to the exam for all of your training data. We use these answers when teaching the model how to make decisions. This is referred to as **supervised learning**.

A few examples of supervised learning include **regression algorithms**, **decision trees**, and **instance-based** algorithms.

**Linear** and **logistic regression** algorithms are some of the simplest ML algorithms that we have. They are essentially trying to fit your training data to a curve, one that either looks something like `y=mx+b` or something involving logarithms. As long as your data can actually be modeled by these curves, it could be a great choice.

[Decision trees](https://en.wikipedia.org/wiki/Decision_tree_learning) and [instance-based](https://en.wikipedia.org/wiki/Instance-based_learning) algorithms are some other choices for supervised learning.

#### Unsupervised Learning

Unsupervised learning means that we *just* have the data, with no answers provided. It's up to the program to figure out how to categorize the data. Within this category, we typically find **clustering algorithms**, **association algorithms**, and **neural networks**[3].

**Clustering algorithms** are aimed at forming groups of data points. They try to find some kind of similarity between points, then it will form a group containing those similar points.

**Association algorithms** attempt to uncover how data points are related to one another [6]. Such algorithms can automatically find correlations that may not otherwise be obvious. This is the kind of algorithm that may [find out that you're pregnant before you do](https://www.driveresearch.com/market-research-company-blog/how-target-used-data-analytics-to-predict-pregnancies/) based on your shopping list.

**Neural networks** attempt to model the neurons in the human brain to process data in successive "hidden layers" of calculations. Depending on how many hidden layers are involved, the use of neural networks could be considered **deep learning**.

#### Reinforcement Learning

Reinforcement learning is similar to supervised learning, but instead of getting trained by sample data, it learns as it goes. This means that you may have to run the "agent," or program acting on your behalf, through hundreds or even thousands of situations so that it can figure out what works best. Reinforcement learning defines ways to reward or penalize the agent's actions, and based on whether it is rewarded or punished, the agent learns to seek out the best path.

[This awesome video](https://www.youtube.com/watch?v=y5OY4dd5DIY) shows an example of reinforcement learning in action - someone trained their computer to play Super Mario!

## Conclusion

So, what do you think? Would you agree that the key to building a useful artificial intelligence application involves applying specific ML applications? Is ML the toolkit that lets us build a "house" of AI?

I hope you learned something new from this article about these topics. Please let me know if you have any thoughts on these topics (or corrections if I made any mistakes).

**If you're excited about these topics and want to get your hands dirty, check out my next post about how to install scikit-learn!**

## References

[1] [https://www.ibm.com/cloud/learn/what-is-artificial-intelligence](https://www.ibm.com/cloud/learn/what-is-artificial-intelligence)

[2] [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1307157/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1307157/)

[3] [https://www.ibm.com/cloud/learn/machine-learning](https://www.ibm.com/cloud/learn/machine-learning)

[4] [https://www.youtube.com/watch?v=whlODvf-SVk](https://www.youtube.com/watch?v=whlODvf-SVk)

[5] [https://scikit-learn.org/stable/modules/neighbors.html](https://scikit-learn.org/stable/modules/neighbors.html)

[6] [https://www.kdnuggets.com/2016/04/association-rules-apriori-algorithm-tutorial.html](https://www.kdnuggets.com/2016/04/association-rules-apriori-algorithm-tutorial.html)

