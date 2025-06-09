---
layout: post
title: From Jupyter Notebook to Website
date: 2025-05-27 00:01:00
description: sharing teaching materials with jupyter-book
categories: research
tags: teaching
featured: false
---

Recently, I’ve been helping with a data science course, and it got me thinking: how do people effectively teach Python and machine learning to absolute beginners?

To find out, I started exploring how others design their course materials. I came across two excellent examples—Professor Aron Walsh’s [Machine Learning for Materials](https://aronwalsh.github.io/MLforMaterials) at UCL and Professor Zachary Ulissi’s [Numerical Methods and ML for Chemical Engineers](https://ulissigroup.cheme.cmu.edu/F22-06-325/index.html) at CMU. These sites are not only informative but beautifully organized, with lecture slides and Jupyter Notebooks accessible directly from the browser.

As someone who relies heavily on Python and machine learning in my own research, it was fascinating to see how these tools are presented in a classroom setting. I’ve mostly learned on my own, so I never thought deeply about how to teach these concepts to someone starting from scratch.

What immediately stood out to me was that both courses have fully functional websites that host all their teaching materials—including Jupyter Notebooks—with interactive code outputs. That’s when I discovered a powerful tool behind the scenes: Jupyter Book.

---

### **What Is Jupyter Book?**

[Jupyter Book](https://jupyterbook.org/) is a Python library that transforms a collection of Markdown files and Jupyter Notebooks into a well-structured HTML website. It builds a hierarchy between pages and sections, allowing you to organize content the way you would in a textbook—or, in my case, a tutorial site for students.

The best part? Anyone can view the notebooks with code outputs without needing to install Python or run a cloud-based environment like Google Colab. That said, you can still enable live coding by connecting to third-party platforms such as Binder or Google Colab. Super convenient!

---

### **How I Built My Jupyter Book**

1. Install Jupyter Book


```bash
pip install -U jupyter-book
```

2. Create a Sample Book

jupyter-book create mynewbook/

This generates a folder structure like this:
```
├── _config.yml          # Book settings (title, author, theme, etc.)
├── _toc.yml             # Table of contents (page structure)
├── intro.md             # First page of your book
├── notebooks.ipynb      # Sample notebook
├── markdown.md          # Sample markdown content
├── requirements.txt     # Python packages for running the book
```

3. Modify Key Files
- **_config.yml**: Set your book title, author name, and basic configuration.
- **_toc.yml**: Define the structure and order of pages/sections.
- **requirements.txt**: List any Python packages your notebooks use.

4. Build Your Book

```bash
jupyter-book build mynewbook/
```
This will generate an _build/ folder with all your HTML files that you can preview locally.

---

### **Hosting on GitHub Pages**

There are two main ways to host your book:

1.	Manual: Push the HTML files in _build/ to your GitHub repository.

2.	Automated (recommended): Use GitHub Actions to automatically build and deploy the book every time you push.

Here’s how to set up automated deployment:
- Add this file to .github/workflows/deploy.yml
(Use Jupyter Book’s template to generate it.)
- In your repo’s Settings > Actions > General, give “Read and Write” permission to workflows.
- In Settings > Pages, set the source to the gh-pages branch.

After that, GitHub will host your site and provide you with a public URL—ready to share with students or colleagues!

---

### **Make It Interactive**

To enable live coding features, add the following to your _config.yml:
```yml
launch_buttons:
  colab_url: "https://colab.research.google.com"
  binderhub_url: "https://mybinder.org"
  thebe: true
```
This will add buttons to each notebook page so users can open the content directly in Colab, Binder, or even execute it live in the browser using Thebe.

---

### **Explore More Examples**

Want to get inspired? Check out some beautiful and functional Jupyter Books created by the community:
[Executable Books Gallery](https://executablebooks.org/en/latest/gallery/)

---


If you’re a researcher, educator, or student trying to share Jupyter Notebooks in an accessible, structured, and professional way—Jupyter Book is an amazing tool. I found it surprisingly easy to set up, and it adds a polished touch to teaching materials, research demos, or technical blogs.

Let me know if you try it or have questions—I’d love to see what you create!

