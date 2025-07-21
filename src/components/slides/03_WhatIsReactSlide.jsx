import { motion } from "framer-motion";
import { useState } from "react";
import { Atom, Zap, Building, Users, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import componentsBuildingBlocks from "../../assets/components-building-blocks.png";
import reactLogo from "../../assets/reactLogo.png";

const WhatIsReactSlide = ({ simpleMode }) => {
  const [showDemo, setShowDemo] = useState(false);

  const simpleContent = {
    title: "What is React?  Its Philosophy",
    subtitle: "An Introduction to the Popular JavaScript Library",
    points: [
      {
        icon: Building,
        title: "Once Upon a Time...",
        description:
          "There was a smart little builder named React. React loved making fun and friendly picture books (we call them apps) that people could flip through really fast and smooth!",
      },
      {
        icon: Atom,
        title: "Who is React?",
        description:
          "React wasn’t like other builders. He came from a big castle called Meta (where lots of clever people live).Instead of building whole castles, React made little toy blocks that you could stack into anything you wanted!",
      },
      {
        icon: Zap,
        title: "What’s in React’s Toy Box?",
        description:
          "1-React had special blocks—you could use them again and again to build toys faster! \n2-He liked to say: “Tell me what you want your toy to look like, I’ll do the hard work!” \n 3-He had a magic mirror that showed changes without breaking the toy (shhh... we call it a `Virtual DOM`). \n4-And he passed his toy parts in one direction only so nothing got messy or lost!",
      },
      {
        icon: Zap,
        title: "Why Play With React?",
        description:
          "1-React's toys were fast—no waiting, just zoom! \n2-You could build once and play again and again—no need to start over! \n 3-React had lots of friends who shared toys and helped each other. \n4-And he passed his toy parts in one direction only so nothing got messy or lost!",
      },
    ],
    facts: [
      "Learn one game, play everywhere!",
      "“Tell me what, not how!” (React doesn’t like bossy instructions.)",
      "“Share your blocks with your friends!”",
      "“Keep it simple! No need for too many buttons or rules.”",
      "And React never tells you how to play—you get to choose!",
    ],
  };

  const advancedContent = {
    title: "React: The Declarative UI Library",
    subtitle: "Component-Based Architecture for Modern Web Development",
    points: [
      {
        icon: Atom,
        title: "What is React?",
        description:
          "React is an open-source JavaScript library for building user interfaces (UIs),",
      },
      {
        icon: Zap,
        title: " Core Features of React",
        description: "Component-Based, Virtual DOM",
      },
      {
        icon: Code,
        title: "Why Use React?",
        description:
          "Performance:  Virtual DOM, Reusable Components, Strong Community, SEO Friendly, Cross-Platform",
      },
      {
        icon: Building,
        title: "React’s Philosophy",
        description:
          "Learn Once, Write Anywhere:, Reusable Components, Minimal API Surface, Unopinionated",
      },
    ],
    facts: [
      "Open-source library maintained by Meta (Facebook)",
      "Powers 40%+ of top 10,000 websites",
      "Ecosystem includes React Native, Next.js, Gatsby",
      "Backed by a massive community of 200k+ GitHub stars",
    ],
  };

  const content = simpleMode ? simpleContent : advancedContent;

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16 mt-16 mb-16 overflow-y-hidden">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-800 mb-4 sm:mb-6 text-center"
        >
          {content.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {content.subtitle}
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Left Column - Key Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {content.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                    <point.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-blue-700 text-sm sm:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Visual & Facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* React Logo */}
            <div className="relative mb-6 sm:mb-8">
              {simpleMode ? (
                <div>
                  <img
                    src={componentsBuildingBlocks}
                    alt="React Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-32 h-32 sm:w-48 sm:h-48"
                  >
                    <img
                      src={reactLogo}
                      alt="React Logo"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-xl"
                  />
                </>
              )}
            </div>
            {/* Interactive Demo Button */}
            {!simpleMode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="mb-6"
              >
                <Button
                  onClick={() => setShowDemo(!showDemo)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg shadow-lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {showDemo ? "Hide Demo" : "Show React in Action"}
                </Button>
              </motion.div>
            )}
            {/* Demo Code */}
            {showDemo && !simpleMode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm mb-6 w-full max-w-md"
              >
                <div className="text-gray-500 mb-2">
                  // Simple React Component
                </div>
                <div>
                  <span className="text-blue-400">function</span>{" "}
                  <span className="text-yellow-400">Welcome</span>() {"{"}
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-blue-400">return</span> (
                  </div>
                  <div className="ml-4 text-green-400">
                    &lt;h1&gt;Hello, React!&lt;/h1&gt;
                  </div>
                  <div>);</div>
                </div>
                {"}"}

                {/* Rendered result */}
                <div className="mt-4 bg-gray-800 text-white p-3 rounded">
                  <h1>Hello, React!</h1>
                </div>
              </motion.div>
            )}
            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 sm:p-6 w-full"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                {simpleMode ? "Cool Facts" : "React Ecosystem"}
              </h3>
              <ul className="space-y-2">
                {content.facts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                    className="text-blue-700 text-sm flex items-start"
                  >
                    <span className="text-cyan-500 mr-2 flex-shrink-0">•</span>
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">
            {simpleMode ? "Ready to Start?" : "Ready to Master React?"}
          </h3>
          <p className="text-blue-100">
            {simpleMode
              ? "Let's learn how to build amazing things with React!"
              : "Join millions of developers who've chosen React for building modern, scalable applications!"}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIsReactSlide;
