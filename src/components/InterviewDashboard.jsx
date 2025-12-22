import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Mic } from "lucide-react";
import dashboardIcon from "../assets/dashboard.jpeg";
import playIcon from "../assets/playbutton.jpeg";
import { motion } from "framer-motion";

export default function InterviewDashboard() {

  const interviewTypes = [
    "Technical Interview – IT & Engineering",
    "HR Interview",
    "Managerial Interview",
    "Behavioral Interview",
    "System Design Interview",
  ];

  const [selectedInterview, setSelectedInterview] = useState(interviewTypes[0]);

  /* ================= TIMER ================= */
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(p => p - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 font-sans">
      <Navbar />

      {/* ================= INFO BAR ================= */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="
          w-[95%] sm:w-[90%] mx-auto py-3
          flex flex-col sm:flex-row
          gap-3 sm:gap-0
          sm:items-center sm:justify-between
        ">

          {/* LEFT */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow"
            >
              Practice Mode
            </motion.span>

            {/* DROPDOWN */}
            <div className="relative">
              <select
                value={selectedInterview}
                onChange={(e) => setSelectedInterview(e.target.value)}
                className="
                  text-sm sm:text-base font-semibold
                  bg-gradient-to-r from-indigo-700 to-purple-700
                  bg-clip-text text-transparent
                  bg-transparent outline-none cursor-pointer
                  pr-6 appearance-none
                "
              >
                {interviewTypes.map((t, i) => (
                  <option key={i} value={t} className="text-indigo-900">
                    {t}
                  </option>
                ))}
              </select>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-indigo-700">
                ▼
              </span>
            </div>
          </div>

          {/* TIMER */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="
              self-start sm:self-auto
              bg-white/30 border border-white/30
              px-4 py-1.5 rounded-full
              backdrop-blur-md shadow-inner
              text-indigo-900 text-sm font-semibold
            "
          >
            ⏱ {minutes}:{seconds}
          </motion.div>
        </div>
      </motion.div>

      {/* ================= HERO ================= */}
      <section className="
        w-[95%] sm:w-[90%] mx-auto mt-10
        grid grid-cols-1 lg:grid-cols-2
        gap-10 items-center
      ">
        {/* LEFT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900">
            Welcome Back, Sarah!
          </h1>

          <p className="mt-3 text-indigo-700 text-base sm:text-lg">
            Ready to Ace Your Interview?
          </p>

          <p className="mt-4 text-gray-600 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
            Choose your domain and start practicing with smart AI interviews.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-8 sm:mt-10
              mx-auto lg:mx-0
              flex items-center gap-2
              bg-orange-500 hover:bg-orange-600
              text-white px-7 py-3
              rounded-full font-semibold shadow-md
            "
          >
            <img src={playIcon} alt="play" className="w-4 h-4" />
            Start Practice
          </motion.button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl">
            <img
              src={dashboardIcon}
              alt="Interview"
              className="w-[300px] sm:w-[380px] lg:w-[420px] h-64 sm:h-72 object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="
        w-[95%] sm:w-[90%] mx-auto mt-12 pb-16
        grid grid-cols-1 lg:grid-cols-3 gap-8
      ">

        {/* QUESTION */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white/90 rounded-2xl shadow-xl p-5 sm:p-6 space-y-5"
        >
          <p className="text-sm text-gray-500">Question 1 / 5</p>

          <h3 className="text-base sm:text-lg font-semibold text-indigo-900">
            🔹 Can you explain what a <b>RESTful APIs API</b> is and how it works?
          </h3>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-sm text-gray-700">
            💡 <b>Ideal Answer</b>
            <p className="mt-2">
              A RESTful API follows REST principles and uses HTTP methods.
            </p>
          </div>

          <textarea
            rows={5}
            className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-indigo-300 text-sm"
            defaultValue="A RESTful API follows REST architecture principles..."
          />

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
            <button className="flex items-center justify-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm">
              <Mic size={16} /> Speak
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold"
            >
              Submit Answer ▶
            </motion.button>
          </div>
        </motion.div>

        {/* FEEDBACK */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 rounded-2xl shadow-xl p-6 space-y-4"
        >
          <h4 className="font-semibold text-indigo-900 text-lg">
            🤖 AI Feedback
          </h4>

          <div className="text-3xl font-bold text-indigo-700">
            7.5 <span className="text-sm text-gray-400">/10</span>
          </div>

          <Metric label="Accuracy" value="8.0" color="bg-indigo-500" />
          <Metric label="Communication" value="7.5" color="bg-orange-400" />
          <Metric label="Confidence" value="7.0" color="bg-yellow-400" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-semibold"
          >
            Next Question
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= METRIC ================= */
function Metric({ label, value, color }) {
  return (
    <div className="text-sm">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value * 10}%` }}
          transition={{ duration: 1 }}
          className={`${color} h-2 rounded-full`}
        />
      </div>
    </div>
  );
}
