---
layout: post
title: Learning journal - my journey into topic modeling
date: 2026-01-06 00:00:00
description: to the wonderland of natural language processing 
categories: research
featured: false
---


I come from a machine learning background, mostly in the context of data science. Recently, however, I’ve become increasingly interested in **natural language processing (NLP)**.

During my PhD, I constantly heard about NLP and large language models (LLMs). Everyone was using ChatGPT and amazed by how good it is. At the same time, there was an explosion of research papers on arXiv across computer science, materials science, and beyond, with some papers suggesting that models like GPT could help discover new materials with better properties. When I started job hunting, many roles explicitly required experience with NLP or LLMs. Looking back now, I fully understand why.

At the time, though, I was sceptical. I felt that NLP and LLMs were surrounded by hype, and I couldn’t see an immediate or practical use for them in my own research workflow. I tended to associate NLP almost exclusively with **text generation**, which wasn’t something I thought I needed.

That perspective has changed.

In this post, I want to document my learning journey into **NLP** as a beginner: what motivated me to explore NLP more seriously, how I built a clearer mental model of this field over the past three months, and the results of my first NLP project—topic modelling of ARC Discovery Projects.

---

### **Why I Became Interested in NLP**

Very recently, I realised something that now feels obvious in hindsight:

> Language and text are also forms of data, and increasingly, they are the main form of data I interact with.
> 

Job descriptions, research proposals, funding schemes, academic papers across disciplines, and descriptions of research areas I might want to move into—almost everything I needed to process was text. Reading, filtering, and synthesising all of this information took a huge amount of time.

I started asking myself:

> There must be tools that could help me process and understand large collections of text more efficiently.
> 

This was when I began to seriously think about **treating text as data**. At first, I didn’t even know this fell under NLP. I simply searched for Python packages that could process text in a structured, data-driven way. To my surprise (and delight), I discovered that this is exactly what NLP is about.

Over time, I also realised that **LLMs are only one branch of NLP**, albeit the most visible one. Training or fine-tuning something like ChatGPT may feel out of reach, but NLP as a field is much broader and far more accessible. A word cloud is a very simple NLP technique. LinkedIn job recommendations rely heavily on NLP. There are many flavours of NLP beyond text generation.

For me, the most relevant part of NLP is about **understanding, organising, and extracting structure from text**.

---

### **Learning Topic Modelling**

Over the past few months, I’ve been actively job hunting. Postdoctoral roles, in particular, feel like they come with an almost unlimited number of possibilities—which is exciting, but also intimidating. As I applied for more positions, I started wondering: *What exactly is the job space I’m exploring? Are there hidden structures or dominant themes?*

If you’re familiar with unsupervised learning, this idea is similar to **dimensionality reduction**—compressing high-dimensional data into two dimensions that can be visualised. Conceptually, topic modelling felt very familiar to me from a machine learning perspective. The main difference lies in **how text is transformed into numerical features**.

There is no shortage of information online. ChatGPT can generate plenty of code snippets and explanations, and I used it extensively. I asked ChatGPT to generate code for transforming job descriptions into numerical representations that could be fed into machine learning models. The results were quite good, and I shared some of this in my [previous blog post](insert link).

However, like acquiring any new skill in the era of chatbots, the information I encountered was **fragmented**. I didn’t always understand *why* things worked, what the results really meant, or how different methods fit together within the broader NLP landscape.

I decided to slow down and explore this field more seriously during the Christmas holiday. Gradually, I learned that what I was doing fell under **topic modelling**, a subfield of NLP that aims to automatically discover structure in large collections of documents.

The promise was compelling. Imagine being able to quickly group thousands of research papers into themes and get a high-level sense of emerging or “hot” topics in a field. That alone could save an enormous amount of time.

To build a more systematic understanding—something that could bridge what I already knew about machine learning with this new NLP domain—I turned to a few books, alongside continued experimentation with ChatGPT:

- **The Handbook of NLP with Gensim** by Chris Kuo
    
    By far the most helpful resource for me. It explains both the core concepts and implementation details, with just enough mathematics to understand what’s happening under the hood. The tone is technical but approachable, and surprisingly fun to read.
    
- **Hands-On Large Language Models** by Jay Alammar & Maarten grootendorst
    
    I generally like O’Reilly books for hands-on machine learning topics, and this one was no exception. Despite the title, the book starts from language models more broadly, both small and large. I didn’t read it cover to cover, but the introductory chapters gave me a strong high-level blueprint of NLP and how different language modelling approaches fit together.
    
- **Practical Natural Language Processing** by Sowmya Vajjala et al.
    
    Another O’Reilly book, with a clear and structured explanation of NLP. I found it particularly helpful for understanding how different authors and practitioners approach NLP as a whole, and where topic modelling sits within that broader landscape.
    

---

### **My Beginner’s Understanding of Topic Modelling**

After reading books, papers, blog posts, and experimenting extensively (with a lot of help from ChatGPT), I now have a **preliminary but coherent mental model** of topic modelling.

Broadly, there are two families of approaches:

- **Classical methods**, such as *Latent Semantic Analysis (LSA)* and *Latent Dirichlet Allocation (LDA)*
- **Modern methods**, such as *BERTopic*, which rely on transformer-based embeddings

To me, this distinction feels very similar to **machine learning vs. deep learning**.

Classical topic models are more interpretable, require fewer computational resources, but may sacrifice some flexibility or performance.

Embedding-based methods often produce cleaner-looking topics, handle short or noisy text better, but are less interpretable and more computationally expensive.

For my learning goals, I’m currently leaning towards **classical approaches**, especially LDA. Even though these models have been around for many years, they provide a strong conceptual foundation. I see them as essential baselines to understand before moving on to more complex models.

The section below therefore mainly documents my learning journey (so far) with **classical topic modelling**.

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

I experimented with different numbers of topics and eventually settled on **six**, balancing granularity and interpretability. To visualise the results, I used a **Termite-like topic–term matrix**, a design originally proposed by researchers at Stanford.

The resulting matrix is genuinely fascinating. Some themes are immediately recognisable. For example, **artificial intelligence** clearly emerges as a dominant topic, reflecting its growing prominence across many funding areas rather than being confined to a single discipline.

That said, interpreting LDA outputs is still something I’m actively learning. Unlike PCA plots, which offer a relatively intuitive geometric interpretation, topic–term matrices require **subjective judgement and domain knowledge**. Deciding where one topic ends and another begins is not always clear-cut.

At this stage, I see this ambiguity not as a weakness, but as part of the learning process. Topic modelling doesn’t hand you answers—it invites you to *reason* about patterns in text.

---

### **Closing Thoughts**

This project has fundamentally changed how I think about NLP. I no longer see it as “just text generation,” but as a powerful toolkit for **making sense of unstructured text at scale**.

Topic modelling, in particular, feels like a natural extension of the unsupervised learning techniques I was already familiar with—just applied to a different and increasingly important kind of data. While I’m still very much a beginner, this journey has already reshaped how I approach text, research trends, and even my own career exploration.

In future posts, I plan to dive deeper into topic interpretation, compare classical and embedding-based approaches, and reflect on where NLP fits into my broader research toolkit.




