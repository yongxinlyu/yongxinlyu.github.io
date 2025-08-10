---
layout: post
title: The one with figure formatting
date: 2024-04-15 09:01:00
description: figure formatting in research journals
tags: figures
categories: research

---
How to use color in scientific illustration?

**Figure for Paper**
- **single column 88 mm (3.5 inch)**
- **double column 180mm (7.1 inch)**
- full depth 247mm (9.7 inch)
- 1.5 column 120-136mm (4.7-5.35 inch)
- preferred format: .tiff (300-600 dpi) for raster image; .eps or .pdf for vector image
- linewidth: 0.5 pt (0.25-1pt)
- font: sans-serif, preferably **Helvetic** or Arial, **5–7 pt**. 
- Height of the smallest capital letters and numerals >= 2 mm; the diameter of each data point >= 1 mm
- form in the main text: Fig. 1, Fig. 2.


[Source from nature materials](https://www.nature.com/documents/NRJs-guide-to-preparing-final-artwork.pdf)

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

**Nature Materials - Article**

An Article is a substantial novel research study, with a complex story often involving several techniques or approaches. 

Format

Main text – up to 3,000 words, excluding abstract, Methods, references and figure legends.

Abstract – up to 150 words, unreferenced. 

Display items – up to 6 items (figures and/or tables). 

Article should be divided as follows: 
- Introduction (without heading) 
- Results
- Discussion
- Online Methods. ​

Results and Methods should be divided by topical subheadings; the Discussion does not contain subheadings.

References – up to 50.

Articles include received/accepted dates. 

Articles may be accompanied by supplementary information. 

Articles are peer reviewed.