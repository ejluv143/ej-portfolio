"use client";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites using Next.js, React, and Tailwind CSS.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps using React Native and Flutter.",
    icon: "📱",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Predictive systems and intelligent applications using Python.",
    icon: "🤖",
  },
  {
    title: "IoT Systems",
    description:
      "Raspberry Pi integrations and real-time monitoring systems.",
    icon: "📡",
  },
  {
    title: "Full Stack Apps",
    description:
      "Dashboards, APIs, authentication, and scalable systems.",
    icon: "⚙️",
  },
  {
    title: "Technical Support",
    description:
      "Hardware/software troubleshooting and maintenance.",
    icon: "🛠️",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        w-full
        flex items-center justify-center
        px-6 sm:px-10 lg:px-20
        py-[clamp(80px,10vh,140px)]
        text-black dark:text-white
      "
    >
      <div className="w-full max-w-[1900px]">

        {/* TITLE */}
        <h2 className="text-[clamp(32px,4vw,70px)] font-bold text-center mb-[clamp(40px,6vw,100px)]">
          My <span className="text-blue-500 dark:text-blue-400">Services</span>
        </h2>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-[clamp(20px,3vw,50px)]
        ">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                h-[clamp(320px,28vw,420px)]
                [perspective:1200px]
              "
            >

              {/* CARD */}
              <div
                className="
                  relative w-full h-full
                  transition-transform duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >

                {/* FRONT */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl

                    bg-black/5 dark:bg-white/5
                    border border-black/10 dark:border-white/10
                    backdrop-blur-md

                    p-[clamp(20px,2.5vw,40px)]

                    shadow-[0_0_30px_rgba(59,130,246,0.2)]
                    group-hover:shadow-[0_0_100px_rgba(59,130,246,0.7)]

                    flex flex-col justify-center

                    [backface-visibility:hidden]
                    overflow-hidden
                  "
                >

                  {/* GLOW BACKGROUND */}
                  <div className="
                    absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-br from-blue-500/20 via-transparent to-white/10
                  " />

                  {/* ICON */}
                  <div className="text-[clamp(40px,3vw,70px)] mb-6 z-10">
                    {service.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[clamp(20px,1.6vw,32px)] font-bold text-blue-500 dark:text-blue-400 mb-4 z-10">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-700 dark:text-gray-300 text-[clamp(14px,1vw,18px)] leading-relaxed z-10">
                    {service.description}
                  </p>

                </div>

                {/* BACK */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl

                    bg-gradient-to-br
                    from-blue-500/20
                    via-white/90
                    to-blue-100/40

                    dark:from-blue-500/20
                    dark:via-black/80
                    dark:to-white/10

                    backdrop-blur-xl
                    border border-blue-400/30

                    flex flex-col items-center justify-center text-center

                    text-black dark:text-white

                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]

                    shadow-[0_0_80px_rgba(59,130,246,0.6)]
                    p-8
                  "
                >

                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-8 max-w-xs">
                    Interested in this service? Let's build something amazing together.
                  </p>

                  <a
                    href="#contact"
                    className="
                      px-6 py-3
                      bg-blue-500
                      text-white
                      rounded-lg
                      hover:bg-blue-600
                      transition
                      font-semibold
                      shadow-[0_0_20px_rgba(59,130,246,0.7)]
                    "
                  >
                    🚀 Hire Me
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}