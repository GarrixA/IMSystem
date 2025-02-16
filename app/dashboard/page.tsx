"use client";

import { isAdmin, isManager } from "@/utils/config/isValidRole";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardComponent from "./_components/DashboardComponent";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (isAdmin() || isManager()) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, [isAdmin, isManager, router]);

  return <DashboardComponent />;
};

export default Dashboard;
