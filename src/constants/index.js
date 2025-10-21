import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import chat_app from "../assets/projects/chat_app.png";



// export const HERO_CONTENT = `Software developer passionate about creating seamless, high-performance Software Solutions. Experienced in backend and frontend technologies, deployment, and core programming skills to drive innovative projects.`;

export const HERO_CONTENT =  "Backend engineer passionate about designing reliable systems and integrating AI into real-world products, Dedicated to achieving goals, Becoming a proficient Software Developer, and continually expanding skills through a passion for learning."

// export const ABOUT_TEXT = `I am a passionate full stack developer specialised in crafting seamless software applications. With almost 2 years of hands-on experience, Some skills on which i have worked through my different projects are Backend Development (Django, Django Rest Framework, Python, SQL Server, Celery, ASP.NET, .NET Web API), Frontend development (ReactJS, HTML, CSS, JavaScript, JQuery), Deployment(AWS EC2, Hostinger's VPS, Nginx, Github Actions, AWS S3) and others are  OOP , Data Structures and Algorithms (C++). I am Committed to continuous learning and staying up-to-date with emerging technologies. Eager to contribute my skills and passion to a dynamic team and drive innovative projects.`;

export const ABOUT_TEXT = `I’m a full-stack and AI-driven software developer passionate about building scalable, intuitive, and intelligent applications. I’ve worked across the stack — designing REST APIs, backend architectures, and interactive frontends with React. My experience spans FastAPI, Django, .NET, React, and PostgreSQL, along with deployment and automation using Docker, AWS, and GitHub Actions. I’ve also maintained Voice AI SaaS platforms, RAG-enabled retrieval systems, and integrated Stripe billing, external APIs, and CI/CD pipelines. I enjoy creating efficient, reliable, and real-time production-ready solutions that blend backend engineering, AI, and automation to deliver great end-to-end user experiences.`
export const EXPERIENCES = [
  {
    year: "Jun 2025 - Present",
    role: "Junior Python Developer",
    company: "Vibtree",
    description: `
    Designed and maintained REST APIs for Voice AI SaaS platform. 
*Integrated Stripe Billing API for dynamic plan and price creation, autopay and subscription lifecycle management. 
*Refactored the backend to FastAPI, improving performance and modularity across microservices.  
*Developed RAG-enabled AI retrieval systems with LlamaIndex and Vector DBs(Pinecone, Weaviate etc.) for 
context-aware knowledge grounding in voice applications. 
*Developed voice intelligence pipelines with LiveKit, Deepgram (STT), ElevenLabs (TTS), and OpenAI (LLM), 
enabling natural, real-time conversational Voice AI experiences.  
*Integrated multiple external platforms like Cal.com, N8N, Telnyx etc for automated workflows. 
*Developed and deployed multiple FastAPI microservices on AWS EC2, with Nginx, Uvicorn, and Dockerized 
CI/CD pipelines using GitHub Actions. 
*Developed Web App using Livekit SDK(ReactJS) to enable real-time communication and voice agent interaction. 
*Tech Stack: Python, FastAPI, Django, DRF, Celery, PostgreSQL, ReactJS, LlamaIndex, LiveKit, AWS (EC2, S3), 
Nginx, Docker, GitHub Actions.
`,
    technologies: ["Python", "FastAPI", "Django", "Django Rest Framework", "Celery", "PostgreSQL", "ReactJS", "Docker", "GitHub Actions", "Livekit", "Pinecone", "LlamaIndex" ],
  },
  {
    year: "May 2024 - May 2025",
    role: "Software Developer",
    company: "Cloud9 e-biz Pvt Ltd",
//     description: `Designed and implemented a Single Sign-On (SSO) system from scratch, integrating it with multiple systems.*Integrated Bold Reports Embedding Service into ASP.NET MVC application, enabling dynamic report rendering.*Maintained and Integrated backend solutions for mobile and web platforms which includes custom Service Desk SaaS application, enhancing system efficiency and improving user response times by 30%. 
// *Built robust APIs and numerous complex stored procedures, reducing data retrieval times by up to 25%.  
// *Enabled efficient migration of datasets across multiple databases by writing SQL scripts and stored procedures, 
// ensuring data integrity and reducing manual data verification.  
// *Developed a Virtual Attendance Tracking system and Location Dashboard for mobile app users. 
// *Migrated platform to new version of Firebase Notification System, resulting in faster and more reliable notifications`,
description:`Designed and implemented a Single Sign-On (SSO) system from scratch, integrating it with multiple systems.
*	Integrated Bold Reports Embedding Service into application, enabling dynamic report rendering.
*	Maintained and Integrated backend solutions for mobile and web platforms which includes custom Service Desk SaaS application, enhancing system efficiency and improving user response times by 30%.
*	Built APIs and numerous complex stored procedures, reducing data retrieval times by up to 25%. 
*	Enabled efficient migration of datasets across multiple databases by writing SQL Scripts and stored procedures, ensuring data integrity and reducing manual data verification. 
*	Developed a Virtual Attendance Tracking system and Location Dashboard for mobile app users.
*	Migrated platform to new version of Firebase Notification System, resulting in faster and more reliable notifications 
`,
    technologies: ["Python", "Django", "Django Rest Framework", "Celery", "SQL Server", "ReactJS", ".NET MVC", ".NET Web API" ]
  },
  {
    year: "May 2023 - April 2024",
    role: "Full Stack Developer",
    company: "Freelance",
    description: `Successfully deployed Fully Functional E-commerce Website for purchasing local books. 
*Integrated Payment Gateway and Automated Email Notification System for users 
*Home Delivery or Pickup from the Nearest Store options are available. 
*Implemented  Dealer Registration System, allowing individuals to register as dealers and serve as local points  
of sale for regular users and also implemented custom coupon system. 
*Implemented membership features (like prime and dealer membership) for special discounts. 
*Custom Admin Panel : Management of books, coupons, dealers, users, courier’s services.  
*Deployed website on AWS EC2 using Nginx Web Server and Ubuntu OS and Automated Deployment using 
GitHub Actions.`,
    technologies: ["Django","Python", "Celery", "Celery Beat","Redis", "AWS EC2", "Nginx", "Github Actions", "HTML", "CSS", "JavaScript", "Sql Server"],
    liveLink:"https://bookstore.tejasgodse.tech/",
    githubLink:"https://github.com/tejasgodse24/BookStoreEcommerce"
  },
  
];

