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
    springboot
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
        iconBg: "#fbc3bc",
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

/*
export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
*/