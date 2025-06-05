import React from "react";

interface VideoDemoInterface {
  videoUrl: string;
}

const VideoDemo = ({ videoUrl }: VideoDemoInterface) => {
  const videoCode = videoUrl.split("/");
  const finalUrl = `https://www.youtube.com/embed/${
    videoCode[videoCode.length - 1]
  }`;

  return (
    <div className="bg-blue-400 dark:bg-blue-300 h-full shadow-board-contact-description">
      <iframe
        className="border-4 border-black w-[100%] h-[240px] sm:h-[350px] lg:min-h-[380px]"
        src={finalUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
        title="Demo Video"
      />
    </div>
  );
};

export default VideoDemo;