export const PROJECTS = [
  {
    index: 1,
    title: "Multiplayer Chess Game",
    image: chat_app,
    description:
      "Developed a Multiplayer Chess Game allowing users to play in real time. *Implemented Social Authentication using Sign In With Google. *Ensured game state persistence to handle accidental page refreshes or netweork disconnection without disrupting the gameplay *Spectator mode for users just to watch ongoing games as viewers. *Enabled move highlights and Integrated a timer for each player's move, ensuring fair gameplay. *Game state recovery after reconnection of user is also done. *Added a single-player mode, where a BOT plays as the opponent using Stockfish(Chess Engine). ",
    technologies: ["Python", "Django Channels", "Django Rest Framework", "SQLite3", "ReactJS", "AWS EC2", "Nginx", "Daphne"],
    liveLink:"https://chessgame.tejasgodse.tech/",
    githubLink:"https://github.com/tejasgodse24/MultiPlayerChessApp"
  },   
  {
    index: 2,
    title: "Image Compression System",
    image: project2,
    description:
      "Developed Asynchronous Image Processing System that compresses images from a CSV file. *Designed REST APIs for CSV upload, processing status tracking, and result retrieval. *Implemented Celery with Redis for background image compression tasks. *Stored processed images and output csv in AWS S3 and maintained metadata in database. *Integrated webhooks for real-time notifications upon processing completion. *APIs and Image Compression Celery Service both are deployed on AWS EC2 using Nginx and Gunicorn and static and media files are served from AWS S3.",
    technologies: ["Python", "Django Rest Framework", "SQLite3", "Celery", "AWS S3", "AWS EC2", "Nginx","Gunicorn"],
    liveLink:"https://www.postman.com/research-saganist-31972975/workspace/public-workspace/collection/31971917-a987b618-0bff-4508-953a-47443ff2c1a8?action=share&creator=31971917",
    githubLink:"https://github.com/tejasgodse24/image_compression"
  },
  {
    index: 3,
    title: "Real Time Chat Application ",
    image: chat_app,
    description:
      "Developed a Real-Time Chat Application using Django for backend and WebSocket for asynchronous communication. *Integrated chat features such as Private Messaging, and Chat Groups(Rooms). ",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript" ,"Django", "Django Channels", "SQLite3"],
    githubLink:"https://github.com/tejasgodse24/DjangoChatApp"

  },
  // {
    // index: 4,
  //   title: "Authentication System",
  //   image: project2,
  //   description:
  //     "Developed User Authentication System featuring registration, login, logout, password change, and password reset functionalities.*Implemented secure password reset via email with unique tokenized links. *Built RESTful APIs using Django Rest Framework, used JWT for secure user authentication .",
  //   technologies: ["Django Rest Framework", "SQLite3."],
  //   githubLink:"https://github.com/tejasgodse24/authentication_DRF_JWT"

  // },
  
];


