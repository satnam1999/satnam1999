import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay to show the chess loading screen
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'fade-in' : 'invisible'}`}>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
