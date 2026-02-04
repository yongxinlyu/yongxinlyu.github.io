---
layout: post
title: Topic modelling learning journal part 2
date: 2026-02-03 00:00:00
description: to the wonderland of natural language processing 
categories: research
featured: false
---


In my previous post, topic modelling learning journal part 1, I shared how I learned topic modelling as a beginner. In this post I will continue to share my first project: ARC discovery project.

---

### **My First Project: Discovery Projects**

The fastest way for me to learn is through a concrete project. I chose **ARC Discovery Projects from the 2023–2026 funding rounds** as my first formal NLP task.

Like many researchers who have spent a large part of their academic life chasing funding, I believe that understanding **emerging trends**—and what kinds of topics attract funding—is extremely important.

The dataset consists of **1,961 project summaries across four years**, and the goal is to cluster them into topics based on their text descriptions.

This turned out to be more challenging than I initially expected: the summaries are relatively short, the language is highly domain-specific, and many concepts are expressed implicitly rather than explicitly.

All of these factors make it harder for topic models to identify clean, well-separated themes. Still, I decided to stick with this dataset and see how far I could push the approach.

---

### **Preprocessing: Where Most of the Work Happens**

One lesson became clear very quickly: **topic modelling is mostly about preprocessing—and interpretation**. The model itself is often the easy part; the hard work lies in deciding *what* information to keep, *what* to discard, and *how* to represent text in a way that preserves meaning.

My current preprocessing pipeline looks like this:

1. **Text normalisation**: Lowercasing, removing punctuation, and stripping out numbers to reduce superficial variation.
    
2. **Lemmatization**: For example, *projects → project*. I deliberately avoid stemming, as it often damages interpretability by producing unnatural word forms.
    
3. **Stopword removal**: I remove generic stopwords but intentionally keep domain-specific ones for now. Since I later rely on a Termite-like topic–term matrix, preserving these terms helps with interpretation.
    
4. **Bigram construction**: To capture multi-word concepts such as *“artificial intelligence”*, which would otherwise be split and lose semantic coherence.
    

Once these steps are complete, the actual Bag-of-Words construction and LDA modelling are **surprisingly simple**.

There are many sophisticated NLP libraries available—such as gensim and nltk—and I did experiment with them. However, I chose to stick largely to **my own preprocessing scripts combined with scikit-learn**, prioritising transparency and interpretability over abstraction. At this stage of learning, understanding *exactly* what happens at each step felt more valuable than convenience.

---

### **Interpreting the TF-IDF + PCA Visualisation**

Using the preprocessing pipeline above, I extracted **TF-IDF features** from all project summaries and projected them into two dimensions using **PCA**, a linear dimensionality reduction technique.

{% raw %}
<iframe src="/assets/img/blog_figure/topic-modeling-pca-FOR.html" width="100%" height="500" frameborder="0"></iframe>
{% endraw %}

In the resulting visualisation, each point represents a project. I colour-coded the points by their **Field of Research (FOR)** classification. When filtering or hovering over different FOR codes, several interesting patterns emerge.

**How I interpret this result**

- Projects from **closely related research fields tend to cluster together**, suggesting that TF-IDF captures meaningful semantic similarity. For instance, *Biomedical and Clinical Sciences* frequently overlap with *Biological Sciences*, which aligns well with intuition.
- Importantly, this structure emerges **without any supervision**. The model is not told about disciplines or categories, yet it recovers them purely from text. This indicates that the project descriptions contain a strong and consistent signal.
- The overall project space forms a **rough triangular shape**:
    - one corner dominated by biology-related fields,
    - another by chemical sciences and engineering,
    - and a third by social sciences.

This triangular structure likely reflects **fundamentally different vocabularies and conceptual frameworks** across these broad domains. Even after aggressive dimensionality reduction, these linguistic differences remain visible, highlighting just how distinct disciplinary language can be.

Overall, this visualisation was an important sanity check. It reassured me that:

- the preprocessing choices are reasonable,
- TF-IDF is capturing meaningful similarities between projects,
- and topic modelling on this dataset is worth pursuing further.

---
### **Discovering underlying topics: LDA Results**

After exploring the global structure with TF-IDF and PCA, I moved on to **Bag-of-Words + LDA** to extract more explicit, interpretable topics.

I experimented with different numbers of topics and eventually settled on **six**, balancing granularity and interpretability. To visualise the results, I used a **Termite-like topic–term matrix**, a design originally proposed by [researchers at Stanford](http://vis.stanford.edu/files/2012-Termite-AVI.pdf).

The resulting matrix is genuinely fascinating. Some themes are immediately recognisable. For example, **artificial intelligence** clearly emerges as a dominant topic, reflecting its growing prominence across many funding areas rather than being confined to a single discipline.

That said, interpreting LDA outputs is still something I’m actively learning. Unlike PCA plots, which offer a relatively intuitive geometric interpretation, topic–term matrices require **subjective judgement and domain knowledge**. Deciding where one topic ends and another begins is not always clear-cut.

At this stage, I see this ambiguity not as a weakness, but as part of the learning process. Topic modelling doesn’t hand you answers—it invites you to *reason* about patterns in text.

---

### **Closing Thoughts**

This project has fundamentally changed how I think about NLP. I no longer see it as “just text generation,” but as a powerful toolkit for **making sense of unstructured text at scale**.

Topic modelling, in particular, feels like a natural extension of the unsupervised learning techniques I was already familiar with—just applied to a different and increasingly important kind of data. While I’m still very much a beginner, this journey has already reshaped how I approach text, research trends, and even my own career exploration.

In future posts, I plan to dive deeper into topic interpretation, compare classical and embedding-based approaches, and reflect on where NLP fits into my broader research toolkit.




