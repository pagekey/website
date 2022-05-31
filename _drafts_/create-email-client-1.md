---
draft: true
---

Create Your Own Open-Source Email Client: Introduction (1 of 3)

How many times have you been annoyed by a hangup in your email client, or simply couldn't figure out how to do something? Steamed, you cursed the developers of the web app or clientside program. Why were they so thick? Can't they see how I want to use their program? A drag here, a drop here. It would be so much easier my way.

Well, my friend, have no fear. Today is the day that you can put your boots on, roll up your sleeves, and get your hands dirty. The responsibility now rests on your shoulders; we're going to roll our own *free and open source* email client.

# Background

If you've ever used email, you've used an email client. There are a few different types.

1. Web App

This runs exclusively in your browser. Think of Gmail.

2. Client-side application

This runs as a window on your local computer. Thnik of Outlook.

Regardless of where the application is running, there are really only two things going on behidn the scenes: Sending and receiving. There are two network protocols that handle exactly this. SMTP, or ______, is used for sending amil. On the other hand, we also need something to checkc the mail located on the mail serer. For this, we hvae two main hoices - POP3 and IMAP. The difference between the two is essentially age and complexity. _____

This email client is going to be great!

# Parts of this application

There are a few logical parts of this aplication, and we'll need to tackle them one at a time to be successful. The first is the interface.

1. GUI

This is how the user interacts with your application. Anything displayed onscreen is part of the Graphical User Interrface. It's also possible to create a command-line interface (CLI), if you're into that.

For our example, it may be best to use Java. [alternatives: Python/pyqt, C++/qt, JS/electron] This way, we use something many programming students are familiar with.

2. Send and receive.

There will need to be a backend of this application that does the heavy lifting. This will require us to somehow connect to an SNMP server to send mail, and an IMAP or POP3 server to receive mail and explore what's on the mail server. How we go about this depends how deep we want to go - I'm sure it's possible to look at the standards for each of these protocols and write socket-level code to communicate with those servers, but wouldn't that be reinventing the wheel? While it may be a good learning exercise, it won't help us get where we want in a reasonable amount of time.

So, we need to use a library or API that's built for these protocols. Thankfully, for Java, we [Simple Java Mail](https://www.simplejavamail.org/). This will abstract most or all of the dirty details for those mail protocols. We'll just need to provide proper credentials, and tell it what to do - like driving a car. You have to love object-oriented programming! It can make the ugliest problems into something so much simpler.

# Moving Forward

Now that we've established the groundwork for our application, we can dive into designing and implementing each part!

The next part of this tutorial can be found [here], and if you want to take a peek at the finished product, the [full code] is hosted on Github.
