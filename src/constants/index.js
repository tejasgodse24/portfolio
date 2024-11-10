import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `Full-stack developer passionate about creating seamless, high-performance web applications. Experienced in backend and frontend technologies, deployment, and core programming skills to drive innovative projects.`;



export const ABOUT_TEXT = `I am a passionate full stack developer specialised in crafting seamless web applications. With 1 years of hands-on experience, Some skills on which i have worked through my different projects are Backend Development (Django, Django Rest Framework, Python, SQL Server), Frontend development (ReactJS, HTML, CSS, JavaScript, JQuery), Deployment(AWS EC2, Hostinger's VPS, Nginx, Github Actions,) and others are  OOP , Data Structures and Algorithms (Python). I am Committed to continuous learning and staying up-to-date with emerging technologies. Eager to contribute my skills and passion to a dynamic team and drive innovative projects.`;


export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Developer Intern",
    company: "Cloud9 e-biz Pvt Ltd",
    description: `Maintained and Integrated backend solutions for mobile and web platforms which includes custom Service Desk SaaS application, enhancing system efficiency and improving user response times by 30%. 
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
  },
  
];

export const PROJECTS = [
  {
    title: "Real Time Chat Application ",
    image: project1,
    description:
      "Developed a Real-Time Chat Application using Django for backend and WebSocket for asynchronous communication. *Integrated chat features such as Private Messaging, and Chat Groups(Rooms). ",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript" ,"Django", "Django Channels", "SQLite3"],
  },
  {
    title: "Authentication System",
    image: project2,
    description:
      "Developed User Authentication System featuring registration, login, logout, password change, and password reset functionalities.*Implemented secure password reset via email with unique tokenized links. *Built RESTful APIs using Django Rest Framework, used JWT for secure user authentication .",
    technologies: ["Django Rest Framework", "SQLite3."],
  },
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 9765851707",
  email: "tejasgodse19@gmail.com",
};
