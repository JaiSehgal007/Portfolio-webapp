import ProfileImage2 from "../assets/aboutImage2.webp";
import GoogleCloud from "../assets/googleCloud.svg";
import AboutTimeline from "./AboutTimeline";
import "./AboutDetail.css"


const AboutDetails = () => {
    return (
        <div className="mainContainer">
            <div style={{ flex: "1 0 33.33%",display: "flex",flexDirection:'column',alignItems: "center",padding: "0 20px",}}>
                <img
                    src={ProfileImage2}
                    loading="lazy"
                    className="w-4/5 border-orange-400 border-8 border-double mt-4 md:mt-10"
                    alt="profileImage"
                    style={{display:"block"}}
                />
                <a
                    className="flex rounded-3xl justify-between border border-orange-500 items-center p-2 animate-bounce mt-8 font-google xs:text-lg sm:text-xl font-medium text-[#676767]"
                    href="https://drive.google.com/file/d/1qkJtIhYAP1FCD6_8jELq_3MVPyElQynz/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: '80%' }}
                >
                    <figure className="flex w text-lg justify-center m-auto">
                        <img
                            src={GoogleCloud}
                            alt="googlecloud"
                            loading="lazy"
                            className="w-1/5 sm:1/6 mr-1"
                            style={{ marginRight: '10px' }}
                        />
                        <span className="flex justify-center">My Resume</span>
                    </figure>
                </a>
            </div>
            <div style={{ flex: "2 0 66.67%",borderLeft: "1px solid orange" }}>
                <AboutTimeline />
            </div>
        </div>

    )
}

export default AboutDetails
