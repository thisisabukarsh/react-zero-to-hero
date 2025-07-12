import { motion } from 'framer-motion';
import { useState } from 'react';
import { Trophy, Rocket, Star, Heart, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ConclusionSlide = ({ simpleMode }) => {
  const [showResources, setShowResources] = useState(false);

  const achievements = [
    { icon: Code, title: "JSX Mastery", description: "HTML + JavaScript = Magic" },
    { icon: Users, title: "Component Thinking", description: "Building blocks of UI" },
    { icon: Star, title: "State Management", description: "Dynamic, interactive apps" },
    { icon: Rocket, title: "Hooks Power", description: "Modern React development" },
    { icon: Trophy, title: "Performance", description: "Lightning-fast applications" },
    { icon: Heart, title: "Best Practices", description: "Clean, maintainable code" }
  ];

  const nextSteps = [
    {
      title: "Build Projects",
      description: "Apply what you've learned by building real applications",
      icon: "🚀"
    },
    {
      title: "Explore Ecosystem",
      description: "Learn React Router, Redux, Next.js, and more",
      icon: "🌟"
    },
    {
      title: "Join Community",
      description: "Connect with other React developers and contribute",
      icon: "👥"
    },
    {
      title: "Keep Learning",
      description: "Stay updated with React's latest features and patterns",
      icon: "📚"
    }
  ];

  const resources = [
    { name: "React Official Docs", url: "https://react.dev", type: "Documentation" },
    { name: "React DevTools", url: "https://react.dev/learn/react-developer-tools", type: "Tools" },
    { name: "Create React App", url: "https://create-react-app.dev", type: "Starter" },
    { name: "Next.js", url: "https://nextjs.org", type: "Framework" },
    { name: "React Router", url: "https://reactrouter.com", type: "Routing" },
    { name: "React Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/", type: "Testing" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16">
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
          {simpleMode ? "You've Completed Your React Journey!" : "From Zero to Hero - Your React Mastery Journey Complete"}
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
                    <h4 className="font-medium text-gray-800 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
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
                <h4 className="font-semibold text-blue-800 text-lg">What You've Mastered:</h4>
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
                <h4 className="font-semibold text-blue-800 text-lg">Skills You've Gained:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Problem Solving",
                    "Component Design",
                    "State Management",
                    "Performance Thinking",
                    "Code Organization",
                    "Best Practices",
                    "Debugging Skills",
                    "Modern JavaScript"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                      className="bg-white rounded-lg p-3 text-center shadow-sm"
                    >
                      <div className="text-sm font-medium text-blue-800">{skill}</div>
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
                      <h4 className="font-medium text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
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
              {showResources ? 'Hide Resources' : 'Show Helpful Resources'}
            </Button>

            {showResources && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6"
              >
                <h4 className="font-semibold text-indigo-800 mb-4">📚 Continue Learning</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map((resource, index) => (
                    <motion.div
                      key={resource.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="text-sm font-medium text-gray-800">{resource.name}</div>
                      <div className="text-xs text-gray-500 mb-2">{resource.type}</div>
                      <div className="text-xs text-blue-600 break-all">{resource.url}</div>
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
          <h3 className="text-2xl font-bold mb-4">
            You're Now a React Hero!
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            {simpleMode 
              ? "You've learned everything you need to build amazing React applications. Now go out there and create something awesome!" 
              : "From understanding the fundamentals to mastering advanced concepts, you now have the knowledge and skills to build professional React applications. The journey doesn't end here - keep building, keep learning, and keep growing!"
            }
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

