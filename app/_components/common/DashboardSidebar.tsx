"use client";

import logo from "@/public/linkdln_pic.jpg";
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
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-100 text-gray-800 shadow-md flex flex-col p-5">
      {/* Sidebar Logo */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-32 h-20 rounded-md overflow-hidden bg-red-300">
          <Image
            alt="Logo"
            width={80}
            height={80}
            src={logo}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Sidebar Menu */}
      <ul className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path} className="block">
              <div
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
