---
layout: post
title: The One with Using Colors in Scientific Plots
date: 2024-04-19 09:01:00
description: how to use color 
tags: figures
categories: research
featured: false
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

```python
# Obtain the RGB and HSV value of a color palette
palette = seaborn.color_palette('colorblind', 6)
rgb_array, hsv_array = [], []
for color in palette:
    rgb_value = mpl.colors.to_rbg(color)
    hsv_value = mpl.colors.rgb_to_hsv(rgb_value)
    rgb_array.append(rgb_value)
    hsv_array.append(hsv_value)

rgb_array = np.array(rgb_array) # red, green, blue
hsv_array = np.array(hsv_array) # hue, saturation, lightness

# Plot the color wheel with hue and saturation
fig = plt.figure()
ax = fig.add_subplot(projection='polar')
ax.scatter(x = 2 * np.pi * hsv_array[:, 0], 
           y = hsv_array[:, 1],
           color = [color for color in palette])
ax.set_yticks([])
```

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/matplotlib-color/palette.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/matplotlib-color/polar-plot.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Pick colors quick and dirty

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

```python
tips = sns.load_dataset("tips")

# Use single color
## keyword color is passed down to matplotlib interface
sns.scatterplot(
    data=tips, x="total_bill", y="tip", color="tab:orange"
    ) 

# Use multiple colors
sns.scatterplot(
    data=tips, x="total_bill", y="tip", hue="sex", 
    palette={"Female": "tab:green", "Male": "tab:blue"}
    )
```


### Pick colors using color palette
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
sns.scatterplot(
    data=tips, x="total_bill", y="tip", hue="sex", 
    palette='colorblind'
    )

# Plotting in seaborn object interface
(
    so.Plot(tips, x="total_bill", y="tip", color="sex")
    .add(so.Dots())
    .scale(color='colorblind')
)
```


### Pick color from external website
Pick color from adobe [website](https://color.adobe.com/create/color-wheel/)

seaborn.color_palette(['orange', 'royalblue', 'green'], 3)

**Resources:**

[seaborn guide to chose color palette](https://seaborn.pydata.org/tutorial/color_palettes.html)

[picking color tutorial](https://www.storytellingwithdata.com/blog/2020/5/6/picking-the-right-colors)


[matplotlib using color](https://matplotlib.org/stable/gallery/color/named_colors.html)