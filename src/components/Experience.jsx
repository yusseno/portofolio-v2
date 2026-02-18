import { TbPoint } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import { LiaSchoolSolid } from "react-icons/lia";
import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

const ExperienceItem = ({ icon: Icon, title, period, index }) => (
  <div 
    className="relative pl-8 sm:pl-10 md:pl-12 pb-8 sm:pb-10 md:pb-12 last:pb-0"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    {/* Timeline Line */}
    <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-[2px] bg-slate-700 last:hidden"></div>
    
    {/* Icon Circle */}
    <div className="absolute left-0 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#112240] border-2 border-[#64FFDA] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <TbPoint className="text-[#64FFDA] text-lg sm:text-xl" />
    </div>

    {/* Content Card */}
    <div className="group bg-[#112240] rounded-lg p-4 sm:p-5 md:p-6 hover:bg-[#1a2f4d] hover:shadow-xl hover:shadow-[#64FFDA]/5 transition-all duration-300 border border-slate-700/50 hover:border-[#64FFDA]/30">
      <h4 className="text-slate-200 text-sm sm:text-base md:text-md font-medium mb-2">{title}</h4>
      <p className="text-[#64FFDA] text-xs sm:text-sm italic">{period}</p>
    </div>
  </div>
);

const ExperienceSection = ({ icon: Icon, title, children }) => (
  <div className="mb-10 sm:mb-12 md:mb-16" data-aos="fade-right">
    {/* Section Header */}
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="p-2 sm:p-2.5 bg-[#64FFDA]/10 rounded-lg">
          <Icon className="text-[#64FFDA] text-xl sm:text-2xl md:text-3xl" />
        </div>
        <h3 className="text-slate-100 text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap">
          {title}
        </h3>
      </div>
      <div className="h-[1px] w-full bg-slate-700/50"></div>
    </div>

    {/* Timeline Items */}
    <div className="ml-4 sm:ml-6 md:ml-8">
      {children}
    </div>
  </div>
);

const Experience = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section 
          className="font-mono px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#09192F] text-slate-400 w-full" 
          id="experience"
        >
            {/* Main Title */}
            <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20" data-aos="fade-right">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-100 font-bold whitespace-nowrap">
                    Experience
                </h2>
                <div className="h-[1px] w-full bg-slate-600"></div>
            </div>
                           
            {/* Content Container */}
            <div className="max-w-4xl mx-auto lg:mx-0">
                {/* Work Experience Section */}
                {/* <ExperienceSection icon={HiOutlineBriefcase} title="Work Experience">
                    <ExperienceItem
                        title="Software Engineer Intern"
                        period="January 2024 - Present"
                        index={0}
                    />
                    <ExperienceItem
                        title="Full Stack Developer"
                        period="June 2023 - December 2023"
                        index={1}
                    />
                </ExperienceSection> */}

                {/* Non Formal Education Section */}
                <ExperienceSection icon={LiaSchoolSolid} title="Non Formal Education">
                    <ExperienceItem
                        title="Programming with Google Go (Coursera)"
                        period="January - February 2022"
                        index={0}
                    />
                    <ExperienceItem
                        title="Kampus Merdeka with Ruang Guru - Software Engineering Backend Golang"
                        period="August - December 2022"
                        index={0}
                    />
                </ExperienceSection>

                {/* Organization Section */}
                <ExperienceSection icon={VscOrganization} title="Organization">
                    <ExperienceItem
                        title="Unit Kegiatan Mahasiswa Informatika dan Komputer"
                        period="2020 - 2024"
                        index={0}
                    />
                    <ExperienceItem
                        title="Himpunan Mahasiswa Jurusan Informatika"
                        period="2020 - 2023"
                        index={1}
                    />
                    <ExperienceItem
                        title="Badan Eksekutif Mahasiswa - Kementrian SDM dan Luar Negeri"
                        period="2020 - 2021"
                        index={2}
                    />
                </ExperienceSection>
            </div>
        </section>
    );
};

export default Experience;