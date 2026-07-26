import { HiArrowUpRight } from "react-icons/hi2";
import React, { useEffect, useState } from "react";

function LinkBtnCursor({ isHovered }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  // Listen mouse move action
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isHovered) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 ease-out transition-opacity duration-150"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div className="w-12 h-12 rounded-full bg-amber-400/90 backdrop-blur-md border border-gray-300 shadow-xl flex justify-center items-center">
        <HiArrowUpRight className="text-2xl text-black" />
      </div>
    </div>
  );
}

export default LinkBtnCursor;
