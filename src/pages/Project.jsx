import { useState, useEffect } from "react";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import MotionBlurCursor from "../assets/components/MotionBlurCursor";
import VerticleProjectCard from "../assets/components/VerticleProjectCard";

const tags = ["精選作品", "數位遊戲", "桌遊", "平面設計", "企劃提案", "UIUX"];

function Project() {
  const [currentTag, SetCurrentTag] = useState(0);
  const [data, setData] = useState([]);

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

  const getFilteredData = (tag) => {
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
          item.tags.includes(tag),
        );

        setData(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

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
                  getFilteredData(tag);
                }}
                className={`px-4 py-2 border-2 border-gray-300 ${currentTag == index ? "bg-main-blue text-white" : "bg-white text-black"} rounded-full text-dark-blue font-mono text-[14px] hover:bg-dark-blue hover:text-white hover:drop-shadow-md hover:drop-shadow-gray-400`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 w-full max-w-300 rounded-xl bg-[rgba(255,255,255,0.5)] p-8 m-auto">
          {data.map((project) => (
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
