---
layout: post
title: Learning journal - my journey into topic modeling
date: 2026-01-08 00:00:00
description: to the wonderland of natural language processing 
categories: research
featured: false
---


I come from a machine learning background, mostly in the context of data science. Recently, however, I’ve become increasingly interested in **natural language processing (NLP)**.

During my PhD, I heard about NLP and large language models (LLMs) all the time. Everyone is using chatGPT and astonished by how good it is, there are exploding amount of research papers in arxiv in the field of computer science saying that GPT may discover new materials with better properties. When I started job hunting, many roles explicitly require experience with NLP or LLMs. Looking back now, I fully understand why.

At the time, though, I was sceptical. I felt that NLP and LLMs were surrounded by hype, and I couldn’t see an immediate or practical use for them in my own research workflow. I tended to associate NLP almost exclusively with **text generation**, which wasn’t something I thought I needed.

That perspective changed recently.

In this post, I want to document my learning journey into **NLP** as a beginner: what motivated me to explore NLP more seriously, how I builded a clearer mental model of this powerful technique within the past month, and share the results of my first NLP project: topic modeling of ARC discovery projects.

---

### **Why I Became Interested in NLP**

Very recently, I realised something that now feels obvious in hindsight: **language and text are also forms of data**—and increasingly, they are the *main* form of data I interact with.

Job descriptions, research proposals, funding schemes, papers across different disciplines, and descriptions of research areas I might want to move into: almost everything I needed to process was text. Reading, filtering, and synthesising all of this information took a huge amount of time.

I asked myself:

> What if there were tools that could help me process and understand large collections of text more efficiently?
> 

This was when I began to seriously think about **treating text as data**. I didn't know this is natural language processing at first, I searched with the burning need for packages that process text as data in python, and to my suprise (in a good way) this is a one of the branches in NLP.

There are much more about what NLP can do. LLM is only one branches in the world of NLP that gets many attention. It may seems difficult to directly train or fine-tune a chatGPT, but there are many applications in this field. A word cloud is a very simple NLP technique. Do you know that linkedIn job recommendation is also done using NLP. There are so many more flavours of NLP apart from generating text like chatGPT do.

An equally important—and, for me, more relevant—part of NLP is about **understanding, organising, and extracting structure from text**.

---

### **Learning Topic Modelling**

I started with grouping the job description of the job I'm applying for. I was quite familiar with the concept of unsupervised learning, so I asked chatGPT to generate the code for transforming the text (job description) into data that can be directly feed into machine learning models. The result was quite nice, I showed it in the last blog.

Once I decided to explore NLP more seriously, topic modelling quickly caught my attention. It promised a way to automatically discover structure in large collections of documents.  For example, imagine being able to quickly group research papers into themes and get a high-level sense of emerging or “hot” topics in a field. That alone could save a huge amount of time.

There is no shortage of information online. ChatGPT can generate plenty of code snippets and explanations, and I started exploring this space during the Christmas holiday, on the trains to our hiking destinations.

However, like acquiring any new skills in this era of chatbots, I quickly ran into a problem: the information felt **fragmented**.

The code ChatGPT produced often ran correctly, but I didn’t always understand:

- *why* it worked, which part is essential and which can be replaced,
- *how* to interpret the output, or
- *what meaningful insight I should actually extract from the results*.

What I was really looking for was a **blueprint**—not just instructions for running code, but a systematic understanding of the underlying ideas. I wanted something that could bridge what I already knew about machine learning with this new area of NLP.

Eventually, I found a few books that helped me build this conceptual foundation, alongside ChatGPT, which was still incredibly useful for experimentation and clarification:

- **The Handbook of NLP with Gensim** by Chris Kuo
    
    This was by far the most helpful resource for me. The author explains both the core concepts and the implementation details, with just enough mathematics to understand what is happening under the hood. I also really enjoyed the tone—it’s technical but approachable, and surprisingly fun to read.
    
- **Hands-On Large Language Models by Jay Alammar & Maarten grootendorst**
    
    I generally like O’Reilly books for learning machine learning topics, and this one was no exception. Despite the title, the book starts from language models more broadly, both small and large. I didn’t read it cover to cover, but the introductory chapters gave me a strong high-level blueprint of NLP and how different language modelling approaches fit together.
    
- **Practical Natural Language Processing**
    
    Another O’Reilly book, with a clear and structured explanation of topic modelling. I found it particularly helpful for understanding how different authors and practitioners approach NLP as a whole, and where topic modelling sits within that broader landscape.
    

---

### **My Beginner’s Understanding of Topic Modelling**

As a beginner, this is how I currently understand topic modelling.

There are many approaches:

- **Classical methods**, such as *Latent Semantic Analysis (LSA)* and *Latent Dirichlet Allocation (LDA)*
- **More modern methods**, such as *BERTopic*, which rely on transformer-based embeddings

To me, this distinction feels similar to **machine learning vs. deep learning**.

Classical topic models:

- are more interpretable,
- require fewer computational resources,
- but may sacrifice some performance or flexibility.

Modern, embedding-based methods:

- often produce cleaner-looking topics,
- handle short or noisy text better,
- but are less interpretable and more computationally expensive.

For my own learning goals, I’m currently leaning towards the **classical approaches**. Even though methods like LDA have been around for many years, they provide a strong conceptual foundation. I see them as an important baseline to understand before moving on to more complex models.

This blog, therefore, mainly documents my learning journey (so far) with **classical topic modelling**, especially LDA.

---

### **My First Project: Discovery Projects**

My first hands-on project applies topic modelling to **Discovery Projects from the 2023–2026 funding rounds**. Like many researchers who have spent a large part of their academic life chasing funding, I believe that being aware of emerging trends—and understanding what kinds of topics attract funding—is extremely important. This made the dataset immediately interesting to me.

The goal is to cluster around **2,000 project summaries across four years** into different topics based on their text descriptions.

This turned out to be more challenging than I initially expected:

- the summaries are relatively short,
- the language is highly domain-specific,
- and many concepts are expressed implicitly rather than explicitly.

All of these factors make it harder for topic models to identify clean, well-separated themes. Still, I decided to stick with this dataset and see how far I could push the approach.

---

### **Preprocessing: Where Most of the Work Happens**

One key lesson I learned very quickly is that **topic modelling is mostly about preprocessing**.

There are many packages and strategies available, and the choices you make here can dramatically affect the results. My current preprocessing pipeline looks like this:

1. **Text normalization**
    - lowercase
    - remove punctuation
    - remove numbers
    - normalize whitespace
2. **Lemmatization**
    - I avoid stemming, as it hurts interpretability
3. **Stopword removal**
    - generic stopwords
    - domain-specific stopwords
4. **Bigram construction**
    - to capture multi-word concepts
5. **Dictionary-level filtering**
    - remove extremely common words
    - remove very rare words

Once this preprocessing is done, the bag-of-words representation and LDA modelling itself are actually **surprisingly simple**.

[jupyternotebook to be inserted]

The resulting topics make sense to me. For example, topics related to biology appear extremely prominent, and artificial intelligence also clearly emerges as a major theme.

---

### **Where I Am Now**

Using this workflow, I can obtain topic modelling results that are **reasonable**, but not yet fully satisfying. Some topics still feel vague or difficult to interpret, and I’m continuing to refine the preprocessing and modelling choices.