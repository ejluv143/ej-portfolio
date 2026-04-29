"use client";

import { useEffect, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 20;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 500);
      }

      setProgress(value);
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-black text-white">

      {/* SPINNING PROFILE */}
      <div className="relative mb-10">
        <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-[40px]" />

        <div className="w-40 h-40 rounded-full border-4 border-blue-500 overflow-hidden animate-spin-slow shadow-[0_0_60px_rgba(59,130,246,0.9)]">
          <img
            src="/linkedprof.png"
            alt="Loading"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* LOADING TEXT */}
      <h2 className="text-[clamp(20px,2vw,32px)] font-bold mb-4">
        Loading Portfolio...
      </h2>

      {/* PROGRESS BAR */}
      <div className="w-[250px] h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-gray-400 text-sm">{Math.round(progress)}%</p>
    </div>
  );
}