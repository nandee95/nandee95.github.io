---
layout: article
title: "Open world game in C++"
date: 2017-09-01 12:00:00 +0200
categories: projects
tags: game
comments: true
thumbnail: ZombieGame.jpg
description: This is my first approach to a serious project in C++. The idea is that you can run around in a computer-generated world, kill monsters, meet other players and build a base to protect your belongings. The presented game was built on the object-oriented model, runs multiple threads to perform different tasks, uses shaders to improve the visual experience and has an isometric graphics(2.5D). I was using CMake to ensure easy port to Linux based systems on completion.
---
This is my first approach to a serious project in C++. The idea is that you can run around in a computer-generated world, kill monsters, meet other players and build a base to protect your belongings. The presented game was built on the object-oriented model, runs multiple threads to perform different tasks, uses shaders to improve the visual experience and has an isometric graphics(2.5D). I was using CMake to ensure easy port to Linux based systems on completion.

The game is using a <u>client-server model</u>.  The <u>game world</u> was generated using 2D noises. There were two kind of chunks: grassy and woody. The wind was also procedurally generated. The game world is completely my work. It is animated using geometry shaders. The game featured a fully functional chat system. It also had a basic inventory system.

Since this was my first big project I wasn't expecting too much. I was quickly facing issues that would require whole rework to be fixed. The performance was horrible because of the high number of drawcalls. This could be solved by z-ordering or instancing but none of those were supported by the graphics library I was using. I made a version where I put every piece of grass into a single drawcall but without the proper ordering it just didn't feel the same. 

:hidden|:hidden
--|--
Date: | 2017 Summer
Language: | C++
Libraries: | SFML, Spine 2D, SQLiteCpp, libnoise
Softwares: | Krita, Spine 2D
Source: | [GitHub](https://github.com/nandee95/ZombieGame)