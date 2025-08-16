"use client";

import Header from "@/components/layout/header";
import { motion, useSpring, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, // độ cứng lò xo (cao hơn → về đích nhanh hơn).
    damping: 30, // độ giảm chấn (cao hơn → ít rung lắc hơn).
    restDelta: 0.001, // độ chính xác để dừng animation (nhỏ → animation kết thúc mượt hơn).
  });
  return (
    <div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          originX: 0,
          backgroundColor: "#1cc1dd",
        }}
      />
      <Header></Header>
      Home
      <div className="h-[3000px]"></div>
    </div>
  );
}
