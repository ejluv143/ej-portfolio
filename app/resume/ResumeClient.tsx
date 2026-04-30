"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Resume from "../components/Resume";

export default function ResumeClient() {
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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return <Resume />;
}
