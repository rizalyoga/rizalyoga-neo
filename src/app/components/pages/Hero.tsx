import { Mail, Download } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { PiGithubLogoBold } from "react-icons/pi";
import LinkIconButton from "../buttons/LinkIconButton";
import LinkStringButton from "../buttons/LinkStringButton";
import TextAnimationHero from "../TextAnimationHero";
// import BrutalismBlocks from "../decorations/BrutalismBlocks";
import TechGrid from "./TechGrid";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden transition-colors bg-gradient-to-br dark:from-gray-900 dark:to-gray-700"
    >
      {/* <BrutalismBlocks /> */}
      <div className="container relative z-10 px-6 mx-auto">
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
              <TextAnimationHero />
            </div>

            <div className="w-full bg-yellow-400 dark:bg-yellow-300 shadow-board-description">
              <p className="text-base md:text-lg font-bold leading-relaxed">
                Passionate about creating beautiful, functional, and
                user-friendly web experiences. I love turning ideas into reality
                with clean code and modern design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex-wrap gap-4 hidden sm:flex">
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
            <div className="flex gap-4 ">
              <LinkIconButton
                directLink="https://drive.google.com/file/d/13ooAoP6iAoM9aCtm1AivANafl9Wb8Lkw/view?usp=drive_link"
                bgColor="bg-lime-400 dark:bg-lime-300"
                textColor="text-white sm:hidden"
                icon={<Download size={24} />}
                ariaLabel="Download CV"
              />

              <LinkIconButton
                directLink="https://github.com/rizalyoga"
                bgColor="bg-black"
                textColor="text-white"
                icon={<PiGithubLogoBold size={24} />}
                ariaLabel="GitHub"
              />

              <LinkIconButton
                directLink="https://linkedin.com/in/rizalyoga"
                bgColor="bg-blue-500"
                textColor="text-white"
                icon={<FiLinkedin size={24} />}
                ariaLabel="LinkedIn"
              />
            </div>
          </div>

          {/* Tech Grid */}
          <div className="absolute border-4 border-black h-40 w-40 rounded-full bg-lime-500 dark:bg-lime-400 -top-1 right-[28rem] -z-10 hidden lg:block"></div>
          <div className="absolute border-4 border-black h-20 w-20 rounded-full bg-rose-500 dark:bg-rose-400 top-20 right-6 -z-10 hidden lg:block"></div>
          <div className="absolute border-4 border-black h-36 w-36 rounded-full bg-blue-500 dark:bg-blue-400 top-[17rem] right-32 -z-10 hidden lg:block"></div>
          <div className="absolute border-4 border-black h-20 w-20 rounded-full bg-orange-500 dark:bg-orange-400 top-36 right-[22rem] -z-10 hidden lg:block"></div>

          <div className="hidden lg:flex justify-end h-full items-top lg:ml-24 ">
            <div className="mr-0 xl:mr-16 mt-10 z-50">
              <TechGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
