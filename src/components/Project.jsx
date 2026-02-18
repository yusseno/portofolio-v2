import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineExternalLink, HiCode } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

import Kanban from "../assets/images/project/kanban_app.png";
import Bluebird from "../assets/images/project/bluebird.png";
import UKMIK from "../assets/images/project/ukm-ik.png";

const TechBadge = ({ name }) => (
  <span className="px-2 py-1 text-xs bg-[#64FFDA]/10 text-[#64FFDA] rounded border border-[#64FFDA]/30 hover:bg-[#64FFDA]/20 transition-colors duration-200">
    {name}
  </span>
);

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  github,
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
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-[#112240]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* Action Buttons on Image */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#112240] rounded-lg hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] transition-all duration-200"
            aria-label="View GitHub Repository"
          >
            <FiGithub className="text-xl" />
          </a>
        )}
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
      image: Bluebird,
      title: "Genvit.id",
      description:
        "Project ini dibangun ketika Magang di PT. Bluebird Tbk. dimana aplikasi ini dibangun untuk keperluan management karyawan dan absensi karyawan menggunakan QR code. Sistem ini memudahkan tracking kehadiran dan manajemen tim.",
      technologies: ["React JS", "Golang", "Kotlin", "TailwindCSS"],
      github: "#",
      demo: "#",
    },
    {
      image: UKMIK,
      title: "Anoman",
      description:
        "Project ini dibangun untuk kebutuhan organisasi dimana terdapat landing page dan sistem administrasi organisasi lengkap termasuk manajemen program kerja, anggota, surat, dan dokumentasi kegiatan organisasi.",
      technologies: ["React JS", "Golang", "NestJS", "TailwindCSS"],
      github: "#",
      demo: "#",
    },
    {
      image: Kanban,
      title: "Arum",
      description:
        "Project ini dibangun ketika mengerjakan final project MSIB Studi Independen di Ruang Guru, dengan program Software Engineering dengan pilihan kelas Backend. Aplikasi ini memungkinkan tim untuk mengelola task dan workflow dengan sistem drag-and-drop.",
      technologies: ["Golang", "TailwindCSS"],
      github: "#", // Replace with actual link
      demo: "#", // Replace with actual link
    },
    {
      image: Kanban,
      title: "Bagonk",
      description:
        "Project ini dibangun ketika mengerjakan final project MSIB Studi Independen di Ruang Guru, dengan program Software Engineering dengan pilihan kelas Backend. Aplikasi ini memungkinkan tim untuk mengelola task dan workflow dengan sistem drag-and-drop.",
      technologies: ["Golang", "TailwindCSS"],
      github: "#", // Replace with actual link
      demo: "#", // Replace with actual link
    },
    {
      image: Kanban,
      title: "Kamera Lensa Jogja",
      description:
        "Project ini dibangun ketika mengerjakan final project MSIB Studi Independen di Ruang Guru, dengan program Software Engineering dengan pilihan kelas Backend. Aplikasi ini memungkinkan tim untuk mengelola task dan workflow dengan sistem drag-and-drop.",
      technologies: ["Golang", "TailwindCSS"],
      github: "#", // Replace with actual link
      demo: "#", // Replace with actual link
    },
    {
      image: Kanban,
      title: "CV. Simbda Marigi Kayra",
      description:
        "Project ini dibangun ketika mengerjakan final project MSIB Studi Independen di Ruang Guru, dengan program Software Engineering dengan pilihan kelas Backend. Aplikasi ini memungkinkan tim untuk mengelola task dan workflow dengan sistem drag-and-drop.",
      technologies: ["Golang", "TailwindCSS"],
      github: "#", // Replace with actual link
      demo: "#", // Replace with actual link
    },
    {
      image: Bluebird,
      title: "Squad Management System",
      description:
        "Project ini dibangun ketika Magang di PT. Bluebird Tbk. dimana aplikasi ini dibangun untuk keperluan management karyawan dan absensi karyawan menggunakan QR code. Sistem ini memudahkan tracking kehadiran dan manajemen tim.",
      technologies: ["React JS", "Golang", "Kotlin", "TailwindCSS"],
      github: "#",
      demo: "#",
    },
    {
      image: UKMIK,
      title: "Website UKM Informatika dan Komputer",
      description:
        "Project ini dibangun untuk kebutuhan organisasi dimana terdapat landing page dan sistem administrasi organisasi lengkap termasuk manajemen program kerja, anggota, surat, dan dokumentasi kegiatan organisasi.",
      technologies: ["React JS", "Golang", "NestJS", "TailwindCSS"],
      github: "#",
      demo: "#",
    },
    {
      image: Kanban,
      title: "Website Kanban APP",
      description:
        "Project ini dibangun ketika mengerjakan final project MSIB Studi Independen di Ruang Guru, dengan program Software Engineering dengan pilihan kelas Backend. Aplikasi ini memungkinkan tim untuk mengelola task dan workflow dengan sistem drag-and-drop.",
      technologies: ["Golang", "TailwindCSS"],
      github: "#", // Replace with actual link
      demo: "#", // Replace with actual link
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
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
