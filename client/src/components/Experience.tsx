import { Check, Briefcase } from "lucide-react";
import { experienceData } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Experience</h2>
        </div>
        
        <div className="space-y-12">
          {experienceData.map((experience, index) => (
            <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 relative">
              <div className="absolute -left-2 top-0 bg-primary h-4 w-4 rounded-full"></div>
              <div>
                <div className="flex flex-col mb-2">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{experience.title}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-2">
                    <span className="font-medium text-primary">{experience.company}</span>
                    <span className="text-gray-400 dark:text-gray-500">•</span>
                    <span>{experience.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {experience.description}
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><Check className="h-4 w-4" /></span>
                      <span className="text-sm">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
