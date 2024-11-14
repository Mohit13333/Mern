import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { isLoggedIn, user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <section className="flex items-center justify-center h-screen">
        <div className="w-[100px] h-[100px] border-8 border-t-8 border-blue-600 border-solid rounded-full animate-spin">Loading...</div>
      </section>
    );
  }
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <header className="relative">
        <div className="mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] flex justify-between items-center">
          {/* Logo Section */}
          <div className="">
            <NavLink to="/"><img src="/images/excellence.png" alt="Excellence logo" className="max-w-[100px]" /></NavLink>
          </div>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden absolute top-4 mt-[20px] right-6 text-3xl font-bold text-blue-600 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuVisible ? "true" : "false"}
          >
            &#9776;
          </button>

          {/* Navigation Section */}
          <section className="flex justify-end w-full">
            <div
              id="mobile-menu-2"
              className={`${
                isMenuVisible ? "" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-fit lg:order-1 transition-all duration-300 ease-in-out`}
            >
              <nav>
                <ul className="flex font-[500] tracking-widest text-[1.8rem] text-blue-600 max-sm:grid max-sm:gap-5 max-md:grid max-md:gap-5 gap-[3.2rem]">
                  {/* Nav Links */}
                  <li>
                    <NavLink
                      to="/"
                      className="hover:text-blue-800 transition duration-300"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="hover:text-blue-800 transition duration-300"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className="hover:text-blue-800 transition duration-300"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="hover:text-blue-800 transition duration-300"
                    >
                      Contact
                    </NavLink>
                  </li>
                  {user && user.isAdmin ? (
                    <li>
                      <NavLink
                        to="/admin"
                        className="hover:text-blue-800 transition duration-300"
                      >
                        Admin
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}

                  {isLoggedIn ? (
                    <li>
                      <NavLink
                        to="/logout"
                        className="hover:text-blue-800 transition duration-300"
                      >
                        Logout
                      </NavLink>
                    </li>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          to="/register"
                          className="hover:text-blue-800 transition duration-300"
                        >
                          Register
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/login"
                          className="hover:text-blue-800 transition duration-300"
                        >
                          Login
                        </NavLink>
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
