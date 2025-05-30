"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import clsx from "clsx";

const ToTopButton = () => {
  const router = useRouter();
  const [isAtTop, setIsAtTop] = useState(true);

  const toTopHandler = () => {
    router.push("#hero");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsAtTop(currentScrollPos === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={clsx(isAtTop ? "hidden" : "fixed bottom-4 right-4")}>
      <button
        onClick={toTopHandler}
        className="bg-white text-black p-2 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 dark:bg-violet-400"
      >
        <FaArrowUp size={18} />
      </button>
    </div>
  );
};

export default ToTopButton;
