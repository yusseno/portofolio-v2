import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { HiOutlineBriefcase } from "react-icons/hi";
import { TbPoint } from "react-icons/tb";

const WorkItem = ({ company, position, period, index }) => (
  <div 
    className="relative pl-8 sm:pl-10 md:pl-12 pb-8 sm:pb-10 md:pb-12 last:pb-0 group"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    {/* Timeline Line */}
    <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-[2px] bg-slate-700 group-last:hidden"></div>
    
    {/* Icon Circle */}
    <div className="absolute left-0 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#112240] border-2 border-[#64FFDA] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
      <TbPoint className="text-[#64FFDA] text-lg sm:text-xl" />
    </div>

    {/* Content Card */}
    <div className="bg-[#112240] rounded-lg p-4 sm:p-5 md:p-6 hover:bg-[#1a2f4d] hover:shadow-xl hover:shadow-[#64FFDA]/5 transition-all duration-300 border border-slate-700/50 hover:border-[#64FFDA]/30">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-[#64FFDA]/10 rounded-lg shrink-0">
          <HiOutlineBriefcase className="text-[#64FFDA] text-lg sm:text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-slate-200 text-base sm:text-lg md:text-md font-semibold mb-1">
            {company}
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mb-2">
            {position}
          </p>
          <p className="text-[#64FFDA] text-xs sm:text-sm italic">
            {period}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Work = () => {
    const workExperiences = [
        {
            company: "PT. Gawe Becik Nandah Anugrah",
            position: "Full Stack Golang Developer",
            period: "January 2025 - Present"
        },
        {
            company: "PT. Bluebird Tbk.",
            position: "Magang MSIB - Software Engineering Golang",
            period: "February 2023 - June 2023"
        },
        {
            company: "PT. ICP Cipta Prima",
            position: "Freelance Software Tester",
            period: "July 2022 - January 2023"
        },
        {
            company: "PT. Susi Air",
            position: "IT Department",
            period: "May 2018 - January 2020"
        },
        {
            company: "PT. Mutual Sinegi Infinite",
            position: "PKL - Department Networking and Server Solution",
            period: "March - July 2015"
        }
    ];

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section 
            className="font-mono px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#09192F] text-slate-400 w-full" 
            id="work"
        >
            {/* Main Title */}
            <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20" data-aos="fade-right">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-100 font-bold whitespace-nowrap">
                    Work Experience
                </h2>
                <div className="h-[1px] w-full bg-slate-600"></div>
            </div>
            
            {/* Timeline Container */}
            <div className="max-w-4xl mx-auto lg:mx-0">
                <div className="ml-4 sm:ml-6 md:ml-8">
                    {workExperiences.map((work, index) => (
                        <WorkItem
                            key={index}
                            company={work.company}
                            position={work.position}
                            period={work.period}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;