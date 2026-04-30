"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoaderProps {
  onFinish: () => void;
  fadeOut?: boolean;
  message?: string;
}

export default function Loader({ onFinish, fadeOut = false, message = "Loading Portfolio..." }: LoaderProps) {
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
    <div
      className={
        "fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500 ease-out " +
        (fadeOut ? "opacity-0 pointer-events-none" : "opacity-100")
      }
    >
      <div className="relative mb-10">
        <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-[40px]" />

        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.9)] animate-spin-slow">
          <Image
            src="/linkedprof.png"
            alt="Loading"
            width={160}
            height={160}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <h2 className="mb-4 text-[clamp(20px,2vw,32px)] font-bold">{message}</h2>

      <div className="mb-3 h-2 w-[250px] overflow-hidden rounded-full bg-gray-800">
        <div
          className="h-full bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-400">{Math.round(progress)}%</p>
    </div>
  );
}