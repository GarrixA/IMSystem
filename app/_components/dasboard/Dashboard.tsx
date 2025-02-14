"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { FiUsers, FiBox, FiUserCheck } from "react-icons/fi";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import StatCard from "./StatCard";

const Dashboard = () => {
  const [totalItems, setTotalItems] = useState(120);
  const [totalUsers, setTotalUsers] = useState(45);
  const [totalBorrowers, setTotalBorrowers] = useState(30);

  const borrowingStats = {
    labels: ["Damaged", "Returned", "Available"],
    series: [
      {
        name: "Number of Items",
        data: [10, 70, 40],
      },
    ],
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: "100%",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: borrowingStats.labels,
    },
    yaxis: {
      title: {
        text: "Number of Items",
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
  };

  return (
    <div className="p-6 min-h-screen w-full bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={FiBox}
          title="Total Items"
          value={totalItems}
          color="text-blue-600"
        />
        <StatCard
          icon={FiUsers}
          title="Total Users"
          value={totalUsers}
          color="text-green-600"
        />
        <StatCard
          icon={FiUserCheck}
          title="Total Borrowers"
          value={totalBorrowers}
          color="text-orange-600"
        />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto">
        <h2 className="text-xl font-semibold mb-4">Borrowing Status</h2>
        <div className="w-full" style={{ height: "calc(100vh - 400px)" }}>
          <ReactApexChart
            options={chartOptions}
            series={borrowingStats.series}
            type="bar"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
