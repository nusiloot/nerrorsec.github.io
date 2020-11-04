---
layout: post
title: "Why I Hate Bug Bounty?"
categories:
  - Blog
tags:
  - bugbounty
last_modified_at: 2020-11-04
---

Hi! I am Niraj Khatiwada a.k.a nerrorsec. I had been actively participating in bug bounty programs since October, 2018 until I could not get over burnout in October 2019. During this time span I got to experience a lot, met some new people and learned new things. From knowing nothing about hacking, wandering around the internet, to being able to hack for good, it is all a fun journey for me.

Actually, I don't hate bug bounty completely. Like many other bug bounty hunters, it has impacted my life in a couple different ways as well, one of the notable being, me landing a job as a Penetration Tester.

Both bug bounty hunters and the companies benefit from bug bounty programs. Still at times I get demotivated from bug bounties and I try to distance myself from it for a long time. And I am sure a lot of you reading this have experienced something similar at some point. Below are some of my experiences that demotivates me from bug bounty.


1. Start a bug bounty program (coz everybody's doin')

A fine morning I found an exposed .git directory on a public bug bounty program. According to stackoverflow , it is a folder that contains all the information necessary for your project in version control and all the information about commits, remote repository address, etc. With this, I could download and extract the source code of the project in the .git directory including the previous versions as it also contains a log that stores the commit history so that we can roll back to history. Thanks to ![GitTools](https://github.com/internetwache/GitTools), for automating the process.

I had just got started with the program so it was going to be my first submission. I went to their bug bounty page, picked their email address, composed the report, hit 'Send' and..

![address not found](https://github.com/nerrorsec/nerrorsec.github.io/blob/master/assets/images/posts/why-i-hate-bug-bounty/address-not-found.png)

2. Where's my bounty?

Another day, another target. This target with a public bug bounty program would send a 6 digit code for password reset however it was lacking rate limitation meaning we could take over any account by brute forcing the 6 digit code.

Similar Writeup: https://www.freecodecamp.org/news/responsible-disclosure-how-i-could-have-hacked-all-facebook-accounts-f47c0252ae4d/

I reported the bug but received no response. Later I found out that they silently fixed it.

![gif](https://media.giphy.com/media/xTiTnee66Td0PWHPQQ/giphy.gif)

3. Submit it here

This was a multi billion dollar company (I am sure you have heard its name). While I was not expecting to find much, I found a cookie based XSS which chained with CRLF injection was impactful. The only way I could submit the vulnerability report was the submission form they had on their website. I finished writing the report, hit 'Submit' and it didn't work. Guess what was going here?

![form action](https://github.com/nerrorsec/nerrorsec.github.io/blob/master/assets/images/posts/why-i-hate-bug-bounty/form-action.png)

The vulnerability has possibly been fixed now.

4. Lemme check

Now with all the above incidents I wanted to check how this company handled their bug bounty program so I sent them a simple
bug. They responded after some days and it went all good. So, in the span of next 3 days, I reported them other bugs
including Stored and DOM XSS, Information Disclosure and functionality bypasses. I don't remember the bugs at the moment but one of them was,
the intended input was an educational institute domain email, something like: someone@domain.edu and I could
bypass it by submitting an email address as: someone@x.edu.domain.com (RegEx ¯\\_(ツ)_/¯)

But they never responded to those reports.

![](https://media.giphy.com/media/3ofT5ECt8BGlq2GF6o/giphy.gif)

Like me, don't get disappointed though. There’re absolutely incredible public bug bounty programs that reward your efforts rightly. But, if you are just getting started with bug bounties keep in mind that these things can happen. Burnout is an important thing to consider too. It helps you see things differently.

I didn't see it coming in the past so I completely stopped bug bounty hunting.
Hopefully, I will be back soon so that I can do more writeups, haha. If you’ve similar experiences do share it in the comment below.
