import React from "react";

interface TitleSectionInterface {
  title: string;
  bgColor: string;
}

const TitleSection = ({ title, bgColor }: TitleSectionInterface) => {
  return (
    <div
      className={`${bgColor} inline-block p-4 border-4 border-black shadow-[8px_8px_0px_0px_#000] mb-6`}
    >
      <h2 className="text-3xl font-black md:text-5xl">{title}</h2>
    </div>
  );
};

export default TitleSection;
