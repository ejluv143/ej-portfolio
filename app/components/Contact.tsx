"use client";

import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ej-loudale-cañete-944605344",
    icon: FaLinkedin,
    color: "text-blue-400",
    hover: "hover:bg-blue-500",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.45)]",
  },
  {
    name: "GitHub",
    href: "https://github.com/ejluv143",
    icon: FaGithub,
    color: "text-gray-200",
    hover: "hover:bg-gray-800",
    shadow: "shadow-[0_0_30px_rgba(255,255,255,0.25)]",
  },
  {
    name: "Gmail",
    href: "mailto:ejloudalec13@gmail.com",
    icon: FaEnvelope,
    color: "text-red-400",
    hover: "hover:bg-red-500",
    shadow: "shadow-[0_0_30px_rgba(239,68,68,0.45)]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ej.loudale.canete.2025/about",
    icon: FaFacebook,
    color: "text-blue-400",
    hover: "hover:bg-blue-600",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.45)]",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center px-6 sm:px-10 lg:px-20 py-[clamp(80px,10vh,140px)] text-theme"
    >
      <div className="w-full max-w-[1200px] rounded-[2rem] border border-white/10 bg-white/5 p-[clamp(28px,5vw,80px)] text-center backdrop-blur-xl shadow-[0_0_70px_rgba(59,130,246,0.35)] hover:shadow-[0_0_120px_rgba(59,130,246,0.65)] transition-all duration-500">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
          Contact
        </p>

        <h2 className="text-[clamp(36px,5vw,88px)] font-extrabold leading-tight">
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-[clamp(15px,1.2vw,22px)] leading-relaxed text-gray-300">
          Let’s connect for collaborations, freelance projects, web apps, AI
          systems, mobile apps, or technical support.
        </p>

        <div className="mt-[clamp(32px,5vw,70px)] grid grid-cols-2 gap-[clamp(16px,2vw,32px)] md:grid-cols-4">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`
                  group
                  relative
                  flex
                  min-h-[clamp(140px,13vw,220px)]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/30
                  p-[clamp(18px,2vw,32px)]
                  transition-all
                  duration-500
                  hover:-translate-y-4
                  ${item.hover}
                  ${item.shadow}
                `}
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/20 via-transparent to-blue-500/20" />

                <Icon
                  className={`
                    relative
                    z-10
                    text-[clamp(38px,4vw,72px)]
                    ${item.color}
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:text-white
                  `}
                />

                <span className="relative z-10 mt-5 text-[clamp(14px,1.2vw,20px)] font-bold text-gray-200 group-hover:text-white">
                  {item.name}
                </span>

                <span className="relative z-10 mt-2 text-xs text-gray-400 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-white">
                  Open Link →
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-[clamp(32px,5vw,60px)]">
          <a
            href="mailto:ejloudalec13@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 font-bold text-white shadow-[0_0_35px_rgba(59,130,246,0.7)] transition hover:scale-105 hover:bg-blue-600"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}