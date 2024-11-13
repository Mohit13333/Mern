import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Contact = () => {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  if (userData && user) {
    setContact({ userName: user.userName, email: user.email, message: "" });
    setUserData(false);
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      if (response.ok) {
        setContact({
          userName: user.userName,
          email: user.email,
          message: "",
        });
        toast.success(data.message);
      }else{
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section>
        <Navbar />
        <main className="flex justify-center">
          <div className="md:grid md:grid-cols-2 md:gap-[500px] max-sm:grid max-sm:grid-cols-1 mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] justify-between place-content-center">
            <div>
              <img
                src="/images/support.png"
                alt="Help"
                className="max-w-[300px] max-h-[300px]"
              />
            </div>
            <div>
              <h1 className="mb-4 relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-[92%] after:h-[0.5rem] after:bg-blue-500">
                Contact Us
              </h1>
              <form
                action=""
                className="grid grid-flow-row w-fit gap-5 border border-blue-400 p-[20px]"
                onSubmit={handleFormSubmit}
              >
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your username"
                  value={contact.userName}
                  onChange={handleInputChange}
                  required
                  readOnly
                  autoComplete="off"
                  className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={contact.email}
                  onChange={handleInputChange}
                  required
                  readOnly
                  autoComplete="off"
                  className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type a message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
                ></textarea>
                <button
                  type="submit"
                  className="text-white bg-blue-800 py-4 px-9 font-[500] text-[1.7rem] capitalize  rounded-[0.8rem] border-[0.1rem] border-solid border-transparent tracking-widest cursor-pointer hover:shadow-inner hover:shadow-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
      <section className="mx-auto max-w-screen-xl">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.3986938159082!2d84.7439328!3d26.507298999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993259476acb7b5%3A0xc1885ab1c4a9623d!2sMohit%20Singh%20House&#39;s!5e0!3m2!1sen!2sin!4v1731336654143!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen
            className="my-5"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
