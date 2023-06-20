import React, { useState, useEffect } from "react";
import Drive from "../assets/gmail.webp";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoStarOutline } from "react-icons/io5";
import { GoTriangleRight } from "react-icons/go";
import {
    MdOutlineViewList,
    MdInfoOutline,
    MdAccessTime,
    MdCloudQueue,
} from "react-icons/md";
import AddIcon from "../assets/pencil.png";
import Navbar from "../layout/Navbar";
import Loader from "../layout/Loader";
import Inbox from "../assets/inbox.png";
import drafts from "../assets/draft.png";
import sent from "../assets/sent.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import sentwhite from "../assets/sent-white.png";
const Projects = () => {

    const toastifySuccess = () => {
        toast.success("Your message has been sent successfully to Jai Sehgal!", {
            position: "bottom-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: false,
            className: "submit-feedback success",
            toastId: "notifyToast",
            theme: "colored",
        });
    };
    const toastifyFailure = (message) => {
        toast.error(message, {
            position: "bottom-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: false,
            className: "submit-feedback danger",
            toastId: "notifyToast",
            theme: "colored",
        });
    };

    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",
    });

    const getUserData = (e) => {
        console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        const { name, email, message } = user;

        if (name.length < 2 || name.length > 30) {
            toastifyFailure("Please enter a name between 2 and 30 characters.");
        } else

            if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
                toastifyFailure("Please enter a valid email address.");
            } else

                if (message.length < 5) {
                    toastifyFailure("Please enter a message of at least 5 characters.");
                } else {

                    const response = await fetch('https://portfolio-responses-6f99e-default-rtdb.firebaseio.com/portfolioRes.json', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application.json",
                        },
                        body: JSON.stringify({ name, email, message }),
                    });

                    if (response) {
                        toastifySuccess();
                        setUser({
                            name: "",
                            email: "",
                            message: "",
                        });
                    } else {
                        toastifyFailure("Your message has not been sent, Please try again!");
                    }
                }
    };


    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="projects flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-y-auto overflow-x-hidden w-screen items-center">
            {!show ? (
                <Loader title="Contact" />
            ) : (
                <div className="w-screen">
                    <Navbar image={Drive} title="Contact" search="mails" />
                    <div className="flex lg:grid lg:grid-cols-5 lg:gap-10 h-[calc(100vh_-_6.1rem)] sm:h-[calc(100vh_-_6.6rem)] md:h-[calc(100vh_-_7.8rem)]">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1100"
                            className="sidebar hidden lg:flex flex-col flex-wrap col-span-1 cursor-default"
                        >
                            <figure style={{borderRadius:'9px',backgroundColor:'#c5e3eb'}} className="flex w-2/3 border-gray-200 border shadow-md m-3 px-4 py-2.5">
                                <img
                                    loading="lazy"
                                    src={AddIcon}
                                    alt="addIcon"
                                    style={{ height: '20px', width: '20px', marginRight: '10px' }}
                                />
                                <figcaption>Compose</figcaption>
                            </figure>
                            <div className="flex w-full justify-start text-sm font-semibold items-center text-[#185ABC] p-2 pl-2 bg-[#E8F0FE] rounded-tr-3xl rounded-br-3xl">
                                <GoTriangleRight className="text-sm mr-2 text-[#5F6368]" />
                                <img alt="" src={Inbox} style={{ height: '17px', width: '17px', marginLeft: '2px', marginRight: "17px" }} />
                                Inbox

                            </div>
                            <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-2">
                                <GoTriangleRight className="text-sm mr-2" />
                                <IoStarOutline className="text-xl mr-4" />
                                Starred
                            </div>
                            <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7">
                                <MdAccessTime className="text-xl mr-4" />
                                Snoozed
                            </div>
                            <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7">
                                <img alt="" src={sent} style={{ height: '17px', width: '17px', marginLeft: '2px', marginRight: "17px" }} />
                                Sent
                            </div>
                            <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] p-2  pl-7">
                                <img alt="" src={drafts} style={{ height: '17px', width: '17px', marginLeft: '2px', marginRight: "17px" }} />
                                Drafts
                            </div>
                            <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] mb-2 p-2 pl-7">
                                <RiDeleteBin6Line className="text-xl mr-4" />
                                Trash
                            </div>
                            <hr />
                            <div className="flex w-full justify-start text-sm font-semibold items-center text-[#5F6368] mb-2 p-2 mt-2 pl-7l">
                                <MdCloudQueue className="text-xl mr-4" />
                                Storage
                            </div>
                            <div className="flex flex-col w-3/4 bg-[#E0E0E0] rounded-full h-1 ml-7">
                                <div className="bg-[#1A73E8] h-full rounded-full w-1/12"></div>
                            </div>
                            <div className="flex flex-col font-sans text-xs text-[#5F6368] mt-2 ml-7">
                                <p>1.1 GB of 15 GB used</p>
                                <button className="justify-self-center w-2/3 mt-2 border py-2 text-sm px-1 border-gray-200  rounded-md text-[#185ABC] cursor-default">
                                    Buy Storage
                                </button>
                            </div>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1100"
                            className="main h-full w-full flex flex-col lg:col-span-4"
                        >
                            <div className="flex flex-row justify-between items-center my-2 mx-2">
                                <div className="flex px-2 py-1 text-[#3C4043] items-center rounded-lg">
                                    <p style={{ marginRight: '5px' }}>To: </p>
                                    <span className="text-[#939699]">Jai Sehgal</span>
                                </div>
                                <div className="flex w-1/12 justify-around text-[#939699] text-2xl">
                                    <MdOutlineViewList className="text-[#686868]" />
                                    <MdInfoOutline className="text-[#686868]" />
                                </div>
                            </div>
                            <hr />
                            <form
                                onSubmit={onSubmit}
                                noValidate
                                className="space-y-2 font-google"
                                method="POST"
                                style={{ marginTop: '20px' }}
                            >
                                <div>
                                    <label className="text-[#62666B] mx-4 my-2 text-md font-medium">
                                        Your Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mx-4 my-2 block p-1.5 sm:p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#a7a7a7] shadow-sm focus:ring-orange-400 focus:border-[#a7a7a7] "
                                        placeholder="Let me know your name"
                                        onChange={(e) => getUserData(e)}
                                        value={user.name}
                                        required
                                        style={{ width: '90%' }}
                                    />
                                </div>
                                <div>
                                    <label className="text-[#62666B] mx-4 my-2 text-md font-medium ">
                                        Your email:
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className=" mx-4 my-2 shadow-sm bg-gray-50 border border-[#a7a7a7] text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-1.5 sm:p-2.5"
                                        placeholder="Let me know your email id"
                                        value={user.email}
                                        onChange={getUserData}
                                        required
                                        style={{ width: '90%' }}
                                    />
                                </div>
                                <div>
                                    <label className="text-[#62666B] mx-4 my-2 text-md font-medium">
                                        Your message:
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        className="mx-4 my-2 block p-1.5 sm:p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#a7a7a7] focus:ring-orange-600 focus:border-[#a7a7a7] "
                                        placeholder="Leave your message"
                                        value={user.message}
                                        onChange={getUserData}
                                        style={{ width: '90%' }}
                                    ></textarea>
                                </div>
                                <div style={{ display: 'flex', width: '90%', justifyContent: 'flex-end' }}>
                                    <button
                                        type="submit"
                                        className="mx-4 my-2 py-1 md:py-3 px-5 text-sm text-center text-white rounded-lg bg-blue-500 hover:bg-blue-400"
                                    >
                                        Send
                                        <img alt="" src={sentwhite} style={{ height: '17px', width: '17px', marginLeft: '10px',display:'inline' }} />
                                    </button>
                                </div>

                            </form>



                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
