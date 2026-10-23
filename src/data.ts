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

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

export const profile: Profile = {
  name: "Tamilarasan V",
  role: "Software Engineer",
  tagline:
    "I build production systems end to end, from database schema and backend APIs to pipelines, CI/CD and frontend delivery.",
  about: [
    "Software engineer with end-to-end ownership of production systems in Python and Java, from schema design and backend APIs through data pipelines, CI/CD, and frontend delivery. Experienced building complete applications solo: designing realistic data schemas, implementing multi-stage processing pipelines, and calibrating system behavior against real-world data.",
    "Comfortable in unfamiliar technical domains. Built a full computer-vision pipeline from research paper to working system, analyzing failures to determine whether issues came from the model, the data, or the pipeline itself. Clear, structured communicator who documents architecture decisions and can explain complex systems simply. Values working software and practical tradeoff over unnecessary complexity.",
  ],
  email: "tamilarasanv721@gmail.com",
  phone: "+91 6383048547",
  altPhone: "+91 9943762888",
  location: "India",
  linkedin: "https://linkedin.com/in/tamil-arasan-v",
  github: "https://github.com/tamilarasan2029",
};

export const stats: Stat[] = [
  { value: "40%", label: "Reduction in backend processing time through query and index tuning" },
  { value: "3", label: "Services designed for a full-stack hospital platform" },
  { value: "2+", label: "Years building production software in Python and Java" },
];

export const experience: Job[] = [
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Hospital Management Platform",
    period: "Jun 2025 – May 2026",
    points: [
      "Owned a full-stack hospital management platform end to end as the sole engineer, from specification through architecture, implementation, testing and delivery.",
      "Designed a three-service architecture: a FastAPI backend for data ingestion and access control, a Node.js middleware for async event processing, and a React frontend.",
      "Chose a separate Node.js middleware layer for decoupled async processing over simplicity, and documented the tradeoff for the added operational complexity.",
      "Built role-based access control (admin, doctor, receptionist) and secure document storage, with input validation and structured error handling.",
      "Debugged race conditions between async notification events and the primary database, tracing them to event-ordering assumptions.",
      "Designed a normalized PostgreSQL schema covering patients, appointments, prescriptions and billing, and optimized multi-table joins for reporting.",
      "Built the React frontend to consume and parse nested JSON APIs, handling schema changes as the backend evolved.",
      "Set up a CI/CD pipeline across the FastAPI, Node.js and React services to automate testing and deployment.",
      "Tested incrementally at each layer (API validation, database constraints, end-to-end flows) without a formal test suite.",
      "Managed the full project lifecycle independently, clarifying requirements, scoping features and making architectural decisions under time pressure.",
    ],
  },
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    period: "Apr 2024 – May 2025",
    points: [
      "Owned a secure client-admin portal end to end (Java, Spring Boot, MySQL), from schema design through testing and production support, as the sole engineer on the Client-Service Mapping module.",
      "Designed the complete database schema from scratch, including relational models, indexes and constraints, with explicit tradeoffs between normalization and query performance.",
      "Built dynamic service-allocation logic that keeps data consistent across backend services under changing business rules.",
      "Diagnosed a backend bottleneck by analyzing query execution plans and restructuring indexes, cutting processing time by 40%.",
      "Built and validated REST APIs with Spring Boot and soapUI, integrated builds and deployments into a CI/CD pipeline, and used SonarQube for code quality.",
      "Worked with incomplete or evolving requirements across the SDLC, clarifying scope with stakeholders and documenting decisions for future maintainers.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Hospital Management Platform",
    context: "Full-stack · 2025–2026",
    summary:
      "A patients, appointments, prescriptions and billing system built as three services: FastAPI for data and access control, Node.js for async notifications and React for the interface.",
    stack: ["FastAPI", "Node.js", "React", "PostgreSQL", "CI/CD"],
    highlights: [
      "Debugged race conditions between async events and the primary database, tracing them to event-ordering assumptions.",
      "Parsed nested JSON APIs in the frontend and handled schema changes as the backend evolved.",
    ],
  },
  {
    title: "Client-Service Mapping Module",
    context: "Enterprise portal · 2024–2025",
    summary:
      "A secure admin module with dynamic service allocation that keeps data consistent when business rules change.",
    stack: ["Java", "Spring Boot", "MySQL", "SonarQube", "soapUI"],
    highlights: [
      "Designed the full relational schema, including indexes and constraints.",
      "Restructured indexes after profiling, cutting processing time by 40%.",
    ],
  },
  {
    title: "CAM-Based Object Detection",
    context: "Academy project · 2022–2023",
    summary:
      "A detection pipeline covering segmentation, feature extraction, ROI pooling and classification, with bounding-box annotation.",
    stack: ["Python", "OpenCV", "TensorFlow", "Fast R-CNN", "MySQL"],
    highlights: [
      "Trained on COIL100, Caltech 101, ETH80 and MNIST, with strong recall and precision.",
      "Stored object metadata and detection logs in a relational database.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL"] },
  { label: "Backend", items: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "UnitTest cases"] },
  { label: "Frontend", items: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { label: "Data", items: ["PostgreSQL", "MySQL", "Schema Design", "Query Optimization", "JSON"] },
  { label: "Tools", items: ["Github", "CI/CD", "SonarQube", "Eclipse", "VS Code"," SoapUi"] },
  { label: "AI / ML", items: ["OpenCV",  "Deep Learning"] },
  { label: "Other", items: ["Arduino", "Embedded C"] },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "Power BI", issuer: "Microsoft" },
  { name: "Fundamentals of AI", issuer: "Microsoft" },
];

export const education: Education = {
  degree: "B.E., Electronics & Communication Engineering",
  school: "Karpagam College of Engineering, Coimbatore",
  period: "2019 – 2023",
  detail: "CGPA 7.85",
};
