"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useBorrowersQuery } from "@/store/actions/borrower";
import { isAdmin } from "@/utils/config/isValidRole";
import { useState } from "react";
import AddBorrowerModal from "./_components/AddBorrowerModal";
import { useAllItemsQuery } from "@/store/actions/item";

const Borrowers = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  const { data: borrowerList = [], isLoading, isError } = useBorrowersQuery();
  const { data: items } = useAllItemsQuery();
  console.log(items);
  console.log("Borro", borrowerList);

  if (isLoading) {
    return <div>Loading borrowers...</div>;
  }

  if (isError) {
    return <div>Error loading borrowers.</div>;
  }

  return (
    <div className="w-full h-full p-6">
      <div className="p-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Borrower Details</h2>
          {isAdmin() && (
            <button
              onClick={toggleModal}
              className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Add Borrower
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {borrowerList?.map((borrower: any, index: number) => {
            const item = items?.find(
              (item: any) => item?.id === borrower?.itemId
            );

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {borrower?.full_name}
                </h3>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">National ID:</span>{" "}
                  {borrower?.national_id}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Email:</span> {borrower?.email}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Phone:</span>{" "}
                  {borrower?.phone_number}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Address:</span>{" "}
                  {borrower?.residance_address}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Assurer:</span>{" "}
                  {borrower?.assurer_contact}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Assurer Contact:</span>{" "}
                  {borrower?.assurer_contact}
                </p>
                {item ? (
                  <>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Item:</span> {item?.name}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Serial number:</span>{" "}
                      {item?.serial_number}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-red-500">Item not found</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {openModal && <AddBorrowerModal toggleModal={toggleModal} />}
    </div>
  );
};

export default Borrowers;
