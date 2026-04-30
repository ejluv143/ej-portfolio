"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <>
      <div className="bg-rain" />

      <main className="relative z-10 min-h-screen w-full overflow-x-hidden px-6 sm:px-10 lg:px-20 py-6 text-black dark:text-white">
        {/* HEADER */}
        <header
          className="
            sticky top-4 z-50
            w-full max-w-[1400px] mx-auto
            flex items-center justify-between
            backdrop-blur-xl
            bg-white/70 dark:bg-white/5
            border border-black/10 dark:border-white/10
            rounded-2xl
            px-[clamp(16px,2vw,32px)]
            py-[clamp(12px,1.5vw,20px)]
            shadow-[0_0_30px_rgba(59,130,246,0.2)]
          "
        >
          <Link
  href="/?showLoader=true"
  className="text-sm sm:text-lg xl:text-xl font-bold tracking-wide hover:text-blue-500 transition-colors"
>
  ← Back to Portfolio
</Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                relative w-14 h-7
                bg-gray-300 dark:bg-gray-700
                border border-black/10 dark:border-white/20
                rounded-full
                transition-all duration-300
              "
            >
              <span
                className={`
                  absolute top-1 left-1
                  w-5 h-5
                  bg-white
                  rounded-full
                  shadow-md
                  flex items-center justify-center
                  text-[10px]
                  transition-all duration-300
                  ${darkMode ? "translate-x-7" : "translate-x-0"}
                `}
              >
                {darkMode ? "🌙" : "☀️"}
              </span>
            </button>

            <div className="hidden sm:block text-lg xl:text-xl font-bold tracking-wide">
              Resume
            </div>
          </div>
        </header>

        {/* RESUME */}
        <section
          id="resume"
          className="w-full flex items-center justify-center py-[clamp(40px,5vh,80px)]"
        >
          <div
            className="
              w-full max-w-[1200px]
              bg-white/90 dark:bg-white/5
              border border-black/10 dark:border-white/10
              rounded-3xl
              backdrop-blur-xl
              shadow-[0_0_60px_rgba(59,130,246,0.25)]
              overflow-hidden
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
              {/* LEFT */}
              <aside className="bg-blue-500/10 dark:bg-black/40 p-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_35px_rgba(59,130,246,0.7)] mb-6">
                  <img
                    src="/linkedprof.png"
                    alt="EJ Loudale Cañete"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h1 className="text-4xl font-extrabold leading-tight">
                  EJ Loudale <span className="text-blue-500">Cañete</span>
                </h1>

                <p className="mt-2 text-lg font-semibold text-blue-500 dark:text-blue-400">
                  ATM Technician
                </p>

                <div className="mt-8 space-y-3 text-sm text-gray-700 dark:text-gray-300 break-words">
                  <p>📍 Valencia City, Bukidnon 8709</p>
                  <p>📞 09552965432</p>
                  <p>📧 loudale@aclcbukidnon.com</p>
                  <p>🔗 linkedin.com/in/ej-loudale-cañete-944605344</p>
                  <p>🌐 ejportfolio-ten.vercel.app</p>
                </div>

                <div className="mt-10 w-full">
                  <h2 className="text-xl font-bold text-blue-500 mb-4">
                    Skills
                  </h2>

                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Microsoft Office</li>
                    <li>• PC Assembly and Troubleshooting</li>
                    <li>• Web Design</li>
                    <li>• React, React Native, Flutter</li>
                    <li>• Java, JavaScript</li>
                    <li>• Basic Networking LAN / WLAN</li>
                    <li>• ATM Maintenance</li>
                    <li>• Network Configuration</li>
                    <li>• IoT Device Management</li>
                  </ul>
                </div>
              </aside>

              {/* RIGHT */}
              <div className="p-8 lg:p-12">
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-3">
                    Career Objective
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To apply my acquired knowledge in web design, mobile app
                    development, backend development, and networking within a
                    reputable organization, while further developing my skills in
                    IoT and disaster response technologies.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-3">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Professional technician focused on maintaining and repairing
                    ATM systems, ensuring operational efficiency and security.
                    Skilled in diagnosing and resolving technical issues,
                    improving uptime and reliability.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-5">
                    Work History
                  </h2>

                  <div className="mb-8">
                    <p className="text-sm text-blue-500 font-bold">
                      2025-07 - Current
                    </p>
                    <h3 className="text-xl font-bold">ATM Technician I</h3>
                    <p className="text-gray-500 mb-3">
                      One Point Contact Inc. — Valencia, Bukidnon
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>• Maintains and repairs ATM systems.</li>
                      <li>• Handles compliance with safety and servicing standards.</li>
                      <li>• Performs inspections to prevent outages.</li>
                      <li>
                        • Currently handles 44 Hitachi ATMs of Pito AXM Platform
                        Inc.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-blue-500 font-bold">
                      2021-02 - 2025-05
                    </p>
                    <h3 className="text-xl font-bold">Intern</h3>
                    <p className="text-gray-500 mb-3">
                      ACLC College of Bukidnon — Valencia, Bukidnon
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>• Supported staff with daily tasks and reports.</li>
                      <li>• Collaborated with teams to solve problems.</li>
                      <li>• Gained hands-on experience with software tools.</li>
                      <li>• President of 2025 Graduating Students.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-3">
                    Education
                  </h2>
                  <h3 className="text-xl font-bold">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-gray-500">
                    ACLC Computer College — Valencia City, Bukidnon
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                    Completed coursework: Software Engineering, IT Capstone 1,
                    IT Capstone 2.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-3">
                    Software
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "Python",
                      "React",
                      "React Native",
                      "Node.js",
                      "Machine Learning",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-600 dark:text-blue-300 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-blue-500 mb-3">
                    Certifications
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Machine Learning — Coursera / Stanford Online
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Supervised Machine Learning: Regression and Classification
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}