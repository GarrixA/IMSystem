import { useRouter } from "next/router";

const ItemDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const item = {
    name: "Item " + id,
    description: "Description of Item " + id,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetails;
