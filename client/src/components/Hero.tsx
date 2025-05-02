import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ProfileImage from "../assets/profile.jpeg";
import BackgroundVideo from "../assets/iStock-1193269492-97faa1d5.mp4";

const Hero = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6 max-w-3xl">
        {/* Profile Image centered at top */}
        <div className="mb-12 text-center">
          <div className="relative w-48 h-48 mx-auto">
            <img 
              src={ProfileImage} 
              alt="Satnam Singh Pahwa" 
              className="rounded-full object-cover w-full h-full border-4 border-secondary shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 animate-pulse"></div>
          </div>
        </div>
        
        <div className="space-y-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Satnam Singh Pahwa</h1>
            <h2 className="text-2xl text-primary font-medium">Data Engineer at JP Morgan Chase</h2>
          </div>
          
          <div className="prose dark:prose-invert text-gray-200 max-w-none text-lg">
            <p>
              Data and product enthusiast, self motivated and constantly learning new skillsets 
              required to harness the power of data to solve business problems.
            </p>
            <p>
              Experience with AWS, SQL, Python, and big data technologies like Hadoop, Hive, and Spark. 
              Passionate about transforming complex data challenges into actionable business insights.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <a 
              href="https://www.linkedin.com/in/satnam1999/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="mailto:satnampahwa85@gmail.com" 
              className="text-gray-200 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>

          <div className="pt-4 text-center">
            <Button 
              asChild
              className="group text-lg px-8 py-6"
            >
              <a href="#experience" className="inline-flex items-center">
                View my work
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
