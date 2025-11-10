// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "&#39;see my google scholar page for a full list of publications.&#39;",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This page is under construction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-finding-my-employability-after-the-phd",
        
          title: "Finding my employability after the PhD",
        
        description: "finding a job is hard TT",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/job-hunting/";
          
        },
      },{id: "post-diy-perovskite-crystal-model-origami-knitting-and-3d-printing",
        
          title: "DIY Perovskite crystal model--Origami, knitting and 3D printing",
        
        description: "a hands-on approach to science outreach and teaching materials science",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/perovskite-diy-model/";
          
        },
      },{id: "post-from-a-distant-dream-to-reality-my-ai4science-journey",
        
          title: "From a distant dream to reality -- my AI4Science journey",
        
        description: "a long way back to machine learning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/my-AI4Science-journey/";
          
        },
      },{id: "post-a-new-chapter-to-my-blog",
        
          title: "A new chapter to my blog",
        
        description: "after one year of blogging",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/blog-update/";
          
        },
      },{id: "post-life-after-phd",
        
          title: "Life after PhD",
        
        description: "standing in the fog before the sunrise",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/life-after-phd/";
          
        },
      },{id: "post-what-was-on-my-phd-desk",
        
          title: "What was on my PhD desk?",
        
        description: "a farewell to the space where I coded, wrote, and occasionally dozed off",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/whats-on-my-phd-desk/";
          
        },
      },{id: "post-what-s-really-behind-unsw-s-top-20-qs-ranking",
        
          title: "What’s really behind UNSW’s top 20 QS ranking?",
        
        description: "a data-driven dive into what the rankings actually measure",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/QS-ranking/";
          
        },
      },{id: "post-some-thoughts-about-teaching",
        
          title: "Some thoughts about teaching",
        
        description: "from someone who just started",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/teaching/";
          
        },
      },{id: "post-from-jupyter-notebook-to-website",
        
          title: "From Jupyter notebook to website",
        
        description: "sharing teaching materials with jupyter-book",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/jupyter-book/";
          
        },
      },{id: "post-ocean-therapy-at-coogee",
        
          title: "Ocean therapy at coogee",
        
        description: "my favourite winter ritual",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ocean-swim/";
          
        },
      },{id: "post-casual-work-as-a-phd-student",
        
          title: "Casual work as a PhD student",
        
        description: "balancing research and rent",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/casual-job/";
          
        },
      },{id: "post-easy-breakfasts-for-busy-mornings",
        
          title: "Easy breakfasts for busy mornings",
        
        description: "what I eat in a day as a PhD student",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/breakfast-ideas/";
          
        },
      },{id: "post-books-i-39-ve-been-reading",
        
          title: "Books I&#39;ve been reading",
        
        description: "a list of PhD survival guides and memoirs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/books-I-read/";
          
        },
      },{id: "post-my-phd-macbook-is-my-lab-bench",
        
          title: "My PhD macBook is my lab bench",
        
        description: "what’s in my digital toolbox",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/my-macbook/";
          
        },
      },{id: "post-the-thesis-writing-journey",
        
          title: "The thesis writing journey",
        
        description: "turns out, it wasn’t that bad.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/thesis-writing-journey/";
          
        },
      },{id: "post-can-chatgpt-write-your-thesis-in-an-hour",
        
          title: "Can ChatGPT write your thesis in an hour?",
        
        description: "a reality check",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/chatgpt-for-thesis-writing/";
          
        },
      },{id: "post-colour-choices-in-scientific-plots",
        
          title: "Colour choices in scientific plots",
        
        description: "how to choose palettes that work",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/using-color-in-scientific-plots/";
          
        },
      },{id: "post-seaborn-objects-interface-cheatsheet",
        
          title: "Seaborn.objects interface cheatsheet",
        
        description: "a comprehensive guide",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Seaborn-cheatsheet/";
          
        },
      },{id: "post-ai-tools-for-literature-review",
        
          title: "AI tools for literature review",
        
        description: "separating hype from reality",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/AI-tools-for-literature-review/";
          
        },
      },{id: "post-should-i-stay-in-academia-exploring-career-paths-beyond-phd",
        
          title: "Should I stay in academia? exploring career paths beyond PhD",
        
        description: "reflecting on the final stretch of my PhD",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/stay-in-academia/";
          
        },
      },{id: "post-data-figure-workflow-i-use",
        
          title: "Data figure workflow I use",
        
        description: "on preparing data figures",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/data-figure-workflow/";
          
        },
      },{id: "post-creating-scientific-figures-for-high-impact-journals",
        
          title: "Creating scientific figures for high-impact journals",
        
        description: "lessons learned the hard way",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/creating-scientific-figure-for-high-impact-journals/";
          
        },
      },{id: "post-the-one-with-figure-formatting",
        
          title: "The one with figure formatting",
        
        description: "figure formatting in research journals",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/figure-formatting/";
          
        },
      },{id: "post-the-one-with-research-data-management",
        
          title: "The one with research data management",
        
        description: "dude, where&#39;s my stuff?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/research-data-management/";
          
        },
      },{id: "projects-ai-for-2d-perovskites",
          title: 'AI for 2D perovskites',
          description: "Machine learning meets materials discovery--my PhD journey in designing 2D perovskites.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-learning-to-teach",
          title: 'learning to teach',
          description: "reflections on teaching, student engagement, and finding my voice in classroom.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-data-science-in-the-wild",
          title: 'data science in the wild',
          description: "exploring real-world datasets through code and curiosity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-polymer-clay-diaries",
          title: 'polymer clay diaries',
          description: "miniature crafts and creative breaks from research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%6E%67%78%69%6E.%6C%79%75@%75%6E%73%77.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yongxinlyu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yongxinlyu", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7758-2219", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UMQWBRQAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yongxinlyu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
