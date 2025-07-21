import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, ToggleLeft, ToggleRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const ConditionalRenderingSlide = ({ simpleMode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [userRole, setUserRole] = useState("guest");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

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
          Conditional Rendering
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode
            ? "Show or Hide Content Based on Conditions"
            : "Dynamic UI Rendering Based on State and Props"}
        </motion.h2>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-center text-purple-800 mb-6">
              🎭 Conditional Rendering Playground
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Toggle Visibility Demo */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                  {isVisible ? (
                    <Eye className="w-5 h-5 mr-2" />
                  ) : (
                    <EyeOff className="w-5 h-5 mr-2" />
                  )}
                  Toggle Visibility
                </h4>
                <Button
                  onClick={() => setIsVisible(!isVisible)}
                  className="mb-4 w-full"
                >
                  {isVisible ? "Hide" : "Show"} Content
                </Button>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-blue-50 p-4 rounded border-l-4 border-blue-500"
                  >
                    <p className="text-blue-800">
                      🎉 This content is conditionally rendered!
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Role-based Rendering */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                  <ToggleRight className="w-5 h-5 mr-2" />
                  Role-based Content
                </h4>
                <div className="flex space-x-2 mb-4">
                  {["guest", "user", "admin"].map((role) => (
                    <Button
                      key={role}
                      onClick={() => setUserRole(role)}
                      variant={userRole === role ? "default" : "outline"}
                      size="sm"
                    >
                      {role}
                    </Button>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  {userRole === "guest" && (
                    <p className="text-gray-600">
                      👋 Welcome! Please log in to access more features.
                    </p>
                  )}
                  {userRole === "user" && (
                    <p className="text-blue-600">
                      🎯 Welcome back! You have access to user features.
                    </p>
                  )}
                  {userRole === "admin" && (
                    <p className="text-purple-600">
                      ⚡ Admin access granted! You can manage everything.
                    </p>
                  )}
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* What is Conditional Rendering */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                {simpleMode
                  ? "What is Conditional Rendering?"
                  : "Conditional Rendering Fundamentals"}
              </h3>

              {simpleMode ? (
                <div className="space-y-3 text-purple-700">
                  <p>Show different content based on conditions!</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Show/hide elements based on state</li>
                    <li>Display different content for different users</li>
                    <li>Handle loading and error states</li>
                    <li>Create dynamic, responsive UIs</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-purple-700">
                  <p>
                    Conditional rendering allows you to render different UI
                    elements based on certain conditions, making your
                    applications dynamic and responsive to state changes.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>State-driven UI updates</li>
                    <li>User role and permission-based rendering</li>
                    <li>Loading states and error handling</li>
                    <li>Feature flags and A/B testing</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Common Patterns */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3">
                Common Patterns
              </h4>
              <div className="space-y-3 text-sm">
                {simpleMode ? (
                  <>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        If Statement
                      </div>
                      <div className="text-blue-600">
                        Show content if condition is true
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        Ternary Operator
                      </div>
                      <div className="text-blue-600">
                        Show one thing or another
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        Logical AND
                      </div>
                      <div className="text-blue-600">
                        Show content only if true
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        Logical AND (&&)
                      </div>
                      <div className="text-blue-600">
                        condition && &lt;Component /&gt;
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        Ternary Operator
                      </div>
                      <div className="text-blue-600">
                        condition ? &lt;A /&gt; : &lt;B /&gt;
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        If Statements
                      </div>
                      <div className="text-blue-600">
                        Early returns and variable assignment
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="font-medium text-blue-800">
                        Switch Statements
                      </div>
                      <div className="text-blue-600">
                        Multiple conditions with clear cases
                      </div>
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
            {/* Basic Examples */}
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
              <div className="text-slate-500 mb-2">
                // Conditional Rendering Examples
              </div>

              {/* Logical AND */}
              <div className="mb-4">
                <div className="text-slate-500 text-xs">// Logical AND</div>
                <div>
                  <span className="text-pink-400">{"{"}</span>
                  <span className="text-cyan-300">isLoggedIn</span>{" "}
                  <span className="text-pink-400">&&</span>{" "}
                  <span className="text-blue-300">{"<div>"}</span>
                  <span className="text-gray-300">Welcome back!</span>
                  <span className="text-blue-300">{"</div>"}</span>
                  <span className="text-pink-400">{"}"}</span>
                </div>
              </div>

              {/* Ternary */}
              <div className="mb-4">
                <div className="text-slate-500 text-xs">
                  // Ternary Operator
                </div>
                <div>
                  <span className="text-pink-400">{"{"}</span>
                  <span className="text-cyan-300">isLoading</span>{" "}
                  <span className="text-pink-400">?</span>{" "}
                  <span className="text-blue-300">{"<Spinner />"}</span>{" "}
                  <span className="text-pink-400">:</span>{" "}
                  <span className="text-blue-300">{"<Content />"}</span>
                  <span className="text-pink-400">{"}"}</span>
                </div>
              </div>

              {/* If Statement */}
              <div>
                <div className="text-slate-500 text-xs">// If Statement</div>
                <div>
                  <span className="text-pink-400">if</span>{" "}
                  <span className="text-pink-400">(</span>
                  <span className="text-cyan-300">user</span>
                  <span className="text-pink-400">.</span>
                  <span className="text-cyan-300">role</span>{" "}
                  <span className="text-pink-400">===</span>{" "}
                  <span className="text-green-300">'admin'</span>
                  <span className="text-pink-400">)</span>{" "}
                  <span className="text-pink-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-blue-300">{"<AdminPanel />"}</span>
                  <span className="text-pink-400">;</span>
                </div>
                <div>
                  <span className="text-pink-400">{"}"}</span>
                </div>
                <div>
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-blue-300">{"<UserPanel />"}</span>
                  <span className="text-pink-400">;</span>
                </div>
              </div>
            </div>

            {/* List Rendering with Conditions */}
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">
                List with Conditions
              </h4>
              <div className="bg-white rounded-lg p-3 mb-3">
                <div className="text-sm text-gray-600 mb-2">
                  Items ({items.length}):
                </div>
                {items.length > 0 ? (
                  <ul className="space-y-1">
                    {items.map((item, index) => (
                      <li key={index} className="text-green-700 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    No items to display
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => setItems([])}
                  size="sm"
                  variant="outline"
                >
                  Clear List
                </Button>
                <Button
                  onClick={() => setItems(["Apple", "Banana", "Cherry"])}
                  size="sm"
                  variant="outline"
                >
                  Restore List
                </Button>
              </div>
            </div>

            {/* Advanced Toggle */}
            <Button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              {showAdvanced
                ? "Hide Advanced Patterns"
                : "Show Advanced Patterns"}
            </Button>
          </motion.div>
        </div>

        {/* Advanced Patterns */}
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6"
          >
            <div>
              <h4 className="font-semibold text-indigo-800 mb-4 text-center">
                Advanced Conditional Patterns
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Multiple Conditions */}
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-gray-800 mb-2">
                    Multiple Conditions
                  </h5>
                  <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                    <div>
                      <span className="text-pink-400">function</span>{" "}
                      <span className="text-cyan-300">StatusMessage</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">status</span>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-pink-400">)</span>{" "}
                      <span className="text-pink-400">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-pink-400">switch</span>{" "}
                      <span className="text-pink-400">(</span>
                      <span className="text-cyan-300">status</span>
                      <span className="text-pink-400">)</span>{" "}
                      <span className="text-pink-400">{"{"}</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-pink-400">case</span>{" "}
                      <span className="text-green-300">'loading'</span>
                      <span className="text-pink-400">:</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-pink-400">return</span>{" "}
                      <span className="text-blue-300">{"<Spinner />"}</span>
                      <span className="text-pink-400">;</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-pink-400">case</span>{" "}
                      <span className="text-green-300">'error'</span>
                      <span className="text-pink-400">:</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-pink-400">return</span>{" "}
                      <span className="text-blue-300">{"<Error />"}</span>
                      <span className="text-pink-400">;</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-pink-400">case</span>{" "}
                      <span className="text-green-300">'success'</span>
                      <span className="text-pink-400">:</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-pink-400">return</span>{" "}
                      <span className="text-blue-300">{"<Data />"}</span>
                      <span className="text-pink-400">;</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-pink-400">default</span>
                      <span className="text-pink-400">:</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-pink-400">return</span>{" "}
                      <span className="text-orange-300">null</span>
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

              {/* Conditional Classes */}
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-gray-800 mb-2">
                  Conditional Styling
                </h5>
                <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                  <div>
                    <span className="text-blue-300">{"<button"}</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-cyan-400">className</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-pink-400">`</span>
                      <span className="text-gray-300">btn </span>
                      <span className="text-pink-400">{"${"}</span>
                      <span className="text-cyan-300">isActive</span>{" "}
                      <span className="text-pink-400">?</span>{" "}
                      <span className="text-green-300">"active"</span>{" "}
                      <span className="text-pink-400">:</span>{" "}
                      <span className="text-green-300">""</span>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-pink-400">`</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">disabled</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">isLoading</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-blue-300">{">"}</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">isLoading</span>{" "}
                      <span className="text-pink-400">?</span>{" "}
                      <span className="text-green-300">"Loading..."</span>{" "}
                      <span className="text-pink-400">:</span>{" "}
                      <span className="text-green-300">"Submit"</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-blue-300">{"</button>"}</span>
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
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">🎭 Conditional Magic</h3>
          <p className="text-purple-100">
            {simpleMode
              ? "Conditional rendering makes your UI smart! Show the right content at the right time based on your app's state."
              : "Master conditional rendering to create dynamic, responsive UIs that adapt to user state, permissions, and application conditions."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ConditionalRenderingSlide;
