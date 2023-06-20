import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader";
import Navbar from "../layout/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";
import SkillsCarousal from "./SkillsCarousal";

const Skills = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="skills flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-y-auto overflow-hidden w-screen items-center">
      {!show ? (
        <Loader title="Skills" />
      ) : (
        <div className="w-screen">
          <Navbar image="https://lh3.googleusercontent.com/Iyn9yCCDxgHqvjX5jMZ_looun-kL0Sk60FraoMU5-JQG2WstyK6QNzj3JguQRbvQmWqVBSoO88Oh1kGQAoXMPkIIEF0pQrvXL52XXw=h120" title="Skills" search="skills" />
          <div style={{marginTop:"40px"}}>
              <SkillsCarousal/>
          </div>
        </div>
      )}
    </div>
  );
};
export default Skills;
