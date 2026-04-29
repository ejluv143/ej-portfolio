"use client";

import { useEffect } from "react";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">
      {/* particles */}
      <div className="absolute inset-0 intro-particles" />

      {/* light sweep */}
      <div className="absolute inset-0 intro-light-sweep" />

      {/* left cabinet door */}
      <div className="absolute left-0 top-0 z-30 h-full w-1/2 bg-gradient-to-r from-black via-blue-950 to-black shadow-[inset_-20px_0_60px_rgba(59,130,246,0.35)] animate-door-left" />

      {/* right cabinet door */}
      <div className="absolute right-0 top-0 z-30 h-full w-1/2 bg-gradient-to-l from-black via-blue-950 to-black shadow-[inset_20px_0_60px_rgba(59,130,246,0.35)] animate-door-right" />

      {/* glowing center line */}
      <div className="absolute z-40 h-full w-[2px] bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,1)] animate-center-line" />

      {/* content */}
      <div className="relative z-20 flex w-full max-w-[1300px] flex-col items-center justify-between gap-12 px-8 md:flex-row">
        {/* profile */}
        <div className="relative animate-intro-profile">
          <div className="absolute inset-0 rounded-full bg-blue-500/50 blur-[45px]" />

          <div className="relative h-[clamp(190px,22vw,360px)] w-[clamp(190px,22vw,360px)] overflow-hidden rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.9),0_0_120px_rgba(255,255,255,0.25)]">
            <img
              src="/linkedprof.png"
              alt="Profile"
              className="h-full w-full object-cover scale-110"
            />
          </div>
        </div>

        {/* text */}
        <div className="text-center md:text-left animate-intro-text">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.45em] text-blue-300">
            Welcome
          </p>

          <h1 className="text-[clamp(36px,5vw,96px)] font-extrabold leading-tight text-white">
            Welcome to my
          </h1>

          <h1 className="text-[clamp(42px,6vw,110px)] font-extrabold leading-tight text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.9)]">
            Portfolio
          </h1>

          <p className="mt-5 text-[clamp(14px,1.3vw,22px)] text-gray-400">
            Developer • Machine Learning • Mobile • IoT
          </p>
        </div>
      </div>
    </div>
  );
}