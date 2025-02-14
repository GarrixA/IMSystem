"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { items } from "@/utils/data";
import { borrowerSchema } from "@/validations/formValidations";

type BorrowerFormValues = z.infer<typeof borrowerSchema>;

const AddBorrowerModal = ({ toggleModal }: { toggleModal: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BorrowerFormValues>({
    resolver: zodResolver(borrowerSchema),
  });

  const onSubmit = (data: BorrowerFormValues) => {
    console.log("Borrower Data:", data);
    toggleModal();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
        <h2 className="text-xl font-semibold mb-4">Add New Borrower</h2>
        <button
          onClick={toggleModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-lg"
        >
          ✕
        </button>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              {...register("fullName")}
              className="w-full border p-2 rounded"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              National ID
            </label>
            <input
              {...register("nationalId")}
              className="w-full border p-2 rounded"
            />
            {errors.nationalId && (
              <p className="text-red-500 text-sm">
                {errors.nationalId.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              {...register("phoneNumber")}
              className="w-full border p-2 rounded"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Residence Address
            </label>
            <input
              {...register("residenceAddress")}
              className="w-full border p-2 rounded"
            />
            {errors.residenceAddress && (
              <p className="text-red-500 text-sm">
                {errors.residenceAddress.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Assurer Name
            </label>
            <input
              {...register("assurerName")}
              className="w-full border p-2 rounded"
            />
            {errors.assurerName && (
              <p className="text-red-500 text-sm">
                {errors.assurerName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Assurer Contact
            </label>
            <input
              {...register("assurerContact")}
              className="w-full border p-2 rounded"
            />
            {errors.assurerContact && (
              <p className="text-red-500 text-sm">
                {errors.assurerContact.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item
            </label>
            <select
              {...register("borrower")}
              className="w-full border px-2 py-3 rounded"
            >
              <option value="">Select an item</option>
              {items.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.borrower && (
              <p className="text-red-500 text-sm">{errors.borrower.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBorrowerModal;
