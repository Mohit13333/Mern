import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";

const AdminUpdate = () => {
  const [updatedData, setUpdatedData] = useState({
    userName: "",
    email: "",
    phone: "",
  });
  const params = useParams();
  const { userAuthToken } = useAuth();
  const getSingleUserData = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/users/${params.id}`,
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
      // console.log("updated", id);
      const response = await fetch(
        `http://localhost:8000/api/users/admin/update/${params.id}`,
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
    //   if (response.ok) {
        toast.success(data.message);
        console.log(data.message);
    //   }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section>
        <main className="flex justify-center">
          <div className="mx-auto max-w-screen-xl py-[4rem] px-[2.4rem] justify-between place-content-center">
            <div>
              <h1 className="mb-4 relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-[50%] after:h-[0.5rem] after:bg-blue-500">
                Update Details
              </h1>
              <form
                action=""
                className="grid grid-flow-row w-fit gap-5 border border-blue-400 p-[20px]"
                onSubmit={handleFormSubmit}
              >
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your username"
                  value={updatedData.userName}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={updatedData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter your phone"
                  value={updatedData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="bg-gray-100 border text-black border-blue-400 rounded-lg py-2 px-[0.3rem]"
                />
                <button
                  type="submit"
                  className="text-white bg-blue-800 py-4 px-9 font-[500] text-[1.7rem] capitalize  rounded-[0.8rem] border-[0.1rem] border-solid border-transparent tracking-widest cursor-pointer hover:shadow-inner hover:shadow-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default AdminUpdate;
