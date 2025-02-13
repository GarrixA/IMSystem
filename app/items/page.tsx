"use client";

import Link from "next/link";
import img from "@/public/linkdln_pic.jpg";
import { useState } from "react";
import AddItemModal from "./_components/AddItemModal";

const items = [
  {
    id: 1,
    name: "Laptop",
    description: "Portable computer for all your needs.",
    imageUrl: img,
  },
  {
    id: 2,
    name: "Monitor",
    description: "High-resolution display for work or play.",
    imageUrl: img,
  },
  {
    id: 3,
    name: "Table",
    description: "Sturdy table perfect for work or dining.",
    imageUrl: img,
  },
  {
    id: 4,
    name: "Chair",
    description: "Comfortable chair for long hours of sitting.",
    imageUrl: img,
  },
  {
    id: 5,
    name: "Broom",
    description: "For cleaning your floors and surfaces.",
    imageUrl: img,
  },
  {
    id: 6,
    name: "Mop",
    description: "Essential for wet cleaning and mopping.",
    imageUrl: img,
  },
  {
    id: 7,
    name: "Plate",
    description: "For serving your food in style.",
    imageUrl: img,
  },
  {
    id: 8,
    name: "Cup",
    description: "For your morning coffee or tea.",
    imageUrl: img,
  },
];

const ItemsList = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-6">Items List</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6"
          onClick={toggleModal}
        >
          Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link
            href={`/items/${item.id}`}
            key={item.id}
            className="transform hover:scale-105 transition-all"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-80">
              <img
                src={item.imageUrl.src}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {openModal && <AddItemModal toggleModal={toggleModal} />}
    </div>
  );
};

export default ItemsList;
