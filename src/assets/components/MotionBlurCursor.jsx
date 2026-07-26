import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TRAIL_COUNT = 5;

export default function MotionBlurCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  // Listen mouse move action
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Motion trail */}
      {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
        <CursorDot
          key={index}
          index={index}
          total={TRAIL_COUNT}
          mousePosition={mousePosition}
        />
      ))}
    </>
  );
}

function CursorDot({ index, total, mousePosition }) {
  const x = useMotionValue(-5);
  const y = useMotionValue(-5);

  const springConfig = {
    damping: 20 + index * 1.5,
    stiffness: 250 - index * 8,
    mass: 0.1 + index * 0.02,
  };

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    x.set(mousePosition.x);
    y.set(mousePosition.y);
  }, [mousePosition, x, y]);

  // Calculate transparency
  const opacity = 0.2;
  const scale = 1.1;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        opacity: opacity * 0.5,
        scale: scale,
        zIndex: 100,
      }}
      className="fixed top-0 left-0 w-7 h-7 bg-main-blue rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
    />
  );
}
