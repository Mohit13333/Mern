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
  <div className="mx-auto max-w-screen-xl py-[4rem] text-white px-[2.4rem]">
    <div className="mb-8">
      <h1 className="text-3xl text-center font-semibold mb-6 relative after:absolute after:content-[''] after:left-[310px] after:bottom-0 after:w-[12%] after:h-[0.5rem] after:bg-blue-500">
        Services
      </h1>
    </div>

    <div className="md:grid md:grid-cols-3 gap-8 max-sm:grid max-sm:grid-cols-1">
      {
        services.map((curElem, index) => {
          const { price, description, service, provider } = curElem;
          return (
            <div key={index} className="my-5 mx-2 border border-blue-300 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/design.png"
                  alt="our service info"
                  className="w-full max-w-[300px] rounded-lg"
                />
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <p className="font-semibold">{provider}</p>
                  <p className="font-semibold text-right">{price}</p>
                </div>
                <h2 className="text-2xl font-bold mb-4">{service}</h2>
                <p className="text-gray-400">{description}</p>
              </div>
            </div>
          );
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
