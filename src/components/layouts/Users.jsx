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
      const response = await fetch("http://localhost:8000/api/users/admin", {
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
      console.log("deleted", id);
      const response = await fetch(
        `http://localhost:8000/api/users/admin/delete/${id}`,
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
        getAllUsersData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section className="mx-auto max-w-screen-xl">
        <div>
          <h1>Users Data</h1>
          <div>
            <table className="bg-white shadow-lg shadow-gray-600 border-collapse rounded-[1rem]">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-[1.7re md:p-[2rem] max-sm:p-[1.5rem] font-bold text-center text-black tracking-widest max-sm:w-[10rem]">
                    Name
                  </th>
                  <th className="text-[1.7re md:p-[2rem] max-sm:p-[1.5rem] font-bold text-center text-black tracking-widest max-sm:w-[10rem]">
                    Email
                  </th>
                  <th className="text-[1.7re md:p-[2rem] max-sm:p-[1.5rem] font-bold text-center text-black tracking-widest max-sm:w-[10rem]">
                    Phone
                  </th>
                  <th className="text-[1.7re md:p-[2rem] max-sm:p-[1.5rem] font-bold text-center text-black tracking-widest max-sm:w-[10rem]">
                    Update
                  </th>
                  <th className="text-[1.7re md:p-[2rem] max-sm:p-[1.5rem] font-bold text-center text-black tracking-widest max-sm:w-[10rem]">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersAllData.map((curUser, index) => {
                  return (
                    <tr key={index} className="border-b-2 border-black">
                      <td className="text-[1.7rem]  md:p-[2rem] max-sm:p-[1.5rem] font-semibold text-center text-gray-700 tracking-widest md:w-[20rem] max-sm:w-[10rem]">
                        {curUser.userName}
                      </td>
                      <td className="text-[1.7rem]  md:p-[2rem] max-sm:p-[1.5rem] font-semibold text-center text-gray-700 tracking-widest md:w-[20rem] max-sm:w-[10rem]">
                        {curUser.email}
                      </td>
                      <td className="text-[1.7rem]  md:p-[2rem] max-sm:p-[1.5rem] font-semibold text-center text-gray-700 tracking-widest md:w-[20rem] max-sm:w-[10rem]">
                        {curUser.phone}
                      </td>
                      <td className="text-[1.7rem]  md:p-[2rem] max-sm:p-[1.5rem] font-semibold text-center text-gray-700 tracking-widest md:w-[20rem] max-sm:w-[10rem]">
                        <Link to={`/admin/users/${curUser._id}/edit`}>Update</Link>
                      </td>
                      <td className="text-[1.7rem]  md:p-[2rem] max-sm:p-[1.5rem] font-semibold text-center text-gray-700 tracking-widest md:w-[20rem] max-sm:w-[10rem]">
                        <button onClick={() => deleteUser(curUser._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
