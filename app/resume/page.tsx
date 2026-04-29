"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loader from "../components/Loader";
import Resume from "../components/Resume";

export default function ResumePage() {
  const searchParams = useSearchParams();
  const fromHome = searchParams.get("fromHome") === "true";

  const [loading, setLoading] = useState(fromHome);

  useEffect(() => {
    if (fromHome) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [fromHome]);

  if (loading) {
    return <Loader onFinish={() => {}} />;
  }

  return <Resume />;
}