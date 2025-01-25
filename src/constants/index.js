import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import chat_app from "../assets/projects/chat_app.png";



export const HERO_CONTENT = `Software developer passionate about creating seamless, high-performance web applications. Experienced in backend and frontend technologies, deployment, and core programming skills to drive innovative projects.`;



export const ABOUT_TEXT = `I am a passionate full stack developer specialised in crafting seamless web applications. With 1 years of hands-on experience, Some skills on which i have worked through my different projects are Backend Development (Django, Django Rest Framework, Python, SQL Server), Frontend development (ReactJS, HTML, CSS, JavaScript, JQuery), Deployment(AWS EC2, Hostinger's VPS, Nginx, Github Actions,) and others are  OOP , Data Structures and Algorithms (Python). I am Committed to continuous learning and staying up-to-date with emerging technologies. Eager to contribute my skills and passion to a dynamic team and drive innovative projects.`;


export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Developer",
    company: "Cloud9 e-biz Pvt Ltd",
    description: `Designed and implemented a Single Sign-On (SSO) system from scratch, integrating it with multiple systems.*Maintained and Integrated backend solutions for mobile and web platforms which includes custom Service Desk SaaS application, enhancing system efficiency and improving user response times by 30%. 
*Built robust APIs and numerous complex stored procedures, reducing data retrieval times by up to 25%.  
*Enabled efficient migration of datasets across multiple databases by writing SQL scripts and stored procedures, 
ensuring data integrity and reducing manual data verification.  
*Developed a Virtual Attendance Tracking system and Location Dashboard for mobile app users. 
*Migrated platform to new version of Firebase Notification System, resulting in faster and more reliable notifications`,
    technologies: ["SQL Server", ".NET Framework", ".NET Web Api"],
  },
  {
    year: "Nov 2023 - Feb 2024",
    role: "Freelance Web Developer",
    company: "Local Book Shop Owner",
    description: `Successfully deployed Fully Functional E-commerce Website for purchasing local books. 
*Integrated Payment Gateway and Automated Email Notification System for users 
*Home Delivery or Pickup from the Nearest Store options are available. 
*Implemented  Dealer Registration System, allowing individuals to register as dealers and serve as local points  
of sale for regular users and also implemented custom coupon system. 
*Implemented membership features (like prime and dealer membership) for special discounts. 
*Custom Admin Panel : Management of books, coupons, dealers, users, courier’s services.  
*Deployed website on AWS EC2 using Nginx Web Server and Ubuntu OS and Automated Deployment using 
GitHub Actions.`,
    technologies: ["Django","Python", "Celery", "Celery Beat","Redis", "AWS EC2", "Nginx", "Github Actions", "HTML", "CSS", "JavaScript", "SQLite3"],
    liveLink:"https://onlinebookstore.tech/",
    githubLink:"https://github.com/tejasgodse24/BookStoreEcommerce"
  },
  
];

export const PROJECTS = [
  {
    title: "Multiplayer Chess Game",
    image: chat_app,
    description:
      "Developed a Multiplayer Chess Game allowing users to play chess in real time *Implemented Social Authentication using Sign In With Google. *Ensured game state persistence to handle accidental page refreshes without disrupting the gameplay",
    technologies: ["Django", "Django Channels", "Django Rest Framework", "SQLite3"],
    githubLink:"https://github.com/tejasgodse24/MultiPlayerChessApp"
  },
  {
    title: "Real Time Chat Application ",
    image: chat_app,
    description:
      "Developed a Real-Time Chat Application using Django for backend and WebSocket for asynchronous communication. *Integrated chat features such as Private Messaging, and Chat Groups(Rooms). ",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript" ,"Django", "Django Channels", "SQLite3"],
    githubLink:"https://github.com/tejasgodse24/DjangoChatApp"

  },
  {
    title: "Authentication System",
    image: project2,
    description:
      "Developed User Authentication System featuring registration, login, logout, password change, and password reset functionalities.*Implemented secure password reset via email with unique tokenized links. *Built RESTful APIs using Django Rest Framework, used JWT for secure user authentication .",
    technologies: ["Django Rest Framework", "SQLite3."],
    githubLink:"https://github.com/tejasgodse24/authentication_DRF_JWT"

  },
  
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
    "isActive": false
  },
  {
    "displayText": "Projects",
    "id": "projects-section",
    "isActive": false
  },
  {
    "displayText": "Education",
    "id": "education-section",
    "isActive": false
  },
  {
    "displayText": "Contact",
    "id": "contact-section",
    "isActive": false
  }

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 9765851707",
  email: "tejasgodse19@gmail.com",
};
