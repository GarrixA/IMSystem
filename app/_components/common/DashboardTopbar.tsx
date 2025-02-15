"use client";

import logo from "@/public/inventory.jpg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

const DashboardTopbar = () => {
  const [openLogout, setOpenLogout] = useState(false);
  const toggleLogoutModal = () => {
    setOpenLogout(!openLogout);
  };
  return (
    <div className="fixed z-50 top-0 right-0 left-64 bg-white p-2 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-800">
        Inventory Dashboard
      </h1>
      <div className="flex items-center gap-2 py-1 px-2 border rounded-md">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <Image
            width={320}
            height={320}
            alt="image"
            src={logo}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-base">Aphrodis</h1>
          <p className="text-sm">Admin</p>
        </div>
        <div></div>
        <ChevronDown
          onClick={toggleLogoutModal}
          className={`${openLogout ? "rotate-180" : ""} cursor-pointer`}
        />
      </div>
      {openLogout && <LogoutModal toggleLogout={toggleLogoutModal} />}
    </div>
  );
};

export default DashboardTopbar;
