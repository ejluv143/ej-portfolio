"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  github?: string;
};

export default function MyProjects() {
  const [projects] = useState<Project[]>([
    {
      title: "Fuel AI Predictor (Physics + Machine Learning)",
      description:
        "Predicts fuel consumption using physics-based features (RPM, vibration, temperature) combined with machine learning for smart maintenance and efficiency optimization.",
      tech: ["Python", "Machine Learning", "IoT", "Predictive Modeling"],
      image: "/fuel-predict.png",
      github: "https://github.com/ejluv143/fuel-ai-predictor",
    },
    {
      title: "Bike Demand Forecasting",
      description:
        "Time series forecasting project using ARIMA models to predict bike rental demand. Includes data cleaning, decomposition, and trend analysis.",
      tech: ["R", "Time Series", "ARIMA", "Forecasting"],
      image: "/bike-rental.png",
      github: "https://github.com/ejluv143/bike-demand-forecast-r",
    },
  ]);

  return (
    <section
      id="projects"
      className="w-full flex items-center justify-center px-6 sm:px-10 lg:px-20 py-[clamp(80px,10vh,140px)] text-black dark:text-white"
    >
      <div className="w-full max-w-[1800px]">
        <h2 className="text-[clamp(32px,4vw,70px)] font-bold text-center mb-[clamp(40px,6vw,100px)]">
          My <span className="text-blue-500 dark:text-blue-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[clamp(20px,3vw,50px)]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group h-[clamp(430px,34vw,560px)] [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT */}
                <div className="absolute inset-0 bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.2)] [backface-visibility:hidden]">
                  <div className="w-full h-[clamp(160px,18vw,260px)] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-[clamp(16px,2vw,28px)]">
                    <h3 className="text-[clamp(18px,1.5vw,26px)] font-bold text-blue-500 dark:text-blue-400 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 text-[clamp(13px,1vw,16px)] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[clamp(10px,0.8vw,13px)] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-600 dark:text-blue-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl

                    bg-gradient-to-br
                    from-blue-500/20
                    via-white/95
                    to-blue-100/60

                    dark:from-blue-500/25
                    dark:via-black/80
                    dark:to-white/10

                    backdrop-blur-xl
                    border border-blue-400/30
                    shadow-[0_0_70px_rgba(59,130,246,0.6)]

                    flex flex-col items-center justify-center text-center
                    p-8

                    text-black dark:text-white

                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-8 max-w-sm">
                    View the source code and project details on GitHub.
                  </p>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    >
                      🚀 View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}