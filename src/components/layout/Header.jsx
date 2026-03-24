export default function Header() {
  return (
    <header className="h-16 bg-white backdrop-blur-md flex items-center justify-between px-8 border-b border-gray-100 z-10 shrink-0">
      <div className="flex flex-col">
        <div className="text-[#A0AAB5] text-xs font-medium mb-1 tracking-wide">
          Pages <span className="mx-1">/</span>
          <span className="text-gray-800">Dashboard</span>
        </div>
        <h1 className="text-gray-900 font-bold text-xl">Dashboard</h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center bg-[#F4F6F8] rounded-full px-5 py-2.5 border border-gray-200 focus-within:ring-2 focus-within:ring-[#425C76]/20 focus-within:bg-white transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            classNameName="w-4 h-4 mr-3 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            className="mr-4"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M16 16l4.5 4.5" stroke-linecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Type here..."
            className="bg-transparent text-gray-700 text-sm focus:outline-none w-48 font-medium placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2.5 text-[#718096] hover:text-gray-900 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold">Sign In</span>
          </button>

          <button className="text-[#A0AAB5] hover:text-[#425C76] transition-colors ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
