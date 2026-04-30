"use client";

import { useState } from "react";
import Loader from "../components/Loader";
import Resume from "../components/Resume";

export default function ResumeClient() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleFinish = () => {
    setFadeOut(true);

    window.setTimeout(() => {
      setShowLoader(false);
      setShowResume(true);
    }, 500);
  };

  return (
    <>
      {showLoader && (
        <Loader onFinish={handleFinish} fadeOut={fadeOut} message="Loading Resume..." />
      )}

      <div
        className={
          "transition-all duration-700 ease-out " +
          (showResume
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none")
        }
      >
        <Resume />
      </div>
    </>
  );
}