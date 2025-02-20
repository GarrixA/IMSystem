"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { borrowerSchema } from "@/validations/formValidations";
import { useAllItemsQuery } from "@/store/actions/item";
import { useBorrowerMutation } from "@/store/actions/borrower";
import { toast } from "react-toastify";

type BorrowerFormValues = z.infer<typeof borrowerSchema>;

const AddBorrowerModal = ({ toggleModal }: { toggleModal: () => void }) => {
  const {
    data: items = [],
    isLoading: isItemsLoading,
    isError: isItemsError,
  } = useAllItemsQuery();
  const [addBorrower, { isLoading: isAdding, isError: isAddError }] =
    useBorrowerMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BorrowerFormValues>({
    resolver: zodResolver(borrowerSchema),
  });

  const onSubmit = async (data: BorrowerFormValues) => {
    try {
      const response = await addBorrower(data).unwrap();
      toast.success(response?.message);
      console.log(response);
      toggleModal();
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  if (isItemsLoading) {
    return <div>Loading items...</div>;
  }

  if (isItemsError) {
    return <div>Error loading items</div>;
  }

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
              {...register("full_name")}
              className="w-full border p-2 rounded"
            />
            {errors.full_name && (
              <p className="text-red-500 text-sm">{errors.full_name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              National ID
            </label>
            <input
              {...register("national_id")}
              className="w-full border p-2 rounded"
            />
            {errors.national_id && (
              <p className="text-red-500 text-sm">
                {errors.national_id.message}
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
              {...register("phone_number")}
              className="w-full border p-2 rounded"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Residence Address
            </label>
            <input
              {...register("residance_address")}
              className="w-full border p-2 rounded"
            />
            {errors.residance_address && (
              <p className="text-red-500 text-sm">
                {errors.residance_address.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Assurer Name
            </label>
            <input
              {...register("assurer_name")}
              className="w-full border p-2 rounded"
            />
            {errors.assurer_name && (
              <p className="text-red-500 text-sm">
                {errors.assurer_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Assurer Contact
            </label>
            <input
              {...register("assurer_contact")}
              className="w-full border p-2 rounded"
            />
            {errors.assurer_contact && (
              <p className="text-red-500 text-sm">
                {errors.assurer_contact.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item
            </label>
            <select
              {...register("itemId")}
              className="w-full border px-2 py-3 rounded"
            >
              <option value="">Select an item</option>
              {items.map((item: any, index: number) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.itemId && (
              <p className="text-red-500 text-sm">{errors.itemId.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              disabled={isAdding} // Disable button when submitting
            >
              {isAdding ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBorrowerModal;
