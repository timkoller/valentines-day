import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stories = [
  { text: "Page 1", background: "url('/path-to-image1.jpg')" },
  { text: "Page 2", background: "url('/path-to-image2.jpg')" },
  { text: "Page 3", background: "url('/path-to-image3.jpg')" },
];

const StoryViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 10);
    }, 1000);

    if (progress >= 100) {
      goNext();
    }

    return () => clearInterval(interval);
  }, [progress]);

  const goNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1 < stories.length ? prev + 1 : 0));
  };

  const goBack = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : stories.length - 1));
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      style={{ backgroundImage: stories[currentIndex].background, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute top-4 left-4 right-4 flex gap-2">
        {stories.map((_, index) => (
          <motion.div
            key={index}
            className="h-1 flex-1 bg-gray-300 overflow-hidden rounded"
          >
            <motion.div
              animate={{ width: currentIndex === index ? `${progress}%` : currentIndex > index ? "100%" : "0%" }}
              className="h-full bg-white"
            />
          </motion.div>
        ))}
      </div>
      <div
        className="absolute inset-0 flex"
        onClick={(e) => (e.clientX < window.innerWidth / 2 ? goBack() : goNext())}
      />
      <div className="text-white text-3xl font-bold">{stories[currentIndex].text}</div>
    </div>
  );
};

export default StoryViewer;
