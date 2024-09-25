import React from 'react'
import './AboutTimeline.css'
import topImg from '../assets/winner.png'
import hat from '../assets/graduation-hat.png'
import bag from '../assets/school-bag.png'
import google from "../assets/search.png"
// import star from '../assets/star.png';
import Namaste from "../assets/namaste.webp";

const AboutTimeline = () => {

    const containerStyle = {
        background: 'linear-gradient(to bottom, white, #ebf8ff)',
    };
    return (
        <div className='body' style={containerStyle}>
            <div className="timeline">
                <div style={{ boxShadow: 'none', height: '100px' }} className="container left-container">
                    <img style={{ top: '0px' }} src={topImg} alt="" />
                </div>
                <div className="container right-container">
                    <img src="data:image/webp;base64,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" alt="" />
                    <div className="text-box">
                        <h2>Joined UnifyApps as a AI Engineer Intern</h2>
                        <small> May2024</small>
                        <p>
                            Authored two research papers, along with that my responsibilities included developing pipelines for various phases of model development, enhancing query processing in AI-driven conversations, and deploying models on cloud platforms.
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img src="https://pbs.twimg.com/profile_images/1548357959167619072/QH9n9Yeu_400x400.jpg" alt="" />
                    <div className="text-box">
                        <h2>Joined EdCIL as a SDE Intern</h2>
                        <small>Jan 2024 - Mar 2024</small>
                        <p>
                            Joined EdCIL a company under Ministry of Education as a software developer intern while working on their project management systems and handling analysing and handling data of the eductional websites run by the ministry of Education
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3MDc3Nzc3LS0tNzc3NzcwMjg3NTc1NS01Nzg4NzExLzU1Nys3NzE3NTc3N//AABEIACAAIAMBEQACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAEBwEFBgP/xAAqEAACAQMEAAUEAwEAAAAAAAABAgMEBREABhJREyExQZEiQmFxI7HxB//EABcBAQEBAQAAAAAAAAAAAAAAAAAEAgH/xAAgEQADAQABBAMBAAAAAAAAAAAAAQIDEQQSIVExQWEi/9oADAMBAAIRAxEAPwBY5XofGgJUB2VETkzEBVVckk+gA70Babg2/X7dlpobrHDHNUQiZYlcMyD0w49j8/vQFVleh8aAFMuBoBk2+Cg/5tQU93vUKVm5qlOdFby300iH736b/B7nXH8eAjObmulu3BTteubQXd5AKmnYlhL7clP4H9Y61D066nLV56Pul+VXr8ZVq8bhVH816Mz4v51eSgazsjq645KQwz2NANa/h92pFv7aLeJdKVFW4211DvEwUryVfuXGf36jzBGs1Uyu6nwjqTb4RXV+4tzWuxx3C51FDTVMzgQUT0v8jL7sfP6caky6ydtnnmuUvl/RRfTvPPvt8N/QvJql5ppJZCC8jl2IGBknJ8tWkwFzOgCKC5Vlun8egqpqeUjBaNyMjo9jWNM50nttco1N1D5l+SK24VdwqDUVtRJPMRjnI2TjrTPOMp7YXCF3VvmnycOZ1syf/9k=" alt="" />
                    <div className="text-box">
                        <h2>Knight at Leetcode</h2>
                        <small>July 2023</small>
                        <p>Attained the Knight badge at Leetcode, and among the top 2% of site-wide contestants, along with solving 1800+ question on the site
                            <br />
                            User Handle : <a rel="noreferrer" href="https://leetcode.com/CoderSahib_001/" target='_blank'>"CoderSahib_001"</a>
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img src="https://yt3.googleusercontent.com/Lkx3tvgHdRADC3wXQ5TfJZRTeH4nboEPA_-eJChOZ6jRkOdY35lcg014Whj36rHFXhrHY1T_4cs=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <div className="text-box">
                        <h2>Became 4 Star on CodeChef</h2>
                        <small>June 2023</small>
                        <p>Became a 4 star coder on codechef securing 69,113 and many such under 200 ranks in CodeChef starters contest.
                            <br />
                            User Handle : <a rel="noreferrer" href="https://leetcode.com/CoderSahib001/" target='_blank'>"CoderSahib001"</a>
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX////yUCJ/ugAApO//uQDxOgBytADyShT2j3v/+/T/tAAAnO74+/R7uACpz3T0+f50wPTxMgD1hW//rgDwHABnrwDxQwD4s6ejzGgAle0Amu5ovPNVGgEPAAABAklEQVR4nO3biQnCQBRF0bhkceKWxGjU/vsUHKzgMyDh3AIenAJeVUmSJEmSJEmSJEmSJEmSpH/tVocaxu/KcW5CzQWF9SZU22Vhsw3VEBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKuSDi0oe4/4SlUSeHYxXpk4XIOtRQUSlL5LtHyzCFYQeGzD/V6Z+CUQk0Fhf0u1jUL0z5UIiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRckXD97zxJkiRJkiRJkiRJkiRJkhTrA29gzkcc3y0uAAAAAElFTkSuQmCC" alt="" />
                    <div className="text-box">
                        <h2>Microsoft Learn Student Ambassador</h2>
                        <small>May 2023</small>
                        <p>Became a student ambassador of Microsoft representing NIT Kurukshetra, since then being conducting workshops on various latest technologies onbehalf of Microsoft .
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img src={google} alt="" />
                    <div className="text-box">
                        <h2>Developed Moo - Your Doorstep Dairy</h2>
                        <small>March 2023</small>
                        <p>Engineered a mobile application "Moo-Your Doorstep Dairy" under the hackathon organized by Google Cloud and AMD, securing top 10 rank in the regional round of the hackathon
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img src={hat} alt="" />
                    <div className="text-box">
                        <h2>NIT Kurukshetra</h2>
                        <small>2021 - 2025</small>
                        <p>I embarked on the B.Tech program specializing in Information Technology at NIT Kurukshetra, marking the beginning of my academic journey at the university.
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img width={'10px'} height={'10px'} src={bag} alt="" />
                    <div className="text-box">
                        <h2>Secondry and Senior Secondry Education</h2>
                        <small>2018 - 2021</small>
                        <p>I pursued my secondary and senior secondary education at Dyal Singh Public School in Karnal, under the CBSE board,
                            and attained an impressive overall percentage exceeding 95%.
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div style={{ boxShadow: 'none', height: '100px' }} className="container left-container">
                    <img style={{ top: '100px' }} src={Namaste} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutTimeline