---
layout: post
title: The One with Figure Formatting
date: 2024-04-15 09:01:00
description: Figure formatting in research journals
tags: figures
categories: research

---
How to use color in scientific illustration?

**Figure for Paper**
- single column 89 mm (3.5 inch)
- double column 183mm (7.2 inch)
- full depth 247mm (9.7 inch)
- 1.5 column 120-136mm (4.7-5.35 inch)
- preferred format: .tiff (300-600 dpi) for raster image; .eps or .pdf for vector image
- linewidth: 0.5 pt (0.25-1pt)
- font size: 5–7 pt 
- Height of the smallest capital letters and numerals >= 2 mm; the diameter of each data point >= 1 mm

[Source from nature.com](https://www.nature.com/nature/for-authors/final-submission)
[Source from APS](https://journals.aps.org/prl/authors#:~:text=Figures%20should%20have%20a%20width,all%20figures%20electronically%20for%20production.)

**PPT**
- page size: 13.333 x 7.5 in (wide screen)
- producing figures: 96 dpi (default in matplotlib)
- font size on slide: 18, 20, 24, 28, 36 pt. (reference can be 14 pt)
- Every slide should have a heading (a simple sentence)

```python

# plot full size image
import matplotlib 
matplotlib.rc('xtick', labelsize=16) 
matplotlib.rc('ytick', labelsize=16) 

fig = plt.figure(figsize=(13.33,7.5), dpi=96)
plt.plot(x, y, linewidth=2)
plt.xlabel('X label (s)', fontsize=18)
plt.ylabel('Y label (V)', fontsize=18)

# two figures on a slide side by side
fig = plt.figure(figsize=(5,3), dpi=96)
```