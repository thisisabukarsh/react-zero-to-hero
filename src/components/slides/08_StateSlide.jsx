import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, RotateCcw, Zap, Play, Save } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const StateSlide = ({ simpleMode }) => {
  // Persistent state with localStorage
  const [demoCount, setDemoCount] = useState(() => {
    const saved = localStorage.getItem("demoCount");
    return saved ? parseInt(saved) : 0;
  });

  const [demoText, setDemoText] = useState(() => {
    return localStorage.getItem("demoText") || "";
  });

  const [showDemo, setShowDemo] = useState(false);

  // Save state changes to localStorage
  useEffect(() => {
    localStorage.setItem("demoCount", demoCount);
  }, [demoCount]);

  useEffect(() => {
    localStorage.setItem("demoText", demoText);
  }, [demoText]);

  // Reset all saved state
  const resetAllState = () => {
    setDemoCount(0);
    setDemoText("");
    localStorage.removeItem("demoCount");
    localStorage.removeItem("demoText");
  };

  return (
    <div className="flex my-20 flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16 overflow-hidden">
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
          {simpleMode
            ? "Component Memory - Data That Changes"
            : "Managing Dynamic Data in Components"}
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
                <Save className="w-6 h-6 mr-2" />
                Persistent State
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
              {simpleMode
                ? "State changes → UI updates automatically!"
                : "State mutations trigger re-renders and UI updates"}
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
                    <li>Can persist across re-renders</li>
                    <li>Enables dynamic UI behavior</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-purple-700">
                  <p>
                    State represents mutable data that belongs to a component
                    and can change over time, triggering re-renders when
                    updated.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Local to component: Each instance maintains its own state
                    </li>
                    <li>Reactive: Changes trigger re-renders automatically</li>
                    <li>
                      Asynchronous: State updates may be batched for performance
                    </li>
                    <li>
                      Immutable updates: Always replace, never mutate directly
                    </li>
                    <li>Persistent: State survives component re-renders</li>
                    <li>
                      Isolated: State is private to each component instance
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* State Types */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-3">
                Types of State
              </h4>
              <div className="space-y-3 text-sm text-green-700">
                <div className="flex items-start space-x-2">
                  <span className="bg-green-200 px-2 py-1 rounded text-xs font-medium">
                    Local
                  </span>
                  <span>Component-specific state (useState)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="bg-blue-200 px-2 py-1 rounded text-xs font-medium">
                    Global
                  </span>
                  <span>App-wide state (Context, Redux, Zustand)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="bg-purple-200 px-2 py-1 rounded text-xs font-medium">
                    Server
                  </span>
                  <span>Data from APIs (useQuery, SWR)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="bg-orange-200 px-2 py-1 rounded text-xs font-medium">
                    Form
                  </span>
                  <span>User input state (controlled components)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="bg-pink-200 px-2 py-1 rounded text-xs font-medium">
                    UI
                  </span>
                  <span>Interface state (loading, modals, toggles)</span>
                </div>
              </div>
            </div>

            {/* useState Hook */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                useState Hook
              </h4>
              <div className="bg-gray-900 rounded p-4 text-sm font-mono mb-4">
                <div className="text-slate-500 mb-2">// useState syntax</div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-cyan-300">state</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">setState</span>
                  <span className="text-pink-400">]</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useState</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">initialValue</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
                <br />
                <div className="text-slate-500">// Examples:</div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-cyan-300">count</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">setCount</span>
                  <span className="text-pink-400">]</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useState</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-orange-300">0</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-cyan-300">text</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">setText</span>
                  <span className="text-pink-400">]</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useState</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-green-300">''</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-cyan-300">isActive</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">setIsActive</span>
                  <span className="text-pink-400">]</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useState</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-orange-300">false</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Returns array with current value and setter</li>
                <li>• Setter function triggers re-render</li>
                <li>• Can hold any data type</li>
              </ul>
            </div>

            {/* State Rules */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-800 mb-3">
                State Rules & Best Practices
              </h4>
              <ul className="space-y-2 text-sm text-yellow-700">
                {simpleMode ? (
                  <>
                    <li>• Don't modify state directly</li>
                    <li>• Use the setter function</li>
                    <li>• State updates are asynchronous</li>
                    <li>• Keep state as simple as possible</li>
                    <li>• Avoid deeply nested state objects</li>
                  </>
                ) : (
                  <>
                    <li>• Never mutate state directly - always use setter</li>
                    <li>• State updates are asynchronous and may be batched</li>
                    <li>
                      • Use functional updates for state based on previous state
                    </li>
                    <li>• Keep state minimal and derive computed values</li>
                    <li>• Avoid redundant state - derive from other state</li>
                    <li>• Use multiple useState calls for unrelated state</li>
                    <li>• Consider useReducer for complex state logic</li>
                    <li>
                      • Use useCallback/useMemo to prevent unnecessary
                      re-renders
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* State Update Patterns */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h4 className="font-semibold text-indigo-800 mb-3">
                State Update Patterns
              </h4>
              <div className="space-y-3 text-sm text-indigo-700">
                <div>
                  <span className="font-medium">Functional Updates:</span>
                  <div className="bg-gray-900 rounded p-2 mt-1 text-xs font-mono">
                    <span className="text-cyan-300">setCount</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">prev</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-cyan-300">prev</span>{" "}
                    <span className="text-pink-400">+</span>{" "}
                    <span className="text-orange-300">1</span>
                    <span className="text-pink-400">)</span>
                  </div>
                </div>
                <div>
                  <span className="font-medium">Object Updates:</span>
                  <div className="bg-gray-900 rounded p-2 mt-1 text-xs font-mono">
                    <span className="text-cyan-300">setUser</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-pink-400">...</span>
                    <span className="text-cyan-300">user</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">name</span>
                    <span className="text-pink-400">:</span>{" "}
                    <span className="text-green-300">'New Name'</span>
                    <span className="text-pink-400">{"}"}</span>
                    <span className="text-pink-400">)</span>
                  </div>
                </div>
                <div>
                  <span className="font-medium">Array Updates:</span>
                  <div className="bg-gray-900 rounded p-2 mt-1 text-xs font-mono">
                    <span className="text-cyan-300">setItems</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">prev</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-pink-400">[</span>
                    <span className="text-pink-400">...</span>
                    <span className="text-cyan-300">prev</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">newItem</span>
                    <span className="text-pink-400">]</span>
                    <span className="text-pink-400">)</span>
                  </div>
                </div>
              </div>
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
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-medium text-gray-800">
                    Persistent Counter
                  </h5>
                  <Button
                    onClick={resetAllState}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    Reset All
                  </Button>
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <Button
                    onClick={() => setDemoCount((prev) => prev - 1)}
                    variant="outline"
                    size="sm"
                  >
                    -
                  </Button>
                  <span className="text-2xl font-bold text-purple-600 min-w-[3rem] text-center">
                    {demoCount}
                  </span>
                  <Button
                    onClick={() => setDemoCount((prev) => prev + 1)}
                    variant="outline"
                    size="sm"
                  >
                    +
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  This count persists across page reloads
                </p>
              </div>

              {/* Text Input Demo */}
              <div className="bg-white rounded-lg p-4 shadow mb-4">
                <h5 className="font-medium text-gray-800 mb-3">
                  Persistent Text Input
                </h5>
                <input
                  type="text"
                  value={demoText}
                  onChange={(e) => setDemoText(e.target.value)}
                  placeholder="Type something... (it will be saved!)"
                  className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <p className="text-sm text-gray-600">
                  Saved text:{" "}
                  <span className="font-medium text-purple-600">
                    {demoText || "(nothing yet)"}
                  </span>
                </p>
              </div>

              {/* State Debug Info */}
              <div className="bg-gray-100 rounded-lg p-3 text-xs">
                <h6 className="font-medium text-gray-700 mb-2">
                  State Debug Info:
                </h6>
                <div className="space-y-1 text-gray-600">
                  <div>
                    Counter: {demoCount} (type: {typeof demoCount})
                  </div>
                  <div>Text length: {demoText.length} characters</div>
                  <div>Text empty: {demoText === "" ? "Yes" : "No"}</div>
                  <div>Demo visible: {showDemo ? "Yes" : "No"}</div>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
              <div className="text-slate-500 mb-2">
                // Persistent Counter Component
              </div>
              <div>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-cyan-300">PersistentCounter</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                <span className="text-pink-400">()</span>{" "}
                <span className="text-pink-400">=&gt;</span>{" "}
                <span className="text-pink-400">{"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">const</span>{" "}
                <span className="text-pink-400">[</span>
                <span className="text-cyan-300">count</span>
                <span className="text-pink-400">,</span>{" "}
                <span className="text-cyan-300">setCount</span>
                <span className="text-pink-400">]</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                <span className="text-purple-400">useState</span>
                <span className="text-pink-400">(</span>
                <span className="text-pink-400">()</span>{" "}
                <span className="text-pink-400">=&gt;</span>{" "}
                <span className="text-pink-400">{"{"}</span>
              </div>
              <div className="ml-8">
                <span className="text-pink-400">const</span>{" "}
                <span className="text-cyan-300">saved</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                <span className="text-purple-400">localStorage</span>
                <span className="text-pink-400">.</span>
                <span className="text-blue-300">getItem</span>
                <span className="text-pink-400">(</span>
                <span className="text-green-300">'count'</span>
                <span className="text-pink-400">)</span>
                <span className="text-pink-400">;</span>
              </div>
              <div className="ml-8">
                <span className="text-pink-400">return</span>{" "}
                <span className="text-cyan-300">saved</span>{" "}
                <span className="text-pink-400">?</span>{" "}
                <span className="text-purple-400">parseInt</span>
                <span className="text-pink-400">(</span>
                <span className="text-cyan-300">saved</span>
                <span className="text-pink-400">)</span>{" "}
                <span className="text-pink-400">:</span>{" "}
                <span className="text-orange-300">0</span>
                <span className="text-pink-400">;</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">{"}"}</span>
                <span className="text-pink-400">)</span>
                <span className="text-pink-400">;</span>
              </div>
              <br />
              <div className="ml-4">
                <span className="text-purple-400">useEffect</span>
                <span className="text-pink-400">(</span>
                <span className="text-pink-400">()</span>{" "}
                <span className="text-pink-400">=&gt;</span>{" "}
                <span className="text-pink-400">{"{"}</span>
              </div>
              <div className="ml-8">
                <span className="text-purple-400">localStorage</span>
                <span className="text-pink-400">.</span>
                <span className="text-blue-300">setItem</span>
                <span className="text-pink-400">(</span>
                <span className="text-green-300">'count'</span>
                <span className="text-pink-400">,</span>{" "}
                <span className="text-cyan-300">count</span>
                <span className="text-pink-400">)</span>
                <span className="text-pink-400">;</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">{"}"}</span>
                <span className="text-pink-400">,</span>{" "}
                <span className="text-pink-400">[</span>
                <span className="text-cyan-300">count</span>
                <span className="text-pink-400">]</span>
                <span className="text-pink-400">)</span>
                <span className="text-pink-400">;</span>
              </div>
              <br />
              <div className="ml-4">
                <span className="text-pink-400">return</span>{" "}
                <span className="text-pink-400">(</span>
              </div>
              <div className="ml-8">
                <span className="text-blue-300">{"<div"}</span>
                <span className="text-blue-300">{">"}</span>
              </div>
              <div className="ml-12">
                <span className="text-gray-300">Count</span>
                <span className="text-pink-400">:</span>{" "}
                <span className="text-pink-400">{"{"}</span>
                <span className="text-cyan-300">count</span>
                <span className="text-pink-400">{"}"}</span>
              </div>
              <div className="ml-12">
                <span className="text-blue-300">{"<button"}</span>{" "}
                <span className="text-cyan-400">onClick</span>
                <span className="text-pink-400">=</span>
                <span className="text-pink-400">{"{"}</span>
                <span className="text-pink-400">()</span>{" "}
                <span className="text-pink-400">=&gt;</span>{" "}
                <span className="text-cyan-300">setCount</span>
                <span className="text-pink-400">(</span>
                <span className="text-cyan-300">count</span>{" "}
                <span className="text-pink-400">+</span>{" "}
                <span className="text-orange-300">1</span>
                <span className="text-pink-400">)</span>
                <span className="text-pink-400">{"}"}</span>
                <span className="text-blue-300">{">"}</span>
                <span className="text-gray-300">+</span>
                <span className="text-blue-300">{"</button>"}</span>
              </div>
              <div className="ml-8">
                <span className="text-blue-300">{"</div>"}</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">)</span>
                <span className="text-pink-400">;</span>
              </div>
              <div>
                <span className="text-pink-400">{"}"}</span>
                <span className="text-pink-400">;</span>
              </div>
            </div>

            {/* Storage Options Section */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-800 mb-4 flex items-center">
                <Save className="w-5 h-5 mr-2" />
                Storage Options for State Persistence
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Browser Storage */}
                <div className="bg-white rounded-lg p-4 shadow">
                  <h5 className="font-medium text-blue-700 mb-3">
                    Browser Storage
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-200 px-2 py-1 rounded text-xs font-medium">
                        localStorage
                      </span>
                      <span className="text-blue-600">
                        Persistent, 5-10MB limit
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-200 px-2 py-1 rounded text-xs font-medium">
                        sessionStorage
                      </span>
                      <span className="text-green-600">
                        Session-only, tab-specific
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-200 px-2 py-1 rounded text-xs font-medium">
                        IndexedDB
                      </span>
                      <span className="text-purple-600">
                        Large data, complex queries
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-orange-200 px-2 py-1 rounded text-xs font-medium">
                        Cookies
                      </span>
                      <span className="text-orange-600">
                        Small data, server accessible
                      </span>
                    </div>
                  </div>
                </div>

                {/* Server Storage */}
                <div className="bg-white rounded-lg p-4 shadow">
                  <h5 className="font-medium text-green-700 mb-3">
                    Server Storage
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-200 px-2 py-1 rounded text-xs font-medium">
                        REST APIs
                      </span>
                      <span className="text-green-600">CRUD operations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-200 px-2 py-1 rounded text-xs font-medium">
                        GraphQL
                      </span>
                      <span className="text-blue-600">Flexible queries</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-200 px-2 py-1 rounded text-xs font-medium">
                        WebSockets
                      </span>
                      <span className="text-purple-600">Real-time updates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-orange-200 px-2 py-1 rounded text-xs font-medium">
                        Firebase
                      </span>
                      <span className="text-orange-600">
                        Backend-as-a-Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Storage Code Examples */}
              <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                <div className="text-slate-500 mb-2">
                  // Storage Utility Examples
                </div>

                {/* localStorage Example */}
                <div className="mb-3">
                  <div className="text-slate-500 text-xs">// localStorage</div>
                  <div>
                    <span className="text-purple-400">localStorage</span>
                    <span className="text-pink-400">.</span>
                    <span className="text-blue-300">setItem</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-green-300">'user'</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-purple-400">JSON</span>
                    <span className="text-pink-400">.</span>
                    <span className="text-blue-300">stringify</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">userData</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">;</span>
                  </div>
                </div>

                {/* Custom Hook Example */}
                <div className="mb-3">
                  <div className="text-slate-500 text-xs">
                    // Custom Storage Hook
                  </div>
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-cyan-300">useLocalStorage</span>{" "}
                    <span className="text-pink-400">=</span>{" "}
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">key</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">initialValue</span>
                    <span className="text-pink-400">)</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-pink-400">{"{"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-pink-400">[</span>
                    <span className="text-cyan-300">storedValue</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">setStoredValue</span>
                    <span className="text-pink-400">]</span>{" "}
                    <span className="text-pink-400">=</span>{" "}
                    <span className="text-purple-400">useState</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-pink-400">()</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-pink-400">{"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-pink-400">try</span>{" "}
                    <span className="text-pink-400">{"{"}</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-cyan-300">const</span>{" "}
                    <span className="text-cyan-300">item</span>{" "}
                    <span className="text-pink-400">=</span>{" "}
                    <span className="text-purple-400">localStorage</span>
                    <span className="text-pink-400">.</span>
                    <span className="text-blue-300">getItem</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">key</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">;</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-pink-400">return</span>{" "}
                    <span className="text-cyan-300">item</span>{" "}
                    <span className="text-pink-400">?</span>{" "}
                    <span className="text-purple-400">JSON</span>
                    <span className="text-pink-400">.</span>
                    <span className="text-blue-300">parse</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">item</span>
                    <span className="text-pink-400">)</span>{" "}
                    <span className="text-pink-400">:</span>{" "}
                    <span className="text-cyan-300">initialValue</span>
                    <span className="text-pink-400">;</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-pink-400">{"}"}</span>{" "}
                    <span className="text-pink-400">catch</span>{" "}
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">error</span>
                    <span className="text-pink-400">)</span>{" "}
                    <span className="text-pink-400">{"{"}</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-pink-400">return</span>{" "}
                    <span className="text-cyan-300">initialValue</span>
                    <span className="text-pink-400">;</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-pink-400">{"}"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-pink-400">{"}"}</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">;</span>
                  </div>
                </div>

                {/* Storage Best Practices */}
                <div className="mt-4 p-3 bg-yellow-900/20 rounded">
                  <div className="text-yellow-300 text-xs font-medium mb-2">
                    💡 Storage Best Practices:
                  </div>
                  <div className="text-xs text-yellow-200 space-y-1">
                    <div>• Always handle storage errors gracefully</div>
                    <div>• Use JSON.stringify/parse for objects</div>
                    <div>• Consider storage limits and quotas</div>
                    <div>• Implement data validation before storage</div>
                    <div>• Use try-catch blocks for storage operations</div>
                    <div>• Consider encryption for sensitive data</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle Demo Button */}
            <Button
              onClick={() => setShowDemo(!showDemo)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              {showDemo ? "Hide Advanced Examples" : "Show Advanced Examples"}
            </Button>
          </motion.div>
        </div>

        {/* Advanced Examples */}
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6"
          >
            <h4 className="font-semibold text-blue-800 mb-4 text-center">
              Advanced State Patterns
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Array State Example */}
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <div className="text-slate-500 mb-2">
                  // Array State Example
                </div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-cyan-300">items</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">setItems</span>
                  <span className="text-pink-400">]</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useState</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-pink-400">[</span>
                  <span className="text-pink-400">]</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
                <br />
                <div className="text-slate-500">// Add item</div>
                <div>
                  <span className="text-cyan-300">setItems</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">prev</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-pink-400">...</span>
                  <span className="text-cyan-300">prev</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">newItem</span>
                  <span className="text-pink-400">]</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
                <br />
                <div className="text-slate-500">// Remove item</div>
                <div>
                  <span className="text-cyan-300">setItems</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">prev</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-cyan-300">prev</span>
                  <span className="text-pink-400">.</span>
                  <span className="text-blue-300">filter</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">item</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-cyan-300">item</span>
                  <span className="text-pink-400">.</span>
                  <span className="text-cyan-300">id</span>{" "}
                  <span className="text-pink-400">!==</span>{" "}
                  <span className="text-cyan-300">id</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
              </div>

              {/* Object State Example */}
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <div className="text-slate-500 mb-2">
                  // Object State Example
                </div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-cyan-300">user</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">setUser</span>
                  <span className="text-pink-400">]</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useState</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-cyan-300">name</span>
                  <span className="text-pink-400">:</span>{" "}
                  <span className="text-green-300">'John'</span>
                  <span className="text-pink-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-cyan-300">age</span>
                  <span className="text-pink-400">:</span>{" "}
                  <span className="text-orange-300">25</span>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
                <br />
                <div className="text-slate-500">// Update object state</div>
                <div>
                  <span className="text-cyan-300">setUser</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">prev</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                  <span className="text-pink-400">...</span>
                  <span className="text-cyan-300">prev</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">age</span>
                  <span className="text-pink-400">:</span>{" "}
                  <span className="text-orange-300">26</span>
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
              </div>
            </div>

            {/* Additional Advanced Patterns */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* useReducer Pattern */}
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <div className="text-slate-500 mb-2">
                  // useReducer for Complex State
                </div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-cyan-300">state</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">dispatch</span>
                  <span className="text-pink-400">]</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useReducer</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">reducer</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-cyan-300">count</span>
                  <span className="text-pink-400">:</span>{" "}
                  <span className="text-orange-300">0</span>
                  <span className="text-pink-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-cyan-300">loading</span>
                  <span className="text-pink-400">:</span>{" "}
                  <span className="text-orange-300">false</span>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
              </div>

              {/* Custom Hook Pattern */}
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <div className="text-slate-500 mb-2">// Custom State Hook</div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-cyan-300">useCounter</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">initialValue</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-orange-300">0</span>
                  <span className="text-pink-400">)</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-pink-400">[</span>
                  <span className="text-cyan-300">count</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">setCount</span>
                  <span className="text-pink-400">]</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useState</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">initialValue</span>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
                <div className="ml-4">
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-8">
                  <span className="text-cyan-300">count</span>
                  <span className="text-pink-400">,</span>
                </div>
                <div className="ml-8">
                  <span className="text-cyan-300">increment</span>
                  <span className="text-pink-400">:</span>{" "}
                  <span className="text-pink-400">()</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-cyan-300">setCount</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">c</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-cyan-300">c</span>{" "}
                  <span className="text-pink-400">+</span>{" "}
                  <span className="text-orange-300">1</span>
                  <span className="text-pink-400">)</span>
                </div>
                <div className="ml-4">
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">;</span>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">;</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* State Management Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
            State Management Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-blue-700 mb-2">
                Built-in React
              </h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• useState - Local component state</li>
                <li>• useReducer - Complex state logic</li>
                <li>• useContext - Global state sharing</li>
                <li>• Perfect for small to medium apps</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-green-700 mb-2">
                External Libraries
              </h4>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Redux Toolkit - Predictable state</li>
                <li>• Zustand - Simple & lightweight</li>
                <li>• Jotai - Atomic state management</li>
                <li>• Recoil - Facebook's experimental</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-purple-700 mb-2">
                Server State
              </h4>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• React Query - Server state</li>
                <li>• SWR - Data fetching</li>
                <li>• Apollo Client - GraphQL</li>
                <li>• TanStack Query - Modern approach</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">🧠 State Magic</h3>
          <p className="text-purple-100">
            {simpleMode
              ? "State makes your components interactive! When state changes, React automatically updates what users see."
              : "State enables dynamic, interactive UIs by providing a way to store and update data that automatically triggers re-renders when changed."}
          </p>
          <div className="mt-4 text-sm text-purple-200">
            <p>
              💡 Remember: Choose the right state management solution based on
              your app's complexity!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StateSlide;
