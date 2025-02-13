"use client";

import { useState } from "react";
import AddCategoryModal from "./_components/AddCategoryModal";

const Categories: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  const categories = [
    "Device",
    "Furniture",
    "Cleaning Material",
    "Food Utensil",
  ];

  return (
    <div className="w-full h-full bg-white flex items-center justify-center">
      <div className="p-6 w-1/2 mx-auto bg-white rounded-2xl shadow-lg border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            onClick={toggleModal}
          >
            + Add Category
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {categories.map((cat, index) => (
            <li
              key={index}
              className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {openModal && <AddCategoryModal onClose={toggleModal} />}
    </div>
  );
};

export default Categories;
