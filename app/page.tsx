"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Intro from "./components/Intro";
import Loader from "./components/Loader";
import DashboardHome from "./Dashboard/page";

export default function Home() {
  const searchParams = useSearchParams();
  const skipIntro = searchParams.get("skipIntro") === "true";

  const [stage, setStage] = useState<"intro" | "loading" | "portfolio">(
    skipIntro ? "loading" : "intro"
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {stage === "intro" && (
        <Intro onFinish={() => setStage("loading")} />
      )}

      {stage === "loading" && (
        <Loader onFinish={() => setStage("portfolio")} />
      )}

      {stage === "portfolio" && (
        <div className="animate-portfolio-reveal">
          <DashboardHome />
        </div>
      )}
    </main>
  );
}