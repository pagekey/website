---
title: "5 Lessons from Rewriting My App FOUR TIMES | boom devlog 9"
date: "2023-05-27"
authors: [steve]
youtube: "a72nZ0n_wd0"
path: /blog/boom/devlog-9/
---

<YouTubePlayer youtubeLink={frontmatter.youtube} />

Four times, from scratch.

That's how many times I've re-written my app, called Boom Languages. Every time I did, I learned a ton, and in this post, I'm going to tell you the 5 top lessons I've learned along the way.

Be sure to [sign up](https://boom.pagekey.io/signup) to get notified when the latest version of Boom is available!

## 1. Just start.

Any article focused on innovation or entrepreneurship will tell you this - start today, because if you put it off until tomorrow, then tomorrow will never come. I've read this advice many times, and when I finally applied it to my language app idea, it rang true.

You can spend your whole life getting ready, but the truth is, many of the lessons you need can only be learned as you go. You have to jump in, even if you're woefully unprepared and lacking key skills. You'll learn them as you go.

For me, this entailed creating a rough plan for my app, opening up a code editor, and typing those fateful keystrokes: `git init`. If I hadn't finally made that initial commit on November 28, 2020, the hundreds that followed may never have come to pass.

I've built four versions of this app so far:

- Version 1 was just to show that I could get an app on the iOS and Android app stores. There was nothing special about it - it had a quiz feature, but so does every other major language learning app.
- Version 2 added a feature that would become key - the Article Translator. It's a tool that helps you break down a big, intimidating, dense body of text written in a foreign language into manageable pieces - sentences - so that you can work your way through it without getting overwhelmed.
- Version 3 was the exact same app, but re-written from scratch (using React Native instead of Flutter).
- And now I'm working on Version 4, which is **yet another** complete rewrite from scratch.

But if I had never just gone for it, I'd still be loafing around thinking about the next big idea.

Curious to try the new version? Sign up [**here**](https://boom.pagekey.io/signup) to get notified when it's available. There's even a chance you'll be selected as an exclusive private tester!

## 2. It's not just about the idea.

Another classic piece of entrepreneurial advice comes from Derek Sivers, who introduced the thought that [ideas are a multiplier of execution](https://sive.rs/multiply). Basically, it means that the way you **execute** an idea has far more leverage on whether you're successful than the idea itself. That's not to mention the fact that practicing your skills at executing ideas makes you better at it, so that when another "million-dollar idea" comes floating into your head, you'll be ready and able to turn it into reality.

## 3. Don't just ship it.

I was deeply inspired by Seth Godin's book Linchpin. One of my key takeaways from that book was the concept of "shipping it" - he makes the point that if you don't "ship" your ideas and make them available to the world, then all the work you put into them is essentially wasted. The ideas need to interact with the world to grow and become something worthwhile - and they can't do that until you actually hit the publish button. At first, I embraced this fully, but with time, I've realized the truth is a bit more nuanced than it seemed.

Growing up, I was a bit of a perfectionist - taking things slow and steady when writing an essay for school or working on homework, and checking everything over to make sure it was right before turning it in. Reading Linchpin made me change my habits - from careful checks to just sending it.

At first, it made me uncomfortable, but eventually, I was shipping things with wild abandon, left and right, without giving it too much thought. Hit a rough spot in a video? Can't find the right wording? No problem, just ship it and move onto the next one. Stuck on a programming problem? Go for the easy, messy solution and move onto the next problem.

I took to setting goals that were focused on completion rather than effort or quality. Some examples included working on Boom for a certain amount of time each day, or producing a YouTube video every week about a technical topic.

Taking it to the next extreme, in January 2023, I challenged myself to make a YouTube video every single day. I was able to keep it up for over a month, but by the end of it, I was completely burnt out, and confused as to why I was spending so much time making such low quality videos. I was cutting corners just to meet my daily "shipping" quota.

It was at this point that I vowed to return to an earlier time, before metrics, before "grindset" culture, before "shipping," before **quantity** - and I realized that I needed to focus on **quality**. When you're just getting started, it can be great to flail wildly, test the waters, and [blow up a few spaceships along the way](https://www.youtube.com/watch?v=-1wcilQ58hI&t=2942s). But this approach has its limits, and I've decided to swing the pendulum in the other direction, at least for me, for now.

## 4. Start with what's most important.

When an app has a server, it's a lot more complicated than if everything is happening locally. You have to worry about migrating your database, maintaining a schema, and keeping the API synced between the client and the server. Even more headaches abound when you're trying to deploy to mobile - you have to appease Apple (as we saw in [the last devlog](https://blog.pagekey.io/blog/boom/devlog-8/)).

And on top of it all, I was adding features that didn't matter - like user logins and leaderboards - before finding a set of core features that effectively taught foreign languages and were fun and easy to use. When I tried to implement features that actually mattered, I found myself buried by a mountain of technical debt, and decided to start over.

This time, however, I would concentrate on the features that mattered first, and eschew everything that wasn't directly related to them. If there was a corner that I could cut, I'd cut it to be able to build the core features faster and better. If it wasn't a core feature, I was going to ignore it.

This led to the somewhat radical approach of building the app as a simple website that uses the browser's built-in `localStorage` instead of relying on a server. With this lean approach, I was able to prototype all the important features from the main app (that took me months to build) in a single weekend.

The limitations to this are immense, but the speed with which I was able to iterate was priceless. Dozens of times, I cleared the `localStorage` on my browser and started fresh with a new schema. If I had to make these changes to a production app, I would have had to worry about migrating user data and a slew of other nit-picky concerns.

When I'm the only user and I start from scratch, I don't have to worry about screwing anything up - I can just do it.

This fast-and-loose approach seems to contradict my point about "quality over quantity," but I don't think it does. The key here is that I'm not publishing this unpolished prototype for everyone to use. Instead, I'm using it as a way to discover the features and app design that are most effective, while investing the smallest possible amount of time doing it. I'll probably discard this messy prototype code at some point, but for now, it's getting the job done.

## 5. Do a proper launch.

Iteration is great, but the average person trying to use an app will click away after 2 seconds if they're not engaged, and they'll never come back. And that's just if the design is ugly - if a button doesn't do what it's supposed to, or if an error box pops up and there's no obvious way to fix it, forget it - they're gone, and they won't be coming back.

In the past, I wanted to have the latest, bleeding edge version of my app available to the **whole world** - I was basically saying, "Look, everyone, I'm building something! It's not done, but try it out and see how not done it is!" I thought that it was a waste of time and effort to build a brand for a product that wasn't ready yet.

Building a list of people ready to use something that didn't exist yet seemed pretentious to me; I just wanted to show what was done so far and get feedback. No need to hide anything, right? From the perspective of an engineer, this is logical, but it's terrible marketing. The message that gets sent is that we have no problem putting something out there that doesn't work.

That's why I'm going to severely limit the number of people who have access to the latest version of Boom this time around. I may even take the old version off the app store. I'll still document the process and share what I learn, but until I have something that I'm confident is impressive and useful to language learners, I'm keeping it under wraps.

I always learn a ton from shoulder-surfing when family or friends try my app. That's why I'm going to allow that shoulder-surfing to happen when I can watch, and otherwise, I'll save peope the pain of trying to use something that spontaneously implodes without warning, usually right when things are getting good.

## Demo: Prototype of Version 4

If you want to check out a demonstration of the prototype I built for Boom v4, you can check out the video that accompanies this article. The demonstration starts at [7:16](https://www.youtube.com/watch?v=a72nZ0n_wd0&t=436s).

## What's Next

There are four simple elements to my plan as I move forward with this app:

1. **Build** something that I personally want to use every single day to learn languages. This will be focused on adding features that I find useful, and that I find myself doing anyway through other means. I want Boom to be an integrated solution, so you don't have to hop between Google Translate tabs, Anki review sessions, and random YouTube videos to make progress on your language journey.
2. **Involve others.** Get some people to use it, and make it so that **they** want to use it every day. This can happen in tandem with the previous step. I'll work with a select few to see how they respond to the app. This will help me uncover usability blindspots that arise from being the one who wrote all the code. When you can't just pop open "Inspect Element" to figure out what's going on, things certainly look different!
3. **Scale!** When the previous two steps are complete, I'll have a reasonably high-quality proof-of-concept of a working, useful learning system. Then it will be time to take that potentially useful product and get it into the hands of as many people as I can. I'm not skilled at sales or marketing, but I'm hoping that if I just get started, I can fail my way to success like I did while building this app. **Of course, this would be a lot easier if I had someone with business savvy to work with** - if you're interested, [send me an email](mailto:steve@pagekey.io)!
4. **Monetize.** Once enough people are using the app and the features are stable, we can look into ways to make money with this app and make it a sustainable business. I've done research into in-app purchases, subscription models, and licensing, but I have a lot more to learn. This is another place where I'll probably need help from some smart folks with good business acumen - and good character.

So, that's all for this Boom Languages brain dump. I hope you got something out of the lessons that I shared. If you want updates as I make progress, you can [**sign up for the mailing list**](https://boom.pagekey.io/signup) to get notified when new versions are available, and subscribe to the PageKey YouTube channel to stay in-the-know when we publish new videos. Thanks for reading!
