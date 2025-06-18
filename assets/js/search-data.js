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
  },{id: "nav-phd-thesis",
          title: "PhD thesis",
          description: "Brief description of my PhD thesis and links to the related source codes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd-thesis/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "List of my publications, in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-1rt485",
              title: "1RT485",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/1RT485/";
              },
            },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "news-i-have-been-awarded-with-the-ifac-young-author-award-for-the-paper-stability-of-discrete-time-feed-forward-neural-networks-in-narx-configuration-presented-at-sysid-2021",
          title: 'I have been awarded with the IFAC Young Author Award for the paper...',
          description: "",
          section: "News",},{id: "news-i-started-my-abroad-research-stay-at-uppsala-university-sweden-joining-the-research-group-of-prof-thomas-schön",
          title: 'I started my abroad Research Stay at Uppsala University, Sweden, joining the research...',
          description: "",
          section: "News",},{id: "news-i-presented-my-paper-nonlinear-mpc-for-offset-free-tracking-of-systems-learned-by-gru-neural-networks-at-micnon-2021",
          title: 'I presented my paper Nonlinear MPC for Offset-Free Tracking of systems learned by...',
          description: "",
          section: "News",},{id: "news-the-paper-on-the-stability-properties-of-gated-recurrent-units-neural-networks-has-been-published-in-elsevier-systems-amp-amp-control-letters-if-you-are-interested-in-the-article-you-can-get-a-free-copy-using-this-author-share-link-or-via-arxiv",
          title: 'The paper On the stability properties of Gated Recurrent Units neural networks has...',
          description: "",
          section: "News",},{id: "news-the-preprint-of-our-latest-paper-entitled-on-recurrent-neural-networks-for-learning-based-control-recent-results-and-ideas-for-future-developments-is-now-available-on-arxiv",
          title: 'The preprint of our latest paper, entitled On Recurrent Neural Networks for learning-based...',
          description: "",
          section: "News",},{id: "news-i-joined-the-elo-x-program-as-an-associate-ph-d-fellow",
          title: 'I joined the ELO-X program as an Associate Ph.D. Fellow.',
          description: "",
          section: "News",},{id: "news-the-paper-recurrent-neural-network-based-internal-model-control-design-for-stable-nonlinear-systems-has-been-accepted-at-the-elsevier-european-journal-of-control-the-published-version-is-now-available-on-publisher-s-website",
          title: 'The paper Recurrent Neural Network-based Internal Model Control design for stable nonlinear systems...',
          description: "",
          section: "News",},{id: "news-the-paper-on-recurrent-neural-networks-for-learning-based-control-recent-results-and-ideas-for-future-developments-has-been-accepted-at-the-elsevier-journal-of-process-control-the-published-version-is-now-available-on-publisher-s-website",
          title: 'The paper On Recurrent Neural Networks for learning-based control: recent results and ideas...',
          description: "",
          section: "News",},{id: "news-on-february-14-2023-i-defended-my-phd-thesis-entitled-reconciling-deep-learning-and-control-theory-recurrent-neural-networks-for-model-based-control-design-supervisor-prof-riccardo-scattolini-co-supervisor-prof-marcello-farina-more-information-on-my-doctoral-dissertation-can-be-found-on-the-related-page",
          title: 'On February 14, 2023, I defended my PhD thesis, entitled Reconciling deep learning...',
          description: "",
          section: "News",},{id: "news-our-paper-deep-long-short-term-memory-networks-stability-properties-and-experimental-validation-has-bee-presented-at-the-2023-european-control-conference-ecc23-the-manuscript-is-available-on-ieee-xplore",
          title: 'Our paper Deep Long-Short Term Memory networks: Stability properties and Experimental validation has...',
          description: "",
          section: "News",},{id: "news-on-june-19-2023-i-started-my-position-as-a-postdoctoral-researcher-in-machine-learning-for-control-at-uppsala-university-sweden-in-the-systems-and-control-division-during-this-activity-i-will-collaborate-with-prof-thomas-schön-and-prof-per-mattsson",
          title: 'On June 19, 2023, I started my position as a Postdoctoral Researcher in...',
          description: "",
          section: "News",},{id: "news-the-paper-robust-offset-free-nonlinear-model-predictive-control-for-systems-learned-by-neural-nonlinear-autoregressive-exogenous-models-has-been-published-on-the-international-journal-of-robust-and-nonlinear-control-the-article-is-available-in-open-access-at-the-publisher-website",
          title: 'The paper Robust offset-free nonlinear model predictive control for systems learned by neural...',
          description: "",
          section: "News",},{id: "news-i-am-honored-to-announce-that-i-received-the-dimitris-n-chorafas-phd-award",
          title: 'I am honored to announce that I received the Dimitris N. Chorafas PhD...',
          description: "",
          section: "News",},{id: "news-the-paper-nonlinear-mpc-design-for-incrementally-iss-systems-with-application-to-gru-networks-has-been-published-on-automatica-and-it-is-available-on-publisher-s-website",
          title: 'The paper Nonlinear MPC design for incrementally ISS systems with application to GRU...',
          description: "",
          section: "News",},{id: "news-the-article-structured-state-space-models-are-deep-wiener-models-has-been-accepted-for-the-20th-system-identification-symposium-sysid-2024",
          title: 'The article Structured state-space models are deep Wiener models has been accepted for...',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-equivalence-of-direct-and-indirect-data-driven-predictive-control-approaches-has-been-accepted-for-publication-at-the-ieee-control-systems-letters",
          title: 'Our paper On the equivalence of direct and indirect data-driven predictive control approaches...',
          description: "",
          section: "News",},{id: "news-on-may-31-i-will-give-a-seminar-at-epfl-entitled-learning-stable-recurrent-neural-networks-for-model-predictive-control-some-resources-on-this-talk-can-be-found-at-this-link",
          title: 'On May 31 I will give a seminar at EPFL entitled “Learning stable...',
          description: "",
          section: "News",},{id: "news-from-september-30-to-october-2-i-will-participate-in-ernsi-workshop-2024-and-present-the-poster-structured-state-space-models-are-deep-wiener-models-see-you-there",
          title: 'From September 30 to October 2, I will participate in ERNSI Workshop 2024,...',
          description: "",
          section: "News",},{id: "news-from-october-2024-to-january-2025-i-will-be-co-responsible-of-the-phd-course-model-predictive-control-towards-frontier-applications-in-learning-and-control-at-uppsala-university-more-information-on-the-course-website",
          title: 'From October 2024 to January 2025, I will be co-responsible of the PhD...',
          description: "",
          section: "News",},{id: "news-on-december-5-i-will-give-a-seminar-at-kth-division-of-decision-and-control-systems-entitled-learning-stable-recurrent-neural-networks-for-model-predictive-control-some-resources-on-this-talk-can-be-found-at-this-link",
          title: 'On December 5 I will give a seminar at KTH, Division of Decision...',
          description: "",
          section: "News",},{id: "news-our-extended-abstract-from-system-identification-to-sequence-models-a-primer-on-structured-state-space-models-will-be-presented-at-reglermöte-2025-june-12-lund-sweden-see-this-page-for-more-details",
          title: 'Our Extended Abstract From System Identification to sequence models: a primer on Structured...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%62%69%6F.%62%6F%6E%61%73%73%69@%70%6F%6C%69%6D%69.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bonassifabio", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/fabio-bonassi", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000‐0002‐7270‐8185", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
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
