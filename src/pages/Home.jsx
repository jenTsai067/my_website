import { useState, useRef, useEffect } from "react";
import "../App.css";
import Header from "../assets/components/Header";
import ProjectCard from "../assets/components/ProjectCard";
import Intro from "./Intro";
import Skill from "./Skill";
import MotionBlurCursor from "../assets/components/MotionBlurCursor";
import LinkBtnCursor from "../assets/components/LinkBtnCursor";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "證券投資 APP UI Redesign",
    description:
      "微幅調整現有 APP 資訊佈局、卡片呈現方式以及色彩規劃，並透過新增視覺化標籤等，重新建構介面設計。",
    imgUrl: "./images/project1.png",
    tags: ["APP", "Side Project", "Proposal"],
  },
  {
    id: 2,
    title: "智慧醫療 App 流程/設計提案",
    description:
      "規劃智慧穿戴裝置以及APP監測系統，設計APP綁定智慧穿戴裝置、查看監測數據與異常通知情境流程、Wireframe與GUI。",
    imgUrl: "./images/project2.png",
    tags: ["APP", "Side Project", "Proposal"],
  },
  {
    id: 3,
    title: "天堂的禮物 HEAVEN BANK",
    description:
      "Unblock獨角獸設計師MVP設計競賽獲獎作品。以服務設計手法介入殯葬業的生前規劃流程，並執行網站規劃。",
    imgUrl: "./images/project3.png",
    tags: ["Web", "Side Project", "Proposal"],
  },
];

function Home() {
  const [isHoveredProject, setIsHoveredProject] = useState(false);
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

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : undefined,
  );

  useEffect(() => {
    // Only execute on the client side
    if (typeof window === "undefined") return;

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Clean up event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-[#E1E1E1]">
      <Header />
      {/* Banner */}
      <section className="w-full">
        <picture>
          <source media="(min-width: 768px)" srcSet="./images/Banner-lg.png" />
          <img src="./images/Banner-sm.png" alt="Banner background image" />
        </picture>
      </section>
      {/* Introduce */}
      <div ref={containerRef} className="relative w-full z-10 lg:-mt-16">
        {windowWidth >= 1024 ? (
          <motion.div
            style={{ clipPath }}
            className="w-full flex flex-col gap-12 pt-32 pb-8 bg-white bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px]"
          >
            <div className="w-full h-full py-12 lg:py-0 lg:min-h-[90vh] md:[mask-image:linear-gradient(to_bottom,transparent_0%,black_5%)] flex flex-col justify-center">
              {/* Intro */}
              <Intro />
              {/* Skill */}
              <Skill />
            </div>
          </motion.div>
        ) : (
          <div className="w-full h-full py-12 lg:py-0 lg:min-h-[90vh] flex flex-col justify-center bg-white bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px]">
            {/* Intro */}
            <Intro />
            {/* Skill */}
            <Skill />
          </div>
        )}
      </div>
      {/* Project */}
      <section className="w-full px-8 py-12 flex flex-col items-center gap-4  ">
        <h2 className="text-[1.5rem] font-bold mb-4">What I Create</h2>
        <div className="w-full flex flex-col items-center gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              imgAlt={project.title}
              tags={project.tags}
              onMouseEnter={() => setIsHoveredProject(true)}
              onMouseLeave={() => setIsHoveredProject(false)}
            />
          ))}
        </div>
        <button className="mt-4 w-[250px] px-4 py-6 rounded-[48px] bg-main-blue text-white  hover:bg-dark-blue hover:transition-all">
          View All
        </button>
      </section>
      {/* Footer */}
      <footer className="w-full h-[120px] bg-main-blue flex flex-col justify-center items-center">
        <p className="text-white font-mono text-sm md:text-base relative z-10">
          Email: jen.940607@gmail.com
        </p>
      </footer>
      {/* Cursor */}
      {isHoveredProject ? (
        <LinkBtnCursor isHovered={isHoveredProject} />
      ) : (
        <MotionBlurCursor />
      )}
    </div>
  );
}

export default Home;
