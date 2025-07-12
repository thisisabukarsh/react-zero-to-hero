import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building, Puzzle, Recycle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ComponentsSlide = ({ simpleMode }) => {
  const [showDemo, setShowDemo] = useState(false);

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
          Components
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode ? "Building Blocks of React Apps" : "Reusable, Composable UI Building Blocks"}
        </motion.h2>

        {/* Main Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12 flex justify-center"
        >
          <img 
            src="/src/assets/components-building-blocks.png" 
            alt="Components as Building Blocks" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
          {/* Left Column - Concepts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* What are Components */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <Building className="w-6 h-6 mr-2" />
                {simpleMode ? "What are Components?" : "Component Fundamentals"}
              </h3>
              
              {simpleMode ? (
                <div className="space-y-3 text-blue-700">
                  <p>Think of components like LEGO blocks!</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Each block does one thing well</li>
                    <li>You can combine blocks to build bigger things</li>
                    <li>Reuse the same block many times</li>
                    <li>Easy to change or fix individual pieces</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-blue-700">
                  <p>Components are independent, reusable pieces of UI that encapsulate their own logic and rendering.</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Encapsulation: Self-contained functionality</li>
                    <li>Reusability: Use the same component multiple times</li>
                    <li>Composability: Combine simple components into complex UIs</li>
                    <li>Maintainability: Easier to debug and update</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Component Types */}
            <div className="bg-cyan-50 rounded-lg p-6">
              <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">
                <Puzzle className="w-5 h-5 mr-2" />
                {simpleMode ? "Types of Components" : "Component Categories"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {simpleMode ? (
                  <>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-cyan-800">Function Components</div>
                      <div className="text-cyan-600">Simple and modern</div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-cyan-800">Class Components</div>
                      <div className="text-cyan-600">Older style</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-cyan-800">Functional Components</div>
                      <div className="text-cyan-600">Modern, hook-based approach</div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-cyan-800">Class Components</div>
                      <div className="text-cyan-600">Traditional, lifecycle-based</div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-cyan-800">Higher-Order Components</div>
                      <div className="text-cyan-600">Component composition pattern</div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-cyan-800">Render Props</div>
                      <div className="text-cyan-600">Function as children pattern</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Code Examples */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            {/* Simple Component Example */}
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
              <div className="text-gray-400 mb-2">// Simple Component</div>
              <div className="text-blue-400">function</div> <span className="text-yellow-400">Welcome</span>() {'{'}
              <div className="ml-4">
                <div className="text-blue-400">return</div> (
                <div className="ml-4">
                  <div className="text-green-400">&lt;div&gt;</div>
                  <div className="ml-4">
                    <div className="text-green-400">&lt;h1&gt;</div>Hello, World!<div className="text-green-400">&lt;/h1&gt;</div>
                    <div className="text-green-400">&lt;p&gt;</div>Welcome to React!<div className="text-green-400">&lt;/p&gt;</div>
                  </div>
                  <div className="text-green-400">&lt;/div&gt;</div>
                </div>
                );
              </div>
              {'}'}
            </div>

            {/* Component Usage */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <Recycle className="w-4 h-4 mr-2" />
                Using Components
              </h4>
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <div className="text-gray-400">// Use components like HTML tags</div>
                <div className="text-blue-400">function</div> <span className="text-yellow-400">App</span>() {'{'}
                <div className="ml-4">
                  <div className="text-blue-400">return</div> (
                  <div className="ml-4">
                    <div className="text-green-400">&lt;div&gt;</div>
                    <div className="ml-4">
                      <div className="text-green-400">&lt;Welcome /&gt;</div>
                      <div className="text-green-400">&lt;Welcome /&gt;</div>
                      <div className="text-green-400">&lt;Welcome /&gt;</div>
                    </div>
                    <div className="text-green-400">&lt;/div&gt;</div>
                  </div>
                  );
                </div>
                {'}'}
              </div>
            </div>

            {/* Interactive Demo Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <Button
                onClick={() => setShowDemo(!showDemo)}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                {showDemo ? 'Hide Component Tree' : 'Show Component Tree'}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Component Tree Demo */}
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6"
          >
            <h4 className="font-semibold text-blue-800 mb-4 text-center">Component Tree Structure</h4>
            <div className="flex flex-col items-center space-y-4">
              {/* App Component */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                App
              </motion.div>
              
              {/* Level 2 */}
              <div className="flex space-x-8">
                {['Header', 'Main', 'Footer'].map((comp, index) => (
                  <motion.div
                    key={comp}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-cyan-500 text-white px-3 py-2 rounded-lg text-sm"
                  >
                    {comp}
                  </motion.div>
                ))}
              </div>
              
              {/* Level 3 */}
              <div className="flex space-x-4">
                {['Button', 'Card', 'List'].map((comp, index) => (
                  <motion.div
                    key={comp}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-blue-400 text-white px-2 py-1 rounded text-xs"
                  >
                    {comp}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">
            🧩 Component Thinking
          </h3>
          <p className="text-blue-100">
            {simpleMode 
              ? "Break your UI into small, reusable pieces. Each component should do one thing well!" 
              : "Think in components: Break complex UIs into simple, reusable, and composable pieces that can be combined to create powerful applications."
            }
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComponentsSlide;

