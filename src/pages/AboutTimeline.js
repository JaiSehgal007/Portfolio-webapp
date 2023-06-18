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
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC0klEQVRYhe2XPU/bUBSGn3vzAcGo2FUFC1INHejQqEEs3Woklk7A2KoS4RfAPyD8gpJfQFOJdoUuLEgJ7dKhUi0xtQO4EguI1oYmfNhJ3CGQEnBAmI8sfbdzz71+33PP0TnXghPM2yrx8jRCPMfH4FYgTISc45WWq68A8MHW8at5fF+/HeKzOoSFkMO81KyagPe/Nu6M/LSIIzkYYWEnDaTvlLwGlQiHEsRUC8hrEL4hWNjxWyYAkK0kB4g2c8wkE2SSHXVbX7L5Waqe22f0xJjoi2P0xNGVWjymXcYqVVncdMmtH4UTcBnUmGBuSGGiv+2cL6VFSWkw1hsnk+xgeGUPq1QJ/E7oFORH7gWSn4WuSOafKU39oW4g3d9GSms8+nb9kMJ2uU6a7mtD74xgFStMfinerIDR3niDPf21RPbHYcPa7NoBM8kEufUjrIDauZaAs7D2gwlm1w4uPRuqBs4W1NyQgtEdLpZQp5Y2PaYHEnVbVyT5kS4cz8f8Xca0yyxtuvWauAihbqCw5ZEJuF41JjB6Ykw/TpAf6WJjVENXIjcvAGB2bZ/BZYfFTbfpHl2RbIyqF6bnWkVo2hXGP/1BjQme3o+iKxKjO4rRHUPv/Bf5m6FOBpedmxdwAsfzWd3yWAVy60foiuTbCxU1XntupLQIDxUZ2MpvZRhZpSqFba9h7WRO3JiATLKDzJNEoE+NiXOdctcNnvqhUpBJdjCTrJFPPGqnsOVhOmV2XZ+uuKi14VMRW8UKphM8jK4sIKVFmRpor9u6Ikn3twHNB9P45+az4MopMO0yg8sOVjE4otOwihWMlV1Mu3lDCpUCq1Sl76PDaG+Msd748fyvfcpxfUy7TGHLI/v9EMe7+MX3/00oERRaR++bEl+0ToAv5iSuzAJWC+gtXj/ISSY1B9cbvmMR1jHn8d/xCd5tp4lEpsBP3QqtTwEhCrh7WSb7HIC/mh/133DCK6oAAAAASUVORK5CYII=" alt="" />
                <div className="text-box">
                    <h2>Student Partner</h2>
                    <small>May 2023</small>
                    <p>I became a student partner representing NIT Kurukshetra at Internshala and conducted workshops throughout my tenure in the program.
                    </p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>
            <div className="container left-container">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3MDc3Nzc3LS0tNzc3NzcwMjg3NTc1NS01Nzg4NzExLzU1Nys3NzE3NTc3N//AABEIACAAIAMBEQACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAEBwEFBgP/xAAqEAACAQMEAAUEAwEAAAAAAAABAgMEBREABhJREyExQZEiQmFxI7HxB//EABcBAQEBAQAAAAAAAAAAAAAAAAAEAgH/xAAgEQADAQABBAMBAAAAAAAAAAAAAQIDEQQSIVExQWEi/9oADAMBAAIRAxEAPwBY5XofGgJUB2VETkzEBVVckk+gA70Babg2/X7dlpobrHDHNUQiZYlcMyD0w49j8/vQFVleh8aAFMuBoBk2+Cg/5tQU93vUKVm5qlOdFby300iH736b/B7nXH8eAjObmulu3BTteubQXd5AKmnYlhL7clP4H9Y61D066nLV56Pul+VXr8ZVq8bhVH816Mz4v51eSgazsjq645KQwz2NANa/h92pFv7aLeJdKVFW4211DvEwUryVfuXGf36jzBGs1Uyu6nwjqTb4RXV+4tzWuxx3C51FDTVMzgQUT0v8jL7sfP6caky6ydtnnmuUvl/RRfTvPPvt8N/QvJql5ppJZCC8jl2IGBknJ8tWkwFzOgCKC5Vlun8egqpqeUjBaNyMjo9jWNM50nttco1N1D5l+SK24VdwqDUVtRJPMRjnI2TjrTPOMp7YXCF3VvmnycOZ1syf/9k=" alt="" />
                <div className="text-box">
                    <h2>Knight at Leetcode</h2>
                    <small>July 2023</small>
                    <p>Attained the Knight badge at Leetcode, and among the top 5% of site-wide contestants, along with solving 1500+ question on the site
                        <br/>
                       User Handle : <a rel="noreferrer" href="https://leetcode.com/CoderSahib_001/" target='_blank'>"CoderSahib_001"</a>
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