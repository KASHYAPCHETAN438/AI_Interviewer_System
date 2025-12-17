import Navbar from "./Navbar";
import interviewerImg from "../assets/Interview-pana.svg";
import playIcon from "../assets/playbutton.jpeg";
import settingIcon from "../assets/setting.jpeg";
import hrIcon from "../assets/hr.jpeg";
import mockIcon from "../assets/mock.jpeg";
import reportIcon from "../assets/report.jpeg";

export default function Home() {
  return (
    <div className="bg-[#f6f9ff] font-sans overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        className="
        relative text-white pt-40 pb-40 overflow-hidden
        bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700
        bg-[length:200%_200%]
        animate-[bgMove_14s_ease_infinite]
        
        "
      >
        {/* Floating blobs */}
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-indigo-400/30 rounded-full blur-3xl animate-[blob_20s_infinite]" />
        <div className="absolute bottom-20 right-0 w-[28rem] h-[28rem] bg-cyan-400/30 rounded-full blur-3xl animate-[blob_25s_infinite_reverse]" />

        <div className="relative w-[90%] mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
          {/* LEFT */}
          <div className="space-y-6 animate-[floatText_6s_ease-in-out_infinite]">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              AI-Powered <br />
              <span className="text-orange-300">Interviewer</span> System
            </h1>

            <p className="text-blue-100 text-lg max-w-md">
              Practice interviews with AI, get instant feedback,
              and crack real interviews with confidence.
            </p>

            <div className="flex gap-5 pt-6">
              <button
                className="
                bg-orange-400 hover:bg-orange-500
                px-9 py-4 rounded-full font-semibold
                shadow-xl hover:scale-110 transition-all duration-300
                "
              >
                🚀 Start Practice
              </button>

              <button
                className="
                bg-white text-blue-700
                px-7 py-4 rounded-full font-semibold
                flex items-center gap-3
                shadow-xl hover:scale-110 transition-all duration-300
                "
              >
                <img src={playIcon} alt="Play Demo" className="w-6 h-6" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT AI CARD */}
          <div className="relative flex justify-center md:justify-end animate-[floatCard_5s_ease-in-out_infinite]">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-30 blur-3xl rounded-3xl"></div>

            <div
              className="
              relative bg-white/10 backdrop-blur-xl
              border border-white/30 rounded-3xl
              shadow-2xl p-4 space-y-4
              w-92 hover:scale-[1.03] transition-all
              "
            >
              {/* Image */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-3 shadow-inner">
                <div className="flex gap-2 mb-2 px-2">
                  <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img
                    src={interviewerImg}
                    alt="AI Interview Preview"
                    className="w-full h-44 object-contain"
                  />
                </div>
              </div>

              <div className="bg-white/90 rounded-xl p-3 shadow-md">
                <p className="text-xs font-semibold text-gray-700">
                  🤖 AI Question
                </p>
                
                <p className="text-gray-600 text-sm pl-5 mt-1">
                   Explain the difference between REST and GraphQL.
                </p>
              </div>

              <div className="bg-white/90 rounded-xl p-3 text-sm text-gray-600 shadow-md">
                REST uses multiple endpoints while GraphQL uses a single endpoint.
              </div>

              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl p-3 text-sm shadow-md">
                ✅ Good answer! Mention flexible data fetching in GraphQL.
              </div>
            </div>
          </div>
        </div>



   {/* ================= CONTINUOUS FLOW WAVE (IMAGE STYLE) ================= */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
         viewBox="0 0 2880 200"
         preserveAspectRatio="none"
        className="w-full h-[22vh] min-h-[160px]"
        >
    <defs>
      <path
        id="waveShape"
        d="
          M0,120
          C240,160 480,80 720,100
          960,120 1200,90 1440,110
          1680,130 1920,100 2160,110
          2400,120 2640,110 2880,120
          L2880,200 L0,200 Z
        "
      />
    </defs>

    {/* BACK LAYER */}
    <g opacity="0.25">
      <use href="#waveShape" fill="#ffffff" x="0">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-1440 0"
          dur="40s"
          repeatCount="indefinite"
        />
      </use>
      <use href="#waveShape" fill="#ffffff" x="1440">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-1440 0"
          dur="40s"
          repeatCount="indefinite"
        />
      </use>
    </g>

    {/* FRONT LAYER */}
    <g opacity="1">
      <use href="#waveShape" fill="#f6f9ff" x="0">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-1440 0"
          dur="25s"
          repeatCount="indefinite"
        />
      </use>
      <use href="#waveShape" fill="#f6f9ff" x="1440">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-1440 0"
          dur="25s"
          repeatCount="indefinite"
        />
      </use>
    </g>
  </svg>
</div>

      </section>



{/* ================= FEATURES ================= */}
<section className="relative -mt-49 pb-38 z-25 bg-[#f6f9ff]">
  <div className="w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-7">
    {[
      {
        title: "Technical Interviews",
        desc: "Practice DSA, OOPs, DBMS & real coding questions",
        img: settingIcon,
      },
      {
        title: "HR Interviews",
        desc: "Behavioral, situational & confidence-building questions",
        img: hrIcon,
      },
      {
        title: "Mock Tests & Feedback",
        desc: "Timed tests with AI-powered instant evaluation",
        img: mockIcon,
      },
      {
        title: "Personalized Reports",
        desc: "Detailed performance analysis & improvement tips",
        img: reportIcon,
      },
    ].map((item) => (
      <div
        key={item.title}
        className="
        bg-white rounded-2xl p-6
        border border-blue-100
        shadow-[0_10px_30px_rgba(37,99,235,0.08)]
        hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)]
        transition-all duration-300
        "
      >
        {/* ICON + TITLE */}
        <div className="flex items-center gap-4 mb-4">
          <div className="
            w-14 h-12 rounded-xl
            bg-blue-100 flex items-center justify-center
          ">
            <img src={item.img} alt={item.title} className="w-7 h-7" />
          </div>

          <h3 className="font-semibold text-gray-800 text-base">
            {item.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>




{/* ================= HOW IT WORKS ================= */}

<section className="py-12 text-center bg-[#f6f9ff]">
  <h2 className="text-4xl font-extrabold text-gray-800">
    How It Works
  </h2>
  <p className="text-gray-500 mt-3">
    Easy steps to ace your interview
  </p>

  <div className="w-[90%] mx-auto mt-20 grid md:grid-cols-3 gap-10 py-4">
    {[
      {
        step: "1",
        title: "Choose Your Domain",
        desc: "Select IT, HR, Marketing & more",
        img: "https://cdn-icons-png.flaticon.com/512/2721/2721270.png",
      },
      {
        step: "2",
        title: "Answer AI Questions",
        desc: "Respond via text or voice",
        img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
      },
      {
        step: "3",
        title: "Get Instant Feedback",
        desc: "Receive scores & improvement tips",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
    ].map((item) => (
      <div
        key={item.step}
        className="
        bg-white rounded-3xl p-10
        border border-blue-100
        shadow-[0_12px_30px_rgba(37,99,235,0.08)]
        hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]
        transition-all duration-300
        "
      >
        {/* STEP */}
        <div className="
          w-10 h-10 mx-auto mb-6
          rounded-full bg-blue-500 text-white
          flex items-center justify-center font-bold
        ">
          {item.step}
        </div>

        <img src={item.img} className="w-16 mx-auto mb-6" />
        <h3 className="font-semibold text-lg text-gray-800">
          {item.title}
        </h3>
        <p className="text-gray-500 mt-2 text-sm">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}


