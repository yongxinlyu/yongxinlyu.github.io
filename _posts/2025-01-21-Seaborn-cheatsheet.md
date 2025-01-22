---
layout: post
title: Seaborn Object-Oriented Interface Cheatsheet
date: 2025-01-21 09:01:00
description: a comprehensive guide
categories: research figure
featured: false
---

Seaborn has long been a favorite among Python users for creating stunning visualizations. With the release of Seaborn 0.12.0 in September 2022, the library introduced a new object-oriented interface that brings unparalleled flexibility and customization to plotting. While the [official documentation](https://seaborn.pydata.org/tutorial/objects_interface.html) is thorough, this blog serves as a practical cheatsheet, highlighting my experience using the interface to craft publication-quality figures.

If you’re new to Seaborn or transitioning from its classic API, this guide will help you confidently create beautiful, professional-grade plots.

### How does it work?

At the core of Seaborn’s object-oriented interface is the so.Plot object. As Seaborn’s creator described, the Plot function forms the foundation of the interface, supported by four key components:

- Mark: Defines how data points are represented (e.g., dots, bars).

- Stat: Applies statistical transformations to the data.

- Scale: Adjusts visual aspects like color and size.

- Move: Modifies positional elements, such as jittering points.


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog-figure/seaborn-cheatsheet-1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    caption
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog-figure/seaborn-cheatsheet-2.svg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    caption
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog-figure/seaborn-cheatsheet-3.svg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    caption
</div>
