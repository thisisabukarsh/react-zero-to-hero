import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowDown, Package, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const PropsSlide = ({ simpleMode }) => {
  const [selectedExample, setSelectedExample] = useState(0);

  // Update the examples array with enhanced styling and outputs
  const examples = [
    {
      title: "Basic Props",
      code: (
        <div className="space-y-1">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-yellow-400">Greeting</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-purple-400">(props)</span>{" "}
            <span className="text-white">{"=>"}</span>{" "}
            <span className="text-white">{"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-green-400">&lt;div</span>{" "}
            <span className="text-blue-400">className</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"greeting"</span>
            <span className="text-green-400">&gt;</span>
            <br />
            <div className="ml-4">
              <span className="text-green-400">&lt;h1</span>{" "}
              <span className="text-blue-400">className</span>
              <span className="text-white">=</span>
              <span className="text-orange-400">"greeting-text"</span>
              <span className="text-green-400">&gt;</span>
              Hello, <span className="text-orange-400">{"{"}</span>
              <span className="text-blue-400">props.name</span>
              <span className="text-orange-400">{"}"}</span>!
              <span className="text-green-400">&lt;/h1&gt;</span>
            </div>
            <span className="text-green-400">&lt;/div&gt;</span>
          </div>
          <div className="text-white">{"}"}</div>
          <div className="mt-2">
            <span className="text-green-400">&lt;Greeting</span>{" "}
            <span className="text-blue-400">name</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"Alice"</span>
            <span className="text-green-400">/&gt;</span>
          </div>
        </div>
      ),
      output: (
        <div className="bg-white/80 p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-blue-800">Hello, Alice!</h1>
        </div>
      ),
    },
    {
      title: "Multiple Props",
      code: (
        <div className="space-y-1">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-yellow-400">UserCard</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-purple-400">(props)</span>{" "}
            <span className="text-white">{"=>"}</span>{" "}
            <span className="text-white">{"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-white">(</span>
          </div>
          <div className="ml-8">
            <span className="text-green-400">&lt;div</span>{" "}
            <span className="text-blue-400">className</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"user-card"</span>
            <span className="text-green-400">&gt;</span>
          </div>
          <div className="ml-12">
            <span className="text-green-400">&lt;h2</span>{" "}
            <span className="text-blue-400">className</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"name"</span>
            <span className="text-green-400">&gt;</span>
            <span className="text-orange-400">{"{"}</span>
            <span className="text-blue-400">props.name</span>
            <span className="text-orange-400">{"}"}</span>
            <span className="text-green-400">&lt;/h2&gt;</span>
          </div>
          <div className="ml-12">
            <span className="text-green-400">&lt;div</span>{" "}
            <span className="text-blue-400">className</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"details"</span>
            <span className="text-green-400">&gt;</span>
          </div>
          <div className="ml-16">
            <span className="text-green-400">&lt;p&gt;</span>
            Age: <span className="text-orange-400">{"{"}</span>
            <span className="text-blue-400">props.age</span>
            <span className="text-orange-400">{"}"}</span>
            <span className="text-green-400">&lt;/p&gt;</span>
          </div>
          <div className="ml-16">
            <span className="text-green-400">&lt;p&gt;</span>
            Role: <span className="text-orange-400">{"{"}</span>
            <span className="text-blue-400">props.role</span>
            <span className="text-orange-400">{"}"}</span>
            <span className="text-green-400">&lt;/p&gt;</span>
          </div>
          <div className="ml-12">
            <span className="text-green-400">&lt;/div&gt;</span>
          </div>
          <div className="ml-8">
            <span className="text-green-400">&lt;/div&gt;</span>
          </div>
          <div className="ml-4">);</div>
          <div className="text-white">{"}"}</div>
          <div className="mt-2">
            <span className="text-green-400">&lt;UserCard</span>{" "}
            <span className="text-blue-400">name</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"Bob"</span>{" "}
            <span className="text-blue-400">age</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">{"{25}"}</span>{" "}
            <span className="text-blue-400">role</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"Developer"</span>
            <span className="text-green-400">/&gt;</span>
          </div>
        </div>
      ),
      output: (
        <div className="bg-white/80 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Bob</h2>
          <div className="space-y-1">
            <p className="text-blue-600">
              Age: <span className="font-medium">25</span>
            </p>
            <p className="text-blue-600">
              Role: <span className="font-medium">Developer</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Destructured Props",
      code: (
        <div className="space-y-1">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-yellow-400">Button</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-white">{"({ "}</span>
            <span className="text-blue-400">text, color, onClick</span>
            <span className="text-white">{" })"}</span>{" "}
            <span className="text-white">{"=>"}</span>{" "}
            <span className="text-white">{"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-white">(</span>
          </div>
          <div className="ml-8">
            <span className="text-green-400">&lt;button</span>{" "}
            <span className="text-blue-400">className</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"custom-btn"</span>{" "}
            <span className="text-blue-400">style</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">
              {"{{ backgroundColor: color }}"}
            </span>{" "}
            <span className="text-blue-400">onClick</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">{"{onClick}"}</span>
            <span className="text-green-400">&gt;</span>
            <span className="text-orange-400">{"{"}</span>
            <span className="text-blue-400">text</span>
            <span className="text-orange-400">{"}"}</span>
            <span className="text-green-400">&lt;/button&gt;</span>
          </div>
          <div className="ml-4">);</div>
          <div className="text-white">{"}"}</div>
          <div className="mt-2">
            <span className="text-green-400">&lt;Button</span>{" "}
            <span className="text-blue-400">text</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"Click me!"</span>{" "}
            <span className="text-blue-400">color</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">"#3B82F6"</span>{" "}
            <span className="text-blue-400">onClick</span>
            <span className="text-white">=</span>
            <span className="text-orange-400">{"{"}</span>
            <span className="text-blue-400">{"() => alert('Clicked!')"}</span>
            <span className="text-orange-400">{"}"}</span>
            <span className="text-green-400">/&gt;</span>
          </div>
        </div>
      ),
      output: (
        <div className="bg-white/80 p-4 rounded-lg shadow-sm flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => alert("Example Button")}
          >
            Click me!
          </button>
        </div>
      ),
    },
  ];

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
          Props
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode
            ? "Passing Data to Components"
            : "Properties - Data Flow in React"}
        </motion.h2>

        {/* Visual Metaphor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center space-x-8 mb-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Parent Component
              </motion.div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-8 h-8 text-blue-600 rotate-270" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Child Component
              </motion.div>
            </div>
            <p className="text-blue-700 font-medium">
              {simpleMode
                ? "Props flow down from parent to child"
                : "Unidirectional data flow via props"}
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
            {/* What are Props */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <Package className="w-6 h-6 mr-2" />
                {simpleMode ? "What are Props?" : "Props Fundamentals"}
              </h3>

              {simpleMode ? (
                <div className="space-y-3 text-blue-700">
                  <p>Props are like arguments you pass to a function!</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Send data from parent to child</li>
                    <li>Make components flexible and reusable</li>
                    <li>Read-only (can't be changed by child)</li>
                    <li>Can be any type: text, numbers, functions</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-blue-700">
                  <p>
                    Props (properties) are read-only data passed from parent to
                    child components, enabling component reusability and
                    composition.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Immutable: Props cannot be modified by the receiving
                      component
                    </li>
                    <li>Unidirectional: Data flows down the component tree</li>
                    <li>
                      Type-flexible: Can pass strings, numbers, objects,
                      functions, etc.
                    </li>
                    <li>
                      Validation: Can be validated using PropTypes or TypeScript
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Props Rules */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                {simpleMode ? "Props Rules" : "Props Best Practices"}
              </h4>
              <ul className="space-y-2 text-sm text-yellow-700">
                {simpleMode ? (
                  <>
                    <li>• Props are read-only</li>
                    <li>• Always flow from parent to child</li>
                    <li>• Use descriptive names</li>
                    <li>• Can have default values</li>
                  </>
                ) : (
                  <>
                    <li>• Never modify props directly (immutability)</li>
                    <li>• Use destructuring for cleaner code</li>
                    <li>• Provide default values with defaultProps</li>
                    <li>• Validate props with PropTypes or TypeScript</li>
                    <li>• Keep prop interfaces simple and focused</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Interactive Examples */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            {/* Example Selector */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Interactive Examples
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {examples.map((example, index) => (
                  <Button
                    key={index}
                    onClick={() => setSelectedExample(index)}
                    variant={selectedExample === index ? "default" : "outline"}
                    size="sm"
                    className="text-xs"
                  >
                    {example.title}
                  </Button>
                ))}
              </div>

              {/* Code Example */}
              <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono mb-4">
                <div className="text-gray-400 mb-2">
                  // {examples[selectedExample].title}
                </div>
                <pre className="text-green-400 whitespace-pre-wrap">
                  {examples[selectedExample].code}
                </pre>
              </div>

              {/* Output */}
              <div className="bg-green-100 rounded-lg p-3">
                <div className="text-green-800 font-medium text-sm">
                  Output:
                </div>
                <div className="text-green-700 text-sm">
                  {examples[selectedExample].output}
                </div>
              </div>
            </div>

            {/* Props vs State Preview */}
            <div className="bg-cyan-50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-800 mb-3">
                Props vs State (Preview)
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-cyan-800">Props</div>
                  <div className="text-cyan-600">• Read-only</div>
                  <div className="text-cyan-600">• From parent</div>
                  <div className="text-cyan-600">• External data</div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-cyan-800">State</div>
                  <div className="text-cyan-600">• Can change</div>
                  <div className="text-cyan-600">• Internal</div>
                  <div className="text-cyan-600">• Component data</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Real-world Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg p-6 mb-8"
        >
          <h4 className="font-semibold text-purple-800 mb-4 text-center">
            🌟 Real-world Example: Social Media Post
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono">
              <div className="text-gray-400 mb-2">
                // Reusable Post Component
              </div>
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-400">Post</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-white">{"({ "}</span>
                <span className="text-blue-400">
                  author, content, likes, time
                </span>
                <span className="text-white">{" })"}</span>{" "}
                <span className="text-white">{"=>"}</span>{" "}
                <span className="text-white">{"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-white">(</span>
              </div>
              <div className="ml-8">
                <span className="text-green-400">&lt;div</span>{" "}
                <span className="text-blue-400">className</span>
                <span className="text-white">=</span>
                <span className="text-orange-400">"post-card"</span>
                <span className="text-green-400">&gt;</span>
              </div>
              <div className="ml-12">
                <span className="text-green-400">&lt;h3</span>{" "}
                <span className="text-blue-400">className</span>
                <span className="text-white">=</span>
                <span className="text-orange-400">"author-name"</span>
                <span className="text-green-400">&gt;</span>
                <span className="text-orange-400">{"{"}</span>
                <span className="text-blue-400">author</span>
                <span className="text-orange-400">{"}"}</span>
                <span className="text-green-400">&lt;/h3&gt;</span>
              </div>
              <div className="ml-12">
                <span className="text-green-400">&lt;p</span>{" "}
                <span className="text-blue-400">className</span>
                <span className="text-white">=</span>
                <span className="text-orange-400">"content"</span>
                <span className="text-green-400">&gt;</span>
                <span className="text-orange-400">{"{"}</span>
                <span className="text-blue-400">content</span>
                <span className="text-orange-400">{"}"}</span>
                <span className="text-green-400">&lt;/p&gt;</span>
              </div>
              <div className="ml-12">
                <span className="text-green-400">&lt;span</span>{" "}
                <span className="text-blue-400">className</span>
                <span className="text-white">=</span>
                <span className="text-orange-400">"meta-info"</span>
                <span className="text-green-400">&gt;</span>
                <span className="text-orange-400">{"{"}</span>
                <span className="text-blue-400">likes</span>
                <span className="text-orange-400">{"}"}</span>
                {" likes • "}
                <span className="text-orange-400">{"{"}</span>
                <span className="text-blue-400">time</span>
                <span className="text-orange-400">{"}"}</span>
                <span className="text-green-400">&lt;/span&gt;</span>
              </div>
              <div className="ml-8">
                <span className="text-green-400">&lt;/div&gt;</span>
              </div>
              <div className="ml-4">
                <span className="text-white">)</span>;
              </div>
              <div>
                <span className="text-white">{"}"}</span>;
              </div>
              <div className="mt-4 text-gray-400">// Usage Example</div>
              <div className="mt-2">
                <span className="text-green-400">&lt;Post</span>{" "}
                <span className="text-blue-400">author</span>
                <span className="text-white">=</span>
                <span className="text-orange-400">"John Doe"</span>{" "}
                <span className="text-blue-400">content</span>
                <span className="text-white">=</span>
                <span className="text-orange-400">
                  "Just learned React props! 🚀"
                </span>{" "}
                <span className="text-blue-400">likes</span>
                <span className="text-white">=</span>
                <span className="text-orange-400">{"{42}"}</span>{" "}
                <span className="text-blue-400">time</span>
                <span className="text-white">=</span>
                <span className="text-orange-400">"2 hours ago"</span>
                <span className="text-green-400">/&gt;</span>
              </div>
            </div>

            {/* Live Examples */}
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <div className="font-bold text-gray-800 mb-2">John Doe</div>
                <div className="text-gray-600 text-sm mb-3">
                  Just learned React props! 🚀
                </div>
                <div className="text-gray-500 text-xs flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-blue-500">❤️</span> 42 likes
                  </span>
                  <span>•</span>
                  <span>2 hours ago</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <div className="font-bold text-gray-800 mb-2">Jane Smith</div>
                <div className="text-gray-600 text-sm mb-3">
                  Props make components so reusable! 💪
                </div>
                <div className="text-gray-500 text-xs flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-blue-500">❤️</span> 18 likes
                  </span>
                  <span>•</span>
                  <span>1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">📦 Props Power</h3>
          <p className="text-blue-100">
            {simpleMode
              ? "Props let you customize components with different data - like filling out a form template!"
              : "Props enable component reusability by allowing data to flow down the component tree, making your components flexible and composable."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PropsSlide;
