import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bottom-0 text-center bg-black">
      <div className="container flex items-center justify-start gap-4 px-6 py-4 mx-auto text-white border-4 border-black ">
        <Image src={"/logo.png"} alt="logo" height={40} width={40} />
        <p className="font-bold text-sm md:text-base lg:text-lg">
          Achmad Rizal Yogaswara
        </p>
      </div>
    </div>
  );
};

export default Footer;
