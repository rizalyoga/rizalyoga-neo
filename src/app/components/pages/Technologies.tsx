import TechnologiesCard from "../cards/TechnologiesCard";
import TitleSection from "../title-section/TitleSection";
import { technologies } from "@/app/data/technologiesData";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20 transition-colors bg-gray-50 dark:bg-gray-700"
    >
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <TitleSection
            title="TECHS & TOOLS"
            bgColor="bg-lime-400 dark:bg-lime-300"
          />

          <p className="max-w-2xl mx-auto text-lg md:text-xl font-bold dark:text-white">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <TechnologiesCard
              key={index}
              name={tech.name}
              color={tech.color}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
