import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-gradient-to-b ">
      <div className="w-[90%] mx-auto flex items-center justify-between py-6 text-white">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 font-bold text-xl">
          🧠
          AI Interviewer
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-sm">
          <NavLink className="border-b-2 border-white pb-1">Home</NavLink>
          <NavLink className="opacity-80 hover:opacity-100">Features</NavLink>
          <NavLink className="opacity-80 hover:opacity-100">About</NavLink>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-full border border-white/60">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-orange-400 text-white font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
