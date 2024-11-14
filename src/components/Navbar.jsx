import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const {isLoggedIn}=useAuth();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <header>
        <div className="grid grid-cols-2 mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] justify-between place-content-center">
          <div className="font-[500] text-[1.8rem] text-blue-600 tracking-widest bg-transparent w-fit ">
            <NavLink to="/">Mohit Singh</NavLink>
          </div>
          <section className="flex justify-end">
            <div
              id="mobile-menu-toggle"
              className="text-end cursor-pointer relative text-3xl font-bold lg:hidden"
              onClick={toggleMenu}
            >
              &#9776;
            </div>
            <div
              id="mobile-menu-2"
              className={`${
                isMenuVisible ? "" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-fit lg:order-1`}
            >
              <nav>
                <ul className="flex font-[500] tracking-widest text-[1.8rem] text-blue-600 max-sm:grid max-sm:gap-5 max-md:grid max-md:gap-5 gap-[3.2rem]">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li><NavLink to="/admin">Admin</NavLink></li>
                  {isLoggedIn ? (
                    <li>
                      <NavLink to="/logout">Logout</NavLink>
                    </li>
                  ) : (
                    <>
                      <li>
                        <NavLink to="/register">Register</NavLink>
                      </li>
                      <li>
                        <NavLink to="/login">Login</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Navbar;
