import Portfolio from "../assets/portfolio.webp";
// import Ecommerce from "../assets/ecommerce.webp";
import Whatsapp from "../assets/whatsapp.webp";
import Todolist from "../assets/todolist.webp";
import InstagramClone from "../assets/instagramClone.webp";
import Calculator from "../assets/calculator.webp";
import Moo from "../assets/Moo.jpg";

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
    summary: "Portfolio Web-app made using React & Tailwind CSS.",
    overlay: "Portfolio- Webapplication",
    title: "Portfolio Web-app",
    features: ["My Portfolio web application is based on GOOGLE theme."],
    techStack: ["React", "Tailwind CSS"],
    links: [
      "https://pranjay-vats-portfolio.netlify.app/",
      "https://github.com/PranjayVats/MyPortfolio",
    ],
  },

  {
    id: 3,
    image: InstagramClone,
    summary: "Instagram clone Web-app made using React & Firebase.",
    overlay: "InstagramClone- Webapplication",
    title: "Instagram Clone Web-app",
    features: [
      "Some key features are: ",
      "1. Real-time Uploading of Post and Comments.",
      "2. Deployed on Firebase.",
    ],
    techStack: ["React", "Firebase"],
    links: [
      "https://instagram-clone-pv.web.app/",
      "https://github.com/PranjayVats/instagram-clone",
    ],
  },

  {
    id: 4,
    image: Whatsapp,
    summary: "Whatsapp clone Web-app made using MERN stack and Firebase .",
    overlay: "WhatsappClone- Webapplication",
    title: "Whatsapp-clone Web-app",
    features: [
      "Some key features are:",
      "Real-time chat feature with the help of Firebase.",
      "Backend and Frontend hosted on Netlify.",
    ],
    techStack: [
      "React",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "Pusher",
      "Firebase",
    ],
    links: [
      "https://basic-whatsapp-clone-app.netlify.app",
      "https://github.com/PranjayVats/whatsapp-clone",
    ],
  },
  {
    id: 5,
    image: Todolist,
    summary: "Todolist Web-app made using MERN stack.",
    overlay: "Todolist- Webapplication",
    title: "Todolist Web-app",
    features: [
      "It’s a basic todolist webapplication",
      "Some key features are:",
      "1. Filter on todos based on completion.",
      "2. Feature to 'Add', 'Delete' and 'Edit' of todos.",
      "3. Frontend deployed on Firebase.",
      "4. Backend deployed on Netlify.",
    ],
    techStack: ["React", "MongoDB", "ExpressJS", "NodeJS"],
    links: [
      "https://simple-todolist-webapp.netlify.app",
      "https://github.com/PranjayVats/Simple-Todolist-Webapp",
    ],
  },
  {
    id: 6,
    image: Calculator,
    summary: "Simple Calculator Web-app made using React.",
    overlay: "Simple Calculator",
    title: "Simple Calculator Web-app",
    features: ["Calculator web application to perform basic calculations."],
    techStack: ["React", "HTML", "CSS", "Javascript"],
    links: [
      "https://basic-calculator-reactjs.netlify.app",
      "https://github.com/PranjayVats/my-react-calculator",
    ],
  },
];
