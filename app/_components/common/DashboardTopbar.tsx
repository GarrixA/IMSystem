const DashboardTopbar = () => {
  return (
    <div className="fixed z-50 top-0 right-0 left-64 bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-800">
        Inventory Dashboard
      </h1>
      {/* <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">
        Profile
      </button> */}
    </div>
  );
};

export default DashboardTopbar;
