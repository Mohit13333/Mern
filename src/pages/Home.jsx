import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Analytics from "./Analytics";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";

const Home = () => {
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
          <section className="max-w-screen-xl mx-auto rounded-[1rem] bg-gray-50 py-16">
            <div className="md:grid md:grid-cols-2 gap-8 mx-auto max-w-screen-xl px-6">
              <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                 Hi, Welcome {userName.userName}
                </h1>
                <p className="text-2xl text-gray-600 mb-2">
                  We are the best IT service provider
                </p>
                <p className="text-gray-700 mb-6">
                  Are you ready to take your business to the next level with
                  cutting-edge IT solutions? Look no further! At Mohit Singh IT
                  Services, we specialize in providing innovative IT services
                  and solutions tailored to meet your unique needs.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <NavLink to="/contact">
                    <button className="text-lg bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-shadow duration-200 hover:shadow-md">
                      Contact Now
                    </button>
                  </NavLink>
                  <NavLink to="/services">
                    <button className="text-lg bg-transparent text-blue-800 py-3 px-8 border border-blue-800 rounded-lg font-semibold hover:bg-blue-100 transition-shadow duration-200 hover:shadow-md">
                      Learn More
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-0">
                <img
                  src="/images/home.png"
                  alt="home"
                  className="w-72 h-72 object-contain"
                />
              </div>
            </div>
          </section>

          <Analytics />

          <section className="max-w-screen-xl mx-auto rounded-[1rem] bg-gray-50 py-16">
            <div className="md:grid md:grid-cols-2 gap-8 mx-auto max-w-screen-xl px-6">
              <div className="flex justify-center items-center mb-8 md:mb-0">
                <img
                  src="/images/design.png"
                  alt="design"
                  className="w-72 h-72 object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg text-gray-600 mb-2">
                  We are here to help you
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                  Get Started Today
                </h1>
                <p className="text-gray-700 mb-6">
                  Ready to take the first step towards a more efficient and
                  secure IT infrastructure? Contact us today for a free
                  consultation, and let’s discuss how Mohit Singh can help your
                  business thrive in the digital age.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <NavLink to="/contact">
                    <button className="text-lg bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-shadow duration-200 hover:shadow-md">
                      Contact Now
                    </button>
                  </NavLink>
                  <NavLink to="/services">
                    <button className="text-lg bg-transparent text-blue-800 py-3 px-8 border border-blue-800 rounded-lg font-semibold hover:bg-blue-100 transition-shadow duration-200 hover:shadow-md">
                      Learn More
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
    </>
  );
};

export default Home;
