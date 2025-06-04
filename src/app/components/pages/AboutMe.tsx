import React from "react";
import TitleSection from "../title-section/TitleSection";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 transition-colors bg-gray-50 dark:bg-gray-700"
    >
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-6 mx-auto">
        <div className="mb-14 text-center">
          <TitleSection
            title="ABOUT ME"
            bgColor="bg-orange-400 dark:bg-orange-300"
          />

          <h4 className="max-w-2xl mx-auto text-lg md:text-xl font-bold dark:text-white">
            My story, skillset, and career goals in tech
          </h4>
        </div>
        <div className="bg-indigo-50 dark:bg-slate-200  board-description shadow-board-contact-description md:text-justify">
          {/* Medium to higher screen content */}
          <span className="space-y-4 hidden md:block">
            <p className="text-base md:text-lg font-bold dark:text-black ">
              Hello! I’m{" "}
              <span className="text-orange-600 dark:text-purple-600">
                Rizalyoga
              </span>
              , a graduate with a Bachelor&apos;s degree in Informatics from
              Universitas Muhammadiyah Malang. Although my academic background
              focused on computer networking, I discovered a strong passion for
              web development after graduating in 2021.
            </p>
            <p className="text-base md:text-lg font-bold dark:text-black ">
              To deepen my skills in this field, I joined a{" "}
              <span className="text-orange-600 dark:text-purple-600">
                Front-End Developer bootcamp
              </span>{" "}
              at Alterra Academy and successfully completed it in 2022. After
              that, I worked as a{" "}
              <span className="text-orange-600 dark:text-purple-600">
                laptop technician
              </span>{" "}
              for a year before deciding to fully shift my focus back to web
              development.
            </p>
            <p className="text-base md:text-lg font-bold dark:text-black ">
              Since then, I’ve worked on several{" "}
              <span className="text-orange-600 dark:text-purple-600">
                freelance projects
              </span>
              , ranging from building websites and web-based games to developing
              mobile applications using React Native. I’m experienced in working
              with modern technologies such as{" "}
              <span className="text-orange-600 dark:text-purple-600">
                {" "}
                Next.js, React, Tailwind CSS, TypeScript, Express.js, Prisma,
                Git
              </span>{" "}
              and{" "}
              <span className="text-orange-600 dark:text-purple-600">
                GitHub
              </span>
              .
            </p>

            <p className="text-base md:text-lg font-bold dark:text-black ">
              Currently, I’m actively building my portfolio and expanding my
              skills in{" "}
              <span className="text-orange-600 dark:text-purple-600">
                Fullstack Development
              </span>
              , with the goal of contributing to a solid and growing development
              team in the tech industry.
            </p>
          </span>

          {/* Small screen content */}
          <span className="space-y-4 md:hidden">
            <p className="text-base md:text-lg font-bold dark:text-black ">
              Hi, I&apos;m{" "}
              <span className="text-orange-600 dark:text-purple-600">
                Rizalyoga
              </span>{" "}
              — an Informatics graduate from Universitas Muhammadiyah Malang. I
              started in computer networking but discovered my passion for web
              development after graduating in 2021.
            </p>

            <p className="text-base md:text-lg font-bold dark:text-black ">
              I completed a Front-End Developer bootcamp at Alterra Academy in
              2022, then worked as a laptop technician for a year before fully
              shifting my focus to web development.
            </p>

            <p className="text-base md:text-lg font-bold dark:text-black ">
              Since then, I’ve built websites, web-based games, and mobile apps
              as a freelancer. I mainly work with{" "}
              <span className="text-orange-600 dark:text-purple-600">
                {" "}
                Next.js, React, Tailwind CSS, TypeScript, Express, Prisma, Git
              </span>
              , and{" "}
              <span className="text-orange-600 dark:text-purple-600">
                GitHub
              </span>{" "}
              .
            </p>

            <p className="text-base md:text-lg font-bold dark:text-black ">
              I’m currently working towards becoming a{" "}
              <span className="text-orange-600 dark:text-purple-600">
                Fullstack Developer
              </span>{" "}
              and looking for opportunities to grow and contribute in the tech
              industry.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
