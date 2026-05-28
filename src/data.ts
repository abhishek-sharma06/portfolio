import { Project, SkillCategory, Certification } from './types';

export const personalInfo = {
  name: 'Abhishek Sharma M',
  title: 'Full Stack Engineer | AI/ML Developer',
  subtitle: 'AI/ML Intern @ Bambhari Pvt. Ltd.',
  tagline: 'Building secure, intelligent web applications with PHP, Microsoft/web stacks, React, and Client-Side/Server-Side AI.',
  email: 'abhisheksharmam6@gmail.com',
  location: 'Bengaluru, Karnataka, India',
  college: 'East West Institute of Technology (EWIT), EWIT Bangalore',
  degree: 'Bachelor of Engineering in Computer Science and Engineering',
  gradYear: '2026',
  cgpa: '8.0 CGPA',
  aboutText: 'I am a highly motivated Computer Science student (Batch of 2026) at East West Institute of Technology in Bengaluru, India. With a deep passion for full-stack architecture and machine learning pipelines, my experience ranges from modular server development in PHP MVC architectures to implementing direct edge-intelligence applications inside web browsers with TensorFlow.js. My work as an AI/ML developer focuses on creating high-performance, real-time client-side solutions that operate securely, efficiently, and smoothly.',
  github: 'https://github.com/abhishek-sharma06',
  linkedin: 'https://linkedin.com/in/abhisheksharma6',
  avatarUrl: '/src/assets/images/abhishek_avatar_1779959576974.png',
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['Python', 'Java', 'JavaScript (ES6+)'],
  },
  {
    title: 'Frontend Development',
    icon: 'Layout',
    skills: ['React', 'HTML5', 'CSS3', 'face-api.js', 'TensorFlow.js', 'Chart.js'],
  },
  {
    title: 'Backend Development',
    icon: 'Server',
    skills: ['PHP MVC', 'Node.js', 'Express.js'],
  },
  {
    title: 'Database Systems',
    icon: 'Database',
    skills: ['MySQL'],
  },
  {
    title: 'Tools & Cloud APIs',
    icon: 'Cpu',
    skills: ['WebRTC', 'Canvas API', 'PHPMailer', 'AWS (Cloud Computing)', 'Git', 'GitHub'],
  },
  {
    title: 'AI / Machine Learning',
    icon: 'BrainCircuit',
    skills: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Core Practices & Logic',
    icon: 'GitBranch',
    skills: ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms (DSA)', 'Agile / Scrum Methodology'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'ai-proctor',
    title: 'AI-Proctored Online Exam System',
    description: 'A robust client-side AI monitoring system coupled with modular full-stack PHP MVC to provide tamper-proof examination conditions without high cloud server bills.',
    category: 'Full Stack',
    tags: ['PHP MVC', 'MySQL', 'face-api.js', 'TensorFlow.js', 'PHPMailer', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abhishek-sharma06/online-exam-system',
    highlights: [
      'Client-side proctoring uses face-api.js for facial landmarks detection and Head Pose Estimation.',
      'TensorFlow.js COCO-SSD model triggers instant unauthorized object (e.g. phones, secondary monitors) detection.',
      'Secured using a custom suspicion score logic with automatic disqualification on exceeding safety limit.',
      'Secured authentication system with PHPMailer OTP email verification before starting evaluations.'
    ],
  },
  {
    id: 'doc-signer',
    title: 'Document Signing Platform with Geotagging',
    description: 'A completely secure and legally audit-ready document signing application featuring multi-factor signature validation and visual evidence logs.',
    category: 'Full Stack',
    tags: ['PHP MVC', 'MySQL', 'WebRTC', 'Canvas API', 'PHPMailer', 'Bcrypt Auth'],
    githubUrl: 'https://github.com/abhishek-sharma06/doc-signer',
    highlights: [
      'Allows live photo capture using WebRTC video streaming prior to signing for strict facial audit verification.',
      'HTML5 Canvas signature pad captures responsive, high-fidelity vectorized signature inputs.',
      'Implements real-time geolocation tracking and micro-timestamp injection on generated contract certificates.',
      'Utilizes Bcrypt hashing, robust OOP controller validation, complete event auditing, and email receipts.'
    ],
  },
  {
    id: 'voice-assistant',
    title: 'Windows Voice-Activated Assistant',
    description: 'A custom voice assistant developed to orchestrate local Windows OS systems and carry out everyday developer tasks through audio control loops.',
    category: 'System',
    tags: ['Python', 'Speech Recognition', 'NLP', 'REST APIs', 'System Commands'],
    githubUrl: 'https://github.com/abhishek-sharma06',
    highlights: [
      'Executes 10+ distinct native Windows administrative, media, and launching actions seamlessly.',
      'Utilizes client-side natural language parsers and speech-to-text translators for direct low-latency processing.',
      'Integrates live weather, news, stock, and dictionary APIs to query real-time dynamic web contents.',
      'Designed with conversational threads and clean object-oriented Python architecture for stability.'
    ],
  },
  {
    id: 'kundalini-meditation',
    title: 'Kundalini Practice & Meditation Monitoring System',
    description: 'An advanced data collection and signal analysis tool optimized to read physiological changes during specific yogic state shifts.',
    category: 'AI/ML',
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Biometric Sensors', 'Signal Processing'],
    githubUrl: 'https://github.com/abhishek-sharma06',
    highlights: [
      'Processes heart rate raw waveforms asynchronously from specialized peripheral hardware sensors.',
      'Signal preprocessing uses NumPy filters to reduce baseline drift, motion artifacts, and noise.',
      'Pandas pipelines feed data arrays dynamically into responsive timeseries frameworks.',
      'Generates key analytics visualisations using Matplotlib for deep breathing and heart-rate-variability trends.',
      'Architected as a highly modular pipeline prepared for downstream Scikit-Learn prediction models.'
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    year: '2025',
    badge: 'AWS-CCP',
  },
  {
    title: 'Full Stack Web Development Program',
    issuer: 'Udemy Academic Academy',
    year: '2024 – 2025',
    badge: 'FSD-UDEMY',
  },
  {
    title: 'Python Software & ML Development Bootcamp',
    issuer: 'Bambhari Research Institute',
    year: '2025',
    badge: 'PY-BAMBHARI',
  },
];
