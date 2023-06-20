import React, { Fragment } from "react";
import ProfileImage from "../assets/profile.webp";
import ProfileImage2 from "../assets/aboutImage.webp";
import SearchIcon from "../assets/search.webp";
import Namaste from "../assets/namaste.webp";
import { IoMdClose } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { BiDotsVerticalRounded, BiImage, BiNews } from "react-icons/bi";
import { BsFilePlay } from "react-icons/bs";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import Sidebar from "../layout/Sidebar";
import SocialDialog from "../layout/SocialDialog";

const Search = () => {
  return (
    <div className="flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-x-hidden w-screen overflow-y-auto">
      <nav
        data-aos="fade-down"
        className="flex flex-col sticky bg-white z-10 top-0 sm:px-1 md:px-10 lg:px-256 pt-4 pb-2 h-auto w-full items-center justify-between text-[#4D5156] border-b border-gray-300 "
      >
        <div className="flex w-full justify-between md:pl-10">
          <div className="flex sm:flex-row flex-col w-full items-center justify-start sm:w-3/4 md:4/5">
            <div className="flex items-center justify-between w-full mb-5 px-5 sm:px-0 sm:mb-0 sm:w-auto">
              <div className="block sm:hidden">
                <Sidebar />
              </div>
              <div className=" font-google sm:mr-2 md:mr-5 lg:mr-10 text-2xl md:text-3xl lg:text-4xl">
                <span className="text-blue-500">J</span>
                <span className="text-red-500">a</span>
                <span className="text-[#FBBC05]">i</span>
                <span className="text-blue-500">S</span>
                <span className="text-green-500">e</span>
                <span className="text-red-500">h</span>
                <span className="text-[#FBBC05]">g</span>
                <span className="text-blue-500">a</span>
                <span className="text-green-500">l</span>
              </div>
              <img
                loading="lazy"
                className="block sm:hidden rounded-full h-8 "
                src={ProfileImage}
                alt="profile"
              />
            </div>
            <div className="flex border text-sm sm:text-base shadow-md justify-between border-gray-200 rounded-3xl px-5 py-2.5 h-auto w-3/4 lg:w-1/2  hover:shadow-customShadow">
              Jai Sehgal's Protfolio{" "}
              <IoMdClose className="text-lg sm:text-2xl" />
            </div>
          </div>
          <ul className="hidden sm:flex items-center">
            <li className="mr-3">
              <AiOutlineSetting className="text-[#5F6368] text-2xl font-bold" />
            </li>
            <li className="mx-1 md:mx-3 cursor-pointer">
              <SocialDialog />
            </li>
            <li className="ml-3">
              <img
                loading="lazy"
                className="rounded-full h-8 "
                src={ProfileImage}
                alt="profile"
              />
            </li>
          </ul>
        </div>
        <div className="flex w-full mt-5 md:pl-6">
          <ul className="flex px-3 sm:px-0 items-center w-full lg:w-3/5 justify-around text-xs md:text-sm">
            <li className="flex items-center font-medium">
              <img
                loading="lazy"
                src={SearchIcon}
                className="hidden md:block md:mr-1 md:w-4 md:h-4"
                alt="searchIcon"
              />
              All
            </li>
            <li className="flex items-center font-medium">
              <BiImage className="hidden md:block md:mr-1 text-[#676767]" />
              Images
            </li>
            <li className="flex items-center font-medium">
              <TfiBookmarkAlt className="hidden md:block md:mr-1 text-[#676767]" />
              Books
            </li>
            <li className="flex items-center font-medium">
              <BiNews className="hidden md:block md:mr-1 text-[#676767]" />
              News
            </li>
            <li className="flex items-center font-medium">
              <BsFilePlay className="hidden md:block md:mr-1 text-[#676767]" />
              Videos
            </li>
            <li className="flex px-6 items-center font-medium">
              <BiDotsVerticalRounded className="hidden md:block mr-1 md:mr-1 text-[#676767]" />
              More
            </li>
          </ul>
        </div>
      </nav>
      <div
        data-aos="fade-down"
        data-aos-duration="1100"
        className="px-5 lg:px-512 mt-2"
      >
        <h3 className="text-[#787D82] text-sm">
          About 1,40,00,605 results (0.01 seconds)
        </h3>
        <h1 className="font-sans mt-5 text-2xl text-[#202124]">
          Jai Sehgal's Portfolio
        </h1>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:divide-x text-black my-5">
          <div className="col-span-3 lg:pr-10">
            <div className="flex flex-col">
              <NavLink to="/projects" className="flex flex-col group ">
                <span className="flex text-sm items-center">
                  https://en.wikipedia.org › wiki › Projects{" "}
                  <BiDotsVerticalRounded className="text-base ml-7" />
                </span>
                <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                  Jai Sehgal's - MyProjects
                </h2>
                <p className="text-sm text-[#65696E] mt-2">
                  Moo-Your Doorstep Dairy - It is a mobile application made for
                  both android and ios devices using React-native, Typescript, Google
                  Cloud and AMD instances. Facilitating seamless communication between
                  milk sellers and customers empowers their interactiont.
                </p>
              </NavLink>
              <h2 className="text-lg sm:text-xl md:text-2xl mt-10 mb-4">
                People also ask
              </h2>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex text-sm sm:text-base w-auto lg:w-full justify-between border-t border-gray-300 py-2 font-medium focus:outline-none ">
                      <span className="text-left">
                        What is Jai Sehgal's Education?
                      </span>
                      <FiChevronDown
                        className={`${open ? "rotate-180 transform" : ""
                          } text-xl text-[#70757A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2">
                      <NavLink to="/education" className="flex flex-col group">
                        <p className="text-xs xs:text-base">
                          Bachelor Of Technology in Information Technology
                          - SGPA(8.9)...
                        </p>
                        <span className="flex text-sm items-center mt-2 text-gray-500">
                          https://nitkkr.ac.in › nitkkr › Education{" "}
                          <BiDotsVerticalRounded className="text-base ml-7" />
                        </span>
                        <h2 className="text-[#1A0DAB] text-md group-hover:underline">
                          Jai Sehgal - MyEducation
                        </h2>
                      </NavLink>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="flex text-sm sm:text-base w-full justify-between border-t border-gray-300 
                      py-2 font-medium focus:outline-none "
                    >
                      <span className="text-left">
                        How to get Jai Sehgal's Resume?
                      </span>
                      <FiChevronDown
                        className={`${open ? "rotate-180 transform" : ""
                          } text-xl text-[#70757A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2">
                      <a href="https://drive.google.com/file/d/1wTvk1jlLIco89LS4w0lNFs8MRoGS4EqA/view?usp=sharing" target="_blank" rel="noreferrer" className="flex flex-col group">
                        <p className="text-xs xs:text-base">
                          You can easliy get the resume by clinking the link below
                        </p>
                        <span className="flex text-sm items-center mt-2 text-gray-500">
                          https://drive.google.com › drive › Resume{" "}
                          <BiDotsVerticalRounded className="text-base ml-7" />
                        </span>
                        <h2 className="text-[#1A0DAB] text-md group-hover:underline">
                          Jai Sehgal's - Resume
                        </h2>
                      </a>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="flex text-sm sm:text-base w-full justify-between border-t border-gray-300 
                      py-2 font-medium focus:outline-none "
                    >
                      <span className="text-left">
                        What are Jai Sehgal's Skills?
                      </span>
                      <FiChevronDown
                        className={`${open ? "rotate-180 transform" : ""
                          } text-xl text-[#70757A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2">
                      <NavLink to="/skills" className="flex flex-col group">
                        <p className="text-xs xs:text-base">
                          Laguages Known - C/C++/JAVA/Python, Copetitive Coder, Full Stack Developer, App Developer ...
                        </p>
                        <span className="flex text-sm items-center mt-2 text-gray-500">
                          https://github.com › github › Skills{" "}
                          <BiDotsVerticalRounded className="text-base ml-7" />
                        </span>
                        <h2 className="text-[#1A0DAB] text-md group-hover:underline">
                          Jai Sehgal - MySkills
                        </h2>
                      </NavLink>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="flex text-sm sm:text-base w-full justify-between border-t border-gray-300 
                      py-2 font-medium focus:outline-none "
                    >
                      <span className="text-left">
                        How to contact Jai Sehgal?
                      </span>
                      <FiChevronDown
                        className={`${open ? "rotate-180 transform" : ""
                          } text-xl text-[#70757A]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 ">
                      <NavLink to="./contact" className="flex flex-col group">
                        <p className="text-xs xs:text-base">
                          Gmail Id: jaisehgal511@gmail.com , ...
                        </p>
                        <span className="flex text-sm items-center mt-2">
                          https://in.linkedin.com › LinkedIn › Contact{" "}
                          <BiDotsVerticalRounded className="text-base ml-7" />
                        </span>
                        <h2 className="text-[#1A0DAB] text-md group-hover:underline">
                          Jai Sehgal - MyContact
                        </h2>
                      </NavLink>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <hr className="border-gray-300" />
              <NavLink to="/education" className="flex flex-col group mt-8">
                <span className="flex text-sm items-center">
                  https://nitkkr.ac.in › nitkkr › Education{" "}
                  <BiDotsVerticalRounded className="text-base ml-7" />
                </span>
                <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                  Jai Sehgal - MyEducation
                </h2>
                <p className="text-sm text-[#65696E] mt-2">
                  Bachelor Of Technology in Information Technology
                  - SGPA(8.9)...
                </p>
              </NavLink>
              <NavLink to="/skills" className="flex flex-col group mt-8">
                <span className="flex text-sm items-center">
                  https://github.com › github › Skills{" "}
                  <BiDotsVerticalRounded className="text-base ml-7" />
                </span>
                <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                  Jai Sehgal - MySkills
                </h2>
                <p className="text-sm text-[#65696E] mt-2">
                Laguages Known - C/C++/JAVA/Python, Copetitive Coder, Full Stack Developer, App Developer ...
                </p>
              </NavLink>
              <NavLink to="/contact" className="flex flex-col group mt-8">
                <span className="flex text-sm items-center">
                  https://in.linkedin.com › linkedIn › Contact{" "}
                  <BiDotsVerticalRounded className="text-base ml-7" />
                </span>
                <h2 className="text-[#1A0DAB] text-xl group-hover:underline">
                  Jai Sehgal - MyContact
                </h2>
                <p className="text-sm text-[#65696E] mt-2">
                  Gmail Id: jaisehgal511@gmail.com , ...
                </p>
              </NavLink>
            </div>
          </div>
          <div className="col-span-2 lg:pl-10 ">
            <h1 className="text-xl">About</h1>
            <div className="about flex flex-col mt-3">
              <span className="flex items-center">
                Hey everyone!
                <img
                  loading="lazy"
                  src={Namaste}
                  className="w-12 mr-1"
                  alt="namaste"
                />
              </span>
              <p>
                <img
                  loading="lazy"
                  src={ProfileImage2}
                  className="float-right w-1/4 sm:1/12 sm:p-2 md:w-1/6 lg:w-1/3"
                  alt="profileImage"
                />
                My name is Jai Sehgal, I am pursuing my Bachelor in
                Technology degree in Information Technology from National 
                Institiute if Technolgy, Kurukshetra.
                I have a profound passion for competitive coding. In addition to 
                being a full stack developer, I have also delved into the realm of app development. 
                Contributing to open source projects is another avenue through which I actively 
                engage and contribute my skills.
              </p>
              <NavLink to="/about" className="text-[#1A0DAB] ">
                Read more...
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
