"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { isAdmin } from "@/utils/config/isValidRole";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import AddItemModal from "./_components/AddItemModal";
import DeleteItemsModal from "./_components/DeleteItemsModal";
import EditItemModal from "./_components/EditItemModal";
import { useAllItemsQuery } from "@/store/actions/item";
import defaultImage from "@/public/data_images/laptops (2).webp";

interface Item {
  id: string;
  name: string;
  description: string;
  condition: string;
  status: string;
  images: string[];
}

const ItemsList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const { data: items, isLoading, isError } = useAllItemsQuery();

  const toggleModal = () => setOpenModal(!openModal);
  const toggleEditModal = () => setEditModal(!editModal);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const handleDeleteConfirm = () => {
    console.log("Item deleted!");
    toggleDeleteModal();
  };

  const openEditModal = (item: Item) => {
    setSelectedItem(item);
    toggleEditModal();
  };

  const statusStyles: any = {
    Available: "text-green-800 bg-green-200 px-2 py-1 rounded-md",
    Damaged: "text-red-800 bg-red-200 px-2 py-1 rounded-md",
    Borrowed: "text-orange-800 bg-orange-200 px-2 py-1 rounded-md",
  };

  const conditionStyles: any = {
    New: "text-green-700 bg-green-100 px-2 py-1 rounded-md",
    Good: "text-blue-700 bg-blue-100 px-2 py-1 rounded-md",
    "Worn Out": "text-yellow-700 bg-yellow-100 px-2 py-1 rounded-md",
    Broken: "text-red-700 bg-red-100 px-2 py-1 rounded-md",
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading items.</div>;

  return (
    <div className="p-6 w-full h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-6">Items List</h1>
        {isAdmin() && (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6"
            onClick={toggleModal}
          >
            Add Item
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8">
        {items?.map((item: Item) => (
          <div
            key={item.id}
            className="bg-white _shadow rounded-lg overflow-hidden h-auto relative"
          >
            <div className="relative">
              <Image
                src={item?.images[0] || defaultImage}
                alt={item?.name}
                width={365}
                height={364}
                className="w-full h-64 object-cover"
              />
              {isAdmin() && (
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                    onClick={() => openEditModal(item)}
                    aria-label="Edit Item"
                  >
                    <FiEdit className="text-gray-700" />
                  </button>
                  <button
                    className="bg-red-200 p-2 rounded-full hover:bg-red-300 transition"
                    onClick={toggleDeleteModal}
                    aria-label="Delete Item"
                  >
                    <FiTrash className="text-red-600" />
                  </button>
                </div>
              )}
            </div>

            {editModal && selectedItem && (
              <EditItemModal
                toggleEditModal={toggleEditModal}
                item={selectedItem}
              />
            )}

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
                  href={`/dashboard/items/${item.id}`}
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
      {deleteModal && (
        <DeleteItemsModal
          toggleDeleteModal={toggleDeleteModal}
          onDeleteConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
};

export default ItemsList;
