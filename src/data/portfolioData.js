export const personalDetails = {
  name: "Surampudi Shashank Sai",
  title: "AI Engineer × Creative Technologist",
  tagline: "• AI • DESIGN • CREATIVITY",
  bio: "Building intelligent systems and meaningful digital experiences at the intersection of AI, design, and creativity. Focused on deep learning, generative AI, and human-centered user interfaces.",
  idBadge: "SHASHANK_SAI_AI",
  status: "Verified AI Engineer",
  location: "Hyderabad, Telangana, India",
  educationDegree: "B.Tech AI & ML",
  institution: "MLR Institute of Technology",
  cgpa: "7.13",
  email: "ssshashanksai@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:ssshashanksai@gmail.com",
  }
};

export const philosophyStats = [
  { stat: "7.13", label: "B.Tech CGPA", detail: "MLR Institute of Technology" },
  { stat: "AI & ML", label: "Core Specialization", detail: "Neural Networks & Deep Learning" },
  { stat: "4+", label: "Creative & Tech Roles", detail: "Leadership & Industry Internships" },
  { stat: "3", label: "Featured Projects", detail: "GenAI, NLP & Time-Series" }
];

export const scopePillars = [
  {
    title: "Artificial Intelligence",
    desc: "Developing intelligent neural architectures, LLM pipelines, and deep learning models to process complex multimodal data.",
    icon: "Brain"
  },
  {
    title: "User Experience & UI Design",
    desc: "Crafting intuitive, glassmorphic interfaces and responsive design systems that make technical AI tools accessible.",
    icon: "Layout"
  },
  {
    title: "Creative Strategy & Branding",
    desc: "Directing visual design identities, event branding, and high-impact digital graphics for communities and tech organizations.",
    icon: "Palette"
  },
  {
    title: "Systems & Architecture",
    desc: "Building production-grade full-stack workflows using modern React, Python APIs, and cloud infrastructure.",
    icon: "Cpu"
  }
];

