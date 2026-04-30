"use client";

import { useState, useEffect } from "react";
import AboutMe from "../components/AboutMe";
import MyProjects from "../components/Myproject";
import Certificates from "../components/Certificate";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Link from "next/link";
import AIAgent from "../components/AIAgent";
import Image from "next/image";


export default function DashboardHome() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  



  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = saved ? saved === "dark" : prefersDark;

    setDarkMode(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

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

  const roles = [
    { prep: "a", suffix: "Web Developer" },
    { prep: "a", suffix: "Mobile Developer" },
    { prep: "a", suffix: "Machine Learning Engineer" },
    { prep: "an", suffix: "IoT Developer" },
    { prep: "a", suffix: "Full Stack Developer" },
    { prep: "a", suffix: "Backend Developer" },
    { prep: "an", suffix: "ATM Technician" },
  ];

  useEffect(() => {
    const current = roles[index].suffix;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, charIndex + 1);
        setText(next);
        setCharIndex((prev) => prev + 1);

        if (next === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        const next = current.slice(0, charIndex - 1);
        setText(next);
        setCharIndex((prev) => prev - 1);

        if (next === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
  <>
    <main className="relative z-10 min-h-[100svh] px-6 sm:px-10 lg:px-20 py-8 text-theme">
        {/* HEADER */}
        <header
  className="
    w-full
    flex items-center justify-between

    backdrop-blur-xl
    bg-white/5
    border border-white/10

    rounded-2xl

    px-[clamp(16px,2vw,32px)]
    py-[clamp(12px,1.5vw,20px)]

    shadow-[0_0_30px_rgba(59,130,246,0.2)]
  "
>
  <nav
    className="
      hidden lg:flex
      gap-[clamp(20px,2vw,50px)]

      text-gray-300
      tracking-wide
    "
  >
    {links.map((link) => (
      <a
        key={link}
        href={`#${link}`}
        className="
          relative
          capitalize

          text-[clamp(14px,1vw,18px)]
          font-medium

          transition-all duration-300

          hover:text-blue-400
        "
      >
        {link}

       {/* UNDERLINE */}
        <span
          className="
            absolute left-0 -bottom-1
            h-[2px] w-0
            bg-gradient-to-r from-blue-400 to-white
            transition-all duration-300
            group-hover:w-full
          "
        />
      </a>
    ))}
  </nav>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-4">

    {/* 🌙 DARK/LIGHT SWITCH */}
    <button
      onClick={toggleTheme}
      className="
        relative
        w-[60px] h-[32px]

        bg-gray-300 dark:bg-gray-700
        rounded-full

        flex items-center
        px-1

        transition-all duration-300
      "
    >
      {/* CIRCLE */}
      <div
        className={`
          w-[26px] h-[26px]
          rounded-full
          bg-white
          shadow-md

          flex items-center justify-center
          text-xs

          transform transition-all duration-300

          ${darkMode ? "translate-x-7" : "translate-x-0"}
        `}
      >
        {darkMode ? "🌙" : "☀️"}
      </div>
    </button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-theme text-3xl"
          >
            ☰
          </button>

          <div className="text-lg xl:text-xl font-bold tracking-wide">
            My Portfolio
          </div>
        </div>
        </header>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden mt-6 w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-4">
            <nav className="flex flex-col gap-4 text-gray-300">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                  className="capitalize text-lg font-medium hover:text-blue-400 transition"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        )}

    {/* HERO */}
<section
  id="home"
  className="
    relative
    min-h-[calc(100svh-120px)]
    w-full
    flex flex-col xl:flex-row
    items-center justify-center

    gap-[clamp(40px,6vw,140px)]
    scroll-mt-24
    overflow-hidden
  "
>

  {/* 🔥 BACKGROUND GLOW ORBS */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] top-[-100px] left-[-100px] animate-pulse" />
    <div className="absolute w-[600px] h-[600px] bg-white/10 blur-[140px] bottom-[-150px] right-[-150px] animate-pulse" />
  </div>

  {/* PROFILE */}
  <div className="relative flex-shrink-0">

    {/* 🔥 GLOW RING */}
    <div className="
      absolute inset-0 rounded-full
      blur-[30px]
      bg-blue-500/40
      animate-pulse
    " />

    <div
      className="
        relative
        w-[clamp(240px,22vw,520px)]
        h-[clamp(240px,22vw,520px)]

        rounded-full
        border-[clamp(3px,0.4vw,6px)] border-blue-500
        overflow-hidden

        shadow-[0_0_60px_rgba(59,130,246,0.9),0_0_120px_rgba(255,255,255,0.2)]
      "
    >
      <Image
  src="/linkedprof.png"
  alt="Profile"
  width={500}
  height={500}
  priority
  className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
/>
    </div>
  </div>

  {/* TEXT CARD */}
  <div
    className="
      w-full
      max-w-[clamp(320px,55vw,1200px)]

      bg-white/5
      border border-white/10
      rounded-[clamp(20px,2vw,40px)]

      p-[clamp(30px,5vw,90px)]

      text-center xl:text-left

      backdrop-blur-xl

      shadow-[0_0_50px_rgba(0,0,0,0.7)]
      hover:shadow-[0_0_140px_rgba(59,130,246,0.5)]

      transition-all duration-500
    "
  >

    {/* NAME */}
    <h1
      className="
        font-extrabold
        leading-tight
        tracking-tight

        text-[clamp(36px,4vw,110px)]
      "
    >
      Hi, I'm{" "}
      <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
        EJ Loudale Cañete
      </span>
    </h1>

    {/* TYPEWRITER */}
    <p
      className="
        mt-[clamp(20px,2vw,50px)]
        text-gray-300

        text-[clamp(18px,1.6vw,32px)]
        h-[clamp(32px,2vw,50px)]

        transition-all duration-300
      "
    >
      I am {roles[index].prep}{" "}
      <span className="text-blue-400 font-semibold">
        {text}
      </span>
      <span className="animate-pulse ml-1 text-blue-400">|</span>
    </p>

    {/* CTA BUTTONS */}
    <div
      className="
        flex flex-wrap
        justify-center xl:justify-start

        gap-[clamp(12px,2vw,30px)]
        mt-[clamp(30px,3vw,70px)]
      "
    >
    <Link
  href="/resume"
  className="
    px-[clamp(18px,1.5vw,36px)]
    py-[clamp(12px,1vw,20px)]

    bg-blue-500
    rounded-xl

    font-semibold
    text-[clamp(14px,1vw,18px)]

    shadow-[0_0_30px_rgba(59,130,246,0.8)]

    hover:bg-blue-600
    hover:scale-105
    hover:shadow-[0_0_60px_rgba(59,130,246,1)]

    transition-all duration-300
  "
>
  🚀 View Resume
</Link>
     
    </div>
  </div>
</section>
        {/* ABOUT SECTION */}
        <AboutMe />
        {/* PROJECTS */}
        <MyProjects />
        {/* CERTIFICATES */}
        <Certificates />
        {/* SKILLS */}
        <Skills />
        {/* EXPERIENCE */}
        <Experience />
        {/* SERVICES */}
        <Services />
        {/* CONTACT */}
        <Contact />

        {/* FOOTER */}
        <Footer />
      </main>

      <AIAgent />
    </>
  );
}