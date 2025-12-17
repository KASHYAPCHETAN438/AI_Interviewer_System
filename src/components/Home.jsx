import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="bg-[#f6f9ff] font-sans overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-500 text-white pt-40 pb-52">
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-white/10 rounded-full blur-2xl"></div>

        <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              AI-Powered <br /> Interviewer System
            </h1>
            <p className="mt-5 text-blue-100 max-w-md">
              Prepare, Practice, and Get Hired with Smart AI Interviews
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-orange-400 hover:bg-orange-500 transition px-6 py-3 rounded-full font-semibold shadow-lg">
                Start Your Practice
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                ▶ Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT – Illustration using shapes */}
          <div className="relative">
            <div className="w-full h-[320px] rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl p-6">
              <div className="flex flex-col gap-4">
                <div className="w-2/3 h-6 bg-white/50 rounded"></div>
                <div className="w-full h-20 bg-white/40 rounded-xl"></div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/50"></div>
                  <div className="flex-1 h-12 bg-white/40 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative -mt-28">
        <div className="w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Technical Interviews", icon: "⚙️" },
            { title: "HR Interviews", icon: "🧑‍💼" },
            { title: "Mock Tests & Feedback", icon: "📋" },
            { title: "Personalized Reports", icon: "📊" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-xl p-6 text-center hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-28 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-500 mt-2">
          Easy Steps to Ace Your Interview
        </p>

        <div className="w-[90%] mx-auto mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Choose Your Domain",
              desc: "Select IT, HR, Marketing & more",
            },
            {
              step: "2",
              title: "Answer AI Questions",
              desc: "Respond via text or voice",
            },
            {
              step: "3",
              title: "Get Instant Feedback",
              desc: "Receive scores & tips",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      {/* <section className="pb-28">
        <div className="max-w-lg mx-auto bg-white p-10 rounded-3xl shadow-xl text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            S
          </div>
          <p className="italic text-gray-600 mt-4">
            “This AI platform helped me ace my interviews. Highly recommended!”
          </p>
          <p className="mt-3 font-semibold">
            — Sarah M., Software Engineer
          </p>
        </div>
      </section> */}
    </div>
  );
}
