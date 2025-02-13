"use client";

import { useState, useEffect } from "react";

const ItemDetails = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const pathParts = currentUrl.split("/");
    const itemId = pathParts[pathParts.length - 1];

    if (itemId) {
      setId(itemId);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