export const experienceData = [
  {
    role: "UI/UX Designer",
    company: "Knowvation Learnings India Pvt. Ltd.",
    type: "Internship / Industry Role",
    date: "March 2024 – July 2024",
    location: "Remote / India",
    verified: true,
    highlights: [
      "Engineered responsive UI wireframes and user interaction flows for e-learning platforms.",
      "Conducted usability audits and accessibility improvements to boost learner engagement by 35%.",
      "Collaborated closely with backend developers to translate Figma component systems into production React components."
    ],
    skills: ["UI/UX Design", "Figma", "Design Systems", "Prototyping", "User Research"]
  },
  {
    role: "Head Graphic Designer",
    company: "Club Literati — MLRIT",
    type: "Organizational Leadership",
    date: "August 2023 – Present",
    location: "Hyderabad, India",
    verified: true,
    highlights: [
      "Spearheaded visual branding, social media creative campaigns, and event banners reaching over 3,000+ campus members.",
      "Mentored junior designers in design fundamentals, typography hierarchy, and tool workflows.",
      "Designed digital merchandise, event brochures, and interactive presentations for college fests."
    ],
    skills: ["Brand Identity", "Graphic Design", "Leadership", "Creative Direction", "Typography"]
  },
  {
    role: "Designing Advisor",
    company: "Google Developer Groups On Campus (GDGC) — MLRIT",
    type: "Advisory & Mentorship",
    date: "September 2025 – Present",
    location: "Hyderabad, India",
    verified: true,
    highlights: [
      "Providing strategic design guidance and visual identity benchmarks for GDGC hackathons and technical workshops.",
      "Reviewing UI/UX prototypes submitted by student developer teams during annual hackathons.",
      "Bridging the gap between software engineering standards and visual design aesthetics."
    ],
    skills: ["Design Advisory", "Hackathons", "Mentorship", "Community Building", "Visual Systems"]
  },
  {
    role: "B.Tech in Artificial Intelligence & Machine Learning",
    company: "MLR Institute of Technology",
    type: "Academic Degree",
    date: "2022 – 2026",
    location: "Hyderabad, India",
    verified: true,
    highlights: [
      "Core Coursework: Data Structures, Neural Networks, Deep Learning, Natural Language Processing, Computer Vision.",
      "Maintained a cumulative CGPA of 7.13 across rigorous computer science and AI coursework.",
      "Active participant in technical symposiums, research paper presentations, and machine learning projects."
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Algorithms", "Data Analysis"]
  }
];

export const projectsData = [
  {
    id: "itihasa",
    title: "ITIHASA: Echoes of the Past",
    subtitle: "AI-Powered Interactive Historical RPG",
    category: "Generative AI",
    timeframe: "Jan 2024 – Present",
    image: "/project_itihasa.jpg",
    shortDesc: "An immersive narrative game engine that leverages generative AI and LLMs to create dynamic, branching historical storylines based on player decisions.",
    fullDesc: "ITIHASA is a novel AI-driven role-playing experience that blends historical context with real-time generative dialogue. Using custom transformer prompts and stateful story graphs, the system dynamically generates character responses, historical consequences, and adaptive quest paths without static scripting.",
    architecture: [
      "LLM Narrative Engine: Fine-tuned prompt chains for context preservation.",
      "Dynamic Story Tree Graph: State management for multi-branch player actions.",
      "Cyberpunk-Historical Fusion UI: Custom React interface with interactive choice trees."
    ],
    tags: ["Generative AI", "Python", "Transformers", "LangChain", "React", "State Graphs"],
    githubUrl: "https://github.com/shashanksai/itihasa-rpg",
    liveDemoUrl: "#"
  },
  {
    id: "mindlink",
    title: "MindLink",
    subtitle: "Dual-Model Context-Aware Mental Health Platform",
    category: "NLP & Transformers",
    timeframe: "Oct 2023 – Dec 2023",
    image: "/project_mindlink.jpg",
    shortDesc: "Dual-model context-aware mental health support system utilizing NLP transformer models for real-time sentiment tracking and empathetic dialogue.",
    fullDesc: "MindLink combines a lightweight EEG/sentiment classifier model with a contextual conversational transformer to offer supportive, non-clinical mental health triage. It analyzes text input for emotional valence, stress cues, and cognitive load indicators to personalize wellness interventions.",
    architecture: [
      "Sentiment Classifier: BERT fine-tuned on emotion and stress detection datasets.",
      "Context Memory Engine: Vector embedding store for conversational history.",
      "Privacy Triage Protocol: On-device encryption for sensitive query handling."
    ],
    tags: ["NLP", "Transformers", "PyTorch", "FastAPI", "Tailwind CSS", "BERT"],
    githubUrl: "https://github.com/shashanksai/mindlink-ai",
    liveDemoUrl: "#"
  },
  {
    id: "lstm-autoencoder",
    title: "LSTM Autoencoder",
    subtitle: "Time-Series Anomaly Detection & Seismic Forecasting",
    category: "Deep Learning",
    timeframe: "Aug 2023 – Oct 2023",
    image: "/project_lstm.jpg",
    shortDesc: "Deep learning time-series model designed for telemetry anomaly detection and earthquake magnitude prediction using reconstruction error thresholds.",
    fullDesc: "An unsupervised anomaly detection architecture built using Long Short-Term Memory (LSTM) Autoencoders. The model learns normal seismic noise patterns from historical sensor streams and flags threshold breaches as pre-seismic indicators or hardware anomalies.",
    architecture: [
      "LSTM Encoder-Decoder: Multi-layer sequence-to-sequence reconstruction.",
      "Threshold Analytics: Mahalanobis and MSE error score computation.",
      "Telemetry Dashboard: Real-time waveform rendering and anomaly alert panel."
    ],
    tags: ["TensorFlow", "Keras", "Python", "Pandas", "Matplotlib", "Time-Series"],
    githubUrl: "https://github.com/shashanksai/lstm-earthquake-autoencoder",
    liveDemoUrl: "#"
  }
];

export const designsData = [
  {
    id: "des-literati",
    title: "Club Literati — Literary Fest Brand Identity & Official Poster",
    category: "Brand Identity",
    client: "Club Literati — MLRIT",
    image: "/design_literati.jpg",
    isVideo: false,
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "Typography Systems"],
    shortDesc: "Official visual branding, futuristic neon book typography, and promotional event poster for campus literary festival.",
    fullDesc: "Designed the complete visual identity and campaign graphics for Club Literati's annual fest. Built glowing cyberpunk-literary aesthetic guidelines, social media assets, event badges, and venue banners.",
    year: "2024"
  },
  {
    id: "des-knowvation",
    title: "Knowvation Learnings — Glassmorphic E-Learning UI UX Suite",
    category: "UI/UX Prototypes",
    client: "Knowvation Learnings India Pvt. Ltd.",
    image: "/design_knowvation_ui.jpg",
    isVideo: false,
    tools: ["Figma", "Design Systems", "Prototyping", "User Flows"],
    shortDesc: "Mobile app screen wireframes, dark mode glassmorphic learning dashboard, and interactive student progress widgets.",
    fullDesc: "Comprehensive UI UX redesign for Knowvation's e-learning web platform. Created component design tokens, course video player views, and responsive mobile mockups.",
    year: "2024"
  },
  {
    id: "des-itihasa-ui",
    title: "ITIHASA RPG — GenAI Story Tree & Choice Interface UI",
    category: "UI/UX Prototypes",
    client: "Core Systems Lab",
    image: "/project_itihasa.jpg",
    isVideo: false,
    tools: ["Figma", "React UI Components", "Generative UX"],
    shortDesc: "Cyberpunk-historical fusion game HUD interface featuring dynamic branching decision trees and live character dialogue UI.",
    fullDesc: "User interface design for the ITIHASA AI game engine, displaying live historical pathway nodes, decision consequences, and inventory status overlays.",
    year: "2024"
  },
  {
    id: "des-mindlink-motion",
    title: "MindLink AI — Motion Graphics & Neural Interface Showcase",
    category: "Video Reels",
    client: "NLP & Motion Art",
    image: "/project_mindlink.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    isVideo: true,
    tools: ["After Effects", "Premiere Pro", "Figma Motion", "Sound Design"],
    shortDesc: "Motion graphics presentation reel highlighting animated brainwave graphs, real-time sentiment analytics, and AI dialogue UI.",
    fullDesc: "A high-energy motion trailer demonstrating MindLink's context-aware mental health AI interface. Features animated 3D brain scans and sentiment telemetry HUDs.",
    year: "2023"
  },
  {
    id: "des-gdgc-hackathon",
    title: "GDGC MLRIT — Developer Hackathon Visual Suite",
    category: "Graphic Art",
    client: "GDGC — MLRIT",
    image: "/design_literati.jpg",
    isVideo: false,
    tools: ["Adobe Illustrator", "Photoshop", "Brand Strategy"],
    shortDesc: "Cyberpunk developer hackathon posters, digital badges, social media toolkits, and event banners.",
    fullDesc: "Visual brand direction for Google Developer Groups On Campus hackathons, creating unified digital art assets and promotional designs.",
    year: "2025"
  },
  {
    id: "des-lstm-motion",
    title: "Seismic Telemetry — Dark Analytics UI Motion Reel",
    category: "Video Reels",
    client: "Deep Learning Systems",
    image: "/project_lstm.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    isVideo: true,
    tools: ["After Effects", "Motion Canvas", "Figma"],
    shortDesc: "Telemetry animation reel showcasing real-time earthquake waveform analytics and autoencoder anomaly threshold triggers.",
    fullDesc: "Motion graphics trailer illustrating real-time time-series telemetry data flows and seismic prediction telemetry dashboards.",
    year: "2023"
  }
];

