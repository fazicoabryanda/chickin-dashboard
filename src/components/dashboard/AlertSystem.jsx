import React from "react";

export default function AlertSystem({ alerts = [] }) {
  return (
    <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col min-h-[180px]">
      <h2 className="text-[#34475E] font-bold text-base mb-4">Alert System</h2>

      <div className="flex-1 overflow-y-auto pr-2 space-y-2.5 alert-scrollbar max-h-[140px]">
        {alerts.length > 0 ? (
          alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-[#F4F6F8] rounded-xl px-3 py-2.5 flex items-start gap-2.5"
            >
              {/* Tempat ikon akan dirender */}
              {alert.icon}
              <span className="text-[11px] font-medium text-gray-700 leading-snug">
                {alert.message}
              </span>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-400 text-center mt-4">
            No alerts at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
