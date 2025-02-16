import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        Welcome to IMSys
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        The most efficient inventory management system at your fingertips.
      </p>
      <Link href={"/dashboard"}>
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>
    </main>
  );
}
