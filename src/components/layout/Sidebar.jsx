import logo from "C:/Fazico/Kuliah/Laboratorium BIO AI/Chickin/chickin-dashboard/project-chickin/src/assets/logo-chickin.png";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // useState('Dashboard') dihapus karena status aktif sekarang diatur otomatis oleh URL dari NavLink

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col justify-between p-6">
      <div>
        <div className="mb-8 flex items-center justify-center">
          <img src={logo} alt="Logo Chickin" style={{ width: "128px" }} />
        </div>

        <nav id="sidebar-menu" className="space-y-2 text-sm font-medium">
          {/* Menu Dashboard */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-item flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? "bg-[#425C76] text-white shadow-sm"
                  : "text-[#A0AAB5] bg-transparent hover:bg-gray-100"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`icon-container w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-sm ${
                    isActive
                      ? "text-[#425C76]"
                      : "text-[#A0AAB5] border border-gray-100 group-hover:text-[#425C76]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </div>
                <span
                  className={
                    !isActive
                      ? "group-hover:text-[#425C76] transition-all duration-200"
                      : ""
                  }
                >
                  Dashboard
                </span>
              </>
            )}
          </NavLink>

          {/* Menu Gantry Monitoring */}
          <NavLink
            to="/gantry"
            className={({ isActive }) =>
              `nav-item flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? "bg-[#425C76] text-white shadow-sm"
                  : "text-[#A0AAB5] bg-transparent hover:bg-gray-100"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`icon-container w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-sm ${
                    isActive
                      ? "text-[#425C76]"
                      : "text-[#A0AAB5] border border-gray-100 group-hover:text-[#425C76]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 transition-all duration-200"
                  >
                    <path d="M3 7h4l2-2h6l2 2h4v12H3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <span
                  className={
                    !isActive
                      ? "group-hover:text-[#425C76] transition-all duration-200"
                      : ""
                  }
                >
                  Gantry Monitoring
                </span>
              </>
            )}
          </NavLink>

          {/* Menu Environment Monitoring */}
          <NavLink
            to="/environment"
            className={({ isActive }) =>
              `nav-item flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? "bg-[#425C76] text-white shadow-sm"
                  : "text-[#A0AAB5] bg-transparent hover:bg-gray-100"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`icon-container w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-sm ${
                    isActive
                      ? "text-[#425C76]"
                      : "text-[#A0AAB5] border border-gray-100 group-hover:text-[#425C76]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 transition-all duration-200"
                  >
                    <path d="M8.25 15.75a5.25 5.25 0 017.5 0" />
                    <path d="M5.25 12.75a9.75 9.75 0 0113.5 0" />
                    <path d="M2.25 9.75a14.25 14.25 0 0119.5 0" />
                    <circle
                      cx="12"
                      cy="19"
                      r="2"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </div>
                <span
                  className={
                    !isActive
                      ? "group-hover:text-[#425C76] transition-all duration-200"
                      : ""
                  }
                >
                  Environment Monitoring
                </span>
              </>
            )}
          </NavLink>

          {/* Menu Data and Report */}
          <NavLink
            to="/report"
            className={({ isActive }) =>
              `nav-item flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? "bg-[#425C76] text-white shadow-sm"
                  : "text-[#A0AAB5] bg-transparent hover:bg-gray-100"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`icon-container w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-sm ${
                    isActive
                      ? "text-[#425C76]"
                      : "text-[#A0AAB5] border border-gray-100 group-hover:text-[#425C76]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 transition-all duration-200"
                  >
                    <rect
                      width="16"
                      height="20"
                      x="4"
                      y="2"
                      rx="2"
                      ry="2"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M8 8h8" />
                    <path d="M8 12h8" />
                    <path d="M8 16h5" />
                  </svg>
                </div>
                <span
                  className={
                    !isActive
                      ? "group-hover:text-[#425C76] transition-all duration-200"
                      : ""
                  }
                >
                  Data and Report
                </span>
              </>
            )}
          </NavLink>

          <p className="text-[#34475E] font-bold text-lg mt-6 mb-2 px-2">
            Account Pages
          </p>

          {/* Menu Profile */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `nav-item flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? "bg-[#425C76] text-white shadow-sm"
                  : "text-[#A0AAB5] bg-transparent hover:bg-gray-100"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`icon-container w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-sm ${
                    isActive
                      ? "text-[#425C76]"
                      : "text-[#A0AAB5] border border-gray-100 group-hover:text-[#425C76]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </div>
                <span
                  className={
                    !isActive
                      ? "group-hover:text-[#425C76] transition-all duration-200"
                      : ""
                  }
                >
                  Profile
                </span>
              </>
            )}
          </NavLink>
        </nav>
      </div>

      <div className="bg-[#425C76] text-white rounded-2xl p-5 text-center shadow-inner relative overflow-hidden mt-8">
        <p className="font-semibold text-sm mb-1 relative z-10">Need help?</p>
        <p className="text-xs mb-4 text-gray-200 relative z-10">
          Please check our docs
        </p>
        <button className="bg-white text-[#425C76] text-xs font-bold py-2 px-4 rounded-xl w-full relative z-10 hover:bg-gray-50 transition-colors shadow-sm">
          DOCUMENTATION
        </button>
      </div>
    </aside>
  );
}
