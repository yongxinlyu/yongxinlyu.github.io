---
layout: post
title: Data figure workflow I use
date: 2024-12-09 09:01:00
description: on preparing data figures 
categories: research
tags: figures
featured: false
---

In my last blog post, I shared some general tips for creating scientific figures that catch the eyes of high-impact journal editors. If you missed it, the takeaway was simple: avoid using PowerPoint for figures! Tools like Adobe Illustrator (if your university provides access) or the free and powerful Inkscape are much better options for creating vector-based, publication-ready visuals.

This time, I want to go deeper into the **workflow** of creating data figures—the bread and butter of STEM research. Along the way, I'll share the tools I use, the lessons I've learned, and some mistakes I wish I’d avoided.

---

## Step 1: Start with the Message

When you’re knee-deep in data, it’s tempting to start plotting right away, especially when libraries like Seaborn and Plotly make it so easy to create fancy visuals. But before you click “run,” **ask yourself what message you want your figure to convey.**

Why is this so important? Because every figure in your paper serves a purpose: it supports a specific argument, explains a key trend, or communicates a core finding. Plotting for the sake of plotting not only wastes time but can also muddy the clarity of your manuscript.

#### Some questions to guide your planning:
- What is the key message of the figure?
- Is the figure essential for the main paper or better suited for supplementary information?
- Will it highlight a trend, an anomaly, or a comparison?
- What type of plot best suits this data? (Scatterplot? Line plot? Bar chart? Something else?)

I’ve fallen into the trap of creating beautiful but unnecessary figures during my group meetings. They looked great on slides but never made it into the final paper. Lesson learned: simplicity wins. In fact, even editors at *Nature* often recommend the humble scatterplot as one of the most effective ways to communicate trends.

---

## Step 2: Choosing Your Plotting Tools

There are many plotting tools available, and I’ve tried most of them during my PhD. Here’s a breakdown of my journey, along with what I learned the hard way.

#### **Matplotlib**
This is Python’s default plotting library. It’s powerful but requires a lot of customization to look polished. I started with Matplotlib but quickly moved on because I wanted something more visually appealing out of the box.

#### **Seaborn**
Seaborn became my go-to for years. It offers beautiful default styles and handles complex visualizations with ease. Recently, I switched to its newer `seaborn.objects` interface, which is much more intuitive and efficient for many plot types. While it still lacks fine-tuning options for some needs, it’s excellent for most use cases.

#### **Plotly**
Ah, Plotly. This library is the king of interactive plots. Early in my PhD, I experimented with creating interactive HTML plots, which allowed me to explore data dynamically and share insights with collaborators. For example, I could hover over points to see exactly which sample each represented—an invaluable feature for early-stage data exploration.

But here’s the catch: **Plotly isn’t great for creating publication-ready figures.** Its formatting options for static images aren’t as precise as Seaborn’s, and I found myself constantly struggling to get them journal-ready.

#### **What I’d Do Differently**
If I could start over, I’d:
1. Use Plotly for early-stage data exploration to leverage its interactivity.
2. Transition to Seaborn for creating polished, static plots for publication.
3. Pre-format my data so switching between Plotly and Seaborn is seamless. (Both libraries have overlapping functionality, which can save time if planned well.)

---

## Step 3: Pre-Formatting and Exporting

Once you’ve created your plot in Python, it’s time to export it for further refinement. Here’s my process:

1. **Format Before Exporting**  
   Clean up the figure within Python as much as possible:
   - Adjust font sizes to match journal requirements.
   - Use color palettes that are accessible (consider colorblind-friendly options).
   - Remove unnecessary gridlines or ticks for a cleaner look.

2. **Export in SVG Format**  
   Always export your figures as scalable vector graphics (SVG). This format preserves quality and allows for easy editing in tools like Inkscape or Illustrator.

3. **Refine in Inkscape**  
   Inkscape is where I do final touch-ups:
   - Align elements precisely.
   - Add annotations or labels for clarity.
   - Ensure all fonts, line widths, and colors are consistent.

---

## Final Thoughts

Creating high-quality data figures is an art as much as it is a science. With the right tools and a clear workflow, you can make visuals that not only look great but also tell a compelling story. My advice? Start with the message, explore with Plotly, and publish with Seaborn. And always, always export in SVG for that final polish.

What tools and workflows do you use for figure creation? I’d love to hear your thoughts and tips in the comments below!