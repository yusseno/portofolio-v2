import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="font-mono lg:px-40 px-10 lg:py-80 py-44 lg:pb-36 bg-[#09192F] h-screen w-full text-left"
      id="home"
    >
      <p className="lg:text-[18px] text-[16px] text-[#64FFDA] pb-2">
        <Typewriter
          delaySpeed={1000}
          deleteSpeed={25}
          typeSpeed={50}
          onLoopDone
          words={["Hi, Perkenalkan nama saya"]}
        />
      </p>
      <h1 className="lg:text-[64px] text-[48px] font-bold text-slate-100 p-0">
        <Typewriter
          on
          delaySpeed={1800}
          deleteSpeed={25}
          typeSpeed={100}
          onLoopDone
          words={["", "Yusseno"]}
        />
      </h1>
      <h2 className="lg:text-[48px] text-[28px] font-bold text-slate-400 p-0">
        <Typewriter
          on
          delaySpeed={2800}
          deleteSpeed={25}
          typeSpeed={50}
          onLoopDone
          words={["", "Saya membuat sesuatu berbentuk website"]}
        />
      </h2>
      <p className="lg:text-[18px] text-[16px] text-slate-400">
        <Typewriter
          on
          delaySpeed={6000}
          deleteSpeed={25}
          typeSpeed={50}
          onLoopDone
          words={[
            "",
            "Saya seorang engineering perangkat lunak yang berspesialisasi dalam membangun dan terkadang merancang sebuah website.",
          ]}
        />
      </p>
    </div>
  );
};

export default Home;