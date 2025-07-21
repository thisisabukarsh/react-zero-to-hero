import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Fish, Clock, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import hooksFishing from "../../assets/hooks-fishing.png";

const HooksSlide = ({ simpleMode }) => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16 my-20">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-800 mb-4 sm:mb-6 text-center"
        >
          Hooks
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode
            ? "Modern React - Functions with Superpowers!"
            : "Function Components with State and Lifecycle"}
        </motion.h2>

        {/* Visual Metaphor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12 flex justify-center"
        >
          <img
            src={hooksFishing}
            alt="Hooks Fishing Metaphor"
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-center text-purple-800 mb-6">
              🎣 Hooks in Action
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* useState Demo */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-purple-600" />
                  useState Hook
                </h4>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-4">
                    {count}
                  </div>
                  <div className="flex space-x-2 justify-center">
                    <Button
                      onClick={() => setCount(count - 1)}
                      variant="outline"
                      size="sm"
                    >
                      -1
                    </Button>
                    <Button
                      onClick={() => setCount(count + 1)}
                      variant="outline"
                      size="sm"
                    >
                      +1
                    </Button>
                    <Button
                      onClick={() => setCount(0)}
                      variant="outline"
                      size="sm"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </div>

              {/* useEffect Demo */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  useEffect Hook
                </h4>
                <div className="text-center">
                  <div className="text-lg font-mono text-blue-600 mb-2">
                    {time.toLocaleTimeString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    Updates every second using useEffect!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
          {/* Left Column - Concepts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            {/* What are Hooks */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <Fish className="w-6 h-6 mr-2" />
                {simpleMode ? "What are Hooks?" : "React Hooks Fundamentals"}
              </h3>

              {simpleMode ? (
                <div className="space-y-3 text-purple-700">
                  <p>
                    Hooks let function components do everything class components
                    could do!
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Add state to function components</li>
                    <li>Handle side effects (like API calls)</li>
                    <li>Reuse logic between components</li>
                    <li>Cleaner, easier to understand code</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-purple-700">
                  <p>
                    Hooks are functions that let you "hook into" React features
                    from function components. They enable state management and
                    lifecycle methods without classes.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>State management in functional components</li>
                    <li>Side effect handling and cleanup</li>
                    <li>Custom logic reuse and composition</li>
                    <li>Simplified component architecture</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Common Hooks */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3">Common Hooks</h4>
              <div className="space-y-3 text-sm">
                {simpleMode ? (
                  <>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">useState</div>
                      <div className="text-blue-600">
                        Add state to components
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">useEffect</div>
                      <div className="text-blue-600">Handle side effects</div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        useContext
                      </div>
                      <div className="text-blue-600">Share data globally</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">useState</div>
                      <div className="text-blue-600">
                        Local component state management
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">useEffect</div>
                      <div className="text-blue-600">
                        Side effects and lifecycle events
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        useContext
                      </div>
                      <div className="text-blue-600">
                        Context API consumption
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        useReducer
                      </div>
                      <div className="text-blue-600">
                        Complex state management
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">useMemo</div>
                      <div className="text-blue-600">
                        Performance optimization
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        useCallback
                      </div>
                      <div className="text-blue-600">Function memoization</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Hook Rules */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Rules of Hooks
              </h4>
              <ul className="space-y-2 text-sm text-yellow-700">
                {simpleMode ? (
                  <>
                    <li>• Only call hooks at the top level</li>
                    <li>• Don't call hooks inside loops or conditions</li>
                    <li>• Only call hooks from React functions</li>
                  </>
                ) : (
                  <>
                    <li>
                      • Only call hooks at the top level of React functions
                    </li>
                    <li>
                      • Never call hooks inside loops, conditions, or nested
                      functions
                    </li>
                    <li>
                      • Only call hooks from React function components or custom
                      hooks
                    </li>
                    <li>• Hook calls must be in the same order every render</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Code Examples */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="space-y-6"
          >
            {/* useState Example */}
            <div className="bg-gray-900 rounded-lg p-4 text-base font-mono">
              <div className="text-slate-500 mb-2">// useState Hook</div>
              <div>
                <span className="text-pink-400">import</span>{" "}
                <span className="text-pink-400">{"{"}</span>
                <span className="text-purple-400">useState</span>
                <span className="text-pink-400">{"}"}</span>{" "}
                <span className="text-pink-400">from</span>{" "}
                <span className="text-green-300">'react'</span>
                <span className="text-pink-400">;</span>
              </div>
              <br />
              <br />
              <div>
                <span className="text-pink-400">function</span>{" "}
                <span className="text-cyan-300">Counter</span>
                <span className="text-pink-400">()</span>{" "}
                <span className="text-pink-400">{"{"}</span>
              </div>
              <div className="ml-4">
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
                <br />
                <br />
                <div>
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-pink-400">(</span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-blue-300">{"<div>"}</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-blue-300">{"<p>"}</span>
                      <span className="text-gray-300">Count: </span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">count</span>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-blue-300">{"</p>"}</span>
                    </div>
                    <div>
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
                    </div>
                    <div className="ml-4">
                      <span className="text-gray-300">+</span>
                    </div>
                    <div>
                      <span className="text-blue-300">{"</button>"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-blue-300">{"</div>"}</span>
                  </div>
                </div>
                <div>
                  <span className="text-pink-400">)</span>
                  <span className="text-pink-400">;</span>
                </div>
              </div>
              <div>
                <span className="text-pink-400">{"}"}</span>
              </div>
            </div>

            {/* useEffect Example */}
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">
                useEffect Hook
              </h4>
              <div className="bg-gray-900 rounded p-3 text-base font-mono">
                <div>
                  <span className="text-pink-400">import</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                  <span className="text-purple-400">useState</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-purple-400">useEffect</span>
                  <span className="text-pink-400">{"}"}</span>{" "}
                  <span className="text-pink-400">from</span>{" "}
                  <span className="text-green-300">'react'</span>
                  <span className="text-pink-400">;</span>
                </div>
                <br />
                <br />
                <div>
                  <span className="text-pink-400">function</span>{" "}
                  <span className="text-cyan-300">Timer</span>
                  <span className="text-pink-400">()</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-pink-400">[</span>
                    <span className="text-cyan-300">time</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">setTime</span>
                    <span className="text-pink-400">]</span>{" "}
                    <span className="text-pink-400">=</span>{" "}
                    <span className="text-purple-400">useState</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-pink-400">new</span>{" "}
                    <span className="text-cyan-300">Date</span>
                    <span className="text-pink-400">()</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">;</span>
                  </div>
                  <br />
                  <br />
                  <div>
                    <span className="text-purple-400">useEffect</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-pink-400">()</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-pink-400">{"{"}</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-pink-400">const</span>{" "}
                      <span className="text-cyan-300">timer</span>{" "}
                      <span className="text-pink-400">=</span>{" "}
                      <span className="text-blue-300">setInterval</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-pink-400">()</span>{" "}
                      <span className="text-pink-400">=&gt;</span>{" "}
                      <span className="text-pink-400">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <div>
                        <span className="text-cyan-300">setTime</span>
                        <span className="text-pink-400">(</span>
                        <span className="text-pink-400">new</span>{" "}
                        <span className="text-cyan-300">Date</span>
                        <span className="text-pink-400">()</span>
                        <span className="text-pink-400">)</span>
                        <span className="text-pink-400">;</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-pink-400">,</span>{" "}
                      <span className="text-orange-300">1000</span>
                      <span className="text-pink-400">)</span>
                      <span className="text-pink-400">;</span>
                    </div>
                    <br />
                    <div>
                      <span className="text-pink-400">return</span>{" "}
                      <span className="text-pink-400">()</span>{" "}
                      <span className="text-pink-400">=&gt;</span>{" "}
                      <span className="text-blue-300">clearInterval</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-cyan-300">timer</span>
                      <span className="text-pink-400">)</span>
                      <span className="text-pink-400">;</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-pink-400">{"}"}</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-pink-400">[</span>
                    <span className="text-pink-400">]</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">;</span>
                  </div>
                  <br />
                  <br />
                  <div>
                    <span className="text-pink-400">return</span>{" "}
                    <span className="text-blue-300">{"<div>"}</span>
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-cyan-300">time</span>
                    <span className="text-pink-400">.</span>
                    <span className="text-blue-300">toLocaleTimeString</span>
                    <span className="text-pink-400">()</span>
                    <span className="text-pink-400">{"}"}</span>
                    <span className="text-blue-300">{"</div>"}</span>
                    <span className="text-pink-400">;</span>
                  </div>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                </div>
              </div>
            </div>

            {/* Advanced Toggle */}
            <Button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              {showAdvanced ? "Hide Advanced Hooks" : "Show Advanced Hooks"}
            </Button>
          </motion.div>
        </div>

        {/* Advanced Hooks */}
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6"
          >
            <div>
              <h4 className="font-semibold text-indigo-800 mb-4 text-4xl text-center">
                Advanced Hooks
              </h4>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-col gap-3 flex-nowrap w-full">
                  {/* useReducer */}
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">
                      useReducer
                    </h5>
                    <div className="bg-gray-900 rounded p-3 text-base font-mono">
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
                        <span className="text-cyan-300">initialState</span>
                        <span className="text-pink-400">)</span>
                        <span className="text-pink-400">;</span>
                      </div>
                      <br />
                      <br />
                      <div>
                        <span className="text-pink-400">function</span>{" "}
                        <span className="text-cyan-300">reducer</span>
                        <span className="text-pink-400">(</span>
                        <span className="text-cyan-300">state</span>
                        <span className="text-pink-400">,</span>{" "}
                        <span className="text-cyan-300">action</span>
                        <span className="text-pink-400">)</span>{" "}
                        <span className="text-pink-400">{"{"}</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-pink-400">switch</span>{" "}
                        <span className="text-pink-400">(</span>
                        <span className="text-cyan-300">action</span>
                        <span className="text-pink-400">.</span>
                        <span className="text-cyan-300">type</span>
                        <span className="text-pink-400">)</span>{" "}
                        <span className="text-pink-400">{"{"}</span>
                      </div>
                      <div className="ml-8">
                        <span className="text-pink-400">case</span>{" "}
                        <span className="text-green-300">'increment'</span>
                        <span className="text-pink-400">:</span>
                      </div>
                      <div className="ml-12">
                        <span className="text-pink-400">return</span>{" "}
                        <span className="text-pink-400">{"{"}</span>
                        <span className="text-cyan-300">count</span>
                        <span className="text-pink-400">:</span>{" "}
                        <span className="text-cyan-300">state</span>
                        <span className="text-pink-400">.</span>
                        <span className="text-cyan-300">count</span>{" "}
                        <span className="text-pink-400">+</span>{" "}
                        <span className="text-orange-300">1</span>
                        <span className="text-pink-400">{"}"}</span>
                        <span className="text-pink-400">;</span>
                      </div>
                      <div className="ml-8">
                        <span className="text-pink-400">default</span>
                        <span className="text-pink-400">:</span>
                      </div>
                      <div className="ml-12">
                        <span className="text-pink-400">return</span>{" "}
                        <span className="text-cyan-300">state</span>
                        <span className="text-pink-400">;</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-pink-400">{"}"}</span>
                      </div>
                      <div>
                        <span className="text-pink-400">{"}"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom Hook */}
                <div className="bg-white rounded-lg p-4 md:mt-0 mt-4 w-full">
                  <h5 className="font-medium text-gray-800 mb-2">
                    Custom Hook
                  </h5>
                  <div className="bg-gray-900 rounded p-3 text-base font-mono">
                    <div>
                      <span className="text-pink-400">function</span>{" "}
                      <span className="text-cyan-300">useCounter</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-cyan-300">initialValue</span>{" "}
                      <span className="text-pink-400">=</span>{" "}
                      <span className="text-orange-300">0</span>
                      <span className="text-pink-400">)</span>{" "}
                      <span className="text-pink-400">{"{"}</span>
                    </div>
                    <div className="ml-4">
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
                        <span className="text-cyan-300">initialValue</span>
                        <span className="text-pink-400">)</span>
                        <span className="text-pink-400">;</span>
                      </div>
                      <br />
                      <div>
                        <span className="text-pink-400">const</span>{" "}
                        <span className="text-cyan-300">increment</span>{" "}
                        <span className="text-pink-400">=</span>{" "}
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
                        <span className="text-pink-400">;</span>
                      </div>
                      <div>
                        <span className="text-pink-400">const</span>{" "}
                        <span className="text-cyan-300">decrement</span>{" "}
                        <span className="text-pink-400">=</span>{" "}
                        <span className="text-pink-400">()</span>{" "}
                        <span className="text-pink-400">=&gt;</span>{" "}
                        <span className="text-cyan-300">setCount</span>
                        <span className="text-pink-400">(</span>
                        <span className="text-cyan-300">c</span>{" "}
                        <span className="text-pink-400">=&gt;</span>{" "}
                        <span className="text-cyan-300">c</span>{" "}
                        <span className="text-pink-400">-</span>{" "}
                        <span className="text-orange-300">1</span>
                        <span className="text-pink-400">)</span>
                        <span className="text-pink-400">;</span>
                      </div>
                      <br />
                      <div>
                        <span className="text-pink-400">return</span>{" "}
                        <span className="text-pink-400">{"{"}</span>
                        <span className="text-cyan-300">count</span>
                        <span className="text-pink-400">,</span>{" "}
                        <span className="text-cyan-300">increment</span>
                        <span className="text-pink-400">,</span>{" "}
                        <span className="text-cyan-300">decrement</span>
                        <span className="text-pink-400">{"}"}</span>
                        <span className="text-pink-400">;</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">🎣 Hook Power</h3>
          <p className="text-purple-100">
            {simpleMode
              ? "Hooks make React function components super powerful! They're the modern way to build React apps."
              : "Hooks revolutionized React development by enabling powerful features in function components while promoting code reuse and cleaner architecture."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HooksSlide;
