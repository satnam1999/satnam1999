import { Activity } from "lucide-react";

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-10">
          <Activity className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Hobbies</h2>
        </div>
        
        <div className="badminton-container dark:bg-gray-800/80 dark:border-primary">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="shuttlecock text-7xl text-center">🏸</div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Badminton Enthusiast</h3>
              <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300">
                <p>
                  When I'm not coding or working with data, you'll find me on the badminton court! 
                  I've been playing competitively since college and find it's the perfect way to stay active 
                  and maintain a work-life balance.
                </p>
                <p>
                  What I love about badminton is how it combines quick reflexes, strategy, and endurance - 
                  much like solving complex data engineering problems!
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded shadow-sm">
                    <span className="font-medium block dark:text-gray-200">Favorite Shot</span>
                    <span className="dark:text-gray-300">Backhand Smash</span>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded shadow-sm">
                    <span className="font-medium block dark:text-gray-200">Playing Since</span>
                    <span className="dark:text-gray-300">2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
            <h4 className="font-medium text-center mb-2 dark:text-gray-200">Did you know?</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm italic text-center">
              The fastest recorded smash in badminton was 493 km/h (306 mph), making it the fastest racket sport!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;