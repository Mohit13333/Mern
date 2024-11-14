import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Users = () => {
  const [usersAllData, setUsersAllData] = useState([]);
  // const { usersAllData } = useAuth();
  const { userAuthToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/users/admin`, {
        method: "GET",
        headers: {
          Authorization: userAuthToken,
        },
      });
      const data = await response.json();
      setUsersAllData(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URI}/api/users/admin/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: userAuthToken,
          },
        }
      );
      const data = await response.json();
      toast.success(data.message);
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
    <section className="mx-auto max-w-screen-xl p-4">
  <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Users Data</h1>
    <table className="min-w-full bg-white border-collapse">
      <thead>
        <tr className="bg-gray-100 border-b border-gray-200">
          <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">Name</th>
          <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">Email</th>
          <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">Phone</th>
          <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">Update</th>
          <th className="text-md md:text-lg p-4 font-semibold text-gray-600 text-center tracking-wider">Delete</th>
        </tr>
      </thead>
      <tbody>
        {usersAllData.map((curUser, index) => (
          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="text-md md:text-lg p-4 font-medium text-center text-gray-700">{curUser.userName}</td>
            <td className="text-md md:text-lg p-4 font-medium text-center text-gray-700">{curUser.email}</td>
            <td className="text-md md:text-lg p-4 font-medium text-center text-gray-700">{curUser.phone}</td>
            <td className="text-md md:text-lg p-4 font-medium text-center text-blue-500 hover:underline">
              <Link to={`/admin/users/${curUser._id}/edit`}>Update</Link>
            </td>
            <td className="text-xl md:text-lg p-4 font-medium text-center text-red-500">
              <button className="hover:underline" onClick={() => deleteUser(curUser._id)}>Delete</button>
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

export default Users;
