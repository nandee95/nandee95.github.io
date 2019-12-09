---
layout: article
title: "Pneumatic controller using Arduino"
date: 2018-06-01 12:00:00 +0200
categories: projects
tags: pneumatics arduino
comments: true
---
This was a small project I did for a friend. He needed an automated way to feed fishes in a lake. The circuit keeps track of the time even after a power outage using a Real-Time Clock. The LCD is used to configure the time points when to start the feeding sequence, set the time, and set up the timings between steps. The relay module receives the control signals from the Arduino then translates It into 24V signals for the valves which control the pistons.

:hidden|:hidden
---|---
Date: |2018 May-June
Language: |C++ (Arduino)
Board: | Arduino Nano
Libraries: |LiquidCrystal, DS3231, EEPROM
Source: |[GitHub Gist](https://gist.github.com/nandee95/91606f410fb104a0a48c46b8fb392d5c)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A controller for pneumatics/hydraulics made using Arduino. It&#39;s purpose to run a sequence on schedule. The program runs on an Arduino Nano. The settings are stored in the EEPROM, and an RTC keeps track of the time when there is no power.<a href="https://twitter.com/hashtag/Arduino?src=hash&amp;ref_src=twsrc%5Etfw">#Arduino</a> <a href="https://twitter.com/hashtag/Hydraulics?src=hash&amp;ref_src=twsrc%5Etfw">#Hydraulics</a> <a href="https://t.co/Id77Gqq6oF">pic.twitter.com/Id77Gqq6oF</a></p>&mdash; Nándor Szalma (@nandee95) <a href="https://twitter.com/nandee95/status/1177577884027949057?ref_src=twsrc%5Etfw">September 27, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>