---
layout: post
title: From Jupyter Notebook to Website
date: 2025-05-27 00:01:00
description: sharing teaching materials with jupyter-book
categories: teaching
#tags: 
featured: false
---

Recently, I started my teaching journey by helping out with a data science course. That got me wondering--how do people actually teach Python and machine learning to complete beginners?

To find out, I began looking at how others structure their course materials. I came across two fantastic examples: Professor Aron Walsh’s [Machine Learning for Materials](https://aronwalsh.github.io/MLforMaterials) at UCL and Professor Zachary Ulissi’s [Numerical Methods and ML for Chemical Engineers](https://ulissigroup.cheme.cmu.edu/F22-06-325/index.html) at CMU. Their course websites are beautifully organized, with lecture slides and interactive Jupyter Notebooks available directly in the browser.

As someone who uses Python and machine learning daily in my own research, I found it fascinating to see how these tools are introduced in a classroom setting. I’ve mostly been self-taught, so I’d never thought much about *how* to teach them from the ground up.

What really stood out to me was that both courses have a fully functional website where all their teaching materials—including Jupyter Notebooks—are not only hosted but can be explored interactively. That’s when I discovered the secret weapon behind them: **Jupyter Book**.

---

### **What is Jupyter Book?**

[Jupyter Book](https://jupyterbook.org/) is a Python library that turns collections of Markdown files and Jupyter Notebooks into a structured HTML website. You can organize content into chapters and sections, just like a digital textbook.

The best part? Readers can view the notebook outputs directly in the browser without needing to install anything or set up a cloud environment. Even better, you can enable **live coding** using platforms like *Binder*, *Google Colab*, or even *Thebe* to run code right on the website.

I built a mock course site called *Personalised Programming Language Enhancement* using Jupyter Book--feel free to check it out [here](https://yongxinlyu.github.io/PPLE/).

---

### **How I built my Jupyter Book**

**1. Install Jupyter Book**

```bash
pip install -U jupyter-book
```

**2. Create a sample book**

```bash
jupyter-book create mynewbook/
```

This generates a folder structure like this:

```
├── _config.yml          # Book settings (title, author, theme, etc.)
├── _toc.yml             # Table of contents (page structure)
├── intro.md             # First page of your book
├── notebooks.ipynb      # Sample notebook
├── markdown.md          # Sample markdown content
├── requirements.txt     # Python packages for running the book
```

**3. Modify key files**

- `_config.yml`: Set your book’s title, author, and theme.
- `_toc.yml`: Define the structure and order of pages/sections.
- `requirements.txt`: List any Python packages your notebooks use.

**4. Build your book**

```bash
jupyter-book build mynewbook/
```
This will generate an `_build/` folder with all your HTML files that you can preview locally.

---

### **Hosting on GitHub Pages**

There are two main ways to publish your book:

**1. Manual:** Push the HTML files in `_build/` to your GitHub repository.

**2. Automated (my favorite!):** Use GitHub Actions to automatically build and deploy the book every time you push updates.

Here’s how I set it up:

- Add a GitHub Actions file: `.github/workflows/deploy.yml`
(You can use this official [template](https://jupyterbook.org/en/stable/publish/gh-pages.html) or check out mine [here](https://github.com/yongxinlyu/PPLE/blob/main/.github/workflows/deploy.yml).)

- Go to your repository **Settings**:
    - Under **Actions > General**, set workflow permissions to “Read and write.”
	- Under **Pages**, choose to deploy from the gh-pages branch.

- I still build the site locally to test it before pushing changes, but I ignore the `_build/` folder using `.gitignore` to keep the repository clean.

Once it’s set up, GitHub will host your site and give you a public URL--perfect for sharing with students or collaborators!

---

### **Make it interactive**

You can add live execution options with just a few lines in `_config.yml`:

```yml
launch_buttons:
  colab_url: "https://colab.research.google.com"
  binderhub_url: "https://mybinder.org"
  thebe: true
```
This will add buttons to each notebook page so users can open the content directly in Colab, Binder, or even execute it live in the browser using Thebe.

Note: you have to make the github repository public to enable these options.

---

### **Final thoughts**

If you’re curious to see what others have done with Jupyter Book, check out this gallery:
[Executable Books Gallery](https://executablebooks.org/en/latest/gallery/).

While preparing this data science course, I’ve also been digging around for real-world datasets from the literature. Honestly, I was surprised at how *hard* it is to find well-organized, usable code and data--even when people say they’ve made them publicly available.

Most of the time, research code on GitHub is hard to read, lacks documentation, or is impossible to reproduce. That’s why I believe tools like Jupyter Book are a step in the right direction. They make it easier to share knowledge-—even with people who aren’t experienced coders. I hope more researchers give it a try and help make science more open, accessible, and reproducible.

