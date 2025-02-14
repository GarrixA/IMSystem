import { roleColors } from "@/utils/customStyles";
import { users } from "@/utils/data";

const Users = () => {
  return (
    <div className="w-full h-full bg-white p-5">
      <div className="p-6 w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Users</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
                <th className="px-4 py-3">First Name</th>
                <th className="px-4 py-3">Last Name</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">National ID</th>
                <th className="px-4 py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-200 transition duration-200`}
                >
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {user.firstName}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {user.lastName}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {user.phoneNumber}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {user.nationalId}
                  </td>
                  <td className="px-4 py-3 border-b text-sm">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        roleColors[user.role]
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
