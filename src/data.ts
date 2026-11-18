export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  email: string;
  phone: string;
  altPhone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  context: string;
  summary: string;
  stack: string[];
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

export const profile: Profile = {
  name: "Tamilarasan V",
  role: "Full-Stack Software Engineer",
  tagline:
    "Full-stack software engineer with 1.5 years of professional experience building backend and full-stack systems with Python, Java, Spring Boot, FastAPI and REST APIs.",
  about: [
    "Full Stack Software Engineer with 1.5 years of professional experience building backend and full-stack systems using Python, Java, Spring Boot, FastAPI, SQL, and REST APIs. Self-motivated, result-oriented, and accountable for delivery, with experience in database design, API development, application integration, testing, and production support.",
    "Built full-stack projects with React, Node.js, and SQL, including a client website for a biomedical engineering company. Familiar with Git, GitHub, CI/CD workflows, and Linux (Ubuntu), with a focus on maintainable software and clear technical communication.",
  ],
  email: "tamilarasanv721@gmail.com",
  phone: "+91 6383048547",
  altPhone: "+91 9943762888",
  location: "Karur, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/tamil-arasan-v",
  github: "https://github.com/tamilarasan2029",
};

export const stats: Stat[] = [
  { value: "1.5+", label: "Years of professional experience" },
  { value: "129", label: "REST endpoints in a hospital platform" },
  { value: "40%", label: "Reduction in processing time at TCS" },
];

export const experience: Job[] = [
  {
    role: "Freelance Full-Stack Engineer",
    company: "TAZAT Biomedical",
    period: "Jun 2026 – Nov 2026",
    points: [
      "Independently developed and delivered a responsive business website for a biomedical engineering company.",
      "Built Python backend functionality and REST API endpoints for customer enquiry management and form submissions.",
      "Integrated SQLite to store and manage customer enquiry records, using Node.js and Express.js for frontend serving and API communication.",
      "Automated customer enquiry communication with SMTP email notifications.",
      "Improved reliability and security with input validation, error handling, rate limiting, and honeypot-based spam protection.",
      "Developed responsive interfaces with HTML, CSS and JavaScript, including interactive equipment listings and search.",
      "Managed source code and project updates using Git and GitHub, handling frontend, backend and database work from start to finish.",
    ],
  },
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    period: "Apr 2024 – May 2025",
    points: [
      "Developed a client-admin portal using Java, Spring Boot and MySQL, contributing to the Client-Service Mapping module.",
      "Designed relational database schemas, indexes and constraints to support application requirements.",
      "Implemented dynamic service-allocation logic that kept data consistent across backend services as business rules changed.",
      "Investigated a database performance bottleneck and restructured indexes, reducing processing time by 40%.",
      "Built and validated REST APIs using Spring Boot and SoapUI, and supported automated builds and deployments through a CI/CD pipeline.",
      "Used SonarQube for code quality checks, and collaborated with stakeholders to clarify requirements and document technical decisions.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Hospital Management System",
    context: "Full-stack · Jun 2025 – May 2026",
    summary:
      "A full-stack hospital management platform, owned from requirements and architecture through implementation and testing.",
    stack: ["Python", "FastAPI", "Node.js", "React.js", "PostgreSQL", "REST APIs", "Git", "CI/CD"],
    highlights: [
      "Designed a normalized PostgreSQL schema for patients, appointments, prescriptions and billing, with multi-table SQL for reporting.",
      "Built a FastAPI backend with role-based access control for admin, doctor and receptionist roles, exposing 129 REST endpoints.",
      "Implemented a Node.js middleware layer for asynchronous event and notification processing.",
      "Developed a React frontend consuming REST APIs and nested JSON responses across modules.",
    ],
  },
  {
    title: "Biomedical Company Website",
    context: "Freelance · Jun 2026 – Nov 2026",
    summary:
      "A responsive business website with a Python backend, customer enquiry management and automated email notifications.",
    stack: ["Python", "Node.js", "Express.js", "SQLite", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
    highlights: [
      "Built searchable equipment listings so visitors could find products quickly.",
      "Automated enquiry communication with SMTP email notifications.",
      "Added input validation, rate limiting and honeypot-based spam protection.",
    ],
  },
  {
    title: "CAM-Based Object Detection & Identification",
    context: "Academic project · Oct 2022 – Apr 2023",
    summary:
      "A real-time object detection system with bounding-box annotations, covering segmentation, feature extraction and classification.",
    stack: ["Python", "OpenCV", "Faster R-CNN", "TensorFlow", "ImageAI", "MySQL"],
    highlights: [
      "Detected and classified multiple objects with high recall and precision.",
      "Built a pipeline covering segmentation, feature extraction (Hessian-Laplace and PCA-SIFT), ROI pooling and classification.",
      "Evaluated on COIL100, Caltech 101, ETH80 and MNIST, storing metadata and detection logs in MySQL.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Programming Languages", items: ["Python", "Java", "JavaScript", "SQL"] },
  { label: "Backend & APIs", items: ["FastAPI", "Spring Boot", "Node.js", "REST APIs"] },
  { label: "Frontend", items: ["React.js", "HTML5", "CSS3"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "JSON"] },
  {
    label: "Tools & Practices",
    items: ["Git", "GitHub", "CI/CD", "SonarQube", "SoapUI", "pgAdmin", "VS Code", "Eclipse"],
  },
  { label: "Operating Systems", items: ["Linux", "Windows"] },
  { label: "Additional", items: ["Arduino", "Embedded C"] },
];

export const certifications: Certification[] = [
  { name: "Power BI", issuer: "Microsoft" },
  { name: "Fundamentals of AI", issuer: "Microsoft" },
];

export const education: Education = {
  degree: "B.E., Electronics & Communication Engineering (STEM)",
  school: "Karpagam College of Engineering, Coimbatore, India",
  period: "Aug 2019 – Apr 2023",
  detail: "CGPA: 7.85",
};
