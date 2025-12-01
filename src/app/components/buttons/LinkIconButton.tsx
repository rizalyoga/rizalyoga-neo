import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface LinkIconButtonInterface {
  icon: React.ReactNode;
  directLink: string;
  bgColor: string;
  textColor: string;
  ariaLabel?: string;
}

const LinkIconButton = ({
  directLink,
  icon,
  bgColor,
  textColor,
  ariaLabel,
}: LinkIconButtonInterface) => {
  if (!directLink ) {
    return null;
  }
  return (
    <Link
      href={directLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={clsx(
        `${bgColor} ${textColor} flex justify-center items-center p-3 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1`
      )}
    >
      {icon}
      {/* <PiGithubLogoBold size={20} /> */}
    </Link>
  );
};

export default LinkIconButton;
