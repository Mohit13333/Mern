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
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/form/contact`, {
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
  
  <main className="flex justify-center py-[4rem] px-[2.4rem] text-white">
    <div className="md:grid md:grid-cols-2 md:gap-16 max-sm:grid max-sm:grid-cols-1 mx-auto max-w-screen-xl place-content-center">
      
      <div className="flex justify-center mb-8 md:mb-0">
        <img
          src="/images/support.png"
          alt="Help"
          className="max-w-[300px] max-h-[300px] object-contain"
        />
      </div>
      
      {/* Form Section */}
      <div>
        <h1 className="text-3xl text-center font-semibold mb-6 relative after:absolute after:content-[''] after:left-[120px] after:bottom-0 after:w-[30%] after:h-[0.5rem] after:bg-blue-500">
          Contact Us
        </h1>
        <form
          action=""
          className="grid grid-flow-row gap-6 w-full border border-blue-400 p-6 rounded-lg"
          onSubmit={handleFormSubmit}
        >
          <div className="space-y-2">
            <label htmlFor="userName" className="font-medium">Username</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your username"
              value={contact.userName}
              onChange={handleInputChange}
              required
              readOnly
              autoComplete="off"
              className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-3 w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={contact.email}
              onChange={handleInputChange}
              required
              readOnly
              autoComplete="off"
              className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-3 w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-medium text-white">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type a message"
              autoComplete="off"
              value={contact.message}
              onChange={handleInputChange}
              required
              className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-3 w-full min-h-[150px]"
            ></textarea>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-800 py-4 px-9 font-semibold text-xl capitalize rounded-lg border-[0.1rem] border-transparent cursor-pointer hover:bg-blue-700 transition-shadow"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>

  {/* Google Map */}
  <section className="mx-auto max-w-screen-xl">
    <div className="my-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.3986938159082!2d84.7439328!3d26.507298999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993259476acb7b5%3A0xc1885ab1c4a9623d!2sMohit%20Singh%20House&#39;s!5e0!3m2!1sen!2sin!4v1731336654143!5m2!1sen!2sin"
        width="100%"
        height="300"
        allowFullScreen
        className="my-5 rounded-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>

  <Footer />
</section>

    </>
  );
};

export default Contact;
