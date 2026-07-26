import SkillCard from "../assets/components/SkillCard";
import "../App.css";

function Skill() {
  return (
    <section className="w-full max-w-300 h-full flex flex-col gap-8 justify-center items-center m-auto">
      <h2 className="text-[1.5rem] ">Skills</h2>
      <div className="grid px-4 w-full max-w-300 justify-around grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:gap-y-8 lg:gap-y-0 lg:grid-cols-4 lg:grid-rows-1">
        <SkillCard
          imgUrl={"./images/article-icon.png"}
          imgAlt={"Document"}
          descriptionC={"企劃流程"}
          descriptionE={"Product Plan"}
        />
        <SkillCard
          imgUrl={"./images/pen-tool-icon.png"}
          imgAlt={"Document"}
          descriptionC={"插畫"}
          descriptionE={"Illustration"}
        />
        <SkillCard
          imgUrl={"./images/desktop-mobile-icon.png"}
          imgAlt={"Document"}
          descriptionC={"UIUX設計"}
          descriptionE={"UIUX Design"}
        />
        <SkillCard
          imgUrl={"./images/div-coding-icon.png"}
          imgAlt={"Document"}
          descriptionC={"遊戲開發"}
          descriptionE={"Game Devp"}
        />
      </div>
    </section>
  );
}

export default Skill;
