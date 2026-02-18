import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="home"
      className="font-mono bg-[#09192F] min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-40"
      data-aos="fade-up"
    >
      <div className="w-full max-w-7xl flex flex-col justify-center">
        <p className="text-[#64FFDA] text-base sm:text-lg pb-2">
          <Typewriter
            words={["Hi,"]}
            typeSpeed={50}
            deleteSpeed={25}
            delaySpeed={1000}
            loop={1}
          />
        </p>
        <h1 className="text-slate-100 font-bold text-[38px] sm:text-[32px] lg:text-[48px] leading-tight mb-4">
          <Typewriter
            words={["", "I’m Yusseno."]}
            typeSpeed={100}
            deleteSpeed={25}
            delaySpeed={1800}
            loop={1}
          />
        </h1>
        <h2 className="text-slate-400 font-bold text-[22px] sm:text-[24px] lg:text-[28px] leading-snug mb-6">
          <Typewriter
            words={["", "A Software Engineer focused on building scalable and efficient digital products."]}
            typeSpeed={50}
            deleteSpeed={25}
            delaySpeed={2800}
            loop={1}
          />
        </h2>
        <p className="text-slate-400 text-base sm:text-md max-w-6xl">
          <Typewriter
            words={[
              "",
              "I specialize in developing web, mobile, and desktop applications, with a strong emphasis on clean architecture and performance.",
            ]}
            typeSpeed={50}
            deleteSpeed={25}
            delaySpeed={6000}
            loop={1}
          />
        </p>
      </div>
    </section>
  );
};

export default Home;