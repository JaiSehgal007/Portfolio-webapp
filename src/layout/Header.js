import React from "react";
import { IoMdClose, IoMdMic } from "react-icons/io";
import { IoReload, IoExtensionPuzzle } from "react-icons/io5";
import { HiPlus, HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import P from "../assets/p-logo.webp";
import { MdExpandMore } from "react-icons/md";
import Chrome from "../assets/chrome.webp";
import Classroom from "../assets/googleClassroom.webp";
import Gmail from "../assets/gmail.webp";
import Drive from "../assets/drive.webp";
import News from "../assets/googleNews.webp";
import { FaRegShareSquare } from "react-icons/fa";
import {
  VscChromeMinimize,
  VscChromeRestore,
  VscClose,
  VscArrowLeft,
  VscArrowRight,
  VscStarEmpty,
} from "react-icons/vsc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";
import { TbSquare1 } from "react-icons/tb";
import { CgDockRight } from "react-icons/cg";
import { useNavigate, NavLink,useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const refresh = () => {
    window.location.reload(false);
  };
  const location = useLocation();

  return (
    <div className=" flex-col md:max-h-16 h-12 md:h-16 w-screen max-w-screen bg-[#3D3D3D] overflow-hidden">
      <div className="hidden md:flex tabs w-screen justify-between items-center text-white  ">
        <ul className="flex items-center h-7 py-0">
          <li className={`cursor-default select-none h-full rounded-t-lg ${location.pathname==="/"?'bg-[#303134]':'hover:bg-[#333333]'}`}>
            <NavLink
              to="/"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img
                  loading="lazy"
                  className="w-3.5 mr-1"
                  src={Chrome}
                  alt="logo"
                />
                <figcaption>Home</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className={`cursor-default select-none h-full rounded-t-lg ${location.pathname==="/search"?'bg-[#303134]':'hover:bg-[#333333]'}`}>
            <NavLink
              to="/search"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img loading="lazy" className="w-3.5 mr-1" src={P} alt="logo" />
                <figcaption>Jai Se...</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className={`cursor-default select-none h-full rounded-t-lg ${location.pathname==="/about"?'bg-[#303134]':'hover:bg-[#333333]'}`}>
            <NavLink
              to="/about"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img
                  loading="lazy"
                  className="w-3.5 mr-1"
                  src={News}
                  alt="logo"
                />
                <figcaption>About</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li id="projects" className={`cursor-default select-none h-full rounded-t-lg ${location.pathname==="/projects"?'bg-[#303134]':'hover:bg-[#333333]'}`}>
            <NavLink
              to="/projects"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img
                  loading="lazy"
                  className="w-3.5 mr-1"
                  src={Drive}
                  alt="logo"
                />
                <figcaption>Projects</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li id="education" className={`cursor-default select-none h-full rounded-t-lg ${location.pathname==="/education"?'bg-[#303134]':'hover:bg-[#333333]'}`}>
            <NavLink
              to="/education"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img
                  loading="lazy"
                  className="w-3.5 mr-1"
                  src={Classroom}
                  alt="logo"
                />
                <figcaption className="truncate">Education</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li id="skills" className={`cursor-default select-none h-full rounded-t-lg ${location.pathname==="/skills"?'bg-[#303134]':'hover:bg-[#333333]'}`}>
            <NavLink
              to="/skills"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img
                  loading="lazy"
                  className="w-3.5 mr-1"
                  src="https://lh3.googleusercontent.com/Iyn9yCCDxgHqvjX5jMZ_looun-kL0Sk60FraoMU5-JQG2WstyK6QNzj3JguQRbvQmWqVBSoO88Oh1kGQAoXMPkIIEF0pQrvXL52XXw=h120" 
                  alt="logo"
                />
                <figcaption>Skills</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className={`cursor-default select-none h-full rounded-t-lg ${location.pathname==="/contact"?'bg-[#303134]':'hover:bg-[#333333]'}`}>
            <NavLink
              to="/contact"
              className="flex text-xs items-center px-2 h-full justify-between w-24 lg:w-28"
            >
              <figure className="flex items-center">
                <img
                  loading="lazy"
                  className="w-3.5 mr-1"
                  src={Gmail}
                  alt="logo"
                />
                <figcaption>Contact</figcaption>
              </figure>
              <IoMdClose className="text-sm" />
            </NavLink>
          </li>
          <li className="items-center text-lg p-1 ">
            <HiPlus />
          </li>
        </ul>
        <ul className="flex items-center h-7 py-0">
          <li className="flex cursor-default select-none items-center px-3 h-full justify-between  hover:bg-[#3d3d3d]">
            <MdExpandMore />
          </li>
          <li className="flex cursor-default select-none items-center px-3 h-full justify-between hover:bg-[#3d3d3d]">
            <VscChromeMinimize />
          </li>
          <li className="flex cursor-default select-none items-center px-3 h-full justify-between  hover:bg-[#3d3d3d]">
            <VscChromeRestore />
          </li>
          <li className="flex cursor-default select-none items-center px-3 h-full justify-between hover:bg-red-500">
            <VscClose />
          </li>
        </ul>
      </div>
      <div className="flex w-screen bg-[#303134] h-full md:h-9 justify-center items-center py-1 text-white ">
        <ul className="flex items-center justify-between pl-1">
          <li
            className="hidden md:block text-sm p-1 hover:bg-[#676767] transition-all rounded-2xl"
            onClick={() => navigate(-1)}
          >
            <VscArrowLeft />
          </li>
          <li
            className="hidden md:block text-sm p-1 hover:bg-[#676767] transition-all rounded-2xl"
            onClick={() => navigate(+1)}
          >
            <VscArrowRight />
          </li>
          <li
            className="hidden md:block text-sm p-1 hover:bg-[#676767] transition-all rounded-2xl"
            onClick={refresh}
          >
            <IoReload />
          </li>
          <li className="md:hidden text-sm p-1 mx-2">
            <RiHome2Line />
          </li>
        </ul>
        <div className="flex mx-1 text-xs text-[#a2a2a2] items-center w-5/6 md:w-full bg-[#1f1f1f] rounded-xl p-1 justify-between">
          <div className="hidden md:flex items-center">
            <FcGoogle className="ml-1 bg-white rounded-lg mr-2" />
            Search Google or type URL
          </div>
          <div className="flex md:hidden items-center">
            <HiLockClosed className="ml-1 mr-2" />
            google.com/
          </div>
          <div className="hidden md:flex mx-1">
            <FaRegShareSquare className="text-sm mx-1" />
            <VscStarEmpty className="text-sm mx-1" />
          </div>
        </div>
        <ul className="flex items-center justify-between">
          <li className="hidden md:block text-sm p-1 mx-1 text-white">
            <IoExtensionPuzzle />
          </li>
          <li className="flex md:hidden text-sm p-1 mx-1 text-white">
            <IoMdMic />
          </li>
          <li className="hidden md:block text-sm p-1 mx-2 text-white">
            <CgDockRight />
          </li>
          <li className="flex md:hidden text-sm p-1 mx-1 text-white">
            <TbSquare1 className="text-white" />
          </li>
          <li className="text-sm p-1 mx-2 text-white">
            <BiDotsVerticalRounded />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

