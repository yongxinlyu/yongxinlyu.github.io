---
layout: post
title: The One with Research Data Management
date: 2024-04-13 09:01:00
description: dude, where's my stuff?
tags: data
categories: sample-posts

---

### Why everyone needs a Research Data Management Plan?

Imagine this: you're starting your research project, diving into the world of data collection and analysis. Fast forward five years, and you're wrapping up your project, trying to make sense of all the data you've collected. But there's a problem – your memory has faded, and you can barely remember how you organized your data, let alone why you made certain decisions along the way. This scenario is all too familiar for many researchers, myself included.

In the early stages of my PhD, I, like many others, didn't fully appreciate the importance of research data management. The amount of data was small, and the need for an organized system seemed unnecessary. It wasn't until later, when my research project took a new direction and the amount of data grew exponentially, the need for effective data management has never been more apparent. With thousands of datasets to analyze, finding a single file can feel like searching for a needle in a haystack. But through this journey, I've learned valuable lessons that I wish I had known and implemented consistently throughout my PhD. These lessons could have made my life much easier, and I hope they can help you too.

### What is Research Data Management?

At its core, research data management is about ensuring that your data is organized, accessible, and understandable. It's about creating a roadmap for your data, so that years down the line, you can still make sense of it all. One of the most basic yet crucial aspects of research data management is backing up your data. Storing your data only on your local computer poses a significant risk to your research. This is something that every researcher should know and implement from day one.

In the following sections, I'll share some best practices that I've learned along the way, including file formats, naming conventions, and organizational strategies, that can help you manage your research data more effectively. Let's dive in!

### Best Practices in File Names


A very bad filename is **Bandgap, compound #13 recalculated final.xlsx**

1. Be descriptive. final is not descriptive
2. Use non-proprietary file format
3. Avoid special characters
4. Avoid space, use underscore instead
5. Don't make file identify depend on capitalization, keep it consistent throughout the project. e.g. try use lower case only
6. When using sequantial numbering, use leading zeros

| Data Type | Preferred Format | Proprietary format |
| :----------- | :------------: | :------------: |
| Tabular       |    .csv, .json    |    .xlsx  |
| Figure       |    .tif (long-term), .jpg (mid-term)    |     .psd |
| Text       |    .txt, .md,    |       .doc |
| Presentation       |    .pdf   |       .ppt |

Taking these into consideration, the revised file name **00013_bandgap.csv** looks much better.

### Best Practice in File Structure

Nesting folders might seem like a good idea at first, but it can quickly become a maze. Keep it simple and flat. And always include a README file in each folder to give others (and future you) a quick overview of what’s inside

Picture a project folder like this, looks familiar? 
- file1-new.py
- file1.py
- data-file.txt
- /old-stuff
- testoutput1.txt
- testoutput2.txt

- /01-rawdata
- /02-metadata
- /03-code
- /04-docs
- /05-figures

Raw data are data files directly output from a software, and meta data are processed data which is a description of your raw data. For example, data file directly output a calculation and meta data are useful information such as bandgap of a material.  Keep them separate and store your raw data in read only format. 

Always document you data. add readme file


### Best Practice of Version Control

Traditionally version control is done using a version control table alongside a document, showing a log of changing history of the file. This version control table typically includes the version number (e.g. v1, v2, v3 or 1.0, 1.1, 2.0), modified by whom, details of modifications made, and date modified.

Version control software offers much more convenience over the traditional way of manually log the change and makes collaborations much easier. Some of the online storage platform, such as google drive, onedrive offers the option for version history. Git is the most popular version control software, which at first commonly used by software developers and now adopted widely in academia. Here are some of my tips of using git and Github.

- use `git initiate` to start tracking a new directory. Git will create a hidden directory called .git which contains the changing information of the current directory

- use `git remote` command to add the current directory to github

- always create a README.md [link to sample README files](https://github.com/matiassingers/awesome-readme?tab=readme-ov-file) 

- use .gitignore to ignore files that you don't want to track change. For example, you could create /tmp directory to store temperary data that will eventually be deleted. You can ignore some of the application system specific files, such as .DS_store in Macbook.


### Resources

[Research Data Management @ NYU library](https://guides.nyu.edu/data_management/home)

[Data Management workshops @ MIT](https://libraries.mit.edu/data-management/services/workshops/)

[Earth Lab](https://www.earthdatascience.org/courses/intro-to-earth-data-science/open-reproducible-science/get-started-open-reproducible-science/best-practices-for-organizing-open-reproducible-science/)
