import { useState, useRef } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Intro from "./pages/Intro";
import Skill from "./pages/Skill";
import MotionBlurCursor from "./assets/components/MotionBlurCursor";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    ["ellipse(150% 30% at 50% 100%)", "ellipse(150% 100% at 50% 50%)"],
  );

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      {/* Banner */}
      <section className="w-full">
        <picture>
          <source media="(min-width: 768px)" srcSet="./images/Banner-lg.png" />
          <img src="./images/Banner-sm.png" alt="Banner background image" />
        </picture>
      </section>
      {/* Introduce */}
      <div ref={containerRef} className="relative w-full z-10 -mt-20 md:-mt-16">
        <motion.div
          style={{ clipPath }}
          className="w-full flex flex-col gap-12 pt-32 pb-8 bg-white bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] shadow-2xl"
        >
          <div className="w-full h-full min-h-[80vh] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%)] flex flex-col justify-center">
            {/* Intro */}
            <Intro />
            {/* Skill */}
            <Skill />
          </div>
        </motion.div>
      </div>
      {/* Cursor */}
      <MotionBlurCursor />
    </div>
  );
}

export default App;
