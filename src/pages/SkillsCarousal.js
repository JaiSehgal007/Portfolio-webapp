import './SkillsCarousal.css'
import { useEffect, useState } from 'react';
import { skills } from "../data/SkillsData";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const SkillsCarousal = () => {
    const [slides, setSlides] = useState(3);
    const [width, setWidth] = useState(window.innerWidth);
    const skillsArray = skills.Skills;
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        if (width >= "1100") setSlides(3);
        else if (width >= "850") setSlides(2);
        else if (width >= "520") setSlides(1);
        else setSlides(1);
    }, [width]);
    return (
        <div className='container-element'>
            <div
                data-aos="zoom-in"
                className="flex justify-center font-google w-screen items-center h-1/6 mt-3 text-3xl xs:text-4xl sm:text-5xl md:text-6xl"
                style={{marginBottom:'25px'}}
            >
                <span className="text-blue-500">J</span>
                <span className="text-red-500">a</span>
                <span className="text-[#FBBC05]">i&nbsp;</span>
                <span className="text-blue-500">S</span>
                <span className="text-green-500">e</span>
                <span className="text-red-500">h</span>
                <span className="text-[#FBBC05]">g</span>
                <span className="text-blue-500">a</span>
                <span className="text-green-500">l</span>
                <span style={{color:'#FBBC05'}} className="text-[#FBBC05]-500">'</span>
                <span className="text-red-500">s&nbsp;&nbsp;</span>
                <span style={{color:'#73c0ff'}}>Skills</span>
            </div>
            <Swiper
                effect='coverflow'
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={25}
                loop={true}
                slidesPerView={slides}
                autoplay={true}
                speed={300}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                {skillsArray.map((skill) => {
                    return (
                        <SwiperSlide>

                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="card-image">
                                        <img src={skill.url} className='card-img' alt="" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h2 className="name">{skill.title}</h2>
                                    <p className="description">{skill.description}</p>
                                    <button className="ReadMore"><a rel="noreferrer" target='_blank' href={skill.link}>Read More</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div className="slider-controler">

                    <div className="swiper-button-prev slider-arrow">
                        <MdArrowBackIos className="text-5xl text-[#110076] hover:text-[#110076]" />
                    </div>

                    <div className="swiper-button-next slider-arrow">
                        <MdArrowForwardIos className="text-5xl text-[#110076] hover:text-[#110076]" />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default SkillsCarousal;