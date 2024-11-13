import React from "react";
import { NavLink } from "react-router-dom";
import Analytics from "./Analytics";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <section className="">
          <div className="md:grid md:grid-cols-2 max-sm:grid max-sm:grid-cols-1 max-sm:justify-items-center mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] justify-between place-content-center">
            <div className="capitalize">
              <p className="my-3">We are best IT service provider</p>
              <h1 className="my-3">Welcome to Mohit Singh</h1>
              <p className="my-3">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
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
                src="/images/home.png"
                alt="home"
                className="max-w-[300px] max-h-[300px]"
              />
            </div>
          </div>
        </section>
        <Analytics />
        <section className="">
          <div className="md:grid md:grid-cols-2 max-sm:grid max-sm:grid-cols-1 max-sm:justify-items-center mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] justify-between place-content-center">
            <div className="flex justify-center items-center">
              <img
                src="/images/design.png"
                alt="home"
                className="max-w-[300px] max-h-[300px]"
              />
            </div>
            <div className="capitalize">
              <p className="my-3">We are here to help you</p>
              <h1 className="my-3">Get started today</h1>
              <p className="my-3">
                Ready to take first step towards a more efficient and secure IT
                infrastructure? Contact us today for free consultation and Let's
                discuss how Mohit Singh can help your bussiness thrive in the
                digital age.
              </p>
              <div className="grid grid-flow-col w-fit gap-[3.2rem]">
                <NavLink to="/contact">
                  <button className="text-xl bg-blue-800 py-4 px-9 font-[500] capitalize rounded-[0.8rem] border-[0.1rem] border-solid border-transparent cursor-pointer hover:shadow-inner hover:shadow-white">
                    Contact Now
                  </button>
                </NavLink>
                <NavLink to="/services">
                  <button className="text-xl  bg-transparent py-4 px-9 font-[500] capitalize rounded-[0.8rem] ml-[3.2rem] border-[0.1rem] border-solid border-blue-400 cursor-pointer hover:shadow-inner hover:shadow-white">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
