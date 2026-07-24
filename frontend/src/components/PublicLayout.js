import React from "react";
import Navbar from "./Navbar";

export function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6]">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-[#0A0A0A] text-white py-8 text-center text-sm text-gray-400 border-t border-gray-800">
        <p>© {new Date().getFullYear()} SK Landscaping. All rights reserved.</p>
      </footer>
    </div>
  );
}
