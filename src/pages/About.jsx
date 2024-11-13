import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Analytics from "./Analytics";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";

const About = () => {
  const [userName,setUserName]=useState({
    userName:""
  })
const [userData,setUserData]=useState(true)
  const {user}=useAuth();

  if(userData && user){
    setUserName({userName:user.userName})
    setUserData(false);
  }

  return (
    <>
      <main>
        <Navbar />
        <section className="">
          <div className="md:grid md:grid-cols-2 max-sm:grid max-sm:grid-cols-1 max-sm:justify-items-center mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] justify-between place-content-center">
            <div className="capitalize">
              <p className="my-3 capitalize">Hi,Welcome { user? userName.userName:`to our website`}</p>
              <h1 className="my-3 capitalize">Why choose us</h1>
              <p className="my-5">
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p className="my-5">
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p className="my-5">
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p className="my-5">
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p className="my-5">
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="grid grid-flow-col w-fit gap-[3.2rem]">
                <NavLink to="/contact">
                  <button className="text-xl bg-blue-800 py-4 px-9 font-[500] capitalize rounded-[0.8rem] border-[0.1rem] border-solid border-transparent cursor-pointer hover:shadow-inner hover:shadow-white">
                    Contact Now
                  </button>
                </NavLink>
                <NavLink to="/services">
                  <button className="text-xl bg-transparent py-4 px-9 font-[500] capitalize rounded-[0.8rem] ml-[3.2rem] border-[0.1rem] border-solid border-blue-400 cursor-pointer hover:shadow-inner hover:shadow-white">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/images/about.png"
                alt="home"
                className="max-w-[300px] max-h-[300px]"
              />
            </div>
          </div>
        </section>
        <Analytics />
        <Footer/>
      </main>
    </>
  );
};

export default About;
