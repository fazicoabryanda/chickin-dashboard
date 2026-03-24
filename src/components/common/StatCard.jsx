export default function StatCard({
  title,
  value,
  icon,
  iconBgColor = "bg-[#425C76]",
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between gap-4">
      {/* Bagian Teks */}
      <div className="flex flex-col gap-1">
        <p className="text-xs md:text-sm text-gray-500 font-medium">{title}</p>
        <span class="text-xl text-[#34475E] font-bold">{value}</span>
      </div>

      {/* Bagian Ikon dengan Warna Background yang Bisa Diubah */}
      <div
        className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-sm`}
      >
        {/* Ikon dikirim dari luar sebagai elemen/SVG */}
        {icon}
      </div>
    </div>
  );
}
