import { useEffect } from "react";

import "./FrontPage.css"
import { useRef } from "react";
import Typed from "typed.js";
import TagCloud from "TagCloud";
import rocket from '../assets/Rocket.png'

const TextSphere = (props) => {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Angular",
                "NodeJs",
                "ExpressJs",
                "MongoDB",
                "FireBase",
                "C",
                "C++",
                "JAVA",
                "Python",
                "GIT",
                "GITHUB",
                "webGL",
                "Flutter",
                "React-Native",
                "Google Cloud",
                "AMD",
                "MySQL"
            ];

            const options = {
                radius: 500,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            }

            TagCloud(container, texts, options)
        }
    }, []);

    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: ['JAI SEHGAL'],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      return () => {
        typed.destroy();
      };
    }, []);
  

    return (
        <div className="body" style={{backgroundColor:'black'}}>
            <div className="main-ele">
                <div className="text-sphere">
                    <span className="tagcloud font-google"></span>
                </div>
            </div>
            <div id="elevated">
                <div className="wrapper" id="wrapper">
                    <div className="cols0">
                        <span className="topline">Hello</span>
                        <div className="type">I'm {" "}
                            <span ref={typedRef} className="multiText"></span>
                        </div>
                        <div className="btns">
                            <button onClick={props.handleOnClick} id="myButton"><span>Lets's Explore More <img style={{display:'inline'}} height="25px" width="25px" src={rocket} alt=""/></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextSphere;