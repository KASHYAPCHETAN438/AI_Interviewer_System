import Navbar from "./Navbar";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function CompareInterviews() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 pb-20">
      <Navbar />

      {/* ================= HEADER ================= */}
      <div className="w-[90%] mx-auto pt-8">
        <p className="text-sm text-indigo-500 mb-2">
          Reports &gt; Compare Interviews
        </p>

        <h1 className="text-4xl font-extrabold text-indigo-900">
          Compare Interviews
        </h1>

        <p className="text-gray-600 mt-2 max-w-xl">
          See your progress by comparing your previous and recent interviews.
        </p>

        <div className="mt-4 inline-flex bg-white/70 rounded-full shadow px-4 py-2 text-sm font-medium">
          Compare With:&nbsp;
          <span className="text-indigo-700">Previous Report</span>
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <section className="w-[90%] mx-auto mt-10 grid md:grid-cols-2 gap-10 relative">

        {/* Arrow Bot */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20"
        >
          <div className="bg-white rounded-full shadow-xl p-4">
            🤖➡️
          </div>
        </motion.div>

        <CompareCard
          title="Sarah M."
          subtitle="Technical Interview – IT & Engineering"
          score={7.2}
          date="April 10, 2024"
          duration="16 minutes"
          metrics={[
            { label: "Accuracy", value: 8.0, color: "bg-indigo-500" },
            { label: "Communication", value: 7.0, color: "bg-orange-400" },
            { label: "Confidence", value: 6.5, color: "bg-yellow-400" },
          ]}
          takeaway="Solid technical knowledge, needs to improve confidence and provide more examples."
          cta="View Previous Report"
        />

        <CompareCard
          title="Recent Interview"
          subtitle="Technical Interview – IT & Engineering"
          score={7.8}
          date="April 10, 2024"
          duration="16 minutes"
          metrics={[
            { label: "Accuracy", value: 8.2, color: "bg-indigo-500" },
            { label: "Communication", value: 7.5, color: "bg-orange-400" },
            { label: "Confidence", value: 6.8, color: "bg-yellow-400" },
          ]}
          takeaway="Improved confidence, provided clearer answers with specific examples."
          cta="View Recent Report"
        />
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="w-[90%] mx-auto mt-16 bg-white/70 rounded-3xl shadow p-8">
        <h3 className="text-xl font-semibold text-indigo-900 mb-4">
          Progress Highlights
        </h3>

        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <Highlight>Improved technical knowledge</Highlight>
          <Highlight>Clearer communication with examples</Highlight>
          <Highlight>Slight increase in confidence</Highlight>
        </div>

        <h3 className="text-xl font-semibold text-indigo-900 mt-8 mb-4">
          Suggestions for Continued Growth
        </h3>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <Suggestion>Broaden into system design principles</Suggestion>
          <Suggestion>Practice explaining database design</Suggestion>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function CompareCard({ title, subtitle, score, date, duration, metrics, takeaway, cta }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 relative"
    >
      <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>

      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Calendar size={14} /> {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} /> {duration}
        </span>
      </div>

      <div className="mt-6 flex gap-6 items-center">
        <ScoreRing value={score} />
        <div className="flex-1 space-y-3">
          {metrics.map((m) => (
            <Metric key={m.label} {...m} />
          ))}
        </div>
      </div>

      <div className="mt-6 bg-indigo-50 rounded-xl p-4 text-sm">
        <strong>Key Takeaway</strong>
        <p className="mt-2 text-gray-600">{takeaway}</p>
      </div>

      <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-full font-semibold shadow">
        {cta}
      </button>
    </motion.div>
  );
}

function ScoreRing({ value }) {
  const pct = value * 10;
  return (
    <div className="relative w-32 h-32">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="10" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#6366f1"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * pct) / 100}
          initial={{ strokeDashoffset: 283 }}
          animate={{ strokeDashoffset: 283 - (283 * pct) / 100 }}
          transition={{ duration: 1 }}
          transform="rotate(-90 50 50)"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-indigo-700">{value}</div>
        <div className="text-xs text-gray-500">Overall Score</div>
      </div>
    </div>
  );
}

function Metric({ label, value, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${value * 10}%` }} />
      </div>
    </div>
  );
}

function Highlight({ children }) {
  return (
    <div className="bg-indigo-50 rounded-xl px-4 py-3 shadow-sm">
      {children}
    </div>
  );
}

function Suggestion({ children }) {
  return (
    <div className="bg-white rounded-xl px-4 py-3 shadow-sm">
      {children}
    </div>
  );
}
