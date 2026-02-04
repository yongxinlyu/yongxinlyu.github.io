---
layout: post
title: Topic modelling learning journal (part 1)
date: 2026-01-06 00:00:00
description: to the wonderland of natural language processing 
categories: research
featured: false
---


I come from a machine learning background, mostly in the context of data science. Recently, however, I’ve become increasingly interested in **natural language processing (NLP)**.

During my PhD, I constantly heard about NLP and large language models (LLMs). Everyone was using ChatGPT and amazed by how good it is. At the same time, there was an explosion of research papers on arXiv across computer science, materials science, and beyond, with some papers suggesting that models like GPT could help discover new materials with better properties. When I started job hunting, many roles explicitly required experience with NLP or LLMs. Looking back now, I fully understand why.

At the time, though, I was sceptical. I felt that NLP and LLMs were surrounded by hype, and I couldn’t see an immediate or practical use for them in my own research workflow. I tended to associate NLP almost exclusively with **text generation**, which wasn’t something I thought I needed.

That perspective has changed. 

In this three-part series, I want to share my learning journey into **NLP** as a beginner. In this first post, I focus on what motivated me to explore NLP more seriously and how I built a clearer mental model of the field over the past three months. In the next two parts, I will share the results of my first NLP project: topic modelling of ARC Discovery Projects.

---

### **Why I became interested in NLP**

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

### **The learning journey**

Over the past few months, I’ve been actively job hunting. The roles I encountered on job boards often felt loosely defined, spanning an almost unlimited range of possibilities. As I applied for more positions, I started wondering: *What exactly is the job space I’m exploring? Are there hidden structures or dominant themes?*

If you’re familiar with unsupervised learning, this idea is similar to **dimensionality reduction**—compressing high-dimensional data into two dimensions that can be visualised. Conceptually, topic modelling felt very familiar to me from a machine learning perspective. The main difference lies in **how text is transformed into numerical features**.

There is no shortage of information online. ChatGPT can generate plenty of code snippets and explanations, and I used it extensively. I asked ChatGPT to generate code for transforming job descriptions into numerical representations that could be fed into machine learning models. The results were quite good, and I shared some of this in my [previous blog post](https://yongxinlyu.github.io/blog/2025/job-hunting/).

However, like acquiring any new skill in the era of chatbots, the information I encountered was **fragmented**. I didn’t always understand *why* things worked, what the results really meant, or how different methods fit together within the broader NLP landscape.

I decided to slow down and explore this field more seriously during the Christmas holiday. Gradually, I learned that what I was doing fell under **topic modelling**, a subfield of NLP that aims to automatically discover structure in large collections of documents.

The promise was compelling. **Imagine being able to quickly group thousands of research papers into themes and get a high-level sense of emerging or “hot” topics in a field.** That alone could save an enormous amount of time.

To build a more systematic understanding—something that could bridge what I already knew about machine learning with this new NLP domain—I turned to a few very useful textbooks:

- **The Handbook of NLP with Gensim** by Chris Kuo
    
    By far the most helpful resource for me. It explains both the core concepts and implementation details, with just enough mathematics to understand what’s happening under the hood. The tone is technical but approachable, and surprisingly fun to read.
    
- **Hands-On Large Language Models** by Jay Alammar & Maarten grootendorst
    
    I generally like O’Reilly books for hands-on machine learning topics, and this one was no exception. Despite the title, the book starts from language models more broadly, both small and large. I didn’t read it cover to cover, but the introductory chapters gave me a strong high-level blueprint of NLP and how different language modelling approaches fit together.
    
- **Practical Natural Language Processing** by Sowmya Vajjala et al.
    
    Another O’Reilly book, with a clear and structured explanation of NLP. I found it particularly helpful for understanding how different authors and practitioners approach NLP as a whole, and where topic modelling sits within that broader landscape.
    

---

### **My beginner’s understanding of topic modelling**

After reading books, papers, blog posts, and experimenting extensively (with a lot of help from ChatGPT), I now have a **preliminary but coherent mental model** of topic modelling.

Broadly, there are two families of approaches:

- **Classical methods**, such as *Latent Semantic Analysis (LSA)* and *Latent Dirichlet Allocation (LDA)*
- **Modern methods**, such as *BERTopic*, which rely on transformer-based embeddings

To me, this distinction feels very similar to **machine learning vs. deep learning**.

Classical topic models are more interpretable, require fewer computational resources, but may sacrifice some flexibility or performance.

Embedding-based methods often produce cleaner-looking topics, handle short or noisy text better, but are less interpretable and more computationally expensive.

For my learning goals, I’m currently leaning towards **classical approaches**, especially LDA. Even though these models have been around for many years, they provide a strong conceptual foundation. I see them as essential baselines to understand before moving on to more complex models.


---

I hope this post provides enough background on my motivation for learning topic modelling and my current understanding of the field. In the next two parts, I’ll share how I applied what I learned in practice by modelling topics in ARC Discovery Projects based on their descriptions.

---




