const LogoutModal = ({ toggleLogout }: { toggleLogout: () => void }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
      onClick={toggleLogout}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl mb-4">Are you sure you want to logout?</div>

        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
            onClick={toggleLogout}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={toggleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
