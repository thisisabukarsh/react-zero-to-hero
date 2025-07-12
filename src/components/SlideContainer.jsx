import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Baby, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

// Import your slide components here
import { slides } from "../config/slides";

const SlideContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [simpleMode, setSimpleMode] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setSimpleMode(true)
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setSimpleMode(true)
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight" ) {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(slides.length - 1);
      } else if (e.key === "s" || e.key === "S") {
        setSimpleMode(!simpleMode);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, simpleMode]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden animate-gradient bg-[length:200%_200%] bg-[linear-gradient(45deg,#dbeafe,#bfdbfe,#fef08a)]">
      {/* Animated background particles */}
      <div className="absolute inset-0   pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#5880ac] rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Mode Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <Button
          onClick={() => setSimpleMode(!simpleMode)}
          variant={simpleMode ? "default" : "secondary"}
          className="bg-white/15 backdrop-blur-sm hover:bg-purple-600/90 transition-all duration-300 shadow-lg text-xs sm:text-sm"
          size="lg"
        >
          {simpleMode ? (
            <>
              <Baby className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Simple Mode</span>
              <span className="sm:hidden">Simple</span>
            </>
          ) : (
            <>
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Advanced Mode</span>
              <span className="sm:hidden">Advanced</span>
            </>
          )}
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-purple-500 scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="pointer-events-none z-50">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="fixed left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-purple-400/20 backdrop-blur-md hover:bg-purple-500/80 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center pointer-events-auto shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </Button>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-purple-400/20 backdrop-blur-md hover:bg-purple-500/80 disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center pointer-events-auto shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </Button>
      </div>

      {/* Slide Content */}
      <div className="">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className="inset-0"
          >
            <CurrentSlideComponent simpleMode={simpleMode} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Keyboard shortcuts hint (Desktop only) */}
      <div className="hidden lg:block absolute bottom-4 right-4 z-50">
        <div className="bg-black/70 text-white text-xs rounded-lg px-3 py-2 backdrop-blur-sm">
          <div>← → Arrow keys to navigate</div>
          <div>S to toggle mode</div>
          <div>Home/End for first/last slide</div>
        </div>
      </div>

      {/* Swipe hint (Mobile only) */}
      <div className="block sm:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/70 text-white text-xs rounded-lg px-3 py-2 backdrop-blur-sm">
          Swipe left/right to navigate
        </div>
      </div>
    </div>
  );
};

export default SlideContainer;
