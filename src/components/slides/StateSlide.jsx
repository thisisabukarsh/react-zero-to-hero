import { motion } from 'framer-motion';
import { useState } from 'react';
import { Brain, RotateCcw, Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const StateSlide = ({ simpleMode }) => {
  const [demoCount, setDemoCount] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [demoText, setDemoText] = useState('');

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
          State
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode ? "Component Memory - Data That Changes" : "Managing Dynamic Data in Components"}
        </motion.h2>

        {/* Visual Metaphor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center space-x-8 mb-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-purple-500 text-white px-6 py-4 rounded-lg font-medium flex items-center"
              >
                <Brain className="w-6 h-6 mr-2" />
                Component Memory
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <RotateCcw className="w-8 h-8 text-purple-600" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="bg-pink-500 text-white px-6 py-4 rounded-lg font-medium"
              >
                UI Updates
              </motion.div>
            </div>
            <p className="text-purple-700 font-medium">
              {simpleMode ? "State changes → UI updates automatically!" : "State mutations trigger re-renders and UI updates"}
            </p>
          </div>
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
            {/* What is State */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                {simpleMode ? "What is State?" : "State Fundamentals"}
              </h3>
              
              {simpleMode ? (
                <div className="space-y-3 text-purple-700">
                  <p>State is like a component's memory!</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Stores data that can change</li>
                    <li>When state changes, component re-renders</li>
                    <li>Each component has its own state</li>
                    <li>Perfect for user interactions</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-purple-700">
                  <p>State represents mutable data that belongs to a component and can change over time, triggering re-renders when updated.</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Local to component: Each instance maintains its own state</li>
                    <li>Reactive: Changes trigger re-renders automatically</li>
                    <li>Asynchronous: State updates may be batched for performance</li>
                    <li>Immutable updates: Always replace, never mutate directly</li>
                  </ul>
                </div>
              )}
            </div>

            {/* useState Hook */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                useState Hook
              </h4>
              <div className="bg-gray-900 rounded p-4 text-sm font-mono mb-4">
                <div className="text-gray-400 mb-2">// useState syntax</div>
                <div className="text-blue-400">const</div> [<span className="text-yellow-400">state</span>, <span className="text-yellow-400">setState</span>] = 
                <div className="ml-4"><span className="text-green-400">useState</span>(<span className="text-orange-400">initialValue</span>);</div>
              </div>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Returns array with current value and setter</li>
                <li>• Setter function triggers re-render</li>
                <li>• Can hold any data type</li>
              </ul>
            </div>

            {/* State Rules */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-800 mb-3">State Rules</h4>
              <ul className="space-y-2 text-sm text-yellow-700">
                {simpleMode ? (
                  <>
                    <li>• Don't modify state directly</li>
                    <li>• Use the setter function</li>
                    <li>• State updates are asynchronous</li>
                  </>
                ) : (
                  <>
                    <li>• Never mutate state directly - always use setter</li>
                    <li>• State updates are asynchronous and may be batched</li>
                    <li>• Use functional updates for state based on previous state</li>
                    <li>• Keep state minimal and derive computed values</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            {/* Live Demo */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-800 mb-4 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Live State Demo
              </h4>
              
              {/* Counter Demo */}
              <div className="bg-white rounded-lg p-4 mb-4 shadow">
                <h5 className="font-medium text-gray-800 mb-3">Counter Example</h5>
                <div className="flex items-center space-x-4 mb-3">
                  <Button 
                    onClick={() => setDemoCount(demoCount - 1)}
                    variant="outline"
                    size="sm"
                  >
                    -
                  </Button>
                  <span className="text-2xl font-bold text-purple-600 min-w-[3rem] text-center">
                    {demoCount}
                  </span>
                  <Button 
                    onClick={() => setDemoCount(demoCount + 1)}
                    variant="outline"
                    size="sm"
                  >
                    +
                  </Button>
                </div>
                <Button 
                  onClick={() => setDemoCount(0)}
                  size="sm"
                  className="w-full"
                >
                  Reset
                </Button>
              </div>

              {/* Text Input Demo */}
              <div className="bg-white rounded-lg p-4 shadow">
                <h5 className="font-medium text-gray-800 mb-3">Text Input Example</h5>
                <input
                  type="text"
                  value={demoText}
                  onChange={(e) => setDemoText(e.target.value)}
                  placeholder="Type something..."
                  className="w-full p-2 border rounded mb-2"
                />
                <p className="text-sm text-gray-600">
                  You typed: <span className="font-medium text-purple-600">{demoText || '(nothing yet)'}</span>
                </p>
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
              <div className="text-gray-400 mb-2">// Counter Component</div>
              <div className="text-blue-400">function</div> <span className="text-yellow-400">Counter</span>() {'{'}
              <div className="ml-4">
                <div className="text-blue-400">const</div> [<span className="text-yellow-400">count</span>, <span className="text-yellow-400">setCount</span>] = <span className="text-green-400">useState</span>(<span className="text-orange-400">0</span>);
                <br /><br />
                <div className="text-blue-400">return</div> (
                <div className="ml-4">
                  <div className="text-green-400">&lt;div&gt;</div>
                  <div className="ml-4">
                    <div className="text-green-400">&lt;p&gt;</div>Count: {'{count}'}<div className="text-green-400">&lt;/p&gt;</div>
                    <div className="text-green-400">&lt;button</div> <span className="text-yellow-400">onClick</span>={'{() => setCount(count + 1)}'}<div className="text-green-400">&gt;</div>
                    <div className="ml-4">+</div>
                    <div className="text-green-400">&lt;/button&gt;</div>
                  </div>
                  <div className="text-green-400">&lt;/div&gt;</div>
                </div>
                );
              </div>
              {'}'}
            </div>

            {/* Toggle Demo Button */}
            <Button
              onClick={() => setShowDemo(!showDemo)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              {showDemo ? 'Hide Advanced Examples' : 'Show Advanced Examples'}
            </Button>
          </motion.div>
        </div>

        {/* Advanced Examples */}
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6"
          >
            <h4 className="font-semibold text-blue-800 mb-4 text-center">Advanced State Patterns</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Object State */}
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-gray-800 mb-2">Object State</h5>
                <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                  <div className="text-blue-400">const</div> [<span className="text-yellow-400">user</span>, <span className="text-yellow-400">setUser</span>] = <span className="text-green-400">useState</span>({'{'}
                  <div className="ml-4">
                    <div><span className="text-orange-400">name</span>: <span className="text-green-400">'John'</span>,</div>
                    <div><span className="text-orange-400">age</span>: <span className="text-orange-400">25</span></div>
                  </div>
                  {'}'});
                  <br /><br />
                  <div className="text-gray-400">// Update object state</div>
                  <div><span className="text-yellow-400">setUser</span>({'{...user, age: 26}'});</div>
                </div>
              </div>

              {/* Array State */}
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-gray-800 mb-2">Array State</h5>
                <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                  <div className="text-blue-400">const</div> [<span className="text-yellow-400">items</span>, <span className="text-yellow-400">setItems</span>] = <span className="text-green-400">useState</span>([]);
                  <br /><br />
                  <div className="text-gray-400">// Add item</div>
                  <div><span className="text-yellow-400">setItems</span>([<span className="text-yellow-400">...items</span>, <span className="text-orange-400">newItem</span>]);</div>
                  <br />
                  <div className="text-gray-400">// Remove item</div>
                  <div><span className="text-yellow-400">setItems</span>(<span className="text-yellow-400">items</span>.<span className="text-green-400">filter</span>(<span className="text-yellow-400">item</span> =&gt; <span className="text-yellow-400">item</span>.<span className="text-orange-400">id</span> !== <span className="text-orange-400">id</span>));</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">
            🧠 State Magic
          </h3>
          <p className="text-purple-100">
            {simpleMode 
              ? "State makes your components interactive! When state changes, React automatically updates what users see." 
              : "State enables dynamic, interactive UIs by providing a way to store and update data that automatically triggers re-renders when changed."
            }
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StateSlide;

