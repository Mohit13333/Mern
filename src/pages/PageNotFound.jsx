import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <>
        <section className="flex items-center justify-center">
          <div className="max-w-[70rem] text-center">
            <h2 className="header text-[18vh] animate-animate bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              404
            </h2>
            <h4 className="text-[2rem] mb-[20px] uppercase">
              Sorry! Page not found
            </h4>
            <p>
              Oops! It seems like the page you're trying to access doesn't
              exist. If you believe there's an issue, feel free to report it,
              and we'll look into it.
            </p>
            <div className="flex justify-center mt-6">
              <NavLink to="/">
                <button className="inline-block text-blue-500 my-0 mx-[10px] border-solid  border-[2px] border-blue-500 py-[10px] px-[25px] rounded-[25px] uppercase transition-all hover:text-white hover:bg-blue-500 ">
                  Return home
                </button>
              </NavLink>
              <NavLink to="/contact">
                <button className="inline-block text-blue-500 my-0 mx-[10px] border-solid  border-[2px] border-blue-500 py-[10px] px-[25px] rounded-[25px] uppercase transition-all hover:text-white hover:bg-blue-500">
                  report problem
                </button>
              </NavLink>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default PageNotFound;
