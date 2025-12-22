import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // 🔹 Home page navbar
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`w-full z-50 border-b border-white/10
      ${
        isHome
          ? "absolute top-0 bg-gradient-to-r from-blue-600 to-blue-500"
          : "sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600"
      }`}
    >
      <div className="w-[90%] mx-auto flex items-center justify-between py-5 text-white">

        {/* LOGO */}
        <div className="flex items-center gap-2 font-bold text-xl">
          🧠 AI Interviewer
        </div>

        {/* ================= HOME NAVBAR ================= */}
        {isHome && (
          <>
            <div className="hidden md:flex gap-8 text-sm">
              <NavLink className="border-b-2 border-white pb-1">
                Home
              </NavLink>
              <NavLink className="opacity-80 hover:opacity-100">
                Features
              </NavLink>
              <NavLink className="opacity-80 hover:opacity-100">
                About
              </NavLink>
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-2 rounded-full border border-white/60">
                Login
              </button>
              <button className="px-5 py-2 rounded-full bg-orange-400 font-semibold">
                Sign Up
              </button>
            </div>
          </>
        )}

        {/* ================= DASHBOARD NAVBAR ================= */}
        {!isHome && (
          <>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white pb-1"
                    : "opacity-80 hover:opacity-100"
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/interviews"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white pb-1"
                    : "opacity-80 hover:opacity-100"
                }
              >
                Interviews
              </NavLink>

              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white pb-1"
                    : "opacity-80 hover:opacity-100"
                }
              >
                Reports
              </NavLink>
            </div>

            {/* Profile (NO TIMER) */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-9 h-9 rounded-full border border-white/40"
              />
              <span className="hidden sm:block text-sm">Sarah M.</span>
              <span className="text-xs">▼</span>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
