"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { items } from "@/utils/data";
import Link from "next/link";
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import AddItemModal from "./_components/AddItemModal";
import Image from "next/image";

interface CustomStylesProps {
  Available?: string;
  Damaged?: string;
  Borrowed?: string;
  Broken?: string;
  Good?: string;
  New?: string;
  "Worn Out"?: string;
}

const ItemsList = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const statusStyles: CustomStylesProps = {
    Available: "text-green-800 bg-green-200 px-2 py-1 rounded-md",
    Damaged: "text-red-800 bg-red-200 px-2 py-1 rounded-md",
    Borrowed: "text-orange-800 bg-orange-200 px-2 py-1 rounded-md",
  };

  const conditionStyles: CustomStylesProps = {
    New: "text-green-700 bg-green-100 px-2 py-1 rounded-md",
    Good: "text-blue-700 bg-blue-100 px-2 py-1 rounded-md",
    "Worn Out": "text-yellow-700 bg-yellow-100 px-2 py-1 rounded-md",
    Broken: "text-red-700 bg-red-100 px-2 py-1 rounded-md",
  };

  return (
    <div className="p-6 w-full h-full bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-6">Items List</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6"
          onClick={toggleModal}
        >
          Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="transform hover:scale-105 transition-all bg-white shadow-lg rounded-lg overflow-hidden h-auto relative"
          >
            <div className="relative">
              <Image
                src={item.images[0].src}
                alt={item.name}
                width={365}
                height={364}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                  <FiEdit className="text-gray-700" />
                </button>
                <button className="bg-red-200 p-2 rounded-full hover:bg-red-300 transition">
                  <FiTrash className="text-red-600" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2">{item.description}</p>

              <div className="flex justify-between items-center mt-3">
                <p
                  className={`font-medium text-sm ${
                    conditionStyles[item.condition]
                  }`}
                >
                  <b className="text-base">Condition:</b> {item.condition}
                </p>
                <p
                  className={`font-medium text-sm ${statusStyles[item.status]}`}
                >
                  <b className="text-base">Status:</b> {item.status}
                </p>
              </div>

              <div className="mt-4 w-full">
                <Link
                  href={`/items/${item.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition inline-block w-full text-center"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openModal && <AddItemModal toggleModal={toggleModal} />}
    </div>
  );
};

export default ItemsList;
