import { 
  FaReact, 
  FaJs, 
  FaNode, 
  FaDatabase, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaJava,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFire,
  FaAngular
} from 'react-icons/fa';

import { 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiTypescript,
  SiMysql
} from 'react-icons/si';

export const personalInfo = {
  name: "Riya G Poojary",
  title: "Front-End Developer",
  bio: "Hi, I’m Riya G Poojary, a passionate Front-End Developer with professional experience in building responsive and user-friendly web applications. I specialize in developing modern web interfaces using HTML, CSS, JavaScript, Angular, and TypeScript. I enjoy creating seamless digital experiences, optimizing application performance, and collaborating with teams to deliver scalable and impactful solutions. I also have knowledge in Python, PHP, MySQL, DBMS, and problem-solving concepts, which help me build efficient and reliable applications.",
  
  achievements: [
    "🎓 BCA Graduate with 7.6 CGPA",
    "💼 Professional Experience at Novaders LLP",
    "🚀 Front-End & UI Development Expertise",
    "🏆 Skilled in Angular, JavaScript, and Web Technologies"
  ],

  email: "riyagpoojary@gmail.com",
  resume: "/resume.pdf",
  image: "/profile.jpg"
};

export const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Angular", icon: FaAngular, color: "#DD0031" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "PHP", icon: FaDatabase, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" }
];

export const projects = [
  {
    id: 1,
    title: "Loan Prediction System",
    description: "A smart loan prediction system that analyzes applicant background information and determines loan approval eligibility based on multiple parameters.",
    
    image: "/project1.png",

    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "DBMS"
    ],

    liveDemo: "#",
    github: "#",
    featured: true
  },

  {
    id: 2,
    title: "Cymonix Web Application",
    description: "Collaborated with backend developers and UI/UX designers to develop seamless and responsive web application interfaces.",

    image: "/project2.png",

    techStack: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "JavaScript"
    ],

    liveDemo: "#",
    github: "#",
    featured: true
  },

  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    description: "A simple, interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Players take turns marking a 3x3 grid, aiming to get three marks in a row. The app tracks the game state, declares a winner, and allows for multiple rounds.",

    image: "/project3.png",

    techStack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    liveDemo: "#",
    github: "#",
    featured: true
  },

  {
    id: 4,
    title: "Interactive Quiz App",
    description: "A responsive Quiz App with a clean smooth interface, dynamic questions, real-time scoring, and instant feedback for learning.",
    image: "/project5.png",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    liveDemo: "https://apoorvapoojary-quiz-app.vercel.app/",
    github: "https://github.com/Apoorva0601/Quiz_app",
    featured: false
  }
];

export const courses = [
  {
    id: 1,
    name: "Diploma in Artificial Intelligence, Big Data & Cybersecurity",
    platform: "Certification Program",
    duration: "1 Year",
    completedDate: "2024",
    description: "Completed diploma program focused on Artificial Intelligence, Big Data concepts, and Cybersecurity fundamentals.",
    certificateLink: "#",
    image: "/course1.png"
  },

  {
    id: 2,
    name: "Advanced Diploma in Artificial Intelligence, Big Data & Cybersecurity",
    platform: "Certification Program",
    duration: "1 Year",
    completedDate: "2025",
    description: "Advanced training in AI technologies, big data analytics, and cybersecurity practices with practical exposure.",
    certificateLink: "#",
    image: "/course2.png"
  }
];

export const experience = [
  {
    id: 1,
    company: "Novaders LLP",
    role: "Front-End Developer | UI Developer",
    duration: "1-8-2024 - 2-6-2025",

    responsibilities: [
      "Developed responsive and interactive web pages using HTML, CSS, and JavaScript.",
      "Created dynamic and modular front-end components using Angular.",
      "Collaborated with backend developers and UI/UX designers to deliver seamless user experiences.",
      "Integrated RESTful APIs for dynamic data handling.",
      "Performed debugging, optimization, and bug fixing for smooth application performance."
    ]
  },

  {
    id: 2,
    company: "Code Lab System",
    role: "PHP Full Stack Intern",
    duration: "1-2-2024 - 1-3-2024",

    responsibilities: [
      "Built efficient and reusable PHP modules.",
      "Integrated front-end components into backend infrastructure."
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "Udupi College of Professional Studies, Manipal",
    degree: "BCA (Bachelor's of Computer Applications)",
    duration: "Aug 2021 - July 2024",
    score: "7.6 CGPA"
  },

  {
    id: 2,
    institution: "Mahatma Gandhi Memorial PU College, Kunjibettu",
    degree: "H.S.C",
    duration: "June 2019 - June 2021",
    score: "76%"
  },

  {
    id: 3,
    institution: "SMS English Medium High School, Brahmavara",
    degree: "S.S.L.C",
    duration: "June 2016 - April 2019",
    score: "83.63%"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Riyagpoojary",
    color: "#333"
  },

  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:riyagpoojary@gmail.com",
    color: "#EA4335"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#contact" }
];