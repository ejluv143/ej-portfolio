"use client";

import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Resume from "../components/Resume";

export default function ResumeClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return <Resume />;
}