"use client";

import Header from "@/components/layout/header";
import ScrollLinked from "@/components/layout/scroll/scrollLinked";

export default function Home() {
  return (
    <div>
      <ScrollLinked />
      <Header></Header>
      Home
      <div className="h-[3000px]"></div>
    </div>
  );
}
