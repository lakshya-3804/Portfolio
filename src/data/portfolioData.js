/**
 * portfolioData.js
 * ────────────────────────────────────────────────
 * Single source of truth for all portfolio content.
 * Update data here — pages consume it automatically.
 */

// ─── Contact & Profile ───────────────────────────
export const profile = {
  name: 'Lakshya Prajapati',
  tagline: 'Full Stack Developer & AI Engineer',
  bio: "I'm a Full Stack Web Developer and AI/LLM Evaluation Engineer with a passion for building efficient, scalable applications and solving complex algorithmic challenges. Currently studying at IIIT Lucknow, I am open to work and seeking software engineering or AI/LLM opportunities.",
  email: 'lakshyaiffco.prajapati@gmail.com',
  phone: '+91 8273016411',
  linkedin: 'https://in.linkedin.com/in/lakshya-prajapati-877b22289',
  github: 'https://github.com/lakshya-3804',
  twitter: 'https://x.com/lakshya_3804',
  instagram: 'https://www.instagram.com/lakshya_3804/',
  codeforces: 'https://codeforces.com/profile/lakshya_3804',
  codechef: 'https://www.codechef.com/users/lakshya_3804',

  /* quick hero stats */
  stats: [
    { label: 'CF Rating', value: '1409', sublabel: 'Specialist' },
    { label: 'CC Rating', value: '1731', sublabel: '3-Star' },
    { label: 'Eval Tasks', value: '50+', sublabel: 'LLM Rubrics' },
    { label: 'Active Users', value: '150+', sublabel: 'Tixly Platform' },
  ],

  /* typewriter strings */
  roles: [
    'Full Stack Developer',
    'AI / LLM Evaluator',
    'Competitive Programmer',
    'Backend Engineer',
  ],
};

// ─── Work Experience ─────────────────────────────
export const experience = [
  {
    id: 'turing-anthropic',
    company: 'Turing',
    role: 'Senior Python Data Scientist (Contract)',
    client: 'Client: Anthropic',
    period: 'January 2026 - March 2026',
    type: 'contract',
    bullets: [
      'Engineered structured LLM evaluation tasks with prompts, reference solutions, and atomic/binary rubrics; applied end-to-end across Claude Opus 4.5 and Claude Opus 4.6 to benchmark model capabilities and identify failure modes.',
      'Integrated evaluation artifacts into automated pipelines, enabling systematic performance tracking and regression analysis across model iterations.',
    ],
  },
  {
    id: 'turing-alibaba',
    company: 'Turing',
    role: 'Data Annotator (Contract)',
    client: 'Client: Alibaba',
    period: 'December 2025 - January 2026',
    type: 'contract',
    bullets: [
      'Developed and annotated 50+ Ubuntu desktop GUI workflows from natural-language instructions across VLC, LibreOffice, GIMP, and browsers with step-level screenshots and action-level JSON schemas.',
      'Maintained 100% schema compliance across all delivered batches, achieving zero revision requests on final submissions.',
    ],
  },
];

// ─── Education ───────────────────────────────────
export const education = [
  {
    id: 'iiit',
    institution: 'Indian Institute of Information Technology, Lucknow',
    shortName: 'IIIT Lucknow',
    degree: 'B.Tech — Computer Science',
    period: '2023 – 2027',
    score: 'CGPA: 8.53 / 10.0',
    logoKey: 'iiit',
  },
  {
    id: 'kv',
    institution: 'Kendriya Vidyalaya IFFCO',
    shortName: 'KV IFFCO',
    degree: 'CBSE — Class XII',
    period: '2022-2023',
    score: '94%',
    logoKey: 'kv',
  },
  {
    id: 'sr',
    institution: 'S.R. International School, Bareilly',
    shortName: 'S.R. International',
    degree: 'CBSE — Class X',
    period: '2020-2021',
    score: '95%',
    logoKey: 'sr',
  },
];

// ─── Skills ──────────────────────────────────────
export const skills = [
  {
    category: 'Languages',
    icon: 'code',
    items: ['C++', 'C', 'Java', 'JavaScript', 'Python', 'Bash'],
  },
  {
    category: 'Web & Frameworks',
    icon: 'layers',
    items: ['ReactJS', 'Node.js', 'ExpressJS', 'Spring Boot', 'DropWizard', 'Redux', 'REST APIs', 'Tailwind CSS'],
  },
  {
    category: 'Databases & Cloud',
    icon: 'database',
    items: ['MongoDB', 'SQL', 'Firebase', 'MongoDB Atlas', 'Netlify', 'Vercel'],
  },
  {
    category: 'Tools & AI/ML',
    icon: 'cpu',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Sentence-Transformers', 'scikit-learn', 'LLM Evaluation', 'Prompt Engineering'],
  },
  {
    category: 'CS Fundamentals',
    icon: 'book',
    items: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Object-Oriented Programming'],
  },
];

