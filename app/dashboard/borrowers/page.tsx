"use client";

import { useState } from "react";
import AddBorrowerModal from "./_components/AddBorrowerModal";
import { borrowers } from "@/utils/data";
import { isAdmin } from "@/utils/config/isValidRole";

const Borrowers = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <div className="w-full h-full p-6">
      <div className="p-8 w-full max-w-7xl mx-auto bg-">
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
          {borrowers.map((borrower, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {borrower.fullName}
              </h3>
              <p className="text-sm text-gray-700">
                <span className="font-medium">National ID:</span>{" "}
                {borrower.nationalId}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Email:</span> {borrower.email}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Phone:</span>{" "}
                {borrower.phoneNumber}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Address:</span>{" "}
                {borrower.residenceAddress}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Assurer:</span>{" "}
                {borrower.assurerName}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Assurer Contact:</span>{" "}
                {borrower.assurerContact}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Item:</span> {borrower.item}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Serial number: </span>{" "}
                {borrower.serial_number}
              </p>
            </div>
          ))}
        </div>
      </div>

      {openModal && <AddBorrowerModal toggleModal={toggleModal} />}
    </div>
  );
};

export default Borrowers;
