import bookMeBuddy from "../assets/BookMeBuddy-tech-stack.png";
import productCatalog from "../assets/product-catalog-tech-stack.png";
import pjFlights from "../assets/pj-flights-project-logo.jpeg";
import dayTrading from "../assets/day-trading-project-logo.jpg";

export const projects = [
  {
    id: 1,
    title: "BookMeBuddy",
    description: "An active full stack cloud application using React for the front-end, Node JS Azure functions for the back-end, and Azure Cosmos DB for the database.",
    tech: ["React", "Node.js", "Azure", "Cosmos DB"],
    image: bookMeBuddy,
    github: "https://github.com/Booking-Management-System-App",
    //liveUrl: "https://icy-field-01073fe1e.5.azurestaticapps.net/"
  },
  {
    id: 2,
    title: "Product Catalog",
    description: "A product catalog app built using React for the front-end, Express JS for the back-end, and Docker for containerization.",
    tech: ["Docker", "MongoDB", "Express", "Node.js"],
    image: productCatalog,
    github: "https://github.com/ParmbeerJohal/product-list-catalog"
  },
  {
    id: 3,
    title: "PJ Flights",
    description: "A full stack app using Angular for the front-end and NestJS for the back-end.",
    tech: ["Angular", "NestJS", "PostgreSQL", "TypeScript"],
    image: pjFlights,
    github: "https://github.com/ParmbeerJohal/Flight-Web-App",
  },
  {
    id: 4,
    title: "DayTrading Inc.",
    description: "A distributed software system developed in Python scaling its services up to 1000 users.",
    tech: ["HTML", "CSS", "Python", "PostgreSQL"],
    image: dayTrading,
    github: "https://github.com/ParmbeerJohal/SENG468_ScalabilityDayTradeInc"
  },
];