export const skillsCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Transformers", "Generative AI", "LLMs & RAG", "Computer Vision", "Scikit-Learn", "OpenCV"]
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript (ES6+)", "C++", "SQL", "HTML5 & CSS3"]
  },
  {
    title: "Frameworks & Web",
    skills: ["React.js", "Vite", "FastAPI", "Node.js", "Tailwind CSS", "Framer Motion", "REST APIs"]
  },
  {
    title: "Design & Workflow",
    skills: ["UI/UX Design", "Figma", "Design Systems", "Brand Identity", "Git & GitHub", "Postman", "VS Code"]
  }
];

export const servicesOffered = [
  {
    title: "AI & ML System Engineering",
    desc: "Architecting custom machine learning pipelines, fine-tuning LLMs, building NLP models, and integrating predictive APIs into production web applications.",
    icon: "Sparkles",
    badge: "Engineering"
  },
  {
    title: "Full-Stack Web & AI Apps",
    desc: "Developing fast, responsive single-page applications with modern React frameworks, Tailwind CSS styling, and seamless REST/GraphQL API backends.",
    icon: "Code2",
    badge: "Development"
  },
  {
    title: "Modern UI/UX & Interaction",
    desc: "Designing human-centered user interfaces, high-fidelity Figma prototypes, dark mode glassmorphism layouts, and smooth micro-animation systems.",
    icon: "Figma",
    badge: "Design"
  },
  {
    title: "Brand Identity & Visual Strategy",
    desc: "Creating distinct visual brand identities, event promotional graphics, social media asset toolkits, and cohesive technical design standards.",
    icon: "Layers",
    badge: "Creative"
  }
];
