import reactIcon from "../assets/react.webp";
import expressIcon from "../assets/express.webp";
import mongodbIcon from "../assets/mongodb.webp";
import nodeIcon from "../assets/nodejs.webp";
import htmlIcon from "../assets/html5.webp";
import cssIcon from "../assets/css3.webp";
import cIcon from "../assets/c.webp";
import cPlusIcon from "../assets/c++.webp";
import firebaseIcon from "../assets/firebase.webp";
import gitIcon from "../assets/git.webp";
import githubIcon from "../assets/github.png";
import javascriptIcon from "../assets/javascript.webp";
import tailwindIcon from "../assets/tailwind.webp";
import reduxIcon from "../assets/redux.webp";
import java from "../assets/java.png";
import python from "../assets/python.png";
import reactnative from "../assets/reactnative.png";
import mysql from "../assets/mysql.png";
import flutter from "../assets/flutter.webp";
export const skills = {
  Skills: [
    {
      id: 2,
      title: "C",
      url: cIcon,
      link: "https://www.w3schools.com/c/c_intro.php",
      description:"C language is a general-purpose programming language,It has influenced the development of many other programming languages. It has served as the foundation for operating systems like Unix and is still widely used today in various domains of software development."
    },
    {
      id: 1,
      title: "C++",
      url: cPlusIcon,
      link: "https://www.w3schools.com/cpp/cpp_intro.asp",
      description:"C++ is a powerful and versatile programming language that was developed as an extension of the C programming language, It has object-oriented programming (OOP) concepts, making it suitable for a wide range of applications"
    },
    {
      id: 17,
      title: "JAVA",
      url: java,
      link: "https://www.java.com/en/",
      description:"Java is a popular, general-purpose programming language that was developed by Sun Microsystems,One of the main strengths of Java is its object-oriented programming (OOP) approach. It provides features such as classes, inheritance, encapsulation, and polymorphism, making it suitable for building large-scale, modular, and maintainable applications. "
    },
    {
      id: 18,
      title: "Python",
      url: python,
      link: "https://www.python.org/",
      description:'Python is a high-level, interpreted programming language,Python emphasizes code readability with its clean and concise syntax, which allows developers to express concepts in fewer lines of code compared to other languages.'
    },
    {
      id: 3,
      heading: "Frontend",
      title: "React",
      url: reactIcon,
      link: "https://reactjs.org/",
      description:"React is a popular JavaScript library for building user interfaces. It was developed by Facebook and was first released in 2013. React allows developers to create reusable UI components and build dynamic, interactive web applications.One of the key features of React is its component-based architecture."
    },
    {
      id: 4,
      title: "Javascript",
      url: javascriptIcon,
      link: "https://www.javascript.com/",
      description:"JavaScript is a versatile programming language primarily used for web development. It was created by Brendan Eich at Netscape Communications and was first released in 1995. JavaScript is a fundamental technology for building interactive and dynamic websites."
    },
    {
      id: 5,
      title: "HTML",
      url: htmlIcon,
      link: "https://www.w3schools.com/html/html_intro.asp",
      description:"HTML (Hypertext Markup Language) is the standard markup language used for creating the structure and content of web pages. It forms the backbone of web development and is supported by all web browsers."
    },
    {
      id: 6,
      title: "CSS",
      url: cssIcon,
      link: "https://www.w3schools.com/css/css_intro.asp",
      description:"CSS (Cascading Style Sheets) is a style sheet language used to define the visual presentation and layout of HTML documents. It works alongside HTML to control the appearance of web pages, allowing developers to specify how elements should be styled and positioned."
    },
    {
      id: 7,
      title: "Tailwind",
      url: tailwindIcon,
      link: "https://tailwindcss.com/",
      description:"Tailwind CSS is a popular utility-first CSS framework that simplifies the process of styling and building responsive web interfaces. It provides a set of pre-defined utility classes that can be easily applied to HTML elements to style them."
    },
    {
      id: 19,
      title: "React-Native",
      url: reactnative,
      link: "https://reactnative.dev/",
      description:"React Native is an open-source framework for building native mobile applications using JavaScript and React. It allows developers to create mobile apps that can run on both iOS and Android platforms, sharing a significant portion of the codebase between them."
    },
    {
      id: 20,
      title: "Flutter",
      url: flutter,
      link: "https://flutter.dev/",
      description:"Flutter is an open-source UI software development kit (SDK) created by Google for building natively compiled applications for mobile, web, and desktop platforms from a single codebase. It uses the Dart programming language and provides a rich set of pre-designed widgets and tools to create beautiful and high-performance user interfaces."
    },
    {
      id: 8,
      heading: "Backend",
      title: "Express",
      url: expressIcon,
      link: "https://expressjs.com/",
      description:"Express.js is a fast and minimalist web application framework for Node.js. It provides a robust set of features for building web applications and APIs, making it a popular choice among developers for server-side development."
    },
    {
      id: 9,
      title: "NodeJS",
      url: nodeIcon,
      link: "https://nodejs.org/en/",
      description:"Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build scalable and high-performance network applications. It utilizes an event-driven, non-blocking I/O model, making it efficient and well-suited for handling concurrent operations."
    },
    {
      id: 10,
      heading: "Database",
      title: "Mongodb",
      url: mongodbIcon,
      link: "https://www.mongodb.com/",
      description:"MongoDB is a popular open-source, NoSQL document database that provides high performance, scalability, and flexibility for storing and managing data. It is designed to handle large volumes of data and is widely used in modern web and mobile applications."
    },
    {
      id:11,
      title: "MySQL",
      url: mysql,
      link: "https://www.mysql.com/",
      description:"MySQL is an open-source relational database management system (RDBMS) known for its reliability, scalability, and ease of use. It uses a structured query language (SQL) to manage and manipulate data in tables, making it a popular choice for storing and retrieving structured data."
    },
    {
      id: 12,
      heading: "Web Development Tools",
      title: "Git",
      url: gitIcon,
      link: "https://git-scm.com/",
      description:"Git is a widely used version control system that allows developers to track changes in their codebase, collaborate with others, and manage different versions of their project. It provides a structured and efficient way to manage code repositories and facilitates effective collaboration among developers."
    },
    {
      id: 13,
      title: "Github",
      url: githubIcon,
      link: "https://github.com/",
      description:"GitHub is a web-based platform built on top of Git, providing hosting services for Git repositories. It offers additional features and functionalities that enhance collaboration, code sharing, and project management."
    },
    {
      id: 14,
      title: "Redux",
      url: reduxIcon,
      link: "https://redux.js.org/",
      description:"Redux is a predictable state container for JavaScript applications. It is commonly used with frameworks like React to manage the state of an application in a predictable and centralized manner."
    },
    {
      id: 15,
      title: "Firebase",
      heading:"Cloud Services",
      url: firebaseIcon,
      link: "https://firebase.google.com/",
      description:"Firebase is a comprehensive platform provided by Google that offers a range of cloud-based services and tools for developing and managing web and mobile applications. It provides a unified and scalable infrastructure, enabling developers to build high-quality apps with ease."
    },
  ],
};
