// src/components/layout/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Sesuaikan path jika berbeda
import Header from "./Header"; // Sesuaikan path jika berbeda

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      {/* Area Utama */}
      <main className="flex-1 flex flex-col h-screen relative bg-[#F8F9FA] overflow-y-auto">
        <Header />

        {/* Konten Halaman akan di-render di dalam Outlet ini */}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
