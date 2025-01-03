import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0); // Tracks the progress percentage
  const [fadeOut, setFadeOut] = useState(false); // Controls the fade-out animation
  const [slideUp, setSlideUp] = useState(false); // Controls the slide-up animation

  useEffect(() => {
    // Start slide-up animation when the component is mounted
    setTimeout(() => setSlideUp(true), 100); // Small delay to trigger slide-up

    // Increment progress over time
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100)); // Increment until 100
    }, 35); // Adjust interval to control the speed of progress (35ms * 100 = 3.5s)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    // Trigger fade-out when progress reaches 100
    if (progress === 100) {
      const timer = setTimeout(() => setFadeOut(true), 500); // Wait 500ms before fade-out
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [progress]); // Re-run when progress updates

  return (
    <div
      className={`h-screen w-full fixed top-0 left-0 flex flex-col items-center justify-center bg-black text-white transition-all duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`w-full max-w-lg transform transition-transform duration-700 ${
          slideUp ? "translate-y-0" : "translate-y-[100vh]"
        }`}
      >
        {/* Progress Bar */}
        <div className="bg-gray-700 mr-5 ml-5 rounded-full h-4 overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* Loading Text */}
        <p className="mt-4 text-sm text-center">Loading... {progress}%</p>
      </div>
    </div>
  );
};

export default Loading;
