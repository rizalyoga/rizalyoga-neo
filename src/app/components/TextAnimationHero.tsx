"use client";

import React, { useEffect, useState } from "react";

const TextAnimationHero = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mb-6 text-3xl font-bold text-pink-500 md:text-4xl">
      {text}
      {isTyping && <span className="animate-pulse">|</span>}
    </div>
  );
};

export default TextAnimationHero;
