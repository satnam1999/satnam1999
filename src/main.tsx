import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import App from "./App";
import "./index.css";

// Chess-themed loading component
const ChessLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <div className="chess-board">
            <div className="chess-piece">♞</div>
          </div>
          <div className="loading-text">LOADING...</div>
        </div>
      )}
      <App />
    </>
  );
};

createRoot(document.getElementById("root")!).render(<ChessLoader />);
