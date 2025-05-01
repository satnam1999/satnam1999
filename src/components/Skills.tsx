import { Code, Zap } from "lucide-react";
import { skillsData, additionalTechData } from "@/lib/data";

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-10">
          <Zap className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        </div>
        
        <div className="space-y-12">
          {/* Data Engineering */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">Data Engineering</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsData.dataEngineering.map((skill, index) => (
                <div key={index} className="text-gray-700 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          {/* Programming Languages */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">Programming</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsData.programming.map((skill, index) => (
                <div key={index} className="text-gray-700 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          {/* Cloud & Data Warehousing */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">Cloud & Data</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsData.cloudAndDataWarehousing.map((skill, index) => (
                <div key={index} className="text-gray-700 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {additionalTechData.map((tech, index) => (
                <div key={index} className="text-gray-700 text-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