// ─── Projects ────────────────────────────────────
export const projects = [
  {
    id: 'tixly',
    name: 'Tixly',
    tagline: 'Event & Travel Ticketing Platform',
    desc: 'Full-stack ticketing app supporting 4 booking categories (buses, trains, movies, flights), serving 150+ active users and processing 200+ daily reservations with JWT authentication and real-time seat availability.',
    tech: ['ReactJS', 'Node.js', 'ExpressJS', 'MongoDB', 'Redux', 'Firebase', 'RapidAPI', 'Tailwind CSS'],
    category: 'fullstack',
    code: 'https://github.com/lakshya-3804/Tixly.git',
    live: null,
    featured: true,
    highlights: [
      '150+ active users, 200+ daily reservations',
      '3+ external REST APIs integrated',
      '10+ ReactJS components & endpoints',
    ],
  },
  {
    id: 'smartpdf',
    name: 'SmartPDF',
    tagline: 'Connecting the Dots — AI PDF Pipeline',
    desc: 'AI-driven PDF pipeline achieving multilingual heading extraction (H1–H3) in <10s per 50-page doc and persona-driven relevance ranking across 5 docs in <60s, containerized for offline CPU-only execution.',
    tech: ['Python', 'PyMuPDF', 'scikit-learn', 'Sentence-Transformers', 'PyTorch', 'Docker', 'langdetect'],
    category: 'ai',
    code: ['https://github.com/lakshya-3804/BitHive_1A', 'https://github.com/lakshya-3804/BitHive_1B'],
    live: null,
    featured: true,
    highlights: [
      '<10s per 50-page document (H1–H3 extraction)',
      '<1 GB model, offline CPU-only Docker container',
      'Multilingual NLP with Sentence-Transformers',
    ],
  },
  {
    id: 'autonix',
    name: 'Autonix',
    tagline: 'Automotive Spare Parts & Service Marketplace',
    desc: 'Collaborative platform simplifying search for automobile spare parts and services with 24/7 availability, offering a seamless and convenient experience for all automotive needs.',
    tech: ['ReactJS', 'Node.js', 'ExpressJS', 'MongoDB', 'Tailwind CSS', 'JWT'],
    category: 'fullstack',
    code: 'https://github.com/lakshya-3804/AutonixRouting.git',
    live: null,
    featured: false,
    highlights: [],
  },
  {
    id: 'mernauth',
    name: 'MERN-Auth',
    tagline: 'Secure Full-Stack Authentication System',
    desc: 'Full-stack MERN application providing secure user authentication with JWT-based session management, bcrypt password hashing, profile management, and Redux state management.',
    tech: ['ReactJS', 'ExpressJS', 'MongoDB', 'JWT', 'Redux', 'Tailwind CSS'],
    category: 'fullstack',
    code: 'https://github.com/lakshya-3804/MERNAuth.git',
    live: null,
    featured: false,
    highlights: [],
  },
  {
    id: 'tictactoe',
    name: 'Tic-Tac-Toe',
    tagline: 'Score-Tracking 2-Player Game',
    desc: 'Interactive 2-player Tic-Tac-Toe game built with React featuring persistent score tracking, animated moves, and a clean responsive UI.',
    tech: ['ReactJS', 'JavaScript', 'CSS', 'HTML'],
    category: 'utility',
    code: 'https://github.com/lakshya-3804/Tic-Tac-Toe.git',
    live: null,
    featured: false,
    highlights: [],
  },
  {
    id: 'calculator',
    name: 'Calculator',
    tagline: 'My First Web Dev Project',
    desc: 'A clean, functional calculator supporting all basic arithmetic operations — the project that started it all.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'utility',
    code: 'https://github.com/lakshya-3804/Calculator.git',
    live: null,
    featured: false,
    highlights: [],
  },
];

// Project filter categories
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'featured', label: 'Featured' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'ai', label: 'AI & NLP' },
  { id: 'utility', label: 'Utilities' },
];

// ─── Achievements ────────────────────────────────
export const achievements = [
  {
    id: 'cf',
    title: 'Codeforces Specialist',
    detail: 'Max rating: 1409',
    link: 'https://codeforces.com/profile/lakshya_3804',
    badge: 'Specialist',
    color: 'cyan',
  },
  {
    id: 'cc',
    title: 'CodeChef 3-Star Coder',
    detail: 'Max rating: 1731',
    link: 'https://www.codechef.com/users/lakshya_3804',
    badge: '★★★',
    color: 'yellow',
  },
  {
    id: 'cc-rank1',
    title: 'Global Rank 156',
    detail: 'CodeChef Starters 145 (Div. 3)',
    link: null,
    badge: 'Top 156',
    color: 'green',
  },
  {
    id: 'cc-rank2',
    title: 'Global Rank 232',
    detail: 'CodeChef Starters 203 (Div. 2)',
    link: null,
    badge: 'Top 232',
    color: 'green',
  },
  {
    id: 'flipkart',
    title: 'Flipkart Grid 7.0 Semifinalist',
    detail: 'Software Development Track',
    link: 'https://drive.google.com/file/d/1Qn6Gqo_FWVftVhF5LHqLdCp6DrHp42M_/view?usp=drive_link',
    badge: 'Semifinalist',
    color: 'purple',
  },
  {
    id: 'adobe',
    title: 'Adobe India Hackathon — Round 2',
    detail: 'Advanced to Round 2 of nationwide hackathon',
    link: null,
    badge: 'Round 2',
    color: 'red',
  },
  {
    id: 'freshers',
    title: '3rd Rank — Freshers Cup Coding Contest',
    detail: 'Competing against 200+ students at IIIT Lucknow',
    link: null,
    badge: '🥉 3rd',
    color: 'orange',
  },
  {
    id: 'algo',
    title: 'Top 7% — AlgoUniversity Tech Fellowship',
    detail: 'Stage 2 waitlist ranking',
    link: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1/lakshya-prajapati.png',
    badge: 'Top 7%',
    color: 'indigo',
  },
];

// ─── Leadership & Volunteering ───────────────────
export const leadership = [
  {
    id: 'afterdark',
    org: 'AfterDark',
    role: 'Member (2023–24)',
    detail: 'Facilitated 5+ interactive campus events, helping organize community-driven activities at IIIT Lucknow.',
    icon: 'star',
  },
  {
    id: 'equinox',
    org: 'Equinox',
    role: 'Member (2023–24)',
    detail: 'Organized and executed 15+ technical and cultural events, driving cross-functional collaboration across departments.',
    icon: 'zap',
  },
];
