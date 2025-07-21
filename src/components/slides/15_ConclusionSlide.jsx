import { motion } from "framer-motion";
import { useState } from "react";
import { Trophy, Rocket, Star, Heart, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const ConclusionSlide = ({ simpleMode }) => {
  const [showResources, setShowResources] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Helper function to get resource icon
  const getResourceIcon = (type) => {
    switch (type) {
      case "Documentation":
        return <span className="text-blue-600">📖</span>;
      case "Tools":
        return <span className="text-green-600">🛠️</span>;
      case "Starter":
        return <span className="text-purple-600">🚀</span>;
      case "Framework":
        return <span className="text-orange-600">⚡</span>;
      case "Routing":
        return <span className="text-indigo-600">🛣️</span>;
      case "Video":
        return <span className="text-red-600">📹</span>;
      case "Tutorial":
        return <span className="text-yellow-600">📚</span>;
      default:
        return <span className="text-gray-600">🔗</span>;
    }
  };

  // Helper function to get resource description
  const getResourceDescription = (name, type) => {
    switch (name) {
      case "React Official Docs":
        return "Comprehensive documentation and guides for React development";
      case "React DevTools":
        return "Browser extension for debugging and profiling React applications";
      case "Create React App":
        return "Official tool for creating React applications with zero configuration";
      case "Next.js":
        return "Full-stack React framework for production applications";
      case "React Router":
        return "Declarative routing for React applications";
      case "YouTube List In English":
        return "Complete React tutorial series by Dave Gray";
      case "YouTube List In Arabic":
        return "React tutorial series in Arabic by Adel Nasim";
      case "W3Schools":
        return "Interactive React tutorials and examples";
      case "YouTube Project In English":
        return "React project-based learning by GorkCoder";
      default:
        return `Learn more about ${type.toLowerCase()} in React development`;
    }
  };

  const achievements = [
    {
      icon: Code,
      title: "JSX Mastery",
      description: "HTML + JavaScript = Magic",
    },
    {
      icon: Users,
      title: "Component Thinking",
      description: "Building blocks of UI",
    },
    {
      icon: Star,
      title: "State Management",
      description: "Dynamic, interactive apps",
    },
    {
      icon: Rocket,
      title: "Hooks Power",
      description: "Modern React development",
    },
    {
      icon: Trophy,
      title: "Performance",
      description: "Lightning-fast applications",
    },
    {
      icon: Heart,
      title: "Best Practices",
      description: "Clean, maintainable code",
    },
  ];

  const nextSteps = [
    {
      title: "Build Projects",
      description: "Apply what you've learned by building real applications",
      icon: "🚀",
    },
    {
      title: "Explore Ecosystem",
      description: "Learn React Router, Redux, Next.js, and more",
      icon: "🌟",
    },
    {
      title: "Join Community",
      description: "Connect with other React developers and contribute",
      icon: "👥",
    },
    {
      title: "Keep Learning",
      description: "Stay updated with React's latest features and patterns",
      icon: "📚",
    },
  ];

  const resources = [
    {
      name: "React Official Docs",
      url: "https://react.dev",
      type: "Documentation",
    },
    {
      name: "React DevTools",
      url: "https://react.dev/learn/react-developer-tools",
      type: "Tools",
    },
    {
      name: "Create React App",
      url: "https://create-react-app.dev",
      type: "Starter",
    },
    { name: "Next.js", url: "https://nextjs.org", type: "Framework" },
    { name: "React Router", url: "https://reactrouter.com", type: "Routing" },
    {
      name: "YouTube List In English",
      url: "https://www.youtube.com/watch?v=TeeAp5zkYnI&list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp&ab_channel=DaveGray",
      type: "Video",
    },
    {
      name: "YouTube List In Arabic",
      url: "https://www.youtube.com/watch?v=PsFEDFvhnK8&list=PLCInYL3l2AahiYaPBNh6YtI9NifuG8SqT&ab_channel=AdelNasim",
      type: "Video",
    },
    {
      name: "W3Schools",
      url: "https://www.w3schools.com/react/default.asp",
      type: "Tutorial",
    },
    {
      name: "YouTube Project In English ",
      url: "https://www.youtube.com/watch?v=gkj2Fk6k4Qk&list=PLSFS82kqtqHC5I1ptRWDmqawUHCUHa_zn&ab_channel=GorkCoder",
      type: "Video",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16 my-20 overflow-y-hidden">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-800 mb-4 sm:mb-6 text-center"
        >
          🎉 Congratulations!
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode
            ? "You've Completed Your React Journey!"
            : "From Zero to Hero - Your React Mastery Journey Complete"}
        </motion.h2>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-center text-purple-800 mb-6">
              🏆 Your React Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow text-center"
                  >
                    <IconComponent className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-800 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-center text-blue-800 mb-6">
              🗺️ Your Learning Journey
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What You Learned */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-800 text-lg">
                  What You've Mastered:
                </h4>
                {simpleMode ? (
                  <ul className="space-y-2 text-blue-700">
                    <li>✅ What React is and why it's awesome</li>
                    <li>✅ JSX - HTML with superpowers</li>
                    <li>✅ Components - building blocks of apps</li>
                    <li>✅ Props - passing data around</li>
                    <li>✅ State - making things interactive</li>
                    <li>✅ Events - handling user actions</li>
                    <li>✅ Lists and conditional rendering</li>
                    <li>✅ Hooks - modern React magic</li>
                    <li>✅ Context - global state sharing</li>
                    <li>✅ Performance - making apps fast</li>
                  </ul>
                ) : (
                  <ul className="space-y-2 text-blue-700">
                    <li>✅ React fundamentals and ecosystem</li>
                    <li>✅ JSX syntax and JavaScript integration</li>
                    <li>✅ Component architecture and composition</li>
                    <li>✅ Props and unidirectional data flow</li>
                    <li>✅ State management with useState</li>
                    <li>✅ Event handling and user interactions</li>
                    <li>✅ Conditional rendering and list optimization</li>
                    <li>✅ Hooks ecosystem and custom hooks</li>
                    <li>✅ Context API for global state</li>
                    <li>✅ Performance optimization techniques</li>
                  </ul>
                )}
              </div>

              {/* Skills Gained */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-800 text-lg">
                  Skills You've Gained:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    // "Problem Solving",
                    "Component Design",
                    "State Management",
                    "Performance Thinking",
                    "Code Organization",
                    "Best Practices",
                    "Debugging Skills",
                    "Modern JavaScript",
                    "And More...",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                      className="bg-white rounded-lg p-3 text-center shadow-sm"
                    >
                      <div className="text-sm font-medium text-blue-800">
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-center text-green-800 mb-6">
              🚀 What's Next?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{step.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="text-center">
            <Button
              onClick={() => setShowResources(!showResources)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mb-6"
              size="lg"
            >
              {showResources ? "Hide Resources" : "Show Helpful Resources"}
            </Button>

            {showResources && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6"
              >
                <div className="text-center mb-6">
                  <h4 className="font-bold text-2xl text-indigo-800 mb-2">
                    📚 Continue Your Learning Journey
                  </h4>
                  <p className="text-indigo-600 text-sm">
                    Explore these carefully curated resources to deepen your
                    React knowledge
                  </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {[
                    "All",
                    "Documentation",
                    "Video",
                    "Tutorial",
                    "Tools",
                    "Framework",
                    "Starter",
                    "Routing",
                  ].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-indigo-600 text-white shadow-lg"
                          : "bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources
                    .filter(
                      (resource) =>
                        selectedCategory === "All" ||
                        resource.type === selectedCategory
                    )
                    .map((resource, index) => (
                      <motion.div
                        key={resource.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                      >
                        {/* Resource Type Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            {getResourceIcon(resource.type)}
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                              {resource.type}
                            </span>
                          </div>
                        </div>

                        {/* Resource Name */}
                        <h5 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                          {resource.name}
                        </h5>

                        {/* Resource Description */}
                        <div className="text-sm text-gray-600 mb-4">
                          {getResourceDescription(resource.name, resource.type)}
                        </div>

                        {/* Action Button */}
                        <Button
                          onClick={() => window.open(resource.url, "_blank")}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium"
                          size="sm"
                        >
                          Visit Resource
                        </Button>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl mb-4"
          >
            🎊
          </motion.div>
          <h3 className="text-2xl font-bold mb-4">You're Now a React Hero!</h3>
          <p className="text-blue-100 text-lg mb-6">
            {simpleMode
              ? "You've learned everything you need to build amazing React applications. Now go out there and create something awesome!"
              : "From understanding the fundamentals to mastering advanced concepts, you now have the knowledge and skills to build professional React applications. The journey doesn't end here - keep building, keep learning, and keep growing!"}
          </p>
          <div className="flex justify-center space-x-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="text-2xl"
            >
              🚀
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="text-2xl"
            >
              ⭐
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="text-2xl"
            >
              💫
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConclusionSlide;
