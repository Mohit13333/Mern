import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });
  const Navigate = useNavigate();
  const { storeTokenInLs } = useAuth();
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        storeTokenInLs(data.token);
        setUser({
          userName: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success(data.message);
        Navigate("/");
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
     toast.error(error);
    }
  };
  return (
    <>
      <section>
  <main>
    <Navbar />
    <div className="flex justify-center py-10">
      <div className="mx-auto max-w-screen-xl px-4 md:grid md:grid-cols-2 md:gap-[50px] sm:grid sm:grid-cols-1">
        <div className="flex justify-center mb-8 md:mb-0">
          <img
            src="/images/register.png"
            alt="a girl is trying to fill the registration form"
            className="max-w-[300px] max-h-[300px]"
          />
        </div>
        <div>
          <h1 className="relative mb-4 text-4xl font-semibold after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-[100%] after:h-[0.5rem] after:bg-blue-500">
            Registration
          </h1>
          <form
            className="text-white grid grid-flow-row gap-6 border border-blue-400 p-[20px] rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <label htmlFor="userName" className="font-medium">
              Username
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your name"
              id="userName"
              required
              className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
              autoComplete="off"
              value={user.userName}
              onChange={handleInputChange}
            />

            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
              required
              className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
              autoComplete="off"
              value={user.email}
              onChange={handleInputChange}
            />

            <label htmlFor="phone" className="font-medium">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              id="phone"
              required
              className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
              autoComplete="off"
              value={user.phone}
              onChange={handleInputChange}
            />

            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              id="password"
              required
              className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
              autoComplete="off"
              value={user.password}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="text-white bg-blue-800 py-4 px-9 font-[500] text-[1.7rem] capitalize rounded-[0.8rem] border-[0.1rem] border-solid border-transparent tracking-widest cursor-pointer hover:shadow-inner hover:shadow-white mt-6"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</section>

    </>
  );
};

export default Register;
