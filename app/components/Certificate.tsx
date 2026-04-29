"use client";

const certificates = [
  {
    title: "Bachelor of Science in Information Technology",
    issuer: "ACLC College of Bukidnon Campus",
    year: "2025",
    description:
      "Focused on software development, networking, databases, and system design.",
    image: "/BSIT.jpg",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI / Coursera",
    year: "2024",
    description:
      "Covers linear regression, logistic regression, and foundational ML concepts.",
    image: "/image.png",
    link: "https://www.coursera.org/account/accomplishments/verify/HAHV9C4YMXL6", 
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
        w-full
        min-h-[100svh]
        flex items-center justify-center
        px-6 sm:px-10 lg:px-20
        py-20
        text-theme
      "
    >
      <div className="w-full max-w-[1400px]">
        
        {/* TITLE */}
        <h2 className="text-[clamp(32px,4vw,60px)] font-bold text-center mb-16">
          My <span className="text-blue-400">Certificates</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                overflow-hidden
                backdrop-blur-md
                shadow-[0_0_30px_rgba(59,130,246,0.2)]
                hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]
                transition-all duration-500
                hover:-translate-y-3
              "
            >
              {/* IMAGE */}
              {/* IMAGE */}
<div className="w-full bg-black/40 p-4 flex items-center justify-center">
  <img
    src={cert.image}
    alt={cert.title}
    className="w-full h-auto object-contain rounded-lg"
  />
</div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400 mb-2">
                  {cert.issuer} • {cert.year}
                </p>

                <p className="text-gray-300 text-sm mb-5">
                  {cert.description}
                </p>

                {/* BUTTON */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block
                      px-4 py-2
                      bg-blue-500
                      rounded-lg
                      hover:bg-blue-600
                      transition
                      font-semibold
                    "
                  >
                    📄 View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}