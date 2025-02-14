"use client";

import { useState } from "react";
import AddBorrowerModal from "./_components/AddBorrowerModal";

const Borrowers = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  const borrowers = [
    {
      fullName: "John Doe",
      nationalId: "1234567890",
      email: "john.doe@example.com",
      phoneNumber: "+1234567890",
      residenceAddress: "123 Main St, Cityville",
      item: "Screen",
      assurerName: "Jane Doe",
      assurerContact: "+0987654321",
    },
    {
      fullName: "Alice Smith",
      nationalId: "0987654321",
      email: "alice.smith@example.com",
      phoneNumber: "+1122334455",
      residenceAddress: "456 Elm St, Townsville",
      item: "Laptop",
      assurerName: "Robert Smith",
      assurerContact: "+1122334456",
    },
  ];

  return (
    <div className="w-full h-full bg-white p-5">
      <div className="p-6 w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Borrower Details
          </h2>
          <button
            onClick={toggleModal}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add Borrower
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">National ID</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Residence Address</th>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Assurer Name</th>
                <th className="px-4 py-3">Assurer Contact</th>
              </tr>
            </thead>
            <tbody>
              {borrowers.map((borrower, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-200 transition duration-200`}
                >
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {borrower.fullName}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {borrower.nationalId}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {borrower.email}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {borrower.phoneNumber}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {borrower.residenceAddress}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {borrower.item}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {borrower.assurerName}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {borrower.assurerContact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {openModal && <AddBorrowerModal toggleModal={toggleModal} />}
    </div>
  );
};

export default Borrowers;
