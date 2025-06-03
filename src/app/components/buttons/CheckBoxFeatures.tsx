import React from "react";

const CheckBoxFeatures = ({ feature }: { feature: string }) => {
  return (
    <li className="flex items-center gap-3">
      {/* <div className="w-3 h-3 bg-black dark:bg-white"></div> */}
      <label>
        <input
          type="checkbox"
          className={
            "appearance-none outline-none block relative text-center m-auto w-5 h-5 before:block before:absolute before:content-[''] before:bg-lime-400 before:w-5 before:h-5 before:border-black before:border-2 before:shadow-[3px_3px_0px_rgba(0,0,0,1)]  after:block after:content-[''] after:absolute after:left-1.5 after:top-0.5 after:w-2 after:h-3 after:border-black after:border-r-2 after:border-b-2 after:origin-center after:rotate-45 after:opacity-1 before:checked:bg-bg-lime-400"
          }
          defaultChecked
        />
      </label>
      <span className="font-bold text-black dark:text-white text-base">
        {feature}
      </span>
    </li>
  );
};

export default CheckBoxFeatures;
