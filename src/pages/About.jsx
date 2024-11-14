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

      {/* About Section */}
      <section className="max-w-screen-xl mx-auto rounded-[1rem] bg-gray-50 py-16">
        <div className="container mx-auto max-w-screen-xl px-6 md:flex md:justify-between md:items-center">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <p className="text-lg text-gray-600">Hi, Welcome {user ? userName.userName : `to our website`}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Us</h1>
            <div className="text-gray-700 space-y-5">
              <p><strong>Expertise:</strong> Our team consists of experienced IT professionals who stay updated with the latest industry trends.</p>
              <p><strong>Customization:</strong> We create tailored solutions specific to your unique business needs and goals.</p>
              <p><strong>Customer-Centric:</strong> We prioritize your satisfaction and provide top-notch support for all IT concerns.</p>
              <p><strong>Affordability:</strong> We offer competitive pricing without compromising on quality.</p>
              <p><strong>Reliability:</strong> Count on us to ensure your IT environment is secure and available 24/7.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <NavLink to="/contact">
                <button className="text-lg bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                  Contact Now
                </button>
              </NavLink>
              <NavLink to="/services">
                <button className="text-lg bg-transparent text-blue-800 py-3 px-8 border border-blue-800 rounded-lg font-semibold hover:bg-blue-100 transition duration-200">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src="/images/about.png" alt="about us" className="w-72 h-72 object-contain" />
          </div>
        </div>
      </section>

      <Analytics />
      <Footer />
    </main>
    </>
  );
};

export default About;
