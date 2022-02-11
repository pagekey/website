---
title: "Snap the Line! Understanding Linear Regression and Scikit-Learn"
date: "2021-05-20"
featured_image: "/img/articles/buildings-row.jpg"
featured_image_alt: "Row of buildings"
latex: true
---

Where do we start with something as complex as scikit-learn? At the beginning, of course!

The Linear Regression module in scikit-learn provides an excellent first step into the world of machine learning. Rather than having to read a 90 page paper, we can instead make use of the knowledge that we gained in our stats class to form a model that will make some predictions for us.

If this sounds like a lot, don’t worry. We’ll briefly review the math concepts you need to know to fully understand what’s going on, and also touch on an example with real-world data that will put things in perspective.

<!--truncate-->

*Photo by [NOHK](https://www.pexels.com/@nohkstudio?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from Pexels*

## Disclaimer and Sources

I am simultaneously learning and teaching this topic. I've been watching various videos across the web to fill in my own personal knowledge gaps in statistics. The article below is my attempt to explain what I've learned so far. If you're like me, you may want to try to figure out the answers yourself before reading my solution. To follow the same path that I did, check the sources at the end of this article. Each link contains some information that I cited somewhere in this article.

## A Real World Example

Let's start with the problem that we're trying to solve, and then we can work our way back to a solution.

Khan Academy [1] provides what may be the simplest problem we could attempt to solve with linear regression. Suppose you collect the height and weight of many individuals in your hometown and would like to find the relation between height and weight. To do so, you can create a scatter plot by plotting height along the x-axis and weight along the y-axis. In doing so, we are assuming that height is the independent variable and weight is the dependent variable.

Looking at a scatter plot, we can come up with a line ourselves. Just hold your finger up to the graph and you can approximate a "line of best fit." But this is machine learning, not people learning, so we'll need to automate the process of finding that fit line somehow.

To do so, we'll need to think about how the data would relate to the fit line and apply some statistics that we'll learn in the next section.

## The Math

### Population vs. Sample Statistics

In statistics, a population contains **all** members of a specific group, whereas a sample consists of a subset of that group [8]. For example, if you're trying to draw conclusions about people living in the United States, the population you're working with will be upwards of 300 million people. This makes it obvious why we would want to work with samples - there's no way you'll be able to gather reasonable, accurate data for 300 million people! Instead, you need to sample the population of 300 million to get a subset of people that represent the larger group.

It seems in the world of statistics that you often have a choice between using formulas for the **population** or for the **sample**. In our case, we'll pretty much always be using the formula for **sample**. I believe I know why this is (though I could be wrong): We're working to form a linear regression **model** based on **training data** (which is a sample). Then we apply our model to other members of the population that were not part of the training data set.

If we used every single member of the population as training data, then we'd just be calculating it outright, wouldn't we? There would be nothing left to use the model on after training! For this reason, it makes sense to me that we're using the formulas for sample rather than for population.

### Residuals and Error

In the context of the last problem, we are trying to find a line that most closely matches the dataset. Before we can come up with an entire continuous line to represent the dataset, we first have to figure out how to determine whether a **single data point** is any good or not. To do so, we'll use the concept of a **residual**.

#### What's a Residual?

A residual is "the difference between the observed value of the dependent variable ($y$) and the predicted value ($\hat{y}$) is called the residual ($e$)" [2]. As an equation, that would be:

$$e=y-\hat{y}$$

Notice that we use $\hat{y}$ (prounounced "y hat") to represent our predicted value. All in all, the goal of linear regression is to find an equation for $\hat{y}$. First though, let's use the above equation to find the residual of a real-world example.

Consider someone who is 5'8 and weighs 160 pounds. When all's said and done, we'll have an equation where we plug in the x-value, 5'8, and get a weight as a result. If the result is 170 pounds, then we have a residual of 160-170=-10 pounds. In math terms, \(y=160\) and \(\hat{y}=170\), meaning that residual \(e=-10\) for this particular point.

Another example is someone who is 6'0 and 200 lbs. If our model predicted that they would weight 190, the residual e=200-190=10.

#### How is residual different from error?

Since the variable used for residual is \(e\), you may think that it's the same thing as error. It's similar, but not quite the same. As it turns out, the **residual** is the exact difference between the actual and predicted value for a given sample, as we've already seen; the **error** is the same thing, but for an entire population [3][4]. This means that the error can be hard or impossible to calculate exactly, so it's usually just theoretical.

#### Understanding Correlation Coefficients

Another key part of calculating the regression line is to correlation coefficients. Khan Academy concisely summarizes the concept: "Correlation coefficients are trying to measure how well a **linear model** can describe the relationship between **two variables**" (emphasis mine) [5]. See [5] for a video to build intuition, so that you can match the given correlation coefficient to a dataset based on how well it is correlated and whether the correlation is positive or negative.

The ability to calculate a correlation coefficient \(r\) will play a key role in determining the slope \(m\) of our regression line \(\hat{y}\).

In order to actually calculate the correlation coefficient, we'll need two more concepts in our toolkit: sample mean and standard deviation.

#### Sample Mean

The sample mean is just the mean, or average, of a given set of samples. Because our model will be bivariate, involving two variables, we'll calculate the sample mean for both x, the independent variable, and y, the dependent variable.

Calculating the sample mean is as easy as adding up all the values and dividing by the total number of values, just like any other average. Mathematically, it would be

$$\bar{x}=\frac{\sum_{x \in X}{x}}{|X|}$$

for all points x in the domain X and 

$$\bar{x}=\frac{\sum_{x \in X}{x}}{|X|}$$

for points y in codomain Y.

#### Standard Deviation

The standard deviation of a set of number is just a measure of how spread out the numbers are [6]. To calculate it, you take the square root of the variance. The variance is the average of squared distances from the mean. In math, this would be:

$$s=\sqrt{\frac{\sum_{i=1}^{N}{(x_i-\bar{x})^2}}{N-1}}$$

Note that you use Greek sigma (\(\sigma\)) to represent **population standard deviation**, which is when you are calculating for all possible points you could be interested in. However, in our case, we only have some of the data (training data), so we need the **sample standard deviation**, represented with letter \(s\). The only difference in the calculation is that we divide by \(n-1\) instead of by \(n\) when calculating the average of squared distances from the mean (the variance).

#### z-scores

The z-score, or "standard score," tells you how many standard deviations above or below the population mean a given sample is [7]. This number will give you an idea of how far off that data point is from the mean. To calculate the z-score, we use this formula:

$$z=\frac{x_i-\bar{x}}{s}$$

In the above, \(z\) represents the final z-score, while \(x_i\) is the sample, \(\bar{x}\) is the sample mean, and of course \(s\) is the sample standard deviation.

#### Calculating Correlation Coefficients

Given the sample mean and sample standard deviation, the correlation coefficient can be calculated using the following formula:

$$r=\frac{1}{n-1}\sum(\frac{x_i-\bar{x}}{s_x})(\frac{y_i-\bar{y}}{s_y})$$

There are three parts to this. In the first part, we have \(\frac{1}{n-1}\), which is a number that will get smaller as more points are added. We are multiplying this by a sum of all points, so as more points are added, each individual point affects the outcome less.

What about the summation? It looks complicated at first, but you're really just doing something for every sample, or (x, y) point, in your data set. Notice that the first term, \(\frac{x_i-\bar{x}}{s_x}\), is actually just the z-score for x, or the residual for x divided by the standard deviation for x. The same is the case in the next term, except it's for y.

So this means that we multiply the z-score of each variable, x and y, together for every point, and then add all of these values together. This is scaled by our first term, which keeps r from getting excessively large or small. We know that r will always be between 1 and negative 1 thanks to that initial term.

#### Ordinary Least Squares

Remember when we calculated an example residual of -10? That's great for one point, but how to we get a feel for how **all** of the points fit our line?

One way would be to sum all of the residuals. However, this won't work, because a large negative residual, say -1,000, could be added to a large positive residual, 1,000, and you'd end up with a difference of 0. That makes no sense - if the points are off by a thousand, it's not a great line!

One thought could be to use `math.abs` to take the absolute value of each point. However, there's an easier way. How about squaring the numbers? That takes care of the sign, *and* as an added bonus, makes the numbers much larger, which further highlights the extend to which they differ from the line.

Credit to Khan for this explanation, building this up step-by-step.

## The Fun Part - Using scikit-learn

Now that we've put all that effort into learning the math behind it, let's sit back and let scikit-learn do it all for us!

We'll start out by using the [Diabetes dataset](https://scikit-learn.org/stable/datasets/toy_dataset.html#diabetes-dataset), one of several "Toy Datasets" built into scikit-learn. This way, we don't have to worry about doing any preprocessing, which is the sometimes tedious process of getting data into the right format for our algorithm to ingest. Instead, we just call the handy-dandy `load_diabetes` method and wham! We've got X and Y samples loaded up into variables.

Here's the code to load all of the samples:

```python
from sklearn.datasets import load_diabetes
X, y = load_diabetes(return_X_y=True)
```

The dataset itself consists of data for 442 diabetes patients. There are 10 predictive variable columns and the 11th column indicates the extent to which the disease progressed in the last year. Our goal is to use these predictive variables to form a model, which in this case takes the form of a regression line, so that we can predict someone's disease progression based on one or more of these variables.

If we want to use this to do real lienar regression, things get a bit more complicated. We'll have to split the data into training data and test data. This way, we'll have a way to check how well the model we come up with actually reflects the remaining real-world data that we have to test with.

I would recommend trying out [the example provided by scikit-learn](https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html), which does just this and allows you to form a prediction based on one of the features in this dataset.

**References**

[1] <https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/v/introduction-to-residuals-and-least-squares-regression>

[2] <https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/v/introduction-to-residuals-and-least-squares-regression>

[3] <https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/regression-library/a/introduction-to-residuals>

[4] <http://www.askanalytics.in/2015/09/difference-between-error-and-residual.html>

[5] <https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/scatterplots-and-correlation/v/correlation-coefficient-intuition-examples>

[6] <https://www.mathsisfun.com/data/standard-deviation.html>

[7] <https://www.statisticshowto.com/probability-and-statistics/z-score/>

[8] <https://statsandr.com/blog/what-is-the-difference-between-population-and-sample/>

[9] <https://scikit-learn.org/stable/datasets/toy_dataset.html#diabetes-dataset>

[10] <http://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html>