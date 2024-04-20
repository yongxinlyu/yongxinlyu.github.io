---
layout: post
title: The One with Using Colors in Scientific Plots
date: 2024-04-19 09:01:00
description: how to use color 
tags: figures
categories: research
featured: true
---




### General principles for using color:

We usually program colors in a computer by specifying their `RGB values`, i.e., intensity of the red, green and blue.

But when considering how these colors appear to human eyes, it’s better to think in terms of the three components of color: `hue`, `saturation`, and `lightness`.

Explain the three components using color wheel in ppt.
hue: rainbow
saturation: grey - bold color (start with 100%)
lightness: black - white (start with 50%)

for categorical data, use qualitative color palette, vary the hue only. (maybe also use different markers and labels?)
for quantitative data, use sequantial color palette, very saturation and/or lightness. (color blind people can sense lightness in color)


### Using prepared color palette in matplotlib

#### 1. picking single colors quick and dirty

- Matplotlib Tableau Palette (should be enough for previewing plot)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/matplotlib-color/2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simple, elegant caption looks good between image rows, after each row, or doesn't have to be there at all.
</div>

- Matplotlib CSS Colors (not necessary)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/matplotlib-color/3.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simple, elegant caption looks good between image rows, after each row, or doesn't have to be there at all.
</div>

#### 2. Picking color using color palette
- Matplotlib qualitative color palette

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/matplotlib-color/matplotlib-qualitative-color-palette.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simple, elegant caption looks good between image rows, after each row, or doesn't have to be there at all.
</div>

```python
# choosing/customizing color palette
sns.color_palette('colorblind', 6)
sns.color_palette(['orange', 'royalblue', 'green'], 3)
```
#### 3. Picking color from external website



Resources: 

[seaborn guide to chose color palette](https://seaborn.pydata.org/tutorial/color_palettes.html)

[picking color tutorial](https://www.storytellingwithdata.com/blog/2020/5/6/picking-the-right-colors)


[matplotlib using color](https://matplotlib.org/stable/gallery/color/named_colors.html)