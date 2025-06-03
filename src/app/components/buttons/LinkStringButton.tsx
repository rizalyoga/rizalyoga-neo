import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface LinkStringButtonInterface {
  icon: React.ReactNode;
  btnTitle: string;
  bgColor: string;
  textColor: string;
  directUrl: string;
  target?: string;
  px: string;
  py: string;
}

const LinkStringButton = ({
  icon,
  btnTitle,
  bgColor,
  textColor,
  directUrl,
  target,
  px,
  py,
}: LinkStringButtonInterface) => {
  return (
    <Link
      href={directUrl}
      target={target ? target : "_blank"}
      rel="noopener noreferrer"
      className={clsx(
        `text-sm md:text-base inline-flex items-center gap-2 ${bgColor} ${textColor} ${px} ${py} font-bold border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1`,
        directUrl
          ? ""
          : "cursor-none pointer-events-none !bg-gray-600 dark:!bg-gray-500 shadow-none"
      )}
    >
      {icon}
      {btnTitle}
    </Link>
  );
};

export default LinkStringButton;
