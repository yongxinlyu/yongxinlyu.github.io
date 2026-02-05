---
layout: post
title: Topic modelling learning journal (part 2)
date: 2026-02-03 00:00:00
description: explore the research space of ARC discovery projects 
categories: research
featured: false
---


In my previous post, [Topic modelling learning journal (part 1)](https://yongxinlyu.github.io/blog/2026/topic-modelling-I/), I shared how I approached learning topic modelling as a beginner. For me, the fastest way to learn is always through a concrete project,  so I chose **ARC Discovery Projects from the 2023–2026 funding rounds** as my first formal NLP task.

Like many researchers who have spent a large part of their academic life chasing funding, I believe that understanding **emerging trends**—and what kinds of topics attract funding—is extremely important.

The dataset consists of **1,961 project summaries across four years**, and the goal is to cluster them into topics based on their text descriptions.

This turned out to be more challenging than I initially expected: the summaries are relatively short, the language is highly domain-specific, and many concepts are expressed implicitly rather than explicitly.

All of these factors make it harder for classical topic models to identify clean, well-separated themes. Still, I decided to stick with this dataset and see how far I could push the approach.

I ended up with two findings that I found particularly interesting. In this second post of the topic modelling learning journal series, I focus on providing a high-level overview of the research space represented in this dataset. In the final post, I will dive deeper into the topics themselves and what they reveal.

---

### **Analysis pipeline overview**

There are many sophisticated NLP libraries available—such as gensim and nltk—and I did experiment with them. However, for this project, I found that using my own scripts combined with scikit-learn was both efficient and flexible enough.
 
The Jupyter notebook used for this analysis is available [here]().

I started with preprocessing the project summaries using a minimal setup:
- text normalisation (lowercasing, removing punctuation, stripping numbers)
- lemmatization (e.g. projects → project)
- stopword removal (generic stopwords such as and, the)

I then converted the text into numerical vectors representing word importance using:
- Bag-of-Words, which simply counts word occurrences
- TF-IDF, which adjusts word counts to reduce the influence of very common terms

Because I was interested in the structure of the project space at this stage, I first applied a dimensionality reduction technique to project the  high-dimensional TF-IDF representations onto a 2D surface based on shared vocabulary patterns.

---

### **Visualizing the project content space**

The interactive figure below shows the projection of all 1,961 projects onto a 2D surface, which I refer to as the project content space. Each point represents a project and is colour-coded by its Field of Research (FOR) code.

You can navigate this space by toggling individual FOR codes on or off, and by hovering over points to view project descriptions.

{% raw %}
<iframe src="/assets/img/blog_figure/topic-modeling-pca-FOR.html" width="100%" height="500" frameborder="0"></iframe>
{% endraw %}

When I first saw this figure, it was genuinely exciting. Projects sharing the same FOR code tend to cluster closely together, which suggests that the model is successfully capturing meaningful similarities based purely on text. In other words, it “understands” that projects discussing similar topics use similar language.

This result shouldn’t be surprising—but it is still fascinating to see how much structure can be recovered using nothing more than free, open-source tools running on a personal computer.

---

### **Broad structure of the research space**

The projection forms a rough triangular shape, suggesting the presence of three broad extremes in the research landscape.

The right corner is dominated by biology-related fields, top-left corner by chemical sciences, and the bottom-left corner by social sciences. This makes intuitive sense: these disciplines use very different vocabularies and conceptual frameworks.

What *surprised* me slightly is how elongated the triangle is toward the biology corner. This suggests that biology-related research may be more linguistically distinct from both chemical sciences and social sciences than those two are from each other—at least in this dataset.

---

### **Zooming in: the biology corner**

The biology corner is mainly dominated by *31: Biological Sciences* and *32: Biomedical and Clinical Sciences*. These two fields largely overlap and span from the right corner of the triangle (representing more niche or specialised biology research) toward the centre (which corresponds to more interdisciplinary projects).

To make this more concrete, consider two projects both classified under *31: Biological Sciences* but located far apart in the projection. One project (full description [here](https://rms.arc.gov.au/RMS/Report/Download/Report/1b0c8b2e-7bb0-4f2d-8f52-ad207cfbb41d/273#:~:text=Parry-,This%20project%20aims%20to,environmental%20benefits%20to%20Australia.,-The)) focuses on discovering how nature produces vivid colours using nanostructures—language that places it closer to the chemical sciences. Another project (full description [here](https://rms.arc.gov.au/RMS/Report/Download/Report/1b0c8b2e-7bb0-4f2d-8f52-ad207cfbb41d/243#:~:text=Cardillo-,This%20project%20aims%20to,investment%20in%20biodiversity%20databases.,-The)) focuses on biodiversity data and investment, which pulls it toward the social sciences.

Reading the project descriptions makes this separation immediately intuitive, and seeing it emerge automatically from text alone was one of the most satisfying moments of this project.

---

In the next and final post of this series, I’ll move beyond the geometric structure of the project space and focus on explicit topic modelling—the topics themselves and the trends that emerge across ARC Discovery Projects.




