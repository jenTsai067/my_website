import { useState, useEffect } from "react";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import MotionBlurCursor from "../assets/components/MotionBlurCursor";
import VerticleProjectCard from "../assets/components/VerticleProjectCard";

const tags = [
  "★ Feature",
  "Game",
  "Board Game",
  "App",
  "Web",
  "Graphic Design",
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "證券投資 APP UI Redesign",
    description:
      "微幅調整現有 APP 資訊佈局、卡片呈現方式以及色彩規劃，並透過新增視覺化標籤等，重新建構介面設計。",
    imgUrl: "./images/project1.png",
  },
  {
    id: 2,
    title: "智慧醫療 App 流程/設計提案",
    description:
      "規劃智慧穿戴裝置以及APP監測系統，設計APP綁定智慧穿戴裝置、查看監測數據與異常通知情境流程、Wireframe與GUI。",
    imgUrl: "./images/project2.png",
  },
  {
    id: 3,
    title: "天堂的禮物 HEAVEN BANK",
    description:
      "Unblock獨角獸設計師MVP設計競賽獲獎作品。以服務設計手法介入殯葬業的生前規劃流程，並執行網站規劃。",
    imgUrl: "./images/project3.png",
  },
];

function Project() {
  const [currentTag, SetCurrentTag] = useState(0);

  return (
    <div className="w-full flex flex-col items-center bg-[#E1E1E1]">
      <Header />
      {/* Banner */}
      <section className="w-full">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="./images/Project_banner-lg.png"
          />
          <img
            src="./images/Project_banner-sm.png"
            alt="Banner background image"
          />
        </picture>
      </section>
      {/* Project */}
      <section className="w-full px-6 py-12 flex flex-col gap-8 justify-center">
        {/* Tag Nav */}
        <div className="flex gap-4 flex-wrap max-w-225 m-auto">
          <div className="flex flex-wrap gap-4 pt-2 justify-around">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => {
                  SetCurrentTag(index);
                }}
                className={`px-4 py-2 border-2 border-gray-300 ${currentTag == index ? "bg-main-blue text-white" : "bg-white text-black"} rounded-full text-dark-blue font-mono text-[14px] hover:bg-dark-blue hover:text-white hover:drop-shadow-md hover:drop-shadow-gray-400`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 w-full max-w-300 rounded-xl bg-[rgba(255,255,255,0.5)] p-8 m-auto">
          {PROJECTS_DATA.map((project) => (
            <VerticleProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              imgAlt={project.title}
            />
          ))}
        </div>
      </section>
      <Footer />
      <MotionBlurCursor />
    </div>
  );
}

export default Project;
