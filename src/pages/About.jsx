import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import MotionBlurCursor from "../assets/components/MotionBlurCursor";

function About() {
  return (
    <div className="w-full flex flex-col items-center bg-[#E1E1E1]">
      <Header />
      <section className="w-full px-8 lg:max-w-300 flex  py-16 flex-col gap-4 lg:gap-24 lg:flex-row">
        <h2 className="text-[1.5rem] font-bold text-main-blue">About Me</h2>
        <div className="flex flex-col gap-6">
          <p>嗨! 我是蔡宜蓁</p>
          <p>是個企劃、美術、程式皆有所接觸的大學生</p>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] font-mono flex items-center gap-2">
              學歷<span className="text-[14px] opacity-60">Education</span>
            </h3>
            <ul className="flex flex-col gap-4 md:grid  list-disc">
              <li className="ml-8">國立台北教育大學 - 數位科技設計學系</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] font-mono flex items-center gap-2">
              競賽參與
              <span className="text-[14px] opacity-60">Competition</span>
            </h3>
            <ul className="flex flex-col gap-4 list-disc">
              <li className="ml-4 md:ml-8 ">
                <div className="inline-flex  flex-col items-start md:flex-row md:items-center">
                  2025「藍光的戰痘試煉」學生解謎桌遊設計賽
                  <span className="hidden md:inline border-[0.5px] border-black opacity-50 w-12  mx-4"></span>
                  <span className="inline-block w-35  text-center relative">
                    大專院校組第一名
                    <div className=" w-full h-3.75 bg-main-blue opacity-40 absolute  top-2.5 left-0 "></div>
                  </span>
                </div>
              </li>
              <li className="ml-4 md:ml-8">
                <div className="inline-flex  flex-col items-start md:flex-row md:items-center">
                  LINE FRESH 2025 校園競賽 - 設計幸福感解方
                  <span className="hidden md:inline border-[0.5px] border-black opacity-50 w-12  mx-4"></span>
                  <span className="inline-block w-18.75  text-center relative">
                    複賽參與
                    <div className=" w-full h-3.75 bg-main-blue opacity-40 absolute  top-2.5 left-0 "></div>
                  </span>
                </div>
              </li>
              <li className="ml-4 md:ml-8">2026 教育遊戲設計大賞</li>
              <li className="ml-4 md:ml-8">
                全國 VR 跨域盃 - SDGs 虛擬實境大賽
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] font-mono flex items-center gap-2">
              技能&工具
              <span className="text-[14px] opacity-60">Skills & Tools</span>
            </h3>
            <span className="text-[14px] opacity-60">
              三星以上(含三星)表可與他人協作或獨立完成之技能
            </span>
            <ul className="flex flex-col gap-4 list-disc md:grid md:grid-cols-2 md:grid-rows-3 lg:gap-x-8">
              <li className="ml-4 md:ml-8">
                <div className="flex items-center gap-4">
                  <span className="w-30">Procreate</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                  </div>
                </div>
              </li>
              <li className="ml-4 md:ml-8">
                <div className="flex items-center gap-4">
                  <span className="w-30">Illustrator</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                  </div>
                </div>
              </li>
              <li className="ml-4 md:ml-8">
                <div className="flex items-center gap-4">
                  <span className="w-30">Figma</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                  </div>
                </div>
              </li>
              <li className="ml-4 md:ml-8">
                <div className="flex items-center gap-4">
                  <span className="w-30">Unity</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                  </div>
                </div>
              </li>
              <li className="ml-4 md:ml-8">
                <div className="flex items-center gap-4">
                  <span className="w-30">HTML / CSS / JS</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                  </div>
                </div>
              </li>
              <li className="ml-4 md:ml-8">
                <div className="flex items-center gap-4">
                  <span className="w-30">React</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full bg-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-dark-blue"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full px-8 lg:max-w-300 flex  pb-32 flex-col gap-4 lg:gap-24 lg:flex-row">
        <h2 className="text-[1.5rem] font-bold text-main-blue">Core Value</h2>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2  lg:w-225 gap-12 md:gap-y-16">
          <div className="relative">
            <h1 className="text-[64px] font-mono text-dark-blue opacity-20 absolute top-0 left-0">
              01
            </h1>
            <h2 className="text-[1.5rem] relative top-8 left-24 inline-block">
              創造力
            </h2>
            <p className="opacity-80 relative top-12 leading-8">
              擅長結合多媒材進行設計，並以日常生活的角度進行切入點，打造出具親切感與創新的製作
            </p>
          </div>
          <div className="relative">
            <h1 className="text-[64px] font-mono text-dark-blue opacity-20 absolute top-0 left-0">
              02
            </h1>
            <h2 className="text-[1.5rem] relative top-8 left-24 inline-block">
              學習能力
            </h2>
            <p className="opacity-80 relative top-12 leading-8">
              面對未知的領域我擅長透過閱讀文獻與AI輔助來加速學習，並且內化為自身的工具應用於專案中
            </p>
          </div>
          <div className="relative">
            <h1 className="text-[64px] font-mono text-dark-blue opacity-20 absolute top-0 left-0">
              03
            </h1>
            <h2 className="text-[1.5rem] relative top-8 left-24 inline-block">
              自律性
            </h2>
            <p className="opacity-80 relative top-12 leading-8">
              我善於制定自身目標，並拆分成小任務持續進行，幫助我掌握進度與建立良好習慣
            </p>
          </div>
          <div className="relative">
            <h1 className="text-[64px] font-mono text-dark-blue opacity-20 absolute top-0 left-0">
              04
            </h1>
            <h2 className="text-[1.5rem] relative top-8 left-24 inline-block">
              韌性
            </h2>
            <p className="opacity-80 relative top-12 leading-8">
              透過不斷試錯與修正來累積經驗，勇於挑戰未知領域來從中磨練自身
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <MotionBlurCursor />
    </div>
  );
}

export default About;
