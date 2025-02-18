"use client";
import { isAdmin, isManager } from "@/utils/config/isValidRole";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import LogoutModal from "./dashboard/_components/common/LogoutModal";

export default function Home() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const toggleLogoutModal = () => {
    setOpenLogoutModal(!openLogoutModal);
  };
  const token = Cookies.get("access_token");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        Welcome to IMSys
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        The most efficient inventory management system at your fingertips.
      </p>
      <div className="flex space-x-4">
        {(isManager() || isAdmin()) && (
          <Link
            href={"/dashboard"}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            <button>Get Started</button>
          </Link>
        )}
        {token ? (
          <button
            className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
            onClick={toggleLogoutModal}
          >
            Logout
          </button>
        ) : (
          <Link href={"/login"}>
            <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
        )}
        {openLogoutModal && <LogoutModal toggleLogout={toggleLogoutModal} />}
      </div>
    </main>
  );
}
