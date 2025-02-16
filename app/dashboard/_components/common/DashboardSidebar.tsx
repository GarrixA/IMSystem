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
  FaTachometerAlt,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
  { name: "Items", icon: <FaBox />, path: "/dashboard/items" },
  { name: "Categories", icon: <FaList />, path: "/dashboard/categories" },
  { name: "Users", icon: <FaUsers />, path: "/dashboard/users" },
  { name: "Borrowers", icon: <FaUserFriends />, path: "/dashboard/borrowers" },
  { name: "History", icon: <FaHistory />, path: "/dashboard/history" },
  { name: "Reports", icon: <FaChartBar />, path: "/dashboard/reports" },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-[#cce2f3] p-3 fixed left-0 top-0 h-full w-64 hidden lg:block">
      <div className=" bg-[#cce2f3] h-screen text-gray-800 shadow-lg flex flex-col px-5 rounded-md">
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
          <h1 className="text-xl lg:text-lg 2xl:text-xl font-black">
            IMSystem
          </h1>
        </div>

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
                  className={`flex items-center gap-3 p-3 rounded-sm transition-all ${
                    pathname === item.path
                      ? "bg-blue-500/10 text-blue-500"
                      : "hover:cursor-pointer hover:bg-blue-500/10"
                  }`}
                >
                  <span className="text-lg lg:text-base 2xl:text-lg text-black">
                    {item.icon}
                  </span>
                  <span className="text-lg lg:text-base 2xl:text-lg">
                    {item.name}
                  </span>
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
