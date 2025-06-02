"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/app/components/toggles/ThemeToggle";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black dark:bg-[#252839]">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black dark:text-white">Rizalyoga</div>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link
              href={"#hero"}
              className="font-bold transition-colors hover:text-pink-500 dark:text-white"
            >
              HOME
            </Link>
            <Link
              href={"#about"}
              className="font-bold transition-colors hover:text-orange-500 dark:text-white"
            >
              ABOUT
            </Link>
            <Link
              href={"#projects"}
              className="font-bold transition-colors hover:text-emerald-500 dark:text-white"
            >
              PROJECTS
            </Link>
            <Link
              href={"#technologies"}
              className="font-bold transition-colors hover:text-cyan-500 dark:text-white"
            >
              TECH
            </Link>
            <Link
              href={"#contact"}
              className="font-bold transition-colors hover:text-violet-500 dark:text-white"
            >
              CONTACT
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-lime-400 p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-yellow-300 dark:bg-purple-400 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
            <div className="flex flex-col">
              <Link
                href={"#hero"}
                onClick={() => setIsOpen((open) => !open)}
                className="w-full p-2 font-bold text-left transition-colors border-2 border-black hover:text-pink-500 hover:bg-white dark:hover:bg-white"
              >
                HOME
              </Link>
              <Link
                href={"#about"}
                className="p-2 font-bold text-left transition-colors border-2 border-black hover:text-orange-500 hover:bg-white dark:hover:bg-white"
                onClick={() => setIsOpen((open) => !open)}
              >
                ABOUT
              </Link>
              <Link
                href={"#projects"}
                className="p-2 font-bold text-left transition-colors border-2 border-black hover:text-emerald-500 hover:bg-white dark:hover:bg-white"
                onClick={() => setIsOpen((open) => !open)}
              >
                PROJECTS
              </Link>
              <Link
                href={"#technologies"}
                className="p-2 font-bold text-left transition-colors border-2 border-black hover:text-cyan-500 hover:bg-white dark:hover:bg-white"
                onClick={() => setIsOpen((open) => !open)}
              >
                TECH
              </Link>

              <Link
                href={"#contact"}
                className="p-2 font-bold text-left transition-colors border-2 border-black hover:text-violet-500 hover:bg-white dark:hover:bg-white"
                onClick={() => setIsOpen((open) => !open)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
