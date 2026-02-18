import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Golang from "../assets/images/abaut/golang-removebg.png";
import Reacts from "../assets/images/abaut/react-removebg.png";
import Tailwind from "../assets/images/abaut/tailwind-removebg.png";
import Yusseno from "../assets/images/abaut/yusseno-full-transformed.png";
import NextJs from "../assets/images/abaut/next-js.png";
import NestJs from "../assets/images/abaut/nestjs-icon.png";
import Laravel from "../assets/images/abaut/laravel-icon.png";
import Ubuntu from "../assets/images/abaut/Ubuntu_and_Ubuntu_Server_Icon.png";
import Docker from "../assets/images/abaut/docker-icon.png";
import Gitlab from "../assets/images/abaut/gitlab-icon.png";
import MySql from "../assets/images/abaut/mysql-icon.png";
import PostresSql from "../assets/images/abaut/postgresSql-icon.png";
import MongoDb from "../assets/images/abaut/mongodb-icon.png";
import Redist from "../assets/images/abaut/redis-icon.png";

const Skill = ({ icon, name }) => (
  <div className="flex flex-col items-center bg-[#112240] p-4 sm:p-5 md:p-6 rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-[#64FFDA]/10 transition-all duration-300">
    <img src={icon} alt={name} className="h-10 sm:h-10 md:h-8 mb-3 object-contain" />
    <p className="text-slate-300 text-sm sm:text-base text-center">{name}</p>
  </div>
);

const SkillSection = ({ title, children }) => (
  <div className="space-y-4 sm:space-y-6">
    <h3 className="text-[#64FFDA] text-sm uppercase tracking-widest">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
      {children}
    </div>
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="about"
      className="font-mono px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40 py-12 sm:py-16 md:py-20 bg-[#09192F] w-full"
    >
      {/* Title */}
      <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16" data-aos="fade-right">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">
          About Me
        </h2>
        <div className="h-[1px] w-full bg-slate-600"></div>
      </div>

      {/* Main Grid */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[380px_1fr] gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start"
        data-aos="fade-up"
      >
        {/* Image Section */}
        <figure className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-none mx-auto lg:mx-0 group">
          <div className="absolute inset-0 border-2 border-[#64FFDA] rounded-xl translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
          <div className="relative rounded-xl overflow-hidden z-10">
            <img
              src={Yusseno}
              alt="Yusseno"
              className="w-full h-auto object-cover"
            />
          </div>
        </figure>

        {/* Content Section */}
        <article className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Description */}
          <p className="text-slate-400 text-sm sm:text-base md:text-md leading-relaxed">
            Hello! My name is Yusseno, and I enjoy building things that live on
            the internet. My interest in web development started in high school
            when I had the opportunity to edit a template for a friend's
            assignment involving HTML & CSS.
            <br />
            <br />
            After discovering my passion for the field, I decided to enroll in
            a vocational school and later continued my studies at university to
            further deepen my knowledge and skills.
            <br />
            <br />
            Here are some technologies I've been working with recently:
          </p>

          {/* Skills */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <SkillSection title="Backend">
              <Skill icon={Golang} name="Golang" />
              <Skill icon={NextJs} name="Next.js" />
              <Skill icon={NestJs} name="NestJS" />
              <Skill icon={Laravel} name="Laravel" />
            </SkillSection>

            <SkillSection title="Frontend">
              <Skill icon={Reacts} name="React" />
              <Skill icon={Tailwind} name="Tailwind CSS" />
            </SkillSection>

            <SkillSection title="Development & Operations">
              <Skill icon={Ubuntu} name="Ubuntu" />
              <Skill icon={Gitlab} name="GitLab" />
              <Skill icon={Docker} name="Docker" />
            </SkillSection>

            <SkillSection title="Database">
              <Skill icon={MySql} name="MySQL" />
              <Skill icon={PostresSql} name="PostgreSQL" />
              <Skill icon={MongoDb} name="MongoDB" />
              <Skill icon={Redist} name="Redis" />
            </SkillSection>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;