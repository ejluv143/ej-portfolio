"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  github?: string;
  featured?: boolean;
};

export default function MyProjects() {
  const [projects] = useState<Project[]>([
    {
      title: "HouseAI Cost Predictor",
      description:
        "Full-stack AI web app that predicts house construction costs with real-time inputs, smart insights, and cost breakdown.",
      tech: ["Next.js", "Tailwind CSS", "Flask", "Machine Learning"],
      image: "/house-ai.png",
      live: "https://houseai-cost-predictor.vercel.app",
      github: "https://github.com/ejluv143/houseai-cost-predictor",
      featured: true,
    },
    {
      title: "Fuel AI Predictor (Physics + Machine Learning)",
      description:
        "Predicts fuel consumption using physics-based features combined with machine learning for smart maintenance and efficiency optimization.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[clamp(20px,3vw,50px)] auto-rows-[1fr]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${
                project.featured ? "xl:col-span-2" : ""
              }`}
            >
              {/* Desktop flip card */}
              <div className="hidden lg:block h-[clamp(430px,34vw,560px)] [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* FRONT */}
                  <div
                    className={`
                      absolute inset-0 rounded-2xl overflow-hidden backdrop-blur-md
                      border border-black/10 dark:border-white/10
                      [backface-visibility:hidden]
                      transition-all duration-500
                      ${
                        project.featured
                          ? "bg-gradient-to-br from-blue-500/20 via-white/80 to-cyan-200/40 dark:from-blue-500/30 dark:via-black/70 dark:to-cyan-500/10 shadow-[0_0_70px_rgba(59,130,246,0.65)]"
                          : "bg-white/70 dark:bg-white/5 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                      }
                    `}
                  >
                    <div className="relative w-full h-[clamp(160px,18vw,260px)] overflow-hidden">
                      {project.live && project.featured && (
                        <div className="absolute left-4 top-4 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                          ● LIVE
                        </div>
                      )}

                      {project.featured && (
                        <div className="absolute right-4 top-4 z-10 rounded-full border border-blue-300/40 bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-md">
                          Featured Project
                        </div>
                      )}

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-[clamp(16px,2vw,28px)]">
                      <h3 className="text-[clamp(18px,1.5vw,30px)] font-bold text-blue-500 dark:text-blue-400 mb-3">
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
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-white/95 to-blue-100/60 dark:from-blue-500/25 dark:via-black/80 dark:to-white/10 backdrop-blur-xl border border-blue-400/30 shadow-[0_0_70px_rgba(59,130,246,0.6)] flex flex-col items-center justify-center text-center p-8 text-black dark:text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="mb-3 rounded-full bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-300">
                      {project.featured ? "Featured Project" : "Project"}
                    </p>

                    <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-8 max-w-sm">
                      {project.live
                        ? "Open the live deployed project."
                        : "View the source code and project details on GitHub."}
                    </p>

                    {(project.live || project.github) && (
                      <a
                        href={project.live || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                      >
                        🚀 {project.live ? "View Live Site" : "View Project"}
                      </a>
                    )}

                    {project.github && project.live && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-sm text-gray-600 underline-offset-4 hover:underline dark:text-gray-300"
                      >
                        View GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile simplified card */}
              <div
                className={`
                  lg:hidden overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 
                  shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-transform duration-300 hover:-translate-y-1
                  ${
                    project.featured
                      ? "bg-gradient-to-br from-blue-500/20 via-white/90 to-cyan-100/50 dark:from-blue-500/25 dark:via-black/80 dark:to-cyan-500/10"
                      : "bg-white/90 dark:bg-white/5"
                  }
                `}
              >
                <div className="relative w-full h-[240px] overflow-hidden">
                  {project.live && project.featured && (
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      ● LIVE
                    </div>
                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  {project.featured && (
                    <p className="mb-3 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-300">
                      Featured Project
                    </p>
                  )}

                  <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-600 dark:text-blue-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {(project.live || project.github) && (
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(59,130,246,0.7)] transition hover:bg-blue-600"
                    >
                      🚀 {project.live ? "View Live Site" : "View Project"}
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