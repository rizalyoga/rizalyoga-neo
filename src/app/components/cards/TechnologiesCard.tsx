import React from "react";
import * as motion from "motion/react-client";

interface TechnologiesPropsInterface {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const TechnologiesCard = ({
  name,
  icon,
  color,
}: TechnologiesPropsInterface) => {
  return (
    <motion.div
      className={`${color} p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 group cursor-pointer`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-2 md:p-3 mb-0 md:mb-4 text-white transition-colors bg-black border-2 border-black group-hover:bg-white group-hover:text-black">
          {icon}
        </div>
        <h3 className="hidden md:block font-black md:text-base">{name}</h3>
      </div>
    </motion.div>
  );
};

export default TechnologiesCard;
