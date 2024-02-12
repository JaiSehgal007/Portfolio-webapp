import Portfolio from "../assets/portfolio.webp";
import MessangerPegion from "../assets/MessengerPegion.png";
import CloudNotebook from "../assets/CloudNotebook.png";
import Todolist from "../assets/todolist.jpg";
import Moo from "../assets/Moo.jpg";
import Finalym from "../assets/Finalym.png"
import FitQuest from "../assets/Fitquest.jpg"
import ViolenceGuard from "../assets/ViolenceGuard.webp"
import WhisperWatch from "../assets/WhisperWatch.png"
import TextSummarizer from "../assets/TextSummarizer.png"
import SignVision from "../assets/SignVision.webp"
import ShopSage from "../assets/ShopSage.jpg"

export const projectData = [
  {
    id: 1,
    image: FitQuest,
    summary: "\"FitQuest - Your Motion Tracker\" Designed a fitness application for the Smart India Hackathon",
    overlay: "Web-Applicaton",
    title: "FitQuest - Your Motion Tracker",
    features: [
      "Designed a fitness application for the Smart India Hackathon",
      " Facilitates real-time pose accuracy detection during user workout.",
      "Gamified the user experience by providing personalized avatars whose health gets mirrored with the user's health.",
    ],
    techStack: ["React.js","Node.js", "Express.js", "MongoDB", "Mediapipe"],
    links: [
      "https://fit-quest-mu.vercel.app",
    ],
  },
  {
    id: 2,
    image: ViolenceGuard,
    summary: "\"Violence-Guard\" A Deep learning project to detect and report violence scene from public places",
    overlay: "Machine-Learning-Applicaton",
    title: "Violence-Guard",
    features: [
      "1. Developed a deep learning model using transferlearning for violence detection",
      "2.  98.5% accuracy on the training set.",
      "3. Identifies and saves enhanced frames of violent scenes, along with recognizing and storing associated faces.",
      "4. Payment feature to buy products.",
      "5. Admin Dashboard feature to do CRUD operations on User, Products, and Orders by the Admin",
      "6. Multiple Language and Dark Mode support",
    ],
    techStack: ["Tensorflow,","OpenCV", "Firebase", "Telegram"],
    links: [
      "https://github.com/JaiSehgal007/violence-reporter",
    ],
  },
  {
    id: 3,
    image: WhisperWatch,
    summary: "\"WhisperWatch\" A Deep learning lip reading model",
    overlay: "Machine-Learning-Applicaton",
    title: "WhisperWatch",
    features: [
      "1. Deployed aTensorFlow lip reading model for accurate lip movement detection using Convolutional and LSTM neural network layers.",
      "2. Employed OpenCVforvideopreprocessing, enhancing data quality for improved model accuracy",
      "3. Streamlined user interaction by deploying the project with a user-friendly interface using Streamlit.",
    ],
    techStack: ["Tensorflow","OpenCV", "Streamlit"],
    links: [
      "https://bit.ly/422bWWw",
    ],
  },
  {
    id: 4,
    image: TextSummarizer,
    summary: "\"TextSummarizer\" A end to end NLP project for text summarization",
    overlay: "Deep-Learning-App",
    title: "TextSummarizer",
    features: [
      "Created a deep learning model for text summarization by fine-tuning a transformer large language model.",
      "Leveraged Docker for CI/CD deployment of the model on AWS",
    ],
    techStack: ["Tensorflow","HuggingFace", "Docker", "AWS"],
    links: [
      "https://github.com/JaiSehgal007/Text-Summarizer",
    ],
  },
  {
    id: 5,
    image: ShopSage,
    summary: "\"ShopSage - Get Shop Suggestions\" A ecommerce web application, built under flipkart grid",
    overlay: "Machine-Learning-Application",
    title: "ShopSage - Get Shop Suggestions",
    features: [
      "1. Streamlined an e-commerce platform as a group project for the GRID hackathon",
      "2. Utilizing collaborative and content-based filtering.",
      "3. Used fuzzy Logic for pattern matching",
      "4. Designed using React for the frontend and Django for backend.",
    ],
    techStack: ["React","Django", "Scikit-Learn", "NLTK"],
    links: [
      "https://bit.ly/3NLbOFa",
    ],
  },
  {
    id: 6,
    image: SignVision,
    summary: "\"SignVision - Sign Language to Text\" A deep learning application, built to interpret sign language",
    overlay: "Deep-Learning-Applicaton",
    title: "SignVision - Sign Language to Text",
    features: [
      "1. Created a machine learning model for sign language detection.",
      "2. Streamlines sign detection and labeling gestures.",
      "3. Leveraged TensorFlow for object detection and OpenCV for labelling.",
    ],
    techStack: ["Streamlit","Numpy", "Pandas", "Tensorflow", "OpenCV"],
    links: [
      "https://github.com/tr1ten/Moo",
    ],
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
