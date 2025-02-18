"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "next/navigation";
import { useSingleItemQuery } from "@/store/actions/item";
import Image from "next/image";

const ItemDetails = () => {
  const params = useParams();
  const { id } = params;
  const { data: item, isLoading, isError } = useSingleItemQuery(String(id));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading item details...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Error loading item details. Please try again later.
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Item not found.
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="max-w-4xl lg:w-[40vw] mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {item?.images?.map((image: any, index: number) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              <Image
                src={image}
                alt={`${item.name} image ${index + 1}`}
                width={320}
                height={320}
                className="w-full h-40 2xl:h-48 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-gray-700 text-lg">{item.description}</p>
          <div className="mt-4 flex items-center space-x-4">
            <span className="px-3 py-1 text-sm font-semibold rounded-full">
              {item.condition}
            </span>
            <span className="px-3 py-1 text-sm font-semibold rounded-full">
              {item.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
