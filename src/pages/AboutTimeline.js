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
            <div style={{boxShadow:'none',height:'100px'}} className="container left-container">
                <img style={{top:'0px'}} src={Namaste} alt="" />
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
                <img src="https://yt3.googleusercontent.com/Lkx3tvgHdRADC3wXQ5TfJZRTeH4nboEPA_-eJChOZ6jRkOdY35lcg014Whj36rHFXhrHY1T_4cs=s900-c-k-c0x00ffffff-no-rj" alt="" />
                <div className="text-box">
                    <h2>Became 4 Star on CodeChef</h2>
                    <small>June 2023</small>
                    <p>Became a 4 star coder on codechef securing 69,113 and many such under 200 ranks in CodeChef starters contest.
                        <br/>
                       User Handle : <a rel="noreferrer" href="https://leetcode.com/CoderSahib001/" target='_blank'>"CoderSahib001"</a>
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
                        <br/>
                       User Handle : <a rel="noreferrer" href="https://leetcode.com/CoderSahib_001/" target='_blank'>"CoderSahib_001"</a>
                    </p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>
            <div className="container left-container">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX8/fsDXq73/fz6/fn7/Pz8/fn2/P38/P38/Pry/PwDX60BYawGXaoZYqJgkrekwdLC2t6wytZzob4ma6ABXrEKXqROhrTL5O7d8vZxpMXp9/yJsskzc5mTvdZCfauKttErZ6C51+aqyty71d0YXpuhx9YaX5eDrMdynLecv9WLqsLY6/V+q8pUhatznb5ZjbS+4vCSvtXg7PJB8VO4AAAA10lEQVQYlQ3JbWNDMBSG4ScvDicRamnQWFtaG0Zn2///cfPxvm4IYXNXlKdT9eatOJ9hRKgbpkpCthdnBExeRMXdO0ul5TUY2FtM+e76qLUCXQLCoOTVjQ8uK50krceNs+foPvjxOSHTtGGilOeSKzcuihQGLBIgOYxh4+ZLY8WCNE3kPB7tX6RXTAppFWPJTR++CU/sJKneIzV+LFihg2syqvP6x7s9JireYAvWjQ827KwT+Wth3J3V6sPxNQ3OQJiwtbzObZrx0ucHCBF8t0b+K1/OGPMPuEQRjJx3jxQAAAAASUVORK5CYII=" alt="" />
                <div className="text-box">
                    <h2>Joined EdCIL as a SDE Intern</h2>
                    <small>Jan 2024</small>
                    <p>
                        Joined EdCIL a company under Ministry of Education as a software developer intern while working on their project management systems and handling analysing and handling data of the eductional websites run by the ministry of Education
                    </p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>
            <div style={{boxShadow:'none',height:'100px'}} className="container left-container">
                <img style={{top:'70px'}} src={topImg} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default AboutTimeline