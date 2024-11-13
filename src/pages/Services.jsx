import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";

const Services = () => {
  const { services } = useAuth();
  return (
    <>
      <main>
        <Navbar />
        <div className="mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] justify-between place-content-center">
          <div className="">
            <h1 className="mb-4 relative after:absolute after:content-[''] after:left-0 after:bottom-0 max-sm:after:w-[65%] md:after:w-[17%] after:h-[0.5rem] after:bg-blue-500">Services</h1>
          </div>
          <div className="md:grid md:grid-cols-3 max-sm:grid max-sm:grid-cols-1">
            {
              services.map((curElem,index)=>{
                const {price,description,service,provider}=curElem;
                return (<div key={index} className="my-5 mx-2 border border-blue-300 max-w-[500px]">
                <div>
                  <img
                    src="/images/design.png"
                    alt="our service info"
                    className="w-[300px]"
                  />
                </div>
                <div>
                  <div className="grid grid-cols-2 m-3">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <div className="m-3">
                  <h2 className="text-4xl font-bold mb-4">{service}</h2>
                  <p>{description}</p>
                  </div>
                </div>
              </div>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Services;
