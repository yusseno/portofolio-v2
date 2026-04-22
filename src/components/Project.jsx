import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineExternalLink, HiCode } from "react-icons/hi";

const TechBadge = ({ name }) => (
  <span className="px-2 py-1 text-xs bg-[#64FFDA]/10 text-[#64FFDA] rounded border border-[#64FFDA]/30 hover:bg-[#64FFDA]/20 transition-colors duration-200">
    {name}
  </span>
);

const ProjectCard = ({
  title,
  description,
  technologies,
  demo,
  index,
}) => (
  <div
    className="group bg-[#112240] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#64FFDA]/10 transition-all duration-300 border border-slate-700/50 hover:border-[#64FFDA]/30 flex flex-col h-full"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-video bg-slate-800/50">
      {/* Empty placeholder instead of image */}
      <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <div className="text-slate-500 text-4xl">
          <HiCode />
        </div>
      </div>
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-[#112240]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* Action Buttons on Image */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#112240] rounded-lg hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] transition-all duration-200"
            aria-label="View Live Demo"
          >
            <HiOutlineExternalLink className="text-xl" />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6 flex flex-col flex-1">
      {/* Title */}
      <div className="flex items-start gap-2 mb-3">
        <HiCode className="text-[#64FFDA] text-xl mt-1 shrink-0" />
        <h3 className="text-slate-200 text-base sm:text-lg font-semibold group-hover:text-[#64FFDA] transition-colors duration-200">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <TechBadge key={idx} name={tech} />
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "Genvit.id",
      description:
        "Platform e-commerce lengkap untuk berbagai kebutuhan belanja online. Menyediakan fitur katalog produk, keranjang belanja, sistem pembayaran terintegrasi, dan manajemen order dengan user experience yang optimal untuk customer.",
      technologies: ["React JS", "Golang", "Kotlin", "TailwindCSS"],
      demo: "#",
    },
    {
      title: "Anoman",
      description:
        "Sistem internal untuk manajemen pesanan yang efisien dan terintegrasi. Platform ini memungkinkan tracking pesanan real-time, manajemen inventory, koordinasi tim, dan reporting untuk optimalisasi proses bisnis internal.",
      technologies: ["React JS", "Golang", "NestJS", "TailwindCSS"],
      demo: "#",
    },
    {
      title: "Arum",
      description:
        "Aplikasi validasi keuangan yang membantu verifikasi dan validasi transaksi finansial. Sistem ini menyediakan fitur audit trail, approval workflow, dan reporting untuk memastikan akurasi dan compliance dalam proses keuangan.",
      technologies: ["Golang", "TailwindCSS"],
      demo: "#",
    },
    {
      title: "Bagonk",
      description:
        "Sistem fulfillment yang mengotomatisasi proses pengiriman dan distribusi produk. Platform ini mengelola warehouse management, shipping integration, tracking pengiriman, dan optimalisasi logistik untuk efisiensi supply chain.",
      technologies: ["Golang", "TailwindCSS"],
      demo: "#",
    },
    {
      title: "Kamera Lensa Jogja",
      description:
        "Website portofolio perusahaan yang menampilkan layanan dan expertise di bidang fotografi profesional. Menampilkan galeri karya, profil tim, testimoni klien, dan informasi kontak untuk menarik prospek baru.",
      technologies: ["Golang", "TailwindCSS"],
      demo: "#",
    },
    {
      title: "CV. Simbda Marigi Kayra",
      description:
        "Website portofolio perusahaan yang comprehensive untuk showcase kemampuan dan track record bisnis. Menampilkan company profile, portfolio proyek, layanan yang ditawarkan, dan credibility untuk menarik calon klien.",
      technologies: ["Golang", "TailwindCSS"],
      demo: "#",
    },
    {
      title: "Squad Management System",
      description:
        "Aplikasi Human Resource Information System (HRIS) untuk mengelola seluruh aspek SDM perusahaan. Sistem ini mencakup employee management, payroll, attendance, performance evaluation, dan reporting HR analytics.",
      technologies: ["React JS", "Golang", "Kotlin", "TailwindCSS"],
      demo: "#",
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      className="font-mono px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#09192F] text-slate-400 w-full"
      id="project"
    >
      {/* Main Title */}
      <div
        className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20"
        data-aos="fade-right"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-100 font-bold whitespace-nowrap">
          Projects
        </h2>
        <div className="h-[1px] w-full bg-slate-600"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            demo={project.demo}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
