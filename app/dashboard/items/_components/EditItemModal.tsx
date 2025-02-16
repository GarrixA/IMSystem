import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const statusOptions = ["Available", "Damaged", "Borrowed"];
const conditionOptions = ["New", "Good", "Worn Out", "Broken"];

const itemSchema = z.object({
  name: z.string().min(1, "Item Name is required"),
  description: z.string().min(1, "Description is required"),
  images: z
    .array(z.instanceof(File))
    .min(1, "At least one image is required")
    .max(4, "You can upload up to 4 images"),
  status: z.enum(statusOptions as [string, ...string[]]),
  condition: z.enum(conditionOptions as [string, ...string[]]),
});

type FormValues = z.infer<typeof itemSchema>;

interface EditItemModalProps {
  toggleEditModal: () => void;
  item: {
    id: number;
    name: string;
    description: string;
    condition: string;
    status: string;
    images: { src: string }[];
  };
}

const EditItemModal = ({ toggleEditModal, item }: EditItemModalProps) => {
  const [previews, setPreviews] = useState<string[]>(
    item.images.map((image) => image.src)
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(itemSchema),
    defaultValues: {
      name: item.name,
      description: item.description,
      status: item.status,
      condition: item.condition,
      images: item.images.map((img) => new File([], img.src)),
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + previews.length > 4) {
      alert("You can only upload up to 4 images.");
      return;
    }

    setPreviews((prev) => [
      ...prev,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
    setValue("images", [...files], { shouldValidate: true });
  };

  const removeImage = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));

    setValue(
      "images",
      previews
        .filter((_, i) => i !== index)
        .map((src, i) => new File([], `file-${i}`)),
      { shouldValidate: true }
    );
  };

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    data.images.forEach((image, index) =>
      formData.append(`images[${index}]`, image)
    );
    formData.append("status", data.status);
    formData.append("condition", data.condition);

    console.log("Updated Item:", Object.fromEntries(formData.entries()));
    toggleEditModal();
  };

  return (
    <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 text-black">
        <h1 className="text-2xl font-semibold mb-4">Edit Item</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/3 pb-5 flex flex-col gap-5">
              <label htmlFor="images" className="block text-lg">
                Images
              </label>
              <div
                className="border-2 border-dashed border-gray-300 p-4 rounded-md flex flex-col items-center justify-center cursor-pointer h-full"
                onClick={() => document.getElementById("images")?.click()}
              >
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />
                <span className="text-gray-500 text-sm">
                  Drag & Drop or Click to Upload
                </span>
              </div>
              {errors.images && (
                <span className="text-red-500 text-sm">
                  {errors.images.message}
                </span>
              )}

              <div className="grid grid-cols-2 gap-2">
                {previews.map((src, index) => (
                  <div key={index} className="relative">
                    <Image
                      width={100}
                      height={100}
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white text-xs py-1 px-2 rounded-full"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-2/3 space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">
                  Item Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full p-2 border rounded-md ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="status" className="block text-lg">
                  Status
                </label>
                <select
                  id="status"
                  {...register("status")}
                  className="w-full p-3 border rounded-md"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="condition" className="block text-lg">
                  Condition
                </label>
                <select
                  id="condition"
                  {...register("condition")}
                  className="w-full p-3 border rounded-md"
                >
                  {conditionOptions.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-lg">
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  className={`w-full p-2 border rounded-md ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={toggleEditModal}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
