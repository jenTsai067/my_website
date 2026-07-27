import { useState, useRef, useEffect } from "react";
import "../App.css";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import ProjectCard from "../assets/components/ProjectCard";
import Intro from "./Intro";
import Skill from "./Skill";
import MotionBlurCursor from "../assets/components/MotionBlurCursor";
import LinkBtnCursor from "../assets/components/LinkBtnCursor";
import { motion, useScroll, useTransform } from "framer-motion";
import { data } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    fetch("./data/project.json")
      .then((response) => response.json())
      .then((rawData) => {
        const formattedArray = Object.entries(rawData).map(([id, item]) => ({
          id,
          title: item.title,
          description: item.description,
          imgUrl: item.imgUrl,
          tags: item.tags || [],
        }));

        const filteredData = formattedArray.filter((item) =>
          item.tags.includes("精選作品"),
        );

        setData(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
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
            className="w-full flex flex-col gap-12 pt-32 pb-8 bg-white bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] bg-size-[24px_24px]"
          >
            <div className="w-full h-full py-12 lg:py-0 lg:min-h-[90vh] md:mask-[linear-gradient(to_bottom,transparent_0%,black_5%)] flex flex-col justify-center">
              {/* Intro */}
              <Intro />
              {/* Skill */}
              <Skill />
            </div>
          </motion.div>
        ) : (
          <div className="w-full h-full py-12 lg:py-0 lg:min-h-[90vh] flex flex-col justify-center bg-white bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] bg-size-[24px_24px]">
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
          {data.map((project) => (
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
        <button className="mt-4 w-62.5 px-4 py-6 rounded-[48px] bg-main-blue text-white  hover:bg-dark-blue hover:transition-all">
          View All
        </button>
      </section>
      {/* Footer */}
      <Footer />
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
