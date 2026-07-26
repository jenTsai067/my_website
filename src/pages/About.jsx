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
          <p>算是企劃、美術、程式皆有所接觸的大學生</p>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] font-mono flex items-center gap-2">
              學歷<span className="text-[14px] opacity-60">Education</span>
            </h3>
            <ul className="flex flex-col gap-4 list-disc">
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
            <ul className="flex flex-col gap-4 list-disc">
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
      <Footer />
      <MotionBlurCursor />
    </div>
  );
}

export default About;