export const EXTRACURREXPERIENCES = [
  {
    year: "Nov 2021 - Mar 2023",
    role: "Science Teacher",
    company: "Vidya Classes (Private Tutions)",
    description: `Taught Science Subject to 9th and 10th(SSC) students.
    *Teaching is in Offline Mode.
    *This part time work i have done during my 3rd and last year of engineering.`,
  },
  {
    year: "Jul 2020 - May 2021",
    role: "Mathematics Teacher ",
    company: "Eureka Academy",
    description: `Taught Maths Subject to 12th(HSC) students.
    *Teaching is in Online Mode.
    *This part time work i have done during my 2nd year of engineering.`,
  },
  {
    year: "Jul 2020 - May 2021",
    role: "NCC Air Wing",
    company: "",
    description: `During my second year of engineering, I had the privilege of joining the National Cadet Corps (NCC) Air Wing. This voluntary organization gave me a unique insight into the life and discipline of the armed forces.
    *I had the exciting opportunity to fly in a lightweight trainer aircraft.
    *This experience enriched my personal growth, offering a deeper understanding of teamwork, leadership, and commitment`,
  },
  
];

export const EDUCATION = [
  {
    year: "2019 - 2023",
    courseName: "Bachelor of Technology",
    collegeName: "Vishwakarma Institute of Information Technology, Pune",
    fieldName:"Computer Engineering",
    marks:" CGPA : 9.41 "
  },
  {
    year: "2018 - 2019",
    courseName: "12th HSC",
    collegeName: "Laxmanrao Apte Junior College,  Pune ",
    fieldName:"",
    marks:"Percentage : 79.23 %"  
  },
  {
    year: "2016 - 2017",
    courseName: "10th SSC",
    collegeName: "Ad. D. R. Nagarkar Prashala , Pune",
    fieldName:"",
    marks:"Percentage : 93.20 %"  
  }
  
];
export const NAVLINKS = [
  {
    "displayText": "Experience",
    "id": "experience-section",
    "isActive": false,
    "key": 1
  },
  {
    "displayText": "Projects",
    "id": "projects-section",
    "isActive": false,
    "key": 2
  },
  {
    "displayText": "Education",
    "id": "education-section",
    "isActive": false,
    "key": 3
  },
  {
    "displayText": "Contact",
    "id": "contact-section",
    "isActive": false,
    "key": 4
  }

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 9765851707",
  email: "tejasgodse19@gmail.com",
};
