import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        storeTokenInLs(data.token); 
        toast.success(data.message);    
        navigate("/");
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <Navbar />
        <main className="flex justify-center">
          <div className="">
            <div className="md:grid md:grid-cols-2 md:gap-[500px] max-sm:grid max-sm:grid-cols-1 mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] justify-between place-content-center">
              <div className="flex justify-center">
                <img
                  src="/images/login.png"
                  alt="a person is trying to login"
                  className="max-w-[300px] max-h-[300px]"
                />
              </div>
              <div>
                <h1 className="relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-[50%] after:h-[0.5rem] after:bg-blue-500">
                  Login
                </h1>
                <br />
                <form
                  action=""
                  className="grid grid-flow-row w-fit gap-6 border border-blue-400 p-[20px]"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="password">Password</label>
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
                  <br />
                  <button
                    type="submit"
                    className="text-white bg-blue-800 py-4 px-9 font-[500] text-[1.7rem] capitalize  rounded-[0.8rem] border-[0.1rem] border-solid border-transparent tracking-widest cursor-pointer hover:shadow-inner hover:shadow-white"
                  >
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Login;
