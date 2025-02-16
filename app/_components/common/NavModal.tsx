import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Items", path: "/items" },
  { name: "Categories", path: "/categories" },
  { name: "Users", path: "/users" },
  { name: "Borrowers", path: "/borrowers" },
  { name: "History", path: "/history" },
  { name: "Reports", path: "/reports" },
  { name: "Logout", path: "/logout" },
];

const NavModal = ({ toggleNavModal }: { toggleNavModal: () => void }) => {
  const pathname = usePathname();

  const modalVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 0.5 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 50, damping: 25, duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 w-full z-50"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        className="absolute inset-0 w-full -z-10"
        onClick={toggleNavModal}
      ></div>
      <X
        className="absolute right-5 top-5 text-black cursor-pointer hover:text-red-500"
        size={30}
        onClick={toggleNavModal}
      />
      <div className="bg-white w-3/4 md:w-1/2 h-full float-right px-5 py-24 _shadow">
        <ul className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`block  ${
                  pathname === item.path ? "border-l-4 border-blue-500" : ""
                }`}
                onClick={toggleNavModal}
              >
                <div
                  className={`flex items-center space-x-3 p-3 rounded-sm transition-all ${
                    pathname === item.path
                      ? "bg-blue-500/10 text-blue-500"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default NavModal;
