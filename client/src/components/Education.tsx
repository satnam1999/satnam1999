import { Award, BookOpen } from "lucide-react";
import { educationData, certificationsData } from "@/lib/data";

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-10">
          <BookOpen className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Education</h2>
        </div>
        
        <div className="space-y-12">
          {/* Education */}
          <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 relative">
            <div className="absolute -left-2 top-0 bg-primary h-4 w-4 rounded-full"></div>
            <div>
              <div className="flex flex-col mb-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{educationData.degree}</h3>
                <div className="flex flex-col md:flex-row md:items-center text-gray-500 dark:text-gray-400 text-sm gap-2">
                  <span className="font-medium text-primary">{educationData.university}</span>
                  <span className="hidden md:inline text-gray-400 dark:text-gray-500">•</span>
                  <span>{educationData.period}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {educationData.description}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {educationData.courses.map((course, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Certifications & Awards</h3>
            <div className="space-y-4">
              {certificationsData.map((certification, index) => (
                <div key={index} className="flex items-start">
                  <Award className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{certification.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{certification.issuer}, {certification.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
