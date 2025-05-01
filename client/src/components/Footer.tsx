import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Satnam Singh Pahwa</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-gray-500 hover:text-primary transition-colors"
            aria-label="Scroll to top"
          >
            <span className="text-sm mr-2">Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
