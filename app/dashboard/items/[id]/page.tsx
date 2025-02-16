"use client";

import { conditionColors, statusColors } from "@/utils/customStyles";
import { items } from "@/utils/data";
import clsx from "clsx";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  images: { src: string }[];
  condition: "New" | "Good" | "Worn Out" | "Broken";
  status: "Available" | "Damaged" | "Borrowed";
  description: string;
}

const ItemDetails = () => {
  const params = useParams();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (!params || !params.id) return;

    const itemId = parseInt(params.id as string, 10);
    const itemData = items.find((item) => item.id === itemId);
    setItem(itemData || null);
  }, [params]);

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading item details...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-">
      <div className="max-w-4xl w-[40vw] mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {item.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg _shadow transform transition-transform hover:scale-105"
            >
              <Image
                src={image.src}
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
            <span
              className={clsx(
                "px-3 py-1 text-sm font-semibold rounded-full",
                conditionColors[item.condition]
              )}
            >
              {item.condition}
            </span>
            <span
              className={clsx(
                "px-3 py-1 text-sm font-semibold rounded-full",
                statusColors[item.status]
              )}
            >
              {item.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
