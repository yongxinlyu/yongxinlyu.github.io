---
layout: post
title: UNSW Ranks Top 20 in the World (Again!) — But What’s Really Behind the QS Rankings?
date: 2025-06-24 00:01:00
description: But What’s Really Behind the QS Rankings?
categories: teaching
tags: teaching
featured: false
---

The latest QS World University Rankings just dropped, and guess what? My university — UNSW Sydney — has climbed back into the global top 20! Even more exciting, we’re now officially the second-highest ranked uni in Australia, just behind Melbourne and (yes!) ahead of the University of Sydney this year.

Naturally, this made the rounds on campus pretty quickly. But as someone who’s currently teaching a data science course — and always on the lookout for interesting datasets — I couldn’t resist digging into the actual numbers behind the hype.

Turns out, QS doesn’t just post pretty charts; they also make the raw data available. And if you give a data nerd a CSV… well, they’re going to analyze it.

### **How Do QS Rankings Actually Work?**

You might assume these rankings are just about research powerhouses or who’s publishing the most. But QS uses a mix of indicators that go beyond just academic output. Here’s the breakdown:

<div class="row mt-3 justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog-figure/qs-ranking-0.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A breakdown of QS ranking from the official [website](https://support.qs.com/hc/en-gb/articles/4405955370898-QS-World-University-Rankings).
</div>

So it’s not just about research. It’s also about who knows you, who hires your graduates, and how globally connected you are.

### **Data Cleaning: Focusing on the Top 500**

One thing I quickly noticed: universities lower down in the list often have patchy data. Missing values galore. So to keep things tidy, I focused my analysis on the top 500 universities — where the dataset is much more complete.

From there, I looked at how different indicators relate to each other — and a few things really stood out:
- The overall score is most strongly correlated with Academic Reputation, followed by Employer Reputation — which actually surprised me a bit. I’d expected citations or faculty numbers to rank higher.
- Not shockingly, Academic and Employer Reputation are tightly linked (correlation coefficient = 0.79). Prestige matters — and it clearly carries over to job prospects.
- International Student Ratio and International Faculty Ratio show a near-perfect correlation (0.98!). Basically, if a university is attracting lots of international students, chances are their faculty is also globally diverse.

<div class="row mt-3 justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog-figure/qs-ranking-1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pearson's correlation matrix of the QS ranking variables.
</div>

### **Regional Trends: Oceania Punches Above Its Weight**

<div class="row mt-3 justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog-figure/qs-ranking-3.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Regional distribution of International students ratio.
</div>

Here’s where things got fun. I started breaking down scores by region, and a few trends jumped out:
- Asian universities generally have lower international student ratios — which aligns with my own experience as a Chinese student.
- Oceania (mostly Australia and New Zealand) stands out with massively high international student ratios — over 90% on average! That’s higher than both Europe and the Americas.

A fun little outlier: the University of Johannesburg in South Africa has a whopping 60.1% international students — far higher than any other university on the continent.

This focus on international engagement might help explain why Australian universities tend to do so well in global rankings. I mean… UNSW beat Yale this year. I still can’t quite believe that.

But it’s not all good news.

<div class="row mt-3 justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog-figure/qs-ranking-2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Regional distribution of Faculty/Student Ratio.
</div>

One metric where Oceania really lags? Faculty/Student Ratio — a rough proxy for class size and teaching support. Along with African universities, Oceania scores the lowest in this category.

(That single outlier with excellent faculty/student support in our region? Massey University, New Zealand.)

This might reflect funding models, growing enrolments, or how universities allocate teaching staff — but it’s a reminder that no university system is perfect.

### **So What Really Drives QS Rankings?**

From this little data dive, it’s pretty clear that Academic Reputation is still the heavyweight in the QS formula — but global engagement plays a huge supporting role.

And that favors universities like UNSW, which have built strong international strategies over the past few decades. On the flip side, even a well-known institution might struggle if class sizes balloon or their teaching support drops.

### **Final Thoughts**

As a proud UNSW alum and a slightly obsessive data nerd, I’ve always been curious about what’s behind the numbers we love to celebrate. We talk a lot about rankings, but rarely about what they mean.

Looking at the data this way gives me a clearer sense of what makes UNSW strong — and where we could still improve.

So next time someone throws out a ranking in conversation, maybe ask:

“Cool — but what’s actually behind that number?”