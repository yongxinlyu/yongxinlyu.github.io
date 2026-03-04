---
layout: post
title: Topic modelling learning journal (part 3)
date: 2026-03-03 01:00:00
description: letting machine read 2,000 research proposals
categories: research
featured: false
---

In my previous post, [topic modelling learning journal (part 2)](https://yongxinlyu.github.io/blog/2026/topic-modelling-II/), I explored the overall structure of the ARC Discovery Projects dataset by projecting text data into a two-dimensional space. 

In this final post of the series, I move one step further and use **Latent Dirichlet Allocation (LDA)** to uncover the underlying topics that connect these projects.

---
### Discovering underlying topics

To extract explicit themes from the project summaries, I trained a topic model using a Bag-of-Words representation together with LDA.

Training an LDA model itself is relatively straightforward, but one hyperparameter plays a particularly important role: **the number of topics**.

Unfortunately, there is no universally correct answer. The “best” number depends not only on statistical measures but also on whether the resulting topics are interpretable to humans.

To guide this choice, I experimented with several different values. I first evaluated the models using **perplexity** and **coherence scores**, which are commonly used metrics for topic models. The results did not show a very clear optimum, but **six topics** appeared to be a reasonable compromise.

I then manually inspected the results by printing the **top keywords** for each topic and looking at representative project summaries associated with them. The themes looked reasonably coherent and interpretable, so I decided to proceed with **six topics for now**, acknowledging that this choice is somewhat subjective.

---
### Interpreting the topics

To better understand what each topic represents, I calculated the **lift** of each keyword. Lift measures how uniquely a word is associated with a particular topic compared to the rest of the corpus.

In practice, this helps filter out very common words that appear across many documents (for example domain-specific stopwords such as *project* or *aim*), allowing the more distinctive topic-specific terms to stand out.

The visualization below shows the top 30 high-lift keywords for each topic using a **Termite-style topic–term matrix**, a [design](http://vis.stanford.edu/files/2012-Termite-AVI.pdf) originally proposed by researchers at Stanford. In this plot, each column represents a topic, each row represents a keyword, and the size of the bubble indicates the lift value.

{% raw %}
<iframe src="/assets/img/blog_figure/Termite-like_matrix.html" width="100%" frameborder="0"></iframe>
{% endraw %}

The Termite-style topic–term matrix reveals a very clear pattern: most high-lift words are strongly associated with only one topic. This suggests that the model has learned **well-separated themes with relatively little overlap in vocabulary**.

In other words, each topic appears to correspond to a fairly distinct research domain, such as biology, materials science, ecology, or artificial intelligence.

Based on the high-lift keywords, I asked my best friend ChatGPT to help summarise what each topic seems to represent. For each topic, I also linked the top-ranked Discovery Project (DP) summary associated with that topic.


- **Topic 0 - Social policy, inequality, and community wellbeing**
🔗 [Top Discovery Project](https://rms.arc.gov.au/RMS/Report/Download/Report/1b0c8b2e-7bb0-4f2d-8f52-ad207cfbb41d/273#:~:text=Haslam-,This%20project%20aims%20to,current%20mental%20health%20crisis.,-The)

- **Topic 1 - Ecology, biodiversity, and climate impacts on ecosystems**
 🔗 [Top Discovery Project](https://rms.arc.gov.au/RMS/Report/Download/Report/1b0c8b2e-7bb0-4f2d-8f52-ad207cfbb41d/259#:~:text=To%20prevent%20virus,of%20ecosystem%20health.)

- **Topic 2 - Artificial intelligence, machine learning, and data science** 
 🔗 [Top Discovery Project](https://rms.arc.gov.au/RMS/Report/Download/Report/1b0c8b2e-7bb0-4f2d-8f52-ad207cfbb41d/289#:~:text=Zhen%20Peng-,This%20project%20aims%20to%20develop,safety%20and%20reduce%20maintenance%20costs.,-Curtin%20University)

- **Topic 3 - Renewable energy, climate, and environmental systems**
 🔗 [Top Discovery Project](https://rms.arc.gov.au/RMS/Report/Download/Report/1b0c8b2e-7bb0-4f2d-8f52-ad207cfbb41d/289#:~:text=To%20secure%20the,emissions%20reduction%20targets.)

- **Topic 4 - Cellular and molecular biology**
 🔗 [Top Discovery Project](https://rms.arc.gov.au/RMS/Report/Download/Report/1b0c8b2e-7bb0-4f2d-8f52-ad207cfbb41d/289#:~:text=Amelia%20Liu-,This%20project%20aims%20to%20utilise,health%2C%20communications%20and%20manufacturing%20sectors.,-Monash%20University)

- **Topic 5 - Physics, materials science, and advanced technologies** 
 🔗 [Top Discovery Project](https://rms.arc.gov.au/RMS/Report/Download/Report/1b0c8b2e-7bb0-4f2d-8f52-ad207cfbb41d/243#:~:text=Vertebrate%20vasculature%20forms,and%20regenerative%20biology.)

---

### Topics across research fields

The topic keywords already provide a good intuition about the disciplines involved. However, to see whether the model aligns with existing classifications, I compared the inferred topics with the **Field of Research (FOR) codes** associated with each project.

In the figure below, each circle represents a topic–discipline combination, and the size of the circle corresponds to the number of projects assigned to that topic.

{% raw %}
<iframe src="/assets/img/blog_figure/Topic_to_FOR_mapping.html" width="80%" height="500" frameborder="0"></iframe>
{% endraw %}

Some interesting patterns emerge. 

Topics **3 and 4** appear to be more closely related to **engineering and chemical sciences**, while **topics 1 and 5** seem more strongly connected to **biological sciences**. **Topic 0** appears to correspond mainly to **social science research**.

One topic stood out to me in particular: **Topic 2**, which is dominated by keywords related to artificial intelligence.

Unlike the other topics, it appears as a distinct theme that cuts across multiple research areas. While AI is often thought of primarily as a computer science discipline, the model suggests that AI-related projects appear across a much broader range of fields. In this dataset, they are especially common in **engineering**, followed by **mathematics** and even **psychology**.

The popularity of AI is not too surprising, but seeing this pattern emerge automatically from text alone still felt quite remarkable.

---

### Funding trends over years

Another question that naturally came to mind is how these topics evolve over time. In particular, I was curious about **how funding is distributed across topics between 2023 and 2025**.

The figure below shows the proportion of projects associated with each topic across different funding years. The size of the bubbles represents the **total funding allocated** to each topic.

{% raw %}
<iframe src="/assets/img/blog_figure/topic_evolution.html" width="100%" height="400" frameborder="0"></iframe>
{% endraw %}

Interestingly, the AI-related topic does not show a dramatic increase in either proportion or funding share over this period.

Given the strong public narrative about rapidly increasing AI investment, I expected to see a more obvious shift. At least according to this dataset and this probabilistic topic model, the distribution appears relatively stable.

Of course, this result should be interpreted cautiously: topic models are approximate, and small datasets can easily hide subtle trends.

---

At the end of this three-part series, I’m quite happy with the results I have so far. They are certainly far from perfect, especially compared with modern NLP architectures based on transformers, but I am still amazed by how much structure can be extracted using relatively simple statistical models.

If I continue exploring more modern approaches in the future, I would love to compare them with these traditional methods.

So stay tuned!





