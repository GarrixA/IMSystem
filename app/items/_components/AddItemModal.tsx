import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const itemSchema = z.object({
  name: z.string().min(1, "Item Name is required"),
  description: z.string().min(1, "Description is required"),
});

type FormValues = z.infer<typeof itemSchema>;

const AddItemModal = ({ toggleModal }: { toggleModal: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(itemSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("New Item:", data);
    toggleModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96 text-black">
        <h1 className="text-2xl font-semibold mb-4">Add Item</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add Item
            </button>
            <button
              type="button"
              onClick={toggleModal}
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

export default AddItemModal;
