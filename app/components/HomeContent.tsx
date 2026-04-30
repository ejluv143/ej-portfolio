"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Intro from "./Intro";
import Loader from "./Loader";
import DashboardHome from "../Dashboard/page";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const skipIntro = searchParams.get("skipIntro") === "true";

  const [stage, setStage] = useState<"intro" | "loading" | "portfolio">(
    skipIntro ? "portfolio" : "intro"
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {stage === "intro" && <Intro onFinish={() => setStage("loading")} />}

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