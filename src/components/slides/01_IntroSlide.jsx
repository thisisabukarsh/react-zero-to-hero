import { motion } from "framer-motion";
import { presentationConfig } from "../../config/slides";
import { Rocket, Star, Code, Heart } from "lucide-react";

const IntroSlide = ({ simpleMode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-0">
      <div className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 relative ">
        {/* Background Hero Image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img
            src="/src/assets/react-logo-hero.png"
            alt="React Hero Logo"
            className="w-96 h-96 object-contain rounded-4xl"
          />
        </div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 bg-clip-text text-transparent mb-4 sm:mb-6 relative z-10"
        >
          {presentationConfig.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-4xl text-blue-700 mb-6 sm:mb-8 font-medium relative z-10"
        >
          {presentationConfig.subtitle}
        </motion.h2>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 relative z-10"
        >
          {[
            { icon: Code, label: "17 Slides", color: "text-blue-600" },
            { icon: Rocket, label: "Zero to Hero", color: "text-cyan-600" },
            { icon: Star, label: "Interactive", color: "text-blue-500" },
            { icon: Heart, label: "Fun Learning", color: "text-cyan-500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <item.icon
                className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color} mx-auto mb-2`}
              />
              <p className="text-blue-800 font-medium text-xs sm:text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-xl mb-8 sm:mb-12 relative z-10"
        >
          <p className="text-white font-medium text-sm sm:text-base">
            🚀 Presented by {presentationConfig.author}
          </p>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-blue-600 text-sm sm:text-base max-w-2xl relative z-10"
        >
          {simpleMode ? (
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                🎯 Ready to become a React Hero?
              </p>
              <p>Use arrow keys, click the dots, or swipe to navigate!</p>
              <p className="text-xs opacity-75">
                Press 'S' to switch to Advanced Mode
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xl font-semibold">
                🎯 Welcome to Your React Mastery Journey!
              </p>
              <p>
                This comprehensive course will take you from complete beginner
                to React expert. You'll learn:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mt-4">
                <div>• Core React Concepts</div>
                <div>• Modern Hooks & Patterns</div>
                <div>• State Management</div>
                <div>• Performance Optimization</div>
                {/* <div>• Testing & Deployment</div> */}
                {/* <div>• Real-world Applications</div> */}
              </div>
              <p className="text-xs opacity-75 mt-4">
                Navigate: ← → arrows | Toggle modes: S | Home/End for first/last
                slide
              </p>
            </div>
          )}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-12 h-12 bg-cyan-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 right-20 w-8 h-8 bg-blue-300 rounded-full opacity-30"
        />
      </div>
    </div>
  );
};

export default IntroSlide;
