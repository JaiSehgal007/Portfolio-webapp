import { useEffect, useRef, useState } from "react";
import "./FrontPage.css";
import Typed from "typed.js";
import rocket from '../assets/Rocket.png';
import AnimationBackground from "./AnimatedBackground"; // Import AnimationBackground component

const TextSphere = (props) => {
    const typedRef = useRef(null);
    const [showBackground, setShowBackground] = useState(true);
    const [containerDimensions, setContainerDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const options = {
            strings: ['JAI SEHGAL'],
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500,
        };

        const typed = new Typed(typedRef.current, options);

        const handleResize = () => {
            setContainerDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            typed.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOnClick = () => {
        setShowBackground(false);
        document.getElementById('animation-background').style.display="none";
        props.handleOnClick(); // Pass the click event up to the parent component if needed
    };

    return (
        <div className="container" style={{ width: containerDimensions.width, height: containerDimensions.height }}>
            {showBackground && <AnimationBackground />}
            <div className="content">
                <div className="body">
                    <div className="main-ele">
                        <div className="text-sphere"></div>
                    </div>
                    <div id="elevated">
                        <div className="wrapper" id="wrapper">
                            <div className="cols0">
                                <span className="topline">Hello</span>
                                <div className="type">I'm{" "}
                                    <span ref={typedRef} className="multiText"></span>
                                </div>
                                <div className="btns">
                                    <button onClick={handleOnClick} id="myButton">
                                        <span>Lets's Explore More <img style={{ display: 'inline' }} height="25px" width="25px" src={rocket} alt="" /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextSphere;
