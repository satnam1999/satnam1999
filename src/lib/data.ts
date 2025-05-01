import { ReactNode } from "react";

// Use simple icon placeholders instead of SVG for better compatibility
const jpMorganLogoSvg = "J";
const zsLogoSvg = "Z";
const universityLogoSvg = "N";
const projectSvg1 = "📊";
const projectSvg2 = "📈";
const projectSvg3 = "☁️";
const projectSvg4 = "🔍";

// Experience Data
export const experienceData = [
  {
    title: "Software Engineer II",
    company: "JP Morgan Chase",
    period: "October 2024 - Present",
    description: "Working as a Data Engineer at JP Morgan Chase, focusing on building robust data pipelines and ETL processes.",
    responsibilities: [
      "Developed data pipelines using AWS Glue, EMR, and Redshift",
      "Worked with big data technologies including Hadoop, Hive, and Spark",
      "Implemented data solutions for business intelligence and analytics",
      "Collaborated with stakeholders to deliver data-driven insights"
    ],
    logoSvg: jpMorganLogoSvg
  },
  {
    title: "Associate Lead - Platform Services",
    company: "ZS",
    period: "January 2024 - October 2024",
    description: "Led platform services team, focusing on data engineering solutions.",
    responsibilities: [
      "Led development of data integration and ETL processes",
      "Managed projects using SQL, Python, and AWS technologies",
      "Awarded 'Outstanding Contribution' for Q2 2022"
    ],
    logoSvg: zsLogoSvg
  },
  {
    title: "Business Technology Solutions Associate",
    company: "ZS",
    period: "July 2021 - December 2023",
    description: "Worked on business technology solutions with a focus on data engineering.",
    responsibilities: [
      "Developed data pipelines and ETL processes",
      "Created reporting solutions using PowerBI and SQL",
      "Awarded 'Rising Star' in Q1 2022"
    ],
    logoSvg: zsLogoSvg
  }
];

// Skills Data
export const skillsData = {
  dataEngineering: [
    "AWS Glue",
    "AWS EMR",
    "Hadoop",
    "Hive",
    "Spark",
    "ETL Pipelines"
  ],
  programming: [
    "Python",
    "SQL",
    "Business Intelligence (BI)"
  ],
  cloudAndDataWarehousing: [
    "AWS S3",
    "Redshift",
    "Data Warehousing",
    "Data Integration"
  ]
};

export const additionalTechData = [
  "PowerBI", "Excel", "Tableau", "Time Management", "Business Requirements"
];

// Education Data
export const educationData = {
  degree: "Bachelor of Technology, Computer Science",
  university: "SVKM's Narsee Monjee Institute of Management Studies (NMIMS)",
  period: "2017 - 2021",
  description: "Graduated with a focus on Computer Science and Data Engineering fundamentals.",
  courses: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Machine Learning",
    "Software Engineering"
  ],
  logoSvg: universityLogoSvg
};

export const certificationsData = [
  {
    name: "Introduction to Programming Using Python",
    issuer: "Microsoft",
    year: "2021"
  },
  {
    name: "IA Awards - Rising Star",
    issuer: "ZS",
    year: "Q1 2022"
  },
  {
    name: "IA Awards - Outstanding Contribution",
    issuer: "ZS",
    year: "Q2 2022"
  }
];

// Projects Data
export const projectsData = [
  {
    title: "Enterprise Data Pipeline Optimization",
    description: "Led a team to optimize the data pipeline architecture, reducing processing time and improving data quality.",
    category: "Data Engineering",
    technologies: ["AWS Glue", "Redshift", "Python", "SQL"],
    company: "JP Morgan Chase",
    year: "2024",
    imageSvg: projectSvg1
  },
  {
    title: "Business Intelligence Dashboard",
    description: "Developed comprehensive BI dashboards for stakeholders to monitor key performance indicators and business metrics.",
    category: "Analytics",
    technologies: ["PowerBI", "Redshift", "Python", "SQL"],
    company: "ZS",
    year: "2023",
    imageSvg: projectSvg2
  },
  {
    title: "Data Warehouse Implementation",
    description: "Implemented a scalable data warehouse solution to consolidate data from multiple source systems for analytics.",
    category: "Data Warehousing",
    technologies: ["AWS S3", "Redshift", "ETL", "SQL"],
    company: "ZS",
    year: "2022",
    imageSvg: projectSvg3
  },
  {
    title: "Machine Learning Intern Project",
    description: "Developed machine learning models for predictive analytics using Python during summer internship.",
    category: "Machine Learning",
    technologies: ["Python", "ML algorithms", "Data Analysis"],
    company: "Foxmula - The Smart Way",
    year: "2019",
    imageSvg: projectSvg4
  }
];
