---
title: "4 Fun JavaScript Examples for Beginners"
date: 2020-11-02
authors:
  - steve
tags:
  - javascript
slug: beginner-javascript-examples
---

![Coffee beans](coffee.jpg)

Welcome to our JavaScript lesson! Today, we'll be trying out some fun examples to see a few of the cool things you can do with JavaScript.

Any of these examples are editable on CodePen. Just click "Edit on Codepen" in the top right corner and you can make as many changes as you want. Don't worry - the changes you make will be just for you! You don't have to worry about making mistakes, because you can always come back here to start fresh.

*Photo by [Igor Haritanovich](https://www.pexels.com/photo/coffee-beans-1695052/)*

<!--truncate-->

## Genie Game

[Link to Genie Game on CodePen](https://codepen.io/stephengrice/pen/KKMewxN)

Click the button below to start the Genie Game!

If you look at the code, you'll notice that we're using `if`, `else`, and `for` statements to make this work. These are called **control flow statements**, and without them, programming would be a lot harder! They let us control which code is executed, allowing us to change what happens based on the answers given by the user (that's you!).

To show messages to the user, we use the `alert` function. It's easy to use - all you have to do is follow this format, and you'll see a popup box with your message: 

```js
alert("Your message here");
```

Another function that we used is the `confirm` function. It displays a box with a message, just like the `alert` function, but it has a special feature. Instead of a single "OK" button, the `confirm` box has both an "OK" and a "Cancel" button. If the user presses the "OK" button, a value of `true` is returned. On the other hand, if you hit "Cancel," a value of `false` is returned. We can use this to ask yes or no questions and change which messages we display based on the responses.

```js
var choice = prompt("Do you like cheese?");
if (choice == true) {
    alert("Me too!");
} else {
    alert("I understand.");
}
```

Finally, the last major function that we use is the `prompt` function. This is just like the `alert` and `confirm` functions, but it gives you a text box to type in a message to the program. You can use it like this:

```js
var favorite_pet = prompt("What is your favorite pet?");
alert(favorite_pet + " is a great choice!");
```

With all of that out of the way, let's see it in action! Click the button below to play the game. Then, try changing the code and make it do something new!

As a special challenge, create a new CodePen and try to make your own story from scratch. Be sure to use this one as a reference if you need it.

### Challenges

1. Let's try out the snippets. Right click on this post and press "Inspect Element." Then, look for the Console. Copy each of the snippets from the beginning of the post and paste them into the Console. For bonus points, change the messages to something that you made up yourself!

2. Continue the story after the three wishes are granted. You can include any number of `alert`, `confirm`, or `prompt` messages, and `if`, `else`, and `for` statements, if you're feeling adventurous! Hint: Start by adding a new line of code after line #32.

3. Use the template below to create your own story from scratch! You can start by just replacing the text that is displayed with your own story. Then, try building your own logic.

## Random Choice

[Link to Random Choice on CodePen](https://codepen.io/stephengrice/pen/VwjdYdq)

This code picks a random color when you press the button, and shows you the answer.

## Tip Calculator

[Link to Tip Calculator on CodePen](https://codepen.io/stephengrice/pen/xxVpOgO)

If you ever need to pay the bill at a restaurant, you may need to figure out how much to tip. This calculator takes the bill amount you provide and adds 20% so that you know how much to pay!

## Canvas Example

[Link to Canvas Example on CodePen](https://codepen.io/stephengrice/pen/bGpLRJO)

The HTML Canvas is a special element on the page that lets you draw custom shapes, lines, and images wherever and however you want. It's often used to create games right in your browser. It's a bit of an advanced topic, so we won't delve into it for this post. Try messing around with the code to get a feel for it.

## Conclusion

Thanks for following along with our JavaScript tutorial! I hope you got a lot out of it.