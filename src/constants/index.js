import { VIA } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    tailwindcss,
    java,
    csharp,
    docker,
    kubernetes,
    postgresql,
    springboot, 
    pricewise,
    portfolio,
    construction
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "SpringBoot",
        type: "backend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    }, 
    {
        imageUrl: docker,
        name: "Docker",
        type: "Devops",
    }, 
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Devops",
    }, 

];

export const experiences = [
    {
        title: "Teaching Assistant",
        company_name: "VIA University College",
        icon: VIA,
        iconBg: "#accbe1",
        date: "Sep 2024 - Dec 2024",
        points: [
            "Collaborated with another instructor and was responsible for conducting a workshop every Friday throughout the semester.",
            "Taught and guided students in programming exercises in Java.",
            "Developed additional materials to enhance understanding, including presentations on topics such as Git/GitHub.",
        ],
    },
    {
        title: "Tutor",
        company_name: "VIA University College",
        icon: VIA,
        iconBg: "#fbc3bc",
        date: "Mar 2024 - Dec 2024",
        points: [
            "Introduced new students to academic and social aspects, helping to create a welcoming environment.",
            "Planned and coordinated orientation days in collaboration with the university.",
            "Organized and hosted two social events.",
        ],
    },
    {
        title: "BS Software Engineering",
        company_name: "VIA University College",
        icon: VIA,
        iconBg: "#dbdbdb",
        date: "Aug 2023 - now",
        points: [
            "Developed full-stack applications using technologies like React, .NET/C#, and Spring Boot",
            "Applied software architecture principles such as Microservices, CLEAN architecture, and TDD",
            "Gained practical experience with DevOps tools like Git, Docker, and Kubernetes",
            "Collaborated on Agile group projects, using Scrum and version control to build and deliver software",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Fatii59',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/fatoma-hersi-b278782a4',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Thrifting Platform',
        description: 'Developed a web application that allows users to buy and sell second-hand items, providing a way to trade pre-owned goods.',
        link: 'https://github.com/Fatii59/SEP3',
    },
    {
        iconUrl: construction,
        theme: 'btn-back-blue',
        name: 'Project Management',
        description: 'Designed and built a system and website for a construction firm. The system tracks project progress, while the website showcases services.',
        link: 'https://github.com/Fatii59/sep1gruppe7-main',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-pink',
        name: 'Portfolio',
        description: 'Created an interactive portfolio featuring 3D models to showcase my work and provide a unique, engaging experience for visitors.',
        link: 'https://github.com/Fatii59/Portfolio',
    },
];