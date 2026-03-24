import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import StatCard from "../components/common/StatCard";
import EnvironmentPanel from "../components/dashboard/EnvironmentPanel";
import chicken_camera_placeholder from "../assets/placeholder_chickencam.webp";
import AlertSystem from "../components/dashboard/AlertSystem";

// Jika menggunakan Lucide React: npm install lucide-react
import { Bird, Weight, TrendingUp, ScanEye } from "lucide-react";

export default function Dashboard() {
  // 1. Buat variabel data alert di dalam komponen Dashboard
  const alertData = [
    {
      message: "Warning : Gantry 01 Battery Low 10%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-[#E53E3E] shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8h16M4 16h16"
          />
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 10v4" />
        </svg>
      ),
    },
    {
      message: "Warning : Ammonia has been increased 3.2%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-[#DD6B20] shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      message: "Warning : Low Connectivity",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-[#3182CE] shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
          />
        </svg>
      ),
    },
    {
      message: "Warning : Gantry 01 camera not detected",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-[#718096] shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 flex flex-col h-screen relative bg-[#F8F9FA]">
        <Header />

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Total Chicken - Ikon Ayam */}
          <StatCard
            title="Total Chicken Detected"
            value="42"
            icon={<Bird size={24} />}
          />

          {/* 2. Average Weight - Ikon Timbangan */}
          <StatCard
            title="Average Chicken Weight"
            value="2.1 kg"
            icon={<Weight size={24} />}
          />

          {/* 3. Growth Rate - Ikon Grafik Naik */}
          <StatCard
            title="Weight Growth Rate"
            value="3.5%"
            icon={<TrendingUp size={24} />}
          />

          {/* 4. Accuracy - Ikon Scan/AI */}
          <StatCard
            title="Detection Accuracy"
            value="99.8%"
            icon={<ScanEye size={24} />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-[#34475E] font-bold text-lg">
                  Live Camera Monitoring Panel
                </h2>
                <p className="text-gray-500 text-sm font-medium mt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Gantry 01 - Status Online
                </p>
              </div>
              <div className="bg-[#F4F6F8] text-[#34475E] text-sm px-4 py-2 rounded-xl font-medium border border-gray-100">
                Battery Level :
                <span className="font-bold text-gray-900 ml-1">42 %</span>
              </div>
            </div>

            <div className="w-full flex-1 bg-gray-50 rounded-xl overflow-hidden relative flex items-center justify-center">
              <img
                className="h-full w-full object-cover"
                src={chicken_camera_placeholder}
                alt="Live Camera Preview"
                onerror="
                    this.style.display = 'none';
                    this.nextElementSibling.style.display = 'block';
                  "
              />
              <span className="text-gray-400 font-medium z-10 hidden">
                Area Gambar Kamera
              </span>
            </div>
          </div>

          <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
            <div>
              <h2 className="text-gray-900 font-bold text-lg">
                Weight Analytics
              </h2>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium mb-3">
                Weight Distribution
              </p>
              <div className="bg-[#435D6E] rounded-xl p-5 text-white shadow-inner">
                <div className="flex items-end justify-between h-[120px] gap-1.5">
                  <div className="w-full bg-white/90 hover:bg-white transition-colors h-[55%] rounded-t-sm"></div>
                  <div className="w-full bg-white/90 hover:bg-white transition-colors h-[35%] rounded-t-sm"></div>
                  <div className="w-full bg-white/90 hover:bg-white transition-colors h-[20%] rounded-t-sm"></div>
                  <div className="w-full bg-white/90 hover:bg-white transition-colors h-[45%] rounded-t-sm"></div>
                  <div className="w-full bg-white/90 hover:bg-white transition-colors h-[85%] rounded-t-sm"></div>
                  <div className="w-full bg-white/90 hover:bg-white transition-colors h-[70%] rounded-t-sm"></div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-300 mt-3 font-medium">
                  <span>0.5</span>
                  <span>1.0</span>
                  <span>1.5</span>
                  <span>2.0</span>
                  <span>2.5</span>
                  <span>3.0</span>
                </div>
                <div className="text-center text-[12px] text-gray-300 mt-2 font-medium tracking-wide">
                  Weight (kg)
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <p className="text-sm text-gray-500 font-medium mb-3">
                Growth Trend
              </p>
              <div className="border border-gray-200 rounded-xl p-5 flex flex-col flex-1 bg-gray-50/50">
                <div className="relative h-[130px] w-full">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="border-b border-dashed border-gray-200"></div>
                    <div className="border-b border-dashed border-gray-200"></div>
                    <div className="border-b border-dashed border-gray-200"></div>
                    <div className="border-b border-dashed border-gray-200"></div>
                  </div>
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,80 C20,70 30,60 40,50 C50,40 60,30 70,35 C80,40 90,30 100,20"
                      fill="none"
                      stroke="#435D6E"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-3 font-medium">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h1 className="text-[#34475E] font-bold text-base mb-2">
              Environmental Monitoring
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start">
              {/* 1. Temperature */}
              <EnvironmentPanel
                title="Temperature"
                value="18°C"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v4m0 0a2 2 0 100 4 2 2 0 000-4zM9 19h6"
                    />
                  </svg>
                }
              />

              {/* 2. Humidity */}
              <EnvironmentPanel
                title="Humidity"
                value="65%"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                }
              />

              {/* 3. Ammonia Level */}
              <EnvironmentPanel
                title="Ammonia Level"
                value="12 ppm"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                }
              />

              {/* 4. CO2 Level */}
              <EnvironmentPanel
                title="CO2 Level"
                value="400 ppm"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                }
              />

              {/* 5. Light Intensity */}
              <EnvironmentPanel
                title="Light Intensity"
                value="250 Lux"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
          <AlertSystem alerts={alertData} />
        </div>
      </main>
    </div>
  );
}
