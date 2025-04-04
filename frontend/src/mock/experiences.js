import frescheLogo from "../assets/fresche-logo.jpeg";
import dhlLogo from "../assets/dhl-logo.png";
import revStatusLogo from "../assets/rev-status-logo.jpg";

export const experiences = [
  {
    id: 1,
    company: "Fresche Solutions",
    role: "Web Application Developer",
    period: "November 2020 - Present",
    logo: frescheLogo,
    description: "",
    achievements: [
        "Leading development efforts for a transnational company and their customer to create API endpoints and new app features aimed at ensuring accurate data transmission",
        "Collaborating with an established multinational corporation to modernize their web application, resulting in a more efficient depot check-in process for warehouse users",
        "Maintaining stakeholder relationship with an American College of Cardiology company by developing a SAAS platform for physicians to shape their program's financial and operational strategies and transform cardiovascular care",
        "Increasing customer satisfaction with high profile clients by remaining within budget and estimated project timelines",
        "Utilizing JIRA and Bitbucket for agile methodology to implement and promote client requested features more efficiently",
    ],
    skills: ["React", "Vue", "Node.js", "Laravel", "JavaScript", "PHP", "AWS", "Azure", "Docker", "Git", "Subversion", "JIRA", "Bitbucket"],
    color: "cyan",
  },
  {
    id: 2,
    company: "Digital Health Lab, University of Victoria",
    role: "Full Stack Developer",
    period: "July 2020 - November 2020",
    logo: dhlLogo,
    description: "",
    achievements: [
        "Collaborated with researchers to design and develop a mobile intervention program application, enabling them to create effective and user-friendly intervention programs",
        "Developed the latest user-facing features using React with TypeScript to improve code readability and maintenance",
        "Designed a modern, highly responsive web-based user interface which increased researcher engagement",
        "Built backend web API's using Django and Django REST Framework, resulting in a more scalable application",
        "Communicated with researchers to translate wireframe designs into high quality code using Figma",
    ],
    skills: ["React", "Django", "TypeScript", "Python", "MySQL", "AWS", "Docker"],
    color: "indigo",
  },
  {
    id: 3,
    company: "Rev Status",
    role: "Web Developer",
    period: "2018 - 2020",
    logo: revStatusLogo,
    description: "",
    achievements: [
        "Increased user traffic by created a landing page for the client using HTML, CSS, and JavaScript/JQuery",
        "Set up weekly meetings to maintain consistent communication for the client’s requirements",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    color: "yellow",
  },
];
