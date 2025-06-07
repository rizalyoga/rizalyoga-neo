"use client";

import React, { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa6";
import clsx from "clsx";

const ToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, [toggleVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={clsx(visible ? "fixed bottom-4 right-4" : "hidden")}>
      <button
        onClick={scrollToTop}
        className="bg-white text-black p-2 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 dark:bg-violet-400"
      >
        <FaArrowUp size={18} />
      </button>
    </div>
  );
};

export default ToTopButton;
