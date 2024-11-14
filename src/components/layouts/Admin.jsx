import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { useState } from "react";

const Admin = () => {
  const { user,isLoading} = useAuth();
if(isLoading){
 return( <section className="flex items-center justify-center h-screen">
  <div className="w-16 h-16 border-8 border-t-8 border-blue-600 border-solid rounded-full animate-spin">Loading...</div>
</section>
 )

}
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6">
          <nav>
            <ul className="flex space-x-8 justify-center">
              <li className="flex items-center">
                <NavLink
                  to="/admin/users"
                  className="flex items-center space-x-2 hover:text-blue-400"
                >
                  <FaUser />
                  <span>Users</span>
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/admin/contacts"
                  className="flex items-center space-x-2 hover:text-blue-400"
                >
                  <FaMessage />
                  <span>Contacts</span>
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/admin/services"
                  className="flex items-center space-x-2 hover:text-blue-400"
                >
                  <FaRegListAlt />
                  <span>Services</span>
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/"
                  className="flex items-center space-x-2 hover:text-blue-400"
                >
                  <FaHome />
                  <span>Home</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Admin;
