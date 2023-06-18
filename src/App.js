import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import FrontPage from './pages/FrontPage';
import Loader from "./layout/Loader";

const Search = lazy(() => import("./pages/Search"));
const Skills = lazy(() => import("./pages/Skills"));
const Header = lazy(() => import("./layout/Header"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Education = lazy(() => import("./pages/Education"));
const Projects = lazy(() => import("./pages/Projects"));
const Error404 = lazy(() => import("./pages/Error404"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [beforeLoad, setBeforeLoad] = useState(true);
  const [loaderTime, setloaderTime] = useState(true);
  const handleOnClick = () => {
    setBeforeLoad(false);
  };

  useEffect(() => {
    if(beforeLoad===false){
      setTimeout(() => {
        setloaderTime(false)
      }, 2500);
    }
  }, [beforeLoad]);

  return (
    <>
      {beforeLoad? (
        <FrontPage handleOnClick={handleOnClick} />
      ) : (loaderTime)?
       (
        <div style={{marginTop:'60px'}}>
          <Loader title={`Lets Dive Into a New World`}/>
        </div>
       ):
        
        (<Suspense fallback={<>...</>}>
          <Fragment>
            <ToastContainer />
            <Router>
            <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/search"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Search />
                    </Suspense>
                  }
                />
                <Route
                  path="/skills"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Skills />
                    </Suspense>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Suspense fallback={<>...</>}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Contact />
                    </Suspense>
                  }
                />
                <Route
                  path="/education"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Education />
                    </Suspense>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Projects />
                    </Suspense>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Error404 />
                    </Suspense>
                  }
                />
              </Routes>
            </Router>
          </Fragment>
        </Suspense>
      )}
    </>
  );
}

export default App;
