---
layout: page
title: AI for 2D perovskites
description: Machine learning meets materials discovery.
img: assets/img/project_covers/dj-perovskite.gif
importance: 1
category: research
#related_publications: true
---

We built an AI-guided design workflow that discovers new organic spacers for 2D Dion–Jacobson perovskites by linking molecular fingerprints → frontier energies → band alignment.

DJ perovskites have huge potential, but nearly all known ones share the same band alignment type (Ia).
To unlock new optical and electronic behaviors, we need spacers that give rare alignments like Ib, IIa, IIb.

Designing Dion–Jacobson (DJ) 2D perovskites is like searching for rare treasures in an impossibly large landscape.  
Although these materials have remarkable potential, almost all known DJ perovskites share the same electronic band alignment (type Ia). To unlock new optical and electronic behaviours, we need *new organic spacers*—ones that create uncommon alignments such as Ib, IIa, or IIb.

The problem?  
The chemical space is enormous. There are an estimated **10^60^ organic molecules** possible in the universe. Finding the right spacer by intuition alone is nearly impossible.

My PhD project tackles this challenge by building an **AI-guided inverse design workflow** that can imagine, evaluate, and propose new organic spacers.

The idea is simple:  
teach a machine how molecular structure → frontier orbital energies → band alignment are connected, and let it search the chemical space for us.

To do this, I developed a **12-digit invertible molecular fingerprint** for over 4 million organic moleucles, built a high-throughput DFT dataset of thousands of molecules and perovskite structures, and trained interpretable ML models to predict HOMO/LUMO energies with high accuracy.  
The result is a closed-loop system that generates hypothetical spacers, checks their synthetic feasibility, predicts their properties, and filters out the most promising candidates.

This workflow transforms what used to be trial-and-error chemistry into a **guided, data-driven discovery process**.

<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_covers/dj-perovskite.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_DJ_perovskite/word_cloud.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_DJ_perovskite/poster_Yongxin Lyu_2025.pdf" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Resources

- Blog post about my AI-for-Science journey: [link](https://yongxinlyu.github.io/blog/2025/my-AI4Science-journey/)  
- My PhD thesis: [link](https://github.com/yongxinlyu/my-thesis/blob/main/my_thesis.pdf)  
- Publication (concise project version): [link](https://doi.org/10.48550/arXiv.2509.25728)