import { HiArrowUpRight } from "react-icons/hi2";

function Intro() {
  return (
    <div className="flex w-full px-4 gap-12 m-auto justify-center  items-center flex-col lg:flex-row">
      <img
        src="./images/Profile.PNG"
        alt="selfie"
        className="w-[200px] h-[200px] rounded-[50%]"
      />
      <div className="flex flex-col gap-2 md:max-w-[500px] lg:max-w-[600px]">
        <h2 className="text-[1.5rem]">
          About Me: <span className="text-main-blue font-semibold">蔡宜蓁</span>
        </h2>
        <p>
          好的專案應同時兼備視覺設計與功能性，我立志打造於能讓使用者
          <span className="inline-block relative">
            「玩中學」
            <span className="relative block -top-2 left-1 w-[72px] h-[10px] bg-main-blue opacity-40"></span>
          </span>
          之遊戲體驗，曾參與過多次教育性質之活動與競賽，將複雜的問題簡化來幫助學習。
        </p>
        <ul className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-[repeat(3,120px)] md:grid-rows-1 opacity-50 text-[14px] md:text-[16px]">
          <li># 能獨立作業</li>
          <li># 善於創意發想</li>
          <li># 程式美術雙棲</li>
        </ul>
        <p className="self-end opacity-40 font-mono hover:opacity-100 hover:text-main-blue flex items-center gap-1 hover:scale-[1.1] hover:transition-all">
          查看更多
          <HiArrowUpRight size={16} strokeWidth={1.1} />
        </p>
      </div>
    </div>
  );
}

export default Intro;
