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
      image: "/houseai.png",
      live: "https://houseai-cost-predictor.vercel.app",
      github: "https://github.com/ejluv143/houseai-cost-predictor",
      featured: true,
    },
    {
      title: "Fuel AI Predictor",
      description:
        "Predicts fuel consumption using physics-based features combined with machine learning for smart maintenance and efficiency optimization.",
      tech: ["Python", "Machine Learning", "IoT", "Predictive Modeling"],
      image: "/fuel-predict.png",
      github: "https://github.com/ejluv143/fuel-ai-predictor",
    },
    {
      title: "Bike Demand Forecasting",
      description:
        "Time series forecasting project using ARIMA models to predict bike rental demand with decomposition and trend analysis.",
      tech: ["R", "Time Series", "ARIMA", "Forecasting"],
      image: "/bike-rental.png",
      github: "https://github.com/ejluv143/bike-demand-forecast-r",
    },
  ]);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 py-[clamp(80px,10vh,140px)] text-black dark:text-white sm:px-10 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent" />

      <div className="mx-auto w-full max-w-[1800px]">
        <div className="mb-[clamp(40px,6vw,90px)] text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-500 dark:text-blue-400">
            Portfolio Showcase
          </p>

          <h2 className="text-[clamp(34px,4vw,72px)] font-black tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-[clamp(20px,3vw,42px)] sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group h-full min-h-[560px]">
              <div className="h-full [perspective:1200px]">
                <div className="relative h-full min-h-[560px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* FRONT */}
                  <article
                    className={`absolute inset-0 flex h-full flex-col overflow-hidden rounded-[2rem] border backdrop-blur-xl [backface-visibility:hidden] ${
                      project.featured
                        ? "border-blue-400/40 bg-gradient-to-br from-blue-500/15 via-white/80 to-cyan-200/30 shadow-[0_0_70px_rgba(59,130,246,0.35)] dark:from-blue-500/20 dark:via-white/[0.06] dark:to-cyan-500/10"
                        : "border-black/10 bg-white/80 shadow-[0_0_40px_rgba(59,130,246,0.15)] dark:border-white/10 dark:bg-white/[0.05]"
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                      {project.featured && (
                        <div className="absolute left-4 top-4 z-10 rounded-full bg-blue-500 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg">
                          Featured
                        </div>
                      )}

                      {project.live && (
                        <div className="absolute right-4 top-4 z-10 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-black text-white shadow-lg">
                          ● LIVE
                        </div>
                      )}

                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="mb-4 line-clamp-2 text-2xl font-black tracking-tight text-blue-600 dark:text-blue-300">
                        {project.title}
                      </h3>

                      <p className="mb-6 line-clamp-4 text-sm leading-7 text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>

                      <div className="mb-7 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-3">
                        <span className="rounded-full bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.45)]">
                          Hover to View
                        </span>

                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                          {project.featured ? "Featured" : "Project"} →
                        </span>
                      </div>
                    </div>
                  </article>

                  {/* BACK */}
                  <article className="absolute inset-0 flex h-full flex-col items-center justify-center rounded-[2rem] border border-blue-400/30 bg-gradient-to-br from-blue-500/20 via-white/95 to-blue-100/60 p-8 text-center text-black shadow-[0_0_70px_rgba(59,130,246,0.6)] backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)] dark:from-blue-500/25 dark:via-black/85 dark:to-white/10 dark:text-white">
                    <p className="mb-4 rounded-full bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-300">
                      {project.featured ? "Featured Project" : "Project"}
                    </p>

                    <h3 className="mb-4 text-3xl font-black tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mb-8 max-w-sm text-sm leading-7 text-gray-700 dark:text-gray-300">
                      {project.live
                        ? "Open the live deployed project directly."
                        : "View the source code and project details on GitHub."}
                    </p>

                    <div className="flex flex-col items-center gap-4">
                      {(project.live || project.github) && (
                        <a
                          href={project.live || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl bg-blue-500 px-7 py-3 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] transition hover:bg-blue-600"
                        >
                          🚀 {project.live ? "View Live Site" : "View Project"}
                        </a>
                      )}

                      {project.github && project.live && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 underline-offset-4 transition hover:underline dark:text-gray-300"
                        >
                          View GitHub Repository
                        </a>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}