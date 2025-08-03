---
layout: post
title: The One with Research Data Management
date: 2024-04-14 09:01:00
description: dude, where's my stuff?
tags: figures
categories: research

---

### Why everyone needs a Research Data Management Plan?

Imagine this: you're starting your research project, diving into the world of data collection and analysis. Fast forward five years, and you're wrapping up your project, trying to make sense of all the data you've collected. But there's a problem – your memory has faded, and you can barely remember how you organized your data, let alone why you made certain decisions along the way. This scenario is all too familiar for many researchers, myself included.

In the early stages of my PhD, I, like many others, didn't fully appreciate the importance of research data management. The amount of data was small, and the need for an organized system seemed unnecessary. It wasn't until later, when my research project took a new direction and the amount of data grew exponentially, the need for effective data management has never been more apparent. With thousands of datasets to analyze, finding a single file can feel like searching for a needle in a haystack. But through this journey, I've learned valuable lessons that I wish I had known and implemented consistently throughout my PhD. These lessons could have made my life much easier, and I hope they can help you too.

### What is Research Data Management?

At its core, research data management is about ensuring that your data is organized, accessible, and understandable. It's about creating a roadmap for your data, so that years down the line, you can still make sense of it all. One of the most basic yet crucial aspects of research data management is backing up your data. Storing your data only on your local computer poses a significant risk to your research. This is something that every researcher should know and implement from day one.

In the following sections, I'll share some best practices that I've learned along the way, including file formats, naming conventions, and organizational strategies, that can help you manage your research data more effectively. Let's dive in!

### Best Practices in File Names

Have you ever come across a file with a name like "Bandgap for Compound #13 recalculated final.xlsx" and wondered what "final" actually means?  A revised file name "00013_bandgap.csv" is much clearer and more informative. Here are some tips to avoid confusion and keep your file names clear the meaningful:

**Be descriptive**: "final" doesn't tell us much. Be specific!

**Use non-proprietary file format**: Keep it open and accessible. Stick to open formats suggested in the table below.

**Avoid special characters**: Special characters can cause issues, especially when sharing files across different platforms.

**Say no to space**: Use underscore instead.

**Keep it consistent**: Don't make file identity depend on capitalization. Keep if consistent throughout the project and document all naming conventions, e.g. use lower case only.

**Use leading zeros for numbering**: using 001, 002, 003, ..., 100 instead of 1, 2, 3, ..., 100. This helps maintain a consistent order when sorting files.

| Data Type | Preferred Format | Proprietary format |
| :----------- | :------------: | :------------: |
| Tabular       |    .csv, .json    |    .xlsx  |
| Figure       |    .tif (long-term), .jpg (mid-term)    |     .psd |
| Text       |    .txt, .md,    |       .doc |
| Presentation       |    .pdf   |       .ppt |

### Best Practice in File Structure

Let's take a look at a typical project folder structure. Sound familiar?

<pre>
.
├── file1
├── directory1/
│   ├── process-data.ipynb
│   ├── frontier-level-new.csv
│   └── old-stuff/
│       ├── file2
│       └── figures/
│           └── new-figure/
│                └── figure1.tif/
├── file1-new.py
├── file1.py
├── data-file.txt
├── testoutput1.txt
└── testoutput2.txt
</pre>

Now, let's reorganize it for clarity and efficiency:

<pre>
.
├── 01-rawdata/
│   ├── VASP-result.html
│   └── Gaussian-result
├── 02-metadata/
│   ├── frontier-level.csv
│   ├── energy-level-alignment.csv
│   └── organic-descriptor.csv
├── 03-code/
│   ├── machine-learning.ipynb
│   └── write-VASP-input.py
├── 04-docs/
└── 05-figures/
</pre>

A few tricks I've learned along the way:

**Keep it flat:** Nesting folders might seem like a good idea, but it can quickly become a maze. How many clicks does it take you to get to a file?

**Separate different types of files:** Organize your files by type for easy access and understanding. Number the folders them when possible.

**Distinguish between raw data and metadata:** Raw data is the file directly obtained from a software of instrument. It should be read-only. (Never modify your raw data!) Metadata describes your raw data, which provides insights into the raw data for those without expertise in the specific calculation method. For example, the output file from a DFT calculation is raw data, while the energy level or bandgap is metadata.

**Use existing data science project as template** see [cookiecutter data science project](https://drivendata.github.io/cookiecutter-data-science/) 

### Best Practice of Version Control

Version control is like having a time machine for your files, allowing you to track changes and collaborate more efficiently. 

Traditionally version control is done using a version control table alongside a document, showing a log of changing history of the file. This version control table typically includes the version number (e.g. v1, v2, v3 or 1.0, 1.1, 2.0), modified by whom, details of modifications made, and date modified.

Today, version control software like Git offers a more convenience and efficient way to manage versions and collaborate with others. Git, orginally used mainly by software developers, is now widely adopted in academia and beyond. Here are some of my tips for using git and Github.

**Setting up**

```bash
# Run this anytime to check status of your directory
$ git status

# Start tracking a new directory with default branch named as 'main'
$ git inite -b main

# which is equivalent to 
$ git init
$ git branch -m main
# Above command create .git which contains the changing information of the current directory

# Add the local directory to existing github repository.
# Replace 'REMOTE-URL' with the repository's full URL on Github 
$ git remote add origin REMOTE-URL

# Run this anytime to verify the remote URL
$ git remote -v

```

**Update files**

All of the following steps can also be done in Visual Studio Code.

``` bash
# Add files to git repository and stage, i.e. start tracking change for this file
$ git add ./file-to-add-and-stage

# Commit the files that you've staged
$ git commit -m "Your message for this commit"

# Push the changes in your local repository to GitHub
$ git push -u origin main

```


**Tips**

**Add README file:** Always create a README.md in every folder. Ask yourself: How did you get from raw data to the final product of research? What are your file naming conventions? What is your folder hierarchy?

**Ignore files:** Create `.gitignore` at the root of your repository to ignore files that you don't want to track change.
```bash
$ cat .gitignore

# OS generated files
**/.DS_Store
# Temporary files
**/tmp
# Too large files
./files-too-large-in-size
```

### Workflow and Collaborating with non-coders
`Coming soon`

Visual Studio Code >> OneDrive >> GitHub >> Teams
- Visual Studio Code: Programming
- OneDrive: Data storage, collaborate writing
- GitHub: Code management
- Teams: Communication, Project management

Using shared folder for collaborate writing:
Although git is widely adopted by researchers in computer science, computational materials science, Git is still used by minority in academia. When collaborating with supervisor, external collaborators, it is still best to use a platform widely adopted, such as word document, or google doc.
non-coder option: LaTeX (still not common)


### Resources

[Research Data Management @ NYU library](https://guides.nyu.edu/data_management/home)

[Data Management workshops @ MIT](https://libraries.mit.edu/data-management/services/workshops/)

[Earth Lab](https://www.earthdatascience.org/courses/intro-to-earth-data-science/open-reproducible-science/get-started-open-reproducible-science/best-practices-for-organizing-open-reproducible-science/)

[Youtube tutorial: Using Github for researchers](https://www.youtube.com/watch?v=6OkOmPqumWo&list=LL&index=3)

[Link to sample README files](https://github.com/matiassingers/awesome-readme?tab=readme-ov-file)