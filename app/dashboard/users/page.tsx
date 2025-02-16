import { roleColors } from "@/utils/customStyles";
import { users } from "@/utils/data";

const Users = () => {
  return (
    <div className="w-full h-full p-5">
      <div className="p-6 w-full bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
        </div>

        <div className="overflow-x-auto max-w-[420px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <table className="w-full overflow-x-auto  border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
                {[
                  "First Name",
                  "Last Name",
                  "Phone Number",
                  "Email",
                  "National ID",
                  "Role",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-1 sm:px-3 py-3 whitespace-nowrap"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition duration-200 border-b`}
                >
                  <td className="px-1 sm:px-3 py-3 text-sm text-gray-700">
                    {user.firstName}
                  </td>
                  <td className="px-1 sm:px-3 py-3 text-sm text-gray-700">
                    {user.lastName}
                  </td>
                  <td className="px-1 sm:px-3 py-3 text-sm text-gray-700">
                    {user.phoneNumber}
                  </td>
                  <td className="px-1 sm:px-3 py-3 text-sm text-gray-700  ">
                    {user.email}
                  </td>
                  <td className="px-1 sm:px-3 py-3 text-sm text-gray-700">
                    {user.nationalId}
                  </td>
                  <td className="px-1 sm:px-3 py-3 text-sm">
                    <span
                      className={`px-1 sm:px-3 py-1 text-xs font-semibold rounded-sm border ${
                        roleColors[user.role] ||
                        "bg-gray-200 text-gray-700 border-gray-300"
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
