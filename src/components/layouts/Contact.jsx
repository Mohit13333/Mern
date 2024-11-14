import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const UsersContact = () => {
  const [allContacts, setAllContacts] = useState([]);
  const { userAuthToken } = useAuth();

  const getAllUsersContactData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/admin", {
        method: "GET",
        headers: {
          Authorization: userAuthToken,
        },
      });
      const data = await response.json();
      setAllContacts(data.contacts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsersContactData();
  }, []);

  const deleteUser = async (id) => {
    try {
      console.log("deleted", id);
      const response = await fetch(
        `http://localhost:8000/api/users/admin/delete/contact/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: userAuthToken,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      toast.success(data.message);
      if (response.ok) {
        getAllUsersContactData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section className="mx-auto max-w-screen-xl p-4">
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
           Users Contact Data
          </h1>
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">
                  Name
                </th>
                <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">
                  Email
                </th>
                <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">
                  Message
                </th>
                <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {allContacts.map((curUser, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="text-md md:text-lg p-4 font-medium text-center text-gray-700">
                    {curUser.userName}
                  </td>
                  <td className="text-md md:text-lg p-4 font-medium text-center text-gray-700">
                    {curUser.email}
                  </td>
                  <td className="text-md md:text-lg p-4 font-medium text-center text-gray-700">
                    {curUser.message}
                  </td>
                  <td className="text-xl md:text-lg p-4 font-medium text-center text-red-500 ">
                    <button className="hover:underline" onClick={() => deleteUser(curUser._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UsersContact;
