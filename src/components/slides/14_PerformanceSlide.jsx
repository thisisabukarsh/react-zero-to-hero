import { motion } from "framer-motion";
import { useState, useMemo, useCallback, memo } from "react";
import { Zap, Target, Gauge, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

// Memoized component example
const ExpensiveComponent = memo(({ value, onClick }) => {
  console.log("ExpensiveComponent rendered with value:", value);

  return (
    <div className="bg-blue-50 p-4 rounded border">
      <p className="text-sm text-blue-800">Expensive Component</p>
      <p className="font-medium">Value: {value}</p>
      <Button onClick={onClick} size="sm" className="mt-2">
        Click me
      </Button>
    </div>
  );
});

const PerformanceSlide = ({ simpleMode }) => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [filter, setFilter] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  // useMemo example - expensive calculation
  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value...");
    return items.reduce((sum, item) => sum + item * item, 0);
  }, [items]);

  // useCallback example - memoized function
  const handleExpensiveClick = useCallback(() => {
    console.log("Expensive click handler called");
    alert("Memoized function called!");
  }, []);

  // Filtered items with useMemo
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) => item.toString().includes(filter));
  }, [items, filter]);

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
          Performance
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode
            ? "Making Your React App Lightning Fast"
            : "Optimization Techniques for React Applications"}
        </motion.h2>

        {/* Performance Metrics Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex justify-center mb-6">
            <img
              src="/src/assets/performance-optimization.png"
              alt="Performance Optimization"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-green-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-center text-yellow-800 mb-6">
              ⚡ Performance Metrics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Render Time */}
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <Gauge className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Render Time</h4>
                <div className="text-2xl font-bold text-green-600">16ms</div>
                <div className="text-sm text-gray-600">
                  Target: &lt;16ms for 60fps
                </div>
              </div>

              {/* Bundle Size */}
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Bundle Size</h4>
                <div className="text-2xl font-bold text-blue-600">245KB</div>
                <div className="text-sm text-gray-600">Gzipped size</div>
              </div>

              {/* Memory Usage */}
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-2">Memory</h4>
                <div className="text-2xl font-bold text-purple-600">12MB</div>
                <div className="text-sm text-gray-600">Heap usage</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-center text-purple-800 mb-6">
              🔧 Performance Demo
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* useMemo Demo */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-medium text-gray-800 mb-4">
                  useMemo Example
                </h4>
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    Expensive calculation result:{" "}
                    <strong className="text-purple-600">
                      {expensiveValue}
                    </strong>
                  </div>
                  <div className="text-sm text-gray-600">
                    Items: [{items.join(", ")}]
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => setItems([...items, items.length + 1])}
                      size="sm"
                    >
                      Add Item
                    </Button>
                    <Button
                      onClick={() => setCount(count + 1)}
                      size="sm"
                      variant="outline"
                    >
                      Count: {count}
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500">
                    Check console - expensive calculation only runs when items
                    change!
                  </div>
                </div>
              </div>

              {/* React.memo Demo */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-medium text-gray-800 mb-4">
                  React.memo Example
                </h4>
                <div className="space-y-3">
                  <ExpensiveComponent
                    value={expensiveValue}
                    onClick={handleExpensiveClick}
                  />
                  <Button
                    onClick={() => setCount(count + 1)}
                    size="sm"
                    variant="outline"
                  >
                    Increment Count: {count}
                  </Button>
                  <div className="text-xs text-gray-500">
                    Check console - component only re-renders when props change!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* React vs Vanilla JS Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-center text-blue-800 mb-6">
            ⚡ React vs Vanilla JavaScript Performance
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* React Performance */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                React Performance
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Initial Bundle Size:</span>
                  <span className="font-semibold text-blue-600">~45KB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Virtual DOM Updates:</span>
                  <span className="font-semibold text-blue-600">~2-5ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Component Re-renders:</span>
                  <span className="font-semibold text-blue-600">~1-3ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Memory Usage:</span>
                  <span className="font-semibold text-blue-600">~8-12MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Development Build:</span>
                  <span className="font-semibold text-blue-600">~120KB</span>
                </div>
              </div>
            </div>

            {/* Vanilla JS Performance */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Vanilla JavaScript
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Bundle Size:</span>
                  <span className="font-semibold text-green-600">~5-15KB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">DOM Updates:</span>
                  <span className="font-semibold text-green-600">~0.5-2ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Event Handling:</span>
                  <span className="font-semibold text-green-600">~0.1-1ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Memory Usage:</span>
                  <span className="font-semibold text-green-600">~2-5MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">No Framework Overhead:</span>
                  <span className="font-semibold text-green-600">0KB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Comparison Table */}
          <div className="mt-6 bg-white rounded-lg p-4 shadow-lg">
            <h4 className="font-semibold text-gray-800 mb-3">
              Performance Comparison
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Metric</th>
                    <th className="text-center py-2">React</th>
                    <th className="text-center py-2">Vanilla JS</th>
                    <th className="text-center py-2">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Bundle Size</td>
                    <td className="text-center py-2 text-blue-600">45KB</td>
                    <td className="text-center py-2 text-green-600">10KB</td>
                    <td className="text-center py-2 text-red-600">+350%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">DOM Updates</td>
                    <td className="text-center py-2 text-blue-600">3ms</td>
                    <td className="text-center py-2 text-green-600">1ms</td>
                    <td className="text-center py-2 text-red-600">+200%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Memory Usage</td>
                    <td className="text-center py-2 text-blue-600">10MB</td>
                    <td className="text-center py-2 text-green-600">3MB</td>
                    <td className="text-center py-2 text-red-600">+233%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Development Time</td>
                    <td className="text-center py-2 text-blue-600">Fast</td>
                    <td className="text-center py-2 text-green-600">Slower</td>
                    <td className="text-center py-2 text-green-600">-40%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Maintainability</td>
                    <td className="text-center py-2 text-blue-600">High</td>
                    <td className="text-center py-2 text-green-600">Low</td>
                    <td className="text-center py-2 text-green-600">+300%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h5 className="font-semibold text-blue-800 mb-2">
                React Advantages
              </h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Faster development time</li>
                <li>• Better code organization</li>
                <li>• Built-in optimization tools</li>
                <li>• Component reusability</li>
                <li>• Virtual DOM efficiency</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h5 className="font-semibold text-green-800 mb-2">
                Vanilla JS Advantages
              </h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Smaller bundle size</li>
                <li>• Faster execution</li>
                <li>• No framework overhead</li>
                <li>• Direct DOM control</li>
                <li>• Lower memory usage</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
          {/* Left Column - Concepts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="space-y-6"
          >
            {/* Performance Fundamentals */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                {simpleMode
                  ? "Why Performance Matters"
                  : "Performance Fundamentals"}
              </h3>

              {simpleMode ? (
                <div className="space-y-3 text-yellow-700">
                  <p>Fast apps make users happy!</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Smooth animations and interactions</li>
                    <li>Quick page loads</li>
                    <li>Responsive user interface</li>
                    <li>Better user experience</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-yellow-700">
                  <p>
                    Performance optimization ensures your React applications
                    remain responsive and provide excellent user experience as
                    they scale.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Reduced render times and improved responsiveness</li>
                    <li>Lower memory consumption and CPU usage</li>
                    <li>Better Core Web Vitals and SEO rankings</li>
                    <li>Enhanced user satisfaction and retention</li>
                    <li>Reduced server costs and bandwidth usage</li>
                    <li>Better accessibility for users on slower devices</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Performance Measurement */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
                <Gauge className="w-5 h-5 mr-2" />
                Performance Measurement
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-indigo-800">
                    React DevTools Profiler
                  </div>
                  <div className="text-indigo-600">
                    Measure component render times and identify bottlenecks
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-indigo-800">
                    Lighthouse Audits
                  </div>
                  <div className="text-indigo-600">
                    Core Web Vitals: LCP, FID, CLS
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-indigo-800">
                    Bundle Analyzer
                  </div>
                  <div className="text-indigo-600">
                    Analyze bundle size and identify large dependencies
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-indigo-800">
                    Memory Profiler
                  </div>
                  <div className="text-indigo-600">
                    Detect memory leaks and excessive allocations
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Techniques */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Optimization Techniques
              </h4>
              <div className="space-y-3 text-sm">
                {simpleMode ? (
                  <>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">
                        React.memo
                      </div>
                      <div className="text-green-600">
                        Prevent unnecessary re-renders
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">useMemo</div>
                      <div className="text-green-600">
                        Cache expensive calculations
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">
                        useCallback
                      </div>
                      <div className="text-green-600">Memoize functions</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">
                        Memoization
                      </div>
                      <div className="text-green-600">
                        React.memo, useMemo, useCallback
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">
                        Code Splitting
                      </div>
                      <div className="text-green-600">
                        Lazy loading and dynamic imports
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">
                        Virtualization
                      </div>
                      <div className="text-green-600">
                        Render only visible items in large lists
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">
                        Bundle Optimization
                      </div>
                      <div className="text-green-600">
                        Tree shaking, minification, compression
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">
                        State Management
                      </div>
                      <div className="text-green-600">
                        Optimize state updates and avoid unnecessary re-renders
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-green-800">
                        Event Optimization
                      </div>
                      <div className="text-green-600">
                        Debounce, throttle, and optimize event handlers
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Common Pitfalls */}
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Common Performance Pitfalls
              </h4>
              <ul className="space-y-2 text-sm text-red-700">
                {simpleMode ? (
                  <>
                    <li>• Creating objects/functions in render</li>
                    <li>• Not using keys in lists</li>
                    <li>• Unnecessary re-renders</li>
                    <li>• Large bundle sizes</li>
                  </>
                ) : (
                  <>
                    <li>• Creating new objects/functions on every render</li>
                    <li>• Missing or incorrect keys in list rendering</li>
                    <li>
                      • Unnecessary component re-renders due to prop changes
                    </li>
                    <li>• Large bundle sizes without code splitting</li>
                    <li>• Blocking the main thread with heavy computations</li>
                    <li>• Memory leaks from uncleared timers/subscriptions</li>
                    <li>• Over-fetching data or not implementing caching</li>
                    <li>• Not optimizing images and media assets</li>
                    <li>• Excessive DOM manipulations outside React</li>
                    <li>• Not using React's built-in optimization tools</li>
                  </>
                )}
              </ul>
            </div>

            {/* Performance Best Practices */}
            <div className="bg-emerald-50 rounded-lg p-6">
              <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Performance Best Practices
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-emerald-800">
                    Profile First, Optimize Second
                  </div>
                  <div className="text-emerald-600">
                    Use React DevTools Profiler to identify actual bottlenecks
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-emerald-800">
                    Optimize Critical Path
                  </div>
                  <div className="text-emerald-600">
                    Focus on above-the-fold content and user interactions
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-emerald-800">
                    Use Production Builds
                  </div>
                  <div className="text-emerald-600">
                    Always test performance with production builds
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-emerald-800">
                    Implement Caching Strategies
                  </div>
                  <div className="text-emerald-600">
                    Cache API responses, computed values, and component renders
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Code Examples */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="space-y-6"
          >
            {/* useMemo Example */}
            <div className="bg-gray-900 rounded-lg p-4 text-base font-mono">
              <div className="text-slate-500 mb-2">
                // useMemo - Expensive Calculations
              </div>
              <div>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-cyan-300">expensiveValue</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                <span className="text-purple-400">useMemo</span>
                <span className="text-pink-400">(()</span>{" "}
                <span className="text-pink-400">=&gt;</span>{" "}
                <span className="text-pink-400">{"{"}</span>
              </div>
              <div className="ml-4">
                <div className="text-slate-500">
                  // Only recalculates when dependencies change
                </div>
                <div>
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-cyan-300">items</span>
                  <span className="text-pink-400">.</span>
                  <span className="text-purple-400">reduce</span>
                  <span className="text-pink-400">((</span>
                  <span className="text-cyan-300">sum</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">item</span>
                  <span className="text-pink-400">)</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-pink-400">return</span>{" "}
                    <span className="text-cyan-300">sum</span>{" "}
                    <span className="text-pink-400">+</span>{" "}
                    <span className="text-cyan-300">item</span>{" "}
                    <span className="text-pink-400">*</span>{" "}
                    <span className="text-cyan-300">item</span>
                    <span className="text-pink-400">;</span>
                  </div>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-green-300">0</span>
                  <span className="text-pink-400">);</span>
                </div>
              </div>
              <div>
                <span className="text-pink-400">{"}"}</span>
                <span className="text-pink-400">,</span>{" "}
                <span className="text-pink-400">[</span>
                <span className="text-cyan-300">items</span>
                <span className="text-pink-400">]);</span>
              </div>
            </div>

            {/* When to Use React vs Vanilla JS */}
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-3">
                When to Use React vs Vanilla JS
              </h4>
              <div className="space-y-4">
                <div className="bg-white rounded p-3">
                  <h5 className="font-medium text-orange-800 mb-2">
                    Use React When:
                  </h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Building complex user interfaces</li>
                    <li>• Need component reusability</li>
                    <li>• Team development with multiple developers</li>
                    <li>• State management is complex</li>
                    <li>• Need rapid prototyping</li>
                    <li>• Building large-scale applications</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h5 className="font-medium text-orange-800 mb-2">
                    Use Vanilla JS When:
                  </h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Simple static websites</li>
                    <li>• Performance is critical (gaming, animations)</li>
                    <li>• Bundle size must be minimal</li>
                    <li>• Direct DOM manipulation needed</li>
                    <li>• Single developer, simple project</li>
                    <li>• Legacy system integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Optimization Patterns */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-3">
                Advanced Optimization Patterns
              </h4>
              <div className="bg-gray-900 rounded p-3 text-base font-mono">
                <div className="text-slate-500">
                  // Custom hook for expensive operations
                </div>
                <div>
                  <span className="text-pink-400">function</span>{" "}
                  <span className="text-cyan-300">useExpensiveOperation</span>
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">data</span>
                  <span className="text-pink-400">)</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-cyan-300">result</span>{" "}
                    <span className="text-pink-400">=</span>{" "}
                    <span className="text-purple-400">useMemo</span>
                    <span className="text-pink-400">(()</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-pink-400">{"{"}</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-slate-500">
                      // Expensive computation here
                    </div>
                    <div>
                      <span className="text-pink-400">return</span>{" "}
                      <span className="text-cyan-300">processData</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-cyan-300">data</span>
                      <span className="text-pink-400">);</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-pink-400">{"}"}</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-pink-400">[</span>
                    <span className="text-cyan-300">data</span>
                    <span className="text-pink-400">]);</span>
                  </div>
                  <br />
                  <div>
                    <span className="text-pink-400">return</span>{" "}
                    <span className="text-cyan-300">result</span>
                    <span className="text-pink-400">;</span>
                  </div>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                </div>
              </div>
            </div>

            {/* Real-World Performance Comparison */}
            <div className="bg-indigo-50 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-800 mb-3">
                Real-World Performance Comparison
              </h4>
              <div className="space-y-4">
                <div className="bg-white rounded p-3">
                  <h5 className="font-medium text-indigo-800 mb-2">
                    Todo App (1000 items)
                  </h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-indigo-600">React:</div>
                      <div className="text-gray-600">
                        • Initial render: 45ms
                      </div>
                      <div className="text-gray-600">• Add item: 2ms</div>
                      <div className="text-gray-600">• Toggle item: 1ms</div>
                      <div className="text-gray-600">• Bundle: 125KB</div>
                    </div>
                    <div>
                      <div className="font-medium text-indigo-600">
                        Vanilla JS:
                      </div>
                      <div className="text-gray-600">
                        • Initial render: 15ms
                      </div>
                      <div className="text-gray-600">• Add item: 0.5ms</div>
                      <div className="text-gray-600">• Toggle item: 0.2ms</div>
                      <div className="text-gray-600">• Bundle: 8KB</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <h5 className="font-medium text-indigo-800 mb-2">
                    E-commerce Product Grid
                  </h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-indigo-600">React:</div>
                      <div className="text-gray-600">• 500 products: 120ms</div>
                      <div className="text-gray-600">• Filter: 15ms</div>
                      <div className="text-gray-600">• Sort: 8ms</div>
                      <div className="text-gray-600">• Memory: 15MB</div>
                    </div>
                    <div>
                      <div className="font-medium text-indigo-600">
                        Vanilla JS:
                      </div>
                      <div className="text-gray-600">• 500 products: 45ms</div>
                      <div className="text-gray-600">• Filter: 5ms</div>
                      <div className="text-gray-600">• Sort: 2ms</div>
                      <div className="text-gray-600">• Memory: 6MB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* useCallback Example */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">useCallback</h4>
              <div className="bg-gray-900 rounded p-3 text-base font-mono">
                <div className="text-slate-500">
                  // Memoize functions to prevent child re-renders
                </div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-cyan-300">handleClick</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">useCallback</span>
                  <span className="text-pink-400">(()</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-purple-400">setCount</span>
                    <span className="text-pink-400">((</span>
                    <span className="text-cyan-300">prevCount</span>
                    <span className="text-pink-400">)</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-cyan-300">prevCount</span>{" "}
                    <span className="text-pink-400">+</span>{" "}
                    <span className="text-green-300">1</span>
                    <span className="text-pink-400">);</span>
                  </div>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-pink-400">[]);</span>{" "}
                  <span className="text-slate-500">// No dependencies</span>
                </div>
                <br />
                <br />
                <div>
                  <span className="text-blue-300">{"<ChildComponent"}</span>{" "}
                  <span className="text-cyan-400">onClick</span>
                  <span className="text-pink-400">=</span>
                  <span className="text-pink-400">{"{"}</span>
                  <span className="text-cyan-300">handleClick</span>
                  <span className="text-pink-400">{"}"}</span>{" "}
                  <span className="text-blue-300">{"/>"}</span>
                </div>
              </div>
            </div>

            {/* React.memo Example */}
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">React.memo</h4>
              <div className="bg-gray-900 rounded p-3 text-base font-mono">
                <div className="text-slate-500">
                  // Prevent re-renders when props haven't changed
                </div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-cyan-300">ExpensiveComponent</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-purple-400">memo</span>
                  <span className="text-pink-400">((</span>
                  <span className="text-pink-400">{"{"}</span>
                  <span className="text-cyan-300">value</span>
                  <span className="text-pink-400">,</span>{" "}
                  <span className="text-cyan-300">onClick</span>
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">)</span>{" "}
                  <span className="text-pink-400">=&gt;</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <div className="text-slate-500">
                    // Only re-renders if value or onClick changes
                  </div>
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
                        <span className="text-white">Value: </span>
                        <span className="text-pink-400">{"{"}</span>
                        <span className="text-cyan-300">value</span>
                        <span className="text-pink-400">{"}"}</span>
                        <span className="text-blue-300">{"</p>"}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">{"<button"}</span>{" "}
                        <span className="text-cyan-400">onClick</span>
                        <span className="text-pink-400">=</span>
                        <span className="text-pink-400">{"{"}</span>
                        <span className="text-cyan-300">onClick</span>
                        <span className="text-pink-400">{"}"}</span>
                        <span className="text-blue-300">{">"}</span>
                        <span className="text-white">Click</span>
                        <span className="text-blue-300">{"</button>"}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-blue-300">{"</div>"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-pink-400">);</span>
                  </div>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                  <span className="text-pink-400">);</span>
                </div>
              </div>
            </div>

            {/* Advanced Toggle */}
            <Button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white"
            >
              {showAdvanced
                ? "Hide Advanced Techniques"
                : "Show Advanced Techniques"}
            </Button>
          </motion.div>
        </div>

        {/* Advanced Techniques */}
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6"
          >
            <h4 className="font-semibold text-orange-800 mb-4 text-center">
              Advanced Performance Techniques
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Code Splitting */}
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-gray-800 mb-2">
                  Code Splitting
                </h5>
                <div className="bg-gray-900 rounded p-3 text-base font-mono">
                  <div>
                    <span className="text-pink-400">import</span>{" "}
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-cyan-300">lazy</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">Suspense</span>
                    <span className="text-pink-400">{"}"}</span>{" "}
                    <span className="text-pink-400">from</span>{" "}
                    <span className="text-green-300">'react'</span>
                    <span className="text-pink-400">;</span>
                  </div>
                  <br />
                  <br />
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-cyan-300">LazyComponent</span>{" "}
                    <span className="text-pink-400">=</span>{" "}
                    <span className="text-purple-400">lazy</span>
                    <span className="text-pink-400">(()</span>{" "}
                    <span className="text-pink-400">=&gt;</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-pink-400">import</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-green-300">'./LazyComponent'</span>
                      <span className="text-pink-400">)</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-pink-400">);</span>
                  </div>
                  <br />
                  <br />
                  <div>
                    <span className="text-blue-300">{"<Suspense"}</span>{" "}
                    <span className="text-cyan-400">fallback</span>
                    <span className="text-pink-400">=</span>
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-blue-300">{"<div>"}</span>
                    <span className="text-white">Loading...</span>
                    <span className="text-blue-300">{"</div>"}</span>
                    <span className="text-pink-400">{"}"}</span>
                    <span className="text-blue-300">{">"}</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-blue-300">
                        {"<LazyComponent />"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-blue-300">{"</Suspense>"}</span>
                  </div>
                </div>
              </div>

              {/* Virtualization */}
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-gray-800 mb-2">
                  List Virtualization
                </h5>
                <div className="bg-gray-900 rounded p-3 text-base font-mono text-white overflow-auto leading-relaxed">
                  <div className="text-slate-500">
                    // Only render visible items
                  </div>
                  <div>
                    <span className="text-pink-400">import</span>{" "}
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-cyan-300">FixedSizeList</span>
                    <span className="text-pink-400">{"}"}</span>{" "}
                    <span className="text-pink-400">from</span>{" "}
                    <span className="text-green-300">'react-window'</span>
                    <span className="text-pink-400">;</span>
                  </div>
                  <br />
                  <div>
                    <span className="text-blue-300">{"<FixedSizeList"}</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-cyan-400">height</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-green-300">400</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">itemCount</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">items</span>
                      <span className="text-pink-400">.</span>
                      <span className="text-purple-400">length</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">itemSize</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-green-300">50</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-blue-300">{">"}</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-white">
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-pink-400">{"{"}</span>{" "}
                      <span className="text-cyan-300">index</span>
                      <span className="text-pink-400">,</span>{" "}
                      <span className="text-cyan-300">style</span>{" "}
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-pink-400">)</span>{" "}
                      <span className="text-pink-400">=&gt;</span>{" "}
                      <span className="text-pink-400">(</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-300">{"<div"}</span>{" "}
                      <span className="text-cyan-400">style</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">style</span>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-blue-300">{">"}</span>
                      <div className="ml-4 text-white">
                        <span className="text-pink-400">{"{"}</span>
                        <span className="text-cyan-300">items</span>
                        <span className="text-pink-400">[</span>
                        <span className="text-cyan-300">index</span>
                        <span className="text-pink-400">]</span>
                        <span className="text-pink-400">{"}"}</span>
                      </div>
                      <span className="text-blue-300">{"</div>"}</span>
                    </div>
                    <div className="text-white">
                      <span className="text-pink-400">)</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-blue-300">{"</FixedSizeList>"}</span>
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
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center bg-gradient-to-r from-yellow-600 to-green-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">⚡ Performance Mastery</h3>
          <p className="text-yellow-100">
            {simpleMode
              ? "Choose wisely! React offers development speed and maintainability, while Vanilla JS provides raw performance. Use the right tool for your project's needs."
              : "Performance optimization requires understanding trade-offs. React provides developer productivity and maintainability, while Vanilla JS offers raw performance. Choose based on your project's specific requirements and constraints."}
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/20 rounded p-3">
              <div className="font-semibold mb-1">React Choice:</div>
              <div className="text-yellow-100">
                Complex UIs, Team Development, Rapid Prototyping
              </div>
            </div>
            <div className="bg-white/20 rounded p-3">
              <div className="font-semibold mb-1">Vanilla JS Choice:</div>
              <div className="text-yellow-100">
                Simple Apps, Critical Performance, Minimal Bundles
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PerformanceSlide;
