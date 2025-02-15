import type { Metadata } from "next";
import "./globals.css";
import Layout from "./_components/Layout";

export const metadata: Metadata = {
  title: "Inentory",
  description: "Generated developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
