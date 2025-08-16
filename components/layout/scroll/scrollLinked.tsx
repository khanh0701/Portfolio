"use client";

import { motion, useSpring, useScroll } from "framer-motion";

const ScrollLinked = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, // độ cứng lò xo (cao hơn → về đích nhanh hơn).
    damping: 30, // độ giảm chấn (cao hơn → ít rung lắc hơn).
    restDelta: 0.001, // độ chính xác để dừng animation (nhỏ → animation kết thúc mượt hơn).
  });
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#1cc1dd",
        }}
      />
    </>
  );
};

export default ScrollLinked;
