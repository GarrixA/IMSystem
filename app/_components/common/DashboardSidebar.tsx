"use client";

import logo from "@/public/inventory.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBox,
  FaChartBar,
  FaHistory,
  FaList,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
  { name: "Items", icon: <FaBox />, path: "/items" },
  { name: "Categories", icon: <FaList />, path: "/categories" },
  { name: "Users", icon: <FaUsers />, path: "/users" },
  { name: "Borrowers", icon: <FaUserFriends />, path: "/borrowers" },
  { name: "History", icon: <FaHistory />, path: "/history" },
  { name: "Reports", icon: <FaChartBar />, path: "/reports" },
  { name: "Logout", icon: <FaSignOutAlt />, path: "/logout" },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white p-3 fixed left-0 top-0 h-full w-64">
      <div className=" bg-[#cce2f3] h-screen text-gray-800 shadow-lg flex flex-col px-5 rounded-md">
        {/* Sidebar Logo */}
        <div className="flex items-center justify-center my-4 py-2 gap-2 rounded-md shadow-sm">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <Image
              alt="Logo"
              width={80}
              height={80}
              src={logo}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl font-black">IMSystem</h1>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`block  ${
                  pathname === item.path ? "border-l-4 border-blue-500" : ""
                }`}
              >
                <div
                  className={`flex items-center space-x-3 p-3 rounded-sm transition-all ${
                    pathname === item.path
                      ? "bg-blue-500/10 text-blue-500"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <span className="text-lg text-black">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
