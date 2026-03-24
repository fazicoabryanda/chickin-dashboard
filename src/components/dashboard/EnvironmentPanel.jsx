import React from "react";

export default function EnvironmentPanel({
  title,
  value,
  icon,
  iconBgColor = "bg-[#425C76]",
}) {
  return (
    <div className="border border-gray-100 rounded-xl px-3 py-2.5 flex items-center gap-3 bg-[#F4F6F8] hover:bg-white hover:shadow-sm transition duration-200">
      {/* Bagian Ikon dengan Warna Background yang Bisa Diubah */}
      <div
        className={`w-8 h-8 ${iconBgColor} rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm`}
      >
        {icon}
      </div>

      {/* Bagian Teks */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm text-gray-500 font-medium mb-0.1">
          {title}
        </span>
        <span className="text-base font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
}
