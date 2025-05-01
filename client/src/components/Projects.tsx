import { Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-10">
          <Folder className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        </div>
        
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <div key={index} className="group">
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
                  <div className="text-sm text-gray-500">{project.company} • {project.year}</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs">
                    {project.category}
                  </Badge>
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
