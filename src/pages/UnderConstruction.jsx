import React from "react";
import { Link } from "react-router-dom";
// Jika menggunakan Lucide React: npm install lucide-react
import { Construction, ArrowLeft, Wrench } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[70vh] p-8 text-center bg-[#F8F9FA]">
      {/* Kartu Utama */}
      <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center max-w-2xl">
        {/* Area Ikon Visual */}
        <div className="relative mb-10">
          {/* Lingkaran Background Aksen */}
          <div className="absolute inset-0 scale-150 bg-[#425C76]/5 rounded-full blur-xl"></div>

          {/* Bingkai Ikon Utama */}
          <div className="relative w-28 h-28 bg-white border-4 border-[#425C76]/10 rounded-full flex items-center justify-center shadow-inner">
            <Construction
              size={64}
              className="text-[#425C76]"
              strokeWidth={1.5}
            />
          </div>

          {/* Ikon Dekoratif Kecil */}
          <div className="absolute -bottom-2 -right-2 bg-[#FFB74D] p-2.5 rounded-xl text-white shadow-lg rotate-12">
            <Wrench size={20} strokeWidth={2.5} />
          </div>
        </div>

        {/* Teks Konten */}
        <h1 className="text-4xl font-extrabold text-[#34475E] tracking-tight mb-4">
          Page Under Construction
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-12 font-medium">
          We apologize for the inconvenience. We are currently working hard to
          build the best features for this page to enhance your poultry
          monitoring experience. Please check back later.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/dashboard"
            className="flex items-center gap-2.5 bg-[#425C76] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#34475E] transition-colors shadow-sm group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Dashboard
          </Link>

          <button className="text-sm text-gray-500 font-semibold hover:text-[#425C76] transition-colors py-3 px-6">
            Report an Issue
          </button>
        </div>
      </div>

      {/* Footer Tipis (Opsional) */}
      <p className="text-xs text-gray-400 mt-12 font-medium tracking-wide">
        &copy; {new Date().getFullYear()} CoE BIO-AI. All rights reserved.
      </p>
    </div>
  );
}
