"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../providers/ThemeProvider";
import { animate } from "motion";

const BrutalismBlocks = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const blocks = [
    {
      position: "top-1/4 left-1/4",
      size: "w-32 h-32",
      color: "bg-pink-400",
      rotation: "12deg",
      speed: 0.1,
    },
    {
      position: "top-1/2 right-1/4",
      size: "w-24 h-24",
      color: "bg-cyan-400",
      rotation: "-12deg",
      speed: 0.15,
    },
    {
      position: "bottom-1/4 left-1/2",
      size: "w-40 h-40",
      color: "bg-lime-400",
      rotation: "6deg",
      speed: 0.2,
    },
    {
      position: "bottom-1/3 right-1/3",
      size: "w-20 h-20",
      color: "bg-yellow-400",
      rotation: "-6deg",
      speed: 0.12,
    },
  ];

  const darkBlocks = blocks.map((block) => ({
    ...block,
    color: block.color.replace("400", "300"),
  }));

  const currentBlocks =
    theme === "dark" || theme === "light" ? darkBlocks : blocks;

  useEffect(() => {
    if (!containerRef.current) return;

    const blockElements = Array.from(
      containerRef.current.children
    ) as HTMLDivElement[];

    // Animate on load
    blockElements.forEach((block, index) => {
      animate(
        block,
        {
          scale: [0, 1],
          opacity: [0, 0.5],
          rotate: [0, parseInt(currentBlocks[index].rotation)],
        },
        { delay: index * 0.2, duration: 0.5 }
      );
    });

    // Parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX / innerWidth - 0.5) * 100;
      const moveY = (clientY / innerHeight - 0.5) * 100;

      blockElements.forEach((block, index) => {
        const speed = currentBlocks[index].speed;
        const rotation = parseInt(currentBlocks[index].rotation);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [currentBlocks]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {currentBlocks.map((block, index) => (
        <div
          key={index}
          className={`absolute ${block.position} ${block.size} ${block.color} opacity-50`}
        />
      ))}
    </div>
  );
};

export default BrutalismBlocks;
