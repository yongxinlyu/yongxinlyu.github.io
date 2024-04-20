---
layout: post
title: The One with Using Colors in Scientific Plots
date: 2024-04-19 09:01:00
description: how to use color 
tags: formatting images
categories: sample-posts
featured: true
---

Matplotlib Base colors
![image1](/assets/img/matplotlib-color/1.png)

Matplotlib Tableau Palette
![image2](/assets/img/matplotlib-color/2.png)

Matplotlib CSS Colors
![image3](/assets/img/matplotlib-color/3.png)



General principles for using color:

We usually program colors in a computer by specifying their `RGB values`, i.e., intensity of the red, green and blue.

But when considering how these colors appear to human eyes, it’s better to think in terms of the three components of color: `hue`, `saturation`, and `lightness`.

Explain the three components using color wheel in ppt.
hue: rainbow
saturation: grey - bold color (start with 100%)
lightness: black - white (start with 50%)

for categorical data, use qualitative color palette, vary the hue only. (maybe also use different markers and labels?)
for quantitative data, use sequantial color palette, very saturation and/or lightness. (color blind people can sense lightness in color)


Using prepared color palette in matplotlib





Resources: 

[seaborn guide to chose color palette](https://seaborn.pydata.org/tutorial/color_palettes.html)

[picking color tutorial](https://www.storytellingwithdata.com/blog/2020/5/6/picking-the-right-colors)


[matplotlib using color](https://matplotlib.org/stable/gallery/color/named_colors.html)