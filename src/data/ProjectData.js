import Portfolio from "../assets/portfolio.webp";
import MessangerPegion from "../assets/MessengerPegion.png";
import CloudNotebook from "../assets/CloudNotebook.png";
import Todolist from "../assets/todolist.jpg";
// import Calculator from "../assets/calculator.webp";
import Moo from "../assets/Moo.jpg";
import Finalym from "../assets/Finalym.png"

export const projectData = [
  {
    id: 1,
    image: Moo,
    summary: "\"Moo - Your Doorstep Dairy\" A moblie application, built under Solving for India Hackathon",
    overlay: "Mobile-Applicaton",
    title: "Moo - Your Doorstep Dairy",
    features: [
      "A mobile application to ensure B2C interacton between Dairy Product seller and the Customer. Key features are:",
      "1. Filter feature based on rating, price, and product categories.",
      "2. Add to Cart feature.",
      "3. A Monthly Subscription Model is added.",
      "4. Payment feature to buy products.",
      "5. Admin Dashboard feature to do CRUD operations on User, Products, and Orders by the Admin",
      "6. Multiple Language and Dark Mode support",
    ],
    techStack: ["React-Native","Google Cloud Services", "AMD Instances", "Typescript", "NodeJS"],
    links: [
      "https://github.com/tr1ten/Moo",
    ],
  },
  {
    id: 2,
    image: Portfolio,
    summary: "Portfolio Web-app made using React, Tailwind CSS and Firebase",
    overlay: "Portfolio- Webapplication",
    title: "Portfolio Web-app",
    features: ["My Portfolio web application is based on GOOGLE theme with its backend hosted on Firebase"],
    techStack: ["React", "Tailwind CSS","Firebase"],
    links: [
      "https://github.com/JaiSehgal007/Portfolio-webapp",
    ],
  },

  {
    id: 3,
    image: CloudNotebook,
    summary: "Cloud Notebook is a Web-app built using MERN stack, it helps to Keep all your notes on cloud servers",
    overlay: "Cloud Notebook",
    title: "Cloud Notebook - Web App",
    features: [
      "Some key features are: ",
      "1. Login and Signup functionality is provided to the user to ensure privacy.",
      "2. A seprate client and server set up, making of a backend api using Nodejs and Expressjs",
      "2. The user dashboard features all teh CRUD operations in it",
    ],
    techStack: ["React", "MongoDB","Expressjs","Nodejs","Javascript"],
    links: [
      "https://github.com/JaiSehgal007/CloudNotebook",
    ],
  },

  {
    id: 4,
    image: MessangerPegion,
    summary: "Messanger Pigeon is a news app created with React",
    overlay: "Messanger Pigeon",
    title: "Messanger Pigeon Web-app",
    features: [
      "Some key features are:",
      "News are fetched with the use of external API",
      "News Can Be Views based on different categories and country",
      "User also get the availability to check news based on specific time and popularity"
    ],
    techStack: [
      "React",
      "Javascript",
      "News API"
    ],
    links: [
      "https://github.com/JaiSehgal007/MessengerPigeon",
    ],
  },
  
  {
    id: 5,
    image: Finalym,
    summary: "Final Year Marketplace - A web application",
    overlay: "FinalYear Marketplace",
    title: "Final Year Marketplace",
    features: [
      "It’s a webapplication made with the help of MERN stack and Firebase",
      "Some key features are:",
      "1. It used authentication system for each user",
      "2. It helps the final year students to sell their belongings that are needed by the college freshers",
      "3. It enables seamless communication between students and seniors, facilitating convenient buying and selling opportunities."
    ],
    techStack: ["React", "MongoDB","NodeJs","ExpressJs", "Firebase", "Javascript"],
    links: [],
  },
  {
    id: 6,
    image: Todolist,
    summary: "Todolist Mobile app made using React-Native",
    overlay: "Todolist-Mobile Application",
    title: "Todolist Mobile Application",
    features: [
      "It’s a basic todolist webapplication",
      "Some key features are:",
      "1. Filter on todos based on completion.",
      "2. Feature to 'Add', 'Delete' and 'Edit' of todos.",
    ],
    techStack: ["React-Native", "Javascript"],
    links: [
      "https://github.com/JaiSehgal007/Todo-List",
    ],
  },
];
