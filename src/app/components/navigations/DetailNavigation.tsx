"use client";

import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const DetailNavigation = () => {
  const router = useRouter();

  return (
    <nav className="p-6 border-b-4 border-black dark:border-white ">
      <div className="mx-auto max-w-screen-2xl">
        <button
          onClick={() => router.back()}
          className="text-sm md:text-base inline-flex items-center gap-2 bg-pink-400 dark:bg-pink-300 text-black px-4 py-2 font-bold lg:mx-6 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
        >
          <ArrowLeft size={20} />
          <span className=" hidden md:block">Back</span>
        </button>
      </div>
    </nav>
  );
};

export default DetailNavigation;
