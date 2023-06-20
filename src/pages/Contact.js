import React, { useState, useEffect } from "react";
import Gmail from "../assets/gmail.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Navbar from "../layout/Navbar";
import Loader from "../layout/Loader";

const Contact = () => {
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
    <div className="flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-y-auto overflow-x-hidden w-screen items-center">
      {!show ? (
        <Loader title="Contact" />
      ) : (
        <div className="w-screen">
          <Navbar image={Gmail} title="Contact" search="mails" />
          <div data-aos="fade-left" data-aos-duration="1100" className="flex h-[calc(100vh_-_6.1rem)] sm:h-[calc(100vh_-_6.6rem)] md:h-[calc(100vh_-_7.8rem)]  w-full bg-backgroundContact overflow-hidden bg-cover bg-right-bottom sm:bg-center bg-no-repeat">
            <div data-aos="fade-right" data-aos-duration="1300" className="flex flex-col w-full md:w-1/2 lg:w-2/5 h-3/5 sm:h-1/2 md:h-full fixed md:static bottom-0 bg-[#3569D7] px-4 py-2 sm:py-0 overflow-y-auto justify-center">
              <h1 className="text-white font-google text-2xl">Contact Me</h1>
              <div className="flex flex-col bg-white overflow-y-auto rounded-lg h-auto w-full ">
                <div className="p-4 md:p-8">
                  <form
                    onSubmit={onSubmit}
                    noValidate
                    className="space-y-2 font-google"
                    method="POST"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-900">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="block p-1.5 sm:p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#3569D7] shadow-sm focus:ring-orange-400 focus:border-[#3569D7] "
                        placeholder="Let me know your name"
                        onChange={(e) => getUserData(e)}
                        value={user.name}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 ">
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="shadow-sm bg-gray-50 border border-[#3569D7] text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 sm:p-2.5"
                        placeholder="Let me know your email id"
                        value={user.email}
                        onChange={getUserData}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-900">
                        Your message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        className="block p-1.5 sm:p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#3569D7] focus:ring-orange-600 focus:border-[#3569D7] "
                        placeholder="Leave your message"
                        value={user.message}
                        onChange={getUserData}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="py-1 md:py-3 px-5 text-sm  text-center text-white rounded-lg bg-orange-400  hover:bg-orange-500 "
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
