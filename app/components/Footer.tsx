"use client";

import { FaFacebook, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const links = [
    "home",
    "about",
    "projects",
    "certificates",
    "skills",
    "experience",
    "services",
    "contact",
  ];

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        border-t border-white/10
        bg-black/40
        px-6 sm:px-10 lg:px-20
        py-[clamp(60px,8vh,120px)]
        text-white
        backdrop-blur-xl
      "
    >
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-white/5" />

      <div className="relative z-10 mx-auto max-w-[1800px]">
        <div
          className="
            rounded-[2rem]
            border border-white/10
            bg-white/5
            p-[clamp(28px,4vw,70px)]
            shadow-[0_0_80px_rgba(59,130,246,0.25)]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-[clamp(40px,5vw,90px)]
              md:grid-cols-3
              items-center
            "
          >
            {/* LEFT - QUICK LINKS */}
            <div className="text-center md:text-left">
              <h3 className="mb-6 text-[clamp(20px,1.5vw,30px)] font-bold text-blue-400">
                Quick Links
              </h3>

              <div className="grid grid-cols-2 gap-3 text-gray-300">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    className="
                      capitalize
                      text-[clamp(14px,1vw,18px)]
                      transition
                      hover:text-blue-400
                      hover:translate-x-1
                    "
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* CENTER - CONNECT */}
            <div className="text-center">
              <h3 className="mb-6 text-[clamp(20px,1.5vw,30px)] font-bold text-blue-400">
                Connect With Me
              </h3>

              <div className="flex justify-center gap-[clamp(18px,3vw,45px)]">
                <a
                  href="https://www.facebook.com/ej.loudale.canete.2025/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/5
                    p-[clamp(12px,1.2vw,22px)]
                    text-[clamp(24px,2vw,42px)]
                    text-blue-400
                    shadow-[0_0_25px_rgba(59,130,246,0.35)]
                    transition-all
                    hover:scale-125
                    hover:bg-blue-600
                    hover:text-white
                  "
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://github.com/ejluv143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/5
                    p-[clamp(12px,1.2vw,22px)]
                    text-[clamp(24px,2vw,42px)]
                    text-gray-300
                    shadow-[0_0_25px_rgba(255,255,255,0.2)]
                    transition-all
                    hover:scale-125
                    hover:bg-gray-800
                    hover:text-white
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/ej-loudale-cañete-944605344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/5
                    p-[clamp(12px,1.2vw,22px)]
                    text-[clamp(24px,2vw,42px)]
                    text-blue-400
                    shadow-[0_0_25px_rgba(59,130,246,0.35)]
                    transition-all
                    hover:scale-125
                    hover:bg-blue-500
                    hover:text-white
                  "
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* RIGHT - PROFILE */}
            <div className="flex flex-col items-center text-center md:items-end md:text-right">
              <div
                className="
                  mb-5
                  h-[clamp(80px,6vw,140px)]
                  w-[clamp(80px,6vw,140px)]
                  overflow-hidden
                  rounded-full
                  border-2 border-blue-400
                  shadow-[0_0_35px_rgba(59,130,246,0.75),0_0_70px_rgba(255,255,255,0.2)]
                "
              >
                <img
                  src="/linkedprof.png"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <h4 className="text-[clamp(18px,1.5vw,28px)] font-bold">
                EJ Loudale Cañete
              </h4>

              <p className="mt-3 max-w-[360px] text-[clamp(13px,1vw,18px)] leading-relaxed text-gray-400">
                Aspiring Machine Learning Engineer • Next.js Enthusiast •
                Mobile Developer • Full Stack Developer
              </p>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-[clamp(40px,5vw,80px)] flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-center text-[clamp(12px,0.9vw,16px)] text-gray-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} EJ Loudale Cañete. All rights
              reserved.
            </p>

            <a
              href="#home"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-blue-400/30
                bg-blue-500/10
                px-5 py-2
                text-blue-300
                transition-all
                hover:-translate-y-1
                hover:bg-blue-500
                hover:text-white
                hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]
              "
            >
              Back to top <FaArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}