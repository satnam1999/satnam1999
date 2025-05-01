import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-gray-900 dark:text-gray-100 font-medium">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className={`text-lg transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? 'text-primary font-medium dark:text-primary' 
                      : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
          
          {/* Mobile Navigation and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMobileMenu}
              className="p-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-3">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={`text-xl transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? 'text-primary font-medium dark:text-primary' 
                    : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
