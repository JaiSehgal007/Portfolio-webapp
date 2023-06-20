import React, { useState, useEffect } from "react";
import Photos from "../assets/googlePhotos.webp";
import Loader from "../layout/Loader";
import Navbar from "../layout/Navbar";
import AboutDetails from "./AboutDetails";

const About = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="about flex flex-col overflow-y-auto h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-x-hidden w-screen items-center ">
      {!show ? (
        <Loader title="About" />
      ) : (
        <div className="w-screen">
          <Navbar
            className="fixed sm:static top-0"
            image={Photos}
            title="About"
            search="Photos"
          />
          <AboutDetails/>
        </div>
      )}
    </div>
  );
};
export default About;