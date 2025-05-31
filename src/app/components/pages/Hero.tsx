"use client";

import { useState, useEffect } from "react";
import { Mail, Download } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { PiGithubLogoBold } from "react-icons/pi";
import Image from "next/image";
import LinkIconButton from "../buttons/LinkIconButton";
import LinkStringButton from "../buttons/LinkStringButton";

const HeroSection = () => {
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
    <section
      id="hero"
      className="flex items-center justify-center min-h-screen pt-20 transition-colors bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-700"
    >
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 ">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="mt-8 mb-4 text-xl font-bold md:text-2xl dark:text-white lg:mt-0">
                Hello, I&apos;m
              </h2>
              <h1 className="mb-4 text-5xl font-black leading-tight md:text-7xl dark:text-white">
                Rizalyoga
              </h1>
              <div className="mb-6 text-3xl font-bold text-pink-500 md:text-4xl">
                {text}
                {isTyping && <span className="animate-pulse">|</span>}
              </div>
            </div>

            <div className="w-full bg-yellow-400 dark:bg-yellow-300 shadow-board-description">
              <p className="text-lg font-bold leading-relaxed">
                Passionate about creating beautiful, functional, and
                user-friendly web experiences. I love turning ideas into reality
                with clean code and modern design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <LinkStringButton
                btnTitle="Download CV"
                bgColor="bg-lime-400 dark:bg-lime-300"
                textColor="text-black"
                directUrl="https://drive.google.com/file/d/13ooAoP6iAoM9aCtm1AivANafl9Wb8Lkw/view?usp=drive_link"
                icon={<Download size={20} />}
                px="px-8"
                py="py-4"
              />

              <LinkStringButton
                btnTitle="Contact Me"
                bgColor="bg-cyan-400 dark:bg-cyan-300"
                textColor="text-black"
                directUrl="#contact"
                target="_self"
                icon={<Mail size={20} />}
                px="px-8"
                py="py-4"
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <LinkIconButton
                directLink="https://github.com/rizalyoga"
                bgColor="bg-black"
                textColor="text-white"
                icon={<PiGithubLogoBold size={24} />}
              />

              <LinkIconButton
                directLink="https://linkedin.com/in/rizalyoga"
                bgColor="bg-blue-500"
                textColor="text-white"
                icon={<FiLinkedin size={24} />}
              />
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start lg:ml-32 ">
            <div className="bg-pink-400 p-8 border-4 border-black shadow-[16px_16px_0px_0px_#000] transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="relative w-[20rem] md:w-[24rem] h-[20rem] md:h-[24rem] bg-[#FFD701]">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  fill
                  className="object-cover border-4 border-black"
                  quality={95}
                  priority={true}
                  sizes="(max-width: 768px) 20rem, 24rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
