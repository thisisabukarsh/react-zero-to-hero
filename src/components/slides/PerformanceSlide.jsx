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
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16">
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
          {/* Left Column - Concepts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
                  </ul>
                </div>
              )}
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
            {/* useMemo Example */}
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
              <div className="text-gray-400 mb-2">
                // useMemo - Expensive Calculations
              </div>
              <div className="text-blue-400">const</div>{" "}
              <span className="text-yellow-400">expensiveValue</span> ={" "}
              <span className="text-green-400">useMemo</span>(() =&gt; {"{"}
              <div className="ml-4">
                <div className="text-gray-400">
                  // Only recalculates when dependencies change
                </div>
                <div className="text-blue-400">return</div>{" "}
                <span className="text-yellow-400">items</span>.
                <span className="text-green-400">reduce</span>((
                <span className="text-yellow-400">sum</span>,{" "}
                <span className="text-yellow-400">item</span>) =&gt; {"{"}
                <div className="ml-4">
                  <div className="text-blue-400">return</div>{" "}
                  <span className="text-yellow-400">sum</span> +{" "}
                  <span className="text-yellow-400">item</span> *{" "}
                  <span className="text-yellow-400">item</span>;
                </div>
                {"}"}, <span className="text-orange-400">0</span>);
              </div>
              {"}"}, [<span className="text-yellow-400">items</span>]);
            </div>

            {/* useCallback Example */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">useCallback</h4>
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <div className="text-gray-400">
                  // Memoize functions to prevent child re-renders
                </div>
                <div className="text-blue-400">const</div>{" "}
                <span className="text-yellow-400">handleClick</span> ={" "}
                <span className="text-green-400">useCallback</span>(() =&gt;{" "}
                {"{"}
                <div className="ml-4">
                  <div>
                    <span className="text-green-400">setCount</span>(
                    <span className="text-yellow-400">prevCount</span> =&gt;{" "}
                    <span className="text-yellow-400">prevCount</span> +{" "}
                    <span className="text-orange-400">1</span>);
                  </div>
                </div>
                {"}"}, []);{" "}
                <span className="text-gray-400">// No dependencies</span>
                <br />
                <br />
                <div className="text-green-400">&lt;ChildComponent</div>{" "}
                <span className="text-yellow-400">onClick</span>=
                {"{handleClick}"} <span className="text-green-400">/&gt;</span>
              </div>
            </div>

            {/* React.memo Example */}
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">React.memo</h4>
              <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                <div className="text-gray-400">
                  // Prevent re-renders when props haven't changed
                </div>
                <div className="text-blue-400">const</div>{" "}
                <span className="text-yellow-400">ExpensiveComponent</span> ={" "}
                <span className="text-green-400">memo</span>((
                {"{value, onClick}"}) =&gt; {"{"}
                <div className="ml-4">
                  <div className="text-gray-400">
                    // Only re-renders if value or onClick changes
                  </div>
                  <div className="text-blue-400">return</div> (
                  <div className="ml-4">
                    <div className="text-green-400">&lt;div&gt;</div>
                    <div className="ml-4">
                      <div className="text-green-400">&lt;p&gt;</div>Value:{" "}
                      {"{value}"}
                      <div className="text-green-400">&lt;/p&gt;</div>
                      <div className="text-green-400">&lt;button</div>{" "}
                      <span className="text-yellow-400">onClick</span>=
                      {"{onClick}"}
                      <div className="text-green-400">&gt;</div>Click
                      <div className="text-green-400">&lt;/button&gt;</div>
                    </div>
                    <div className="text-green-400">&lt;/div&gt;</div>
                  </div>
                  );
                </div>
                {"}"});
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
                <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                  <div className="text-blue-400">import</div>{" "}
                  {"{lazy, Suspense}"}{" "}
                  <span className="text-blue-400">from</span>{" "}
                  <span className="text-green-400">'react'</span>;
                  <br />
                  <br />
                  <div className="text-blue-400">const</div>{" "}
                  <span className="text-yellow-400">LazyComponent</span> ={" "}
                  <span className="text-green-400">lazy</span>(() =&gt;
                  <div className="ml-4">
                    <div>
                      <span className="text-blue-400">import</span>(
                      <span className="text-green-400">'./LazyComponent'</span>)
                    </div>
                  </div>
                  );
                  <br />
                  <br />
                  <div className="text-green-400">&lt;Suspense</div>{" "}
                  <span className="text-yellow-400">fallback</span>=
                  {"{<div>Loading...</div>}"}
                  <div className="text-green-400">&gt;</div>
                  <div className="ml-4">
                    <div className="text-green-400">
                      &lt;LazyComponent /&gt;
                    </div>
                  </div>
                  <div className="text-green-400">&lt;/Suspense&gt;</div>
                </div>
              </div>

              {/* Virtualization */}
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-gray-800 mb-2">
                  List Virtualization
                </h5>
                <div className="bg-gray-900 rounded p-3 text-xs font-mono text-white overflow-auto leading-relaxed">
                  <div className="text-gray-400">
                    // Only render visible items
                  </div>
                  <div>
                    <span className="text-blue-400">import</span>{" "}
                    {"{FixedSizeList}"}{" "}
                    <span className="text-blue-400">from</span>{" "}
                    <span className="text-green-400">'react-window'</span>;
                  </div>
                  <br />
                  <div>
                    <span className="text-green-400">&lt;FixedSizeList</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-yellow-400">height</span>
                      =&#123;400&#125;
                    </div>
                    <div>
                      <span className="text-yellow-400">itemCount</span>
                      =&#123;items.length&#125;
                    </div>
                    <div>
                      <span className="text-yellow-400">itemSize</span>
                      =&#123;50&#125;
                    </div>
                  </div>
                  <div className="text-green-400">&gt;</div>
                  <div className="ml-4">
                    <div className="text-white">
                      &#123;(&#123; index, style &#125;) =&gt; (
                    </div>
                    <div className="ml-4">
                      <span className="text-green-400">&lt;div</span>{" "}
                      <span className="text-yellow-400">style</span>
                      =&#123;style&#125;
                      <span className="text-green-400">&gt;</span>
                      <div className="ml-4 text-white">
                        &#123;items[index]&#125;
                      </div>
                      <span className="text-green-400">&lt;/div&gt;</span>
                    </div>
                    <div className="text-white">)&#125;</div>
                  </div>
                  <div className="text-green-400">&lt;/FixedSizeList&gt;</div>
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
          className="text-center bg-gradient-to-r from-yellow-600 to-green-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">⚡ Performance Mastery</h3>
          <p className="text-yellow-100">
            {simpleMode
              ? "Optimize smartly! Use React's built-in tools like memo, useMemo, and useCallback to keep your apps fast and responsive."
              : "Performance optimization is about making strategic choices. Profile first, optimize bottlenecks, and use React's memoization tools judiciously to create lightning-fast user experiences."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PerformanceSlide;
