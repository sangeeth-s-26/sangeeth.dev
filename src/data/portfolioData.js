export const personalDetails = {
  name: "SANGEETH",
  title: "Python Full Stack Developer",
  tagline: "Building digital experiences with Python & React.",
  subtitle: "Python Full Stack Developer focused on building modern, scalable and user-friendly web applications.",
  bio: "I am a passionate Python Full Stack Developer who enjoys transforming complex requirements into elegant, high-performing web applications. My expertise spans Python, Django, Django REST Framework, React.js, JavaScript, and MySQL.",
  currentlyFocusedOn: "building scalable microservices, optimizing Django REST Framework queries, and crafting sleek, accessible frontend interfaces with React.",
  email: "sangeethsatheesan26@gmail.com",
  phone: "+91 97782 07912",
  location: "India",
  socials: {
    github: "https://github.com/sangeeth-s-26",
    linkedin: "https://www.linkedin.com/in/s-sangeeth",
    email: "mailto:sangeethsatheesan26@gmail.com",
    phone: "tel:+919778207912",
    whatsapp: "https://wa.me/919778207912",
  }
};

export const statsData = [
  { value: 2, symbol: "+", label: "Projects Built", subtext: "Full Stack & ML Applications" },
  { value: 8, symbol: "+", label: "Core Technologies", subtext: "Python, Django, React & MySQL" },
  { value: 1, symbol: "+", label: "Years Learning & Building", subtext: "Dedicated Hands-on Experience" }
];

export const skillsData = [
  {
    category: "FRONTEND",
    items: [
      { name: "React.js", icon: "Code2" },
      { name: "JavaScript", icon: "FileCode2" },
      { name: "HTML5", icon: "Layout" },
      { name: "CSS3", icon: "Palette" },
      { name: "Bootstrap", icon: "Grid" },
    ]
  },
  {
    category: "BACKEND",
    items: [
      { name: "Python", icon: "Terminal" },
      { name: "Django", icon: "Server" },
      { name: "Django REST Framework", icon: "Cpu" },
    ]
  },
  {
    category: "DATABASE",
    items: [
      { name: "MySQL", icon: "Database" },
    ]
  },
  {
    category: "TOOLS",
    items: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "Postman", icon: "Send" },
      { name: "VS Code", icon: "Laptop" },
    ]
  }
];

export const projectsData = [
  {
    number: "01",
    id: "muzo",
    title: "MUZO",
    subtitle: "Music Streaming Web Application",
    description: "A full-featured music streaming web application with real-time audio playback, interactive playlist management, and user library persistence.",
    technologies: ["React.js", "Django REST Framework", "MySQL"],
    githubUrl: "https://github.com/sangeeth-s-26",
    liveUrl: "https://muzo-app.demo",
    image: "/muzo_preview.png",
    problem: "Existing lightweight web players lack real-time responsive playback with unified backend playlist state synchronization.",
    solution: "Built a modular React audio player connected to a Django REST Framework backend with token-based session persistence and optimized MySQL queries.",
    features: [
      "Real-time audio player controls & seek bar",
      "User-customized playlists & song libraries",
      "RESTful endpoint integration for instant track fetching",
      "Clean responsive audio control drawer"
    ]
  },
  {
    number: "02",
    id: "billnova",
    title: "BILLNOVA",
    subtitle: "Billing & Invoice Management System",
    description: "An intuitive enterprise web billing platform for small businesses to generate professional invoices, monitor inventory levels, and process calculations.",
    technologies: ["React.js", "Django REST Framework", "MySQL"],
    githubUrl: "https://github.com/sangeeth-s-26",
    liveUrl: "https://billnova.demo",
    image: "/billnova_preview.png",
    problem: "Small business owners often struggle with cumbersome, manual billing software that lacks instant PDF export and stock synchronization.",
    solution: "Engineered a streamlined billing portal using React data tables and a Django REST API for fast calculations and dynamic invoice PDF generation.",
    features: [
      "Automated stock level tracking and low-inventory alerts",
      "Instant PDF invoice creation & print preview",
      "Client & transaction management portal",
      "Analytical financial reporting widgets"
    ]
  }
];

export const experienceData = [
  {
    role: "Python Full Stack Developer Intern",
    company: "Luminar Technolab",
    period: "Internship",
    location: "Calicut, India",
    responsibilities: [
      "Developed full-stack web applications using Python, Django, Django REST Framework, and React.js.",
      "Designed relational database schemas and optimized queries using MySQL.",
      "Built secure RESTful APIs with token authentication and serialization.",
      "Collaborated in Git version control workflows, component architecture, and UI refinement."
    ],
    technologies: ["Python", "Django", "Django REST Framework", "React.js", "JavaScript", "MySQL", "Git"]
  }
];

export const educationData = [
  {
    degree: "BCA — Bachelor of Computer Applications",
    university: "Calicut University",
    year: "2022 – 2025",
    details: "Core coursework focused on Software Engineering, Data Structures, Database Systems (RDBMS), Object-Oriented Programming with Python, and Web Development."
  }
];
