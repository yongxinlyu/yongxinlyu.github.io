---
layout: post
title: Topic modelling learning journal (part 3)
date: 2026-03-03 01:00:00
description: to the wonderland of natural language processing 
categories: research
featured: false
---


---
### **Discovering underlying topics: LDA Results**

After exploring the global structure with TF-IDF and PCA, I moved on to **Bag-of-Words + LDA** to extract more explicit, interpretable topics.

I experimented with different numbers of topics and eventually settled on **six**, balancing granularity and interpretability. To visualise the results, I used a **Termite-like topic–term matrix**, a design originally proposed by [researchers at Stanford](http://vis.stanford.edu/files/2012-Termite-AVI.pdf).




<div class="row mt-3 justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_figure/topic-modeling-termite-matrix.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

The resulting matrix is genuinely fascinating. Some themes are immediately recognisable. For example, **artificial intelligence** clearly emerges as a dominant topic, reflecting its growing prominence across many funding areas rather than being confined to a single discipline.

That said, interpreting LDA outputs is still something I’m actively learning. Unlike PCA plots, which offer a relatively intuitive geometric interpretation, topic–term matrices require **subjective judgement and domain knowledge**. Deciding where one topic ends and another begins is not always clear-cut.

At this stage, I see this ambiguity not as a weakness, but as part of the learning process. Topic modelling doesn’t hand you answers—it invites you to *reason* about patterns in text.

---

### **Closing Thoughts**

This project has fundamentally changed how I think about NLP. I no longer see it as “just text generation,” but as a powerful toolkit for **making sense of unstructured text at scale**.

Topic modelling, in particular, feels like a natural extension of the unsupervised learning techniques I was already familiar with—just applied to a different and increasingly important kind of data. While I’m still very much a beginner, this journey has already reshaped how I approach text, research trends, and even my own career exploration.

In future posts, I plan to dive deeper into topic interpretation, compare classical and embedding-based approaches, and reflect on where NLP fits into my broader research toolkit.




