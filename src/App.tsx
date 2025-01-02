import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Simulate Loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setFadeIn(true), 200); // Small delay for fade-in effect
    }, 4800);
    return () => clearTimeout(timer); // Clean up timeout
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className={`flex flex-col min-h-screen bg-black text-white transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <main className="flex-grow">
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        </section>
        <section
          id="about"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">About Me</h1>
        </section>
        <section
          id="projects"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
        </section>
        <section
          id="contact"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Contact</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
