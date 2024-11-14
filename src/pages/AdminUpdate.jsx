import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { Navigate, useParams } from "react-router-dom";

const AdminUpdate = () => {
  const [updatedData, setUpdatedData] = useState({
    userName: "",
    email: "",
    phone: "",
  });
  const params = useParams();
  const { userAuthToken } = useAuth();
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URI}/api/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: userAuthToken,
          },
        }
      );
      const data = await response.json();
      setUpdatedData(data.results);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URI}/api/users/admin/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: userAuthToken,
          },
          body: JSON.stringify(updatedData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        <Navigate to="/"/>
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
       <section >
      <main className="">
        <div className="mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] w-full">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-semibold text-center mb-6 relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-[fit] after:h-[0.5rem] after:bg-blue-500">
              Update Details
            </h1>
            <form
              action=""
              className="grid grid-flow-row gap-6"
              onSubmit={handleFormSubmit}
            >
              {/* Username Input */}
              <div className="space-y-2">
                <label htmlFor="userName" className="text-lg font-medium">
                  Username
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your username"
                  value={updatedData.userName}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="w-full bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-3"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={updatedData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="w-full bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-3"
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-lg font-medium">
                  Phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter your phone"
                  value={updatedData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="w-full bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-3"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-800 py-4 px-9 font-medium text-lg capitalize rounded-lg border border-transparent cursor-pointer hover:bg-blue-700 transition-shadow"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </section>
    </>
  );
};

export default AdminUpdate;
