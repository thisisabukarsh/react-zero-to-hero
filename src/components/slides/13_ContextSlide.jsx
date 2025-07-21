import { motion } from "framer-motion";
import { useState, createContext, useContext } from "react";
import { Globe, Users, Share2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

// Demo Context
const ThemeContext = createContext();
const UserContext = createContext();

const ContextSlide = ({ simpleMode }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({ name: "John Doe", role: "developer" });
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16 my-20 overflow-y-hidden">
          <div className="max-w-6xl w-full">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-800 mb-4 sm:mb-6 text-center"
            >
              Context API
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
            >
              {simpleMode
                ? "Share Data Globally Without Prop Drilling"
                : "Global State Management and Data Sharing"}
            </motion.h2>

            {/* Visual Metaphor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 sm:mb-12"
            >
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8">
                <h3 className="text-xl font-bold text-center text-green-800 mb-6">
                  🌐 Context vs Prop Drilling
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Prop Drilling */}
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-medium text-red-800 mb-4 text-center">
                      ❌ Prop Drilling
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-red-200 p-3 rounded text-center">
                        <div className="font-medium">App</div>
                        <div className="text-sm">user={"{user}"}</div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-px h-6 bg-red-400"></div>
                      </div>
                      <div className="bg-red-200 p-3 rounded text-center">
                        <div className="font-medium">Header</div>
                        <div className="text-sm">user={"{user}"}</div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-px h-6 bg-red-400"></div>
                      </div>
                      <div className="bg-red-200 p-3 rounded text-center">
                        <div className="font-medium">UserProfile</div>
                        <div className="text-sm">Uses user data</div>
                      </div>
                    </div>
                  </div>

                  {/* Context */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-medium text-green-800 mb-4 text-center">
                      ✅ Context API
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-green-200 p-3 rounded text-center">
                        <div className="font-medium">App (Provider)</div>
                        <div className="text-sm">Provides user context</div>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="w-px h-6 bg-green-400"></div>
                        <div className="w-px h-6 bg-green-400"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-100 p-2 rounded text-center text-sm">
                          <div className="font-medium">Header</div>
                          <div className="text-xs">No props needed</div>
                        </div>
                        <div className="bg-green-200 p-2 rounded text-center text-sm">
                          <div className="font-medium">UserProfile</div>
                          <div className="text-xs">useContext(UserContext)</div>
                        </div>
                      </div>
                    </div>
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
              <ContextDemo />
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
                {/* What is Context */}
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <Globe className="w-6 h-6 mr-2" />
                    {simpleMode
                      ? "What is Context?"
                      : "Context API Fundamentals"}
                  </h3>

                  {simpleMode ? (
                    <div className="space-y-3 text-green-700">
                      <p>
                        Context lets you share data with any component without
                        passing props down manually!
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>No more prop drilling</li>
                        <li>Global state management</li>
                        <li>Perfect for themes, user data, settings</li>
                        <li>Components can access data directly</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-3 text-green-700">
                      <p>
                        Context provides a way to pass data through the
                        component tree without having to pass props down
                        manually at every level.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          Eliminates prop drilling for deeply nested components
                        </li>
                        <li>
                          Global state management for application-wide data
                        </li>
                        <li>Provider-Consumer pattern for data distribution</li>
                        <li>
                          Automatic re-rendering when context value changes
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* When to Use Context */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    When to Use Context
                  </h4>
                  <div className="space-y-3 text-sm">
                    {simpleMode ? (
                      <>
                        <div className="bg-white rounded p-3">
                          <div className="font-medium text-blue-800">
                            Theme Settings
                          </div>
                          <div className="text-blue-600">
                            Dark/light mode across app
                          </div>
                        </div>
                        <div className="bg-white rounded p-3">
                          <div className="font-medium text-blue-800">
                            User Authentication
                          </div>
                          <div className="text-blue-600">Current user info</div>
                        </div>
                        <div className="bg-white rounded p-3">
                          <div className="font-medium text-blue-800">
                            Language Settings
                          </div>
                          <div className="text-blue-600">
                            Internationalization
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-white rounded p-3">
                          <div className="font-medium text-blue-800">
                            Global UI State
                          </div>
                          <div className="text-blue-600">
                            Themes, modals, notifications
                          </div>
                        </div>
                        <div className="bg-white rounded p-3">
                          <div className="font-medium text-blue-800">
                            Authentication
                          </div>
                          <div className="text-blue-600">
                            User sessions and permissions
                          </div>
                        </div>
                        <div className="bg-white rounded p-3">
                          <div className="font-medium text-blue-800">
                            Application Settings
                          </div>
                          <div className="text-blue-600">
                            Configuration and preferences
                          </div>
                        </div>
                        <div className="bg-white rounded p-3">
                          <div className="font-medium text-blue-800">
                            Shared Resources
                          </div>
                          <div className="text-blue-600">
                            API clients, caches, utilities
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
                transition={{ duration: 0.6, delay: 1.0 }}
                className="space-y-6"
              >
                {/* Basic Context Example */}
                <div className="bg-gray-900 rounded-lg p-4 text-base font-mono">
                  <div className="text-slate-500 mb-2">
                    // Creating and Using Context
                  </div>

                  {/* Create Context */}
                  <div className="mb-4">
                    <div className="text-slate-500 text-xs">
                      // 1. Create Context
                    </div>
                    <div>
                      <span className="text-pink-400">const</span>{" "}
                      <span className="text-cyan-300">ThemeContext</span>{" "}
                      <span className="text-pink-400">=</span>{" "}
                      <span className="text-purple-400">createContext</span>
                      <span className="text-pink-400">()</span>
                      <span className="text-pink-400">;</span>
                    </div>
                  </div>

                  {/* Provider */}
                  <div className="mb-4">
                    <div className="text-slate-500 text-xs">
                      // 2. Provide Context
                    </div>
                    <div>
                      <span className="text-blue-300">
                        {"<ThemeContext.Provider"}
                      </span>
                    </div>
                    <div className="ml-4">
                      <span className="text-cyan-400">value</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">theme</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-300">{">"}</span>
                    </div>
                    <div className="ml-4">
                      <div>
                        <span className="text-blue-300">{"<App />"}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-blue-300">
                        {"</ThemeContext.Provider>"}
                      </span>
                    </div>
                  </div>

                  {/* Consumer */}
                  <div>
                    <div className="text-slate-500 text-xs">
                      // 3. Consume Context
                    </div>
                    <div>
                      <span className="text-pink-400">const</span>{" "}
                      <span className="text-cyan-300">theme</span>{" "}
                      <span className="text-pink-400">=</span>{" "}
                      <span className="text-purple-400">useContext</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-cyan-300">ThemeContext</span>
                      <span className="text-pink-400">)</span>
                      <span className="text-pink-400">;</span>
                    </div>
                  </div>
                </div>

                {/* Complete Example */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Complete Example
                  </h4>
                  <div className="bg-gray-900 rounded p-3 text-base font-mono">
                    <div className="text-slate-500">
                      // Theme Provider Component
                    </div>
                    <div>
                      <span className="text-pink-400">function</span>{" "}
                      <span className="text-cyan-300">ThemeProvider</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">children</span>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-pink-400">)</span>{" "}
                      <span className="text-pink-400">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <div>
                        <span className="text-pink-400">const</span>{" "}
                        <span className="text-pink-400">[</span>
                        <span className="text-cyan-300">theme</span>
                        <span className="text-pink-400">,</span>{" "}
                        <span className="text-cyan-300">setTheme</span>
                        <span className="text-pink-400">]</span>{" "}
                        <span className="text-pink-400">=</span>{" "}
                        <span className="text-purple-400">useState</span>
                        <span className="text-pink-400">(</span>
                        <span className="text-green-300">'light'</span>
                        <span className="text-pink-400">)</span>
                        <span className="text-pink-400">;</span>
                      </div>
                      <br />
                      <div>
                        <span className="text-pink-400">return</span>{" "}
                        <span className="text-pink-400">(</span>
                      </div>
                      <div className="ml-4">
                        <div>
                          <span className="text-blue-300">
                            {"<ThemeContext.Provider"}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div>
                            <span className="text-cyan-400">value</span>
                            <span className="text-pink-400">=</span>
                            <span className="text-pink-400">{"{"}</span>
                            <span className="text-pink-400">{"{"}</span>{" "}
                            <span className="text-cyan-300">theme</span>
                            <span className="text-pink-400">,</span>{" "}
                            <span className="text-cyan-300">setTheme</span>{" "}
                            <span className="text-pink-400">{"}"}</span>
                            <span className="text-pink-400">{"}"}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div>
                            <span className="text-pink-400">{"{"}</span>
                            <span className="text-cyan-300">children</span>
                            <span className="text-pink-400">{"}"}</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-blue-300">
                            {"</ThemeContext.Provider>"}
                          </span>
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
                </div>

                {/* Advanced Toggle */}
                <Button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
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
                className="mb-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6"
              >
                <h4 className="font-semibold text-purple-800 mb-4 text-center">
                  Advanced Context Patterns
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Multiple Contexts */}
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Multiple Contexts
                    </h5>
                    <div className="bg-gray-900 rounded p-3 text-base font-mono">
                      <div>
                        <span className="text-blue-300">
                          {"<AuthProvider>"}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div>
                          <span className="text-blue-300">
                            {"<ThemeProvider>"}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div>
                            <span className="text-blue-300">
                              {"<LanguageProvider>"}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div>
                              <span className="text-blue-300">{"<App />"}</span>
                            </div>
                          </div>
                          <div>
                            <span className="text-blue-300">
                              {"</LanguageProvider>"}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-blue-300">
                            {"</ThemeProvider>"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-blue-300">
                          {"</AuthProvider>"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Context with Reducer */}
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Context + useReducer
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
                        <span className="text-blue-300">
                          {"<StateContext.Provider"}
                        </span>
                      </div>
                      <div className="ml-4">
                        <span className="text-cyan-400">value</span>
                        <span className="text-pink-400">=</span>
                        <span className="text-pink-400">{"{"}</span>
                        <span className="text-cyan-300">state</span>
                        <span className="text-pink-400">{"}"}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">{">"}</span>
                      </div>
                      <div className="ml-4">
                        <div>
                          <span className="text-blue-300">
                            {"<DispatchContext.Provider"}
                          </span>
                        </div>
                        <div className="ml-4">
                          <span className="text-cyan-400">value</span>
                          <span className="text-pink-400">=</span>
                          <span className="text-pink-400">{"{"}</span>
                          <span className="text-cyan-300">dispatch</span>
                          <span className="text-pink-400">{"}"}</span>
                        </div>
                        <div>
                          <span className="text-blue-300">{">"}</span>
                        </div>
                        <div className="ml-4">
                          <div>
                            <span className="text-pink-400">{"{"}</span>
                            <span className="text-cyan-300">children</span>
                            <span className="text-pink-400">{"}"}</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-blue-300">
                            {"</DispatchContext.Provider>"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-blue-300">
                          {"</StateContext.Provider>"}
                        </span>
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
              className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-2">🌐 Context Power</h3>
              <p className="text-green-100">
                {simpleMode
                  ? "Context API eliminates prop drilling and makes global state management simple and elegant!"
                  : "Context API provides an elegant solution for sharing state across component trees, eliminating prop drilling while maintaining React's unidirectional data flow."}
              </p>
            </motion.div>
          </div>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

// Demo Component
const ContextDemo = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8">
      <h3 className="text-xl font-bold text-center text-purple-800 mb-6">
        🎭 Live Context Demo
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Theme Context Demo */}
        <div
          className={`rounded-lg p-6 shadow transition-colors ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <h4 className="font-medium mb-4 flex items-center">
            <Share2 className="w-5 h-5 mr-2" />
            Theme Context
          </h4>
          <p className="text-sm mb-4">
            Current theme: <strong>{theme}</strong>
          </p>
          <div className="flex space-x-2">
            <Button
              onClick={() => setTheme("light")}
              variant={theme === "light" ? "default" : "outline"}
              size="sm"
            >
              Light
            </Button>
            <Button
              onClick={() => setTheme("dark")}
              variant={theme === "dark" ? "default" : "outline"}
              size="sm"
            >
              Dark
            </Button>
          </div>
        </div>

        {/* User Context Demo */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h4 className="font-medium text-gray-800 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            User Context
          </h4>
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <p>
              Name: <strong>{user.name}</strong>
            </p>
            <p>
              Role: <strong>{user.role}</strong>
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => setUser({ name: "Jane Smith", role: "designer" })}
              size="sm"
              variant="outline"
            >
              Switch User
            </Button>
            <Button
              onClick={() => setUser({ name: "John Doe", role: "developer" })}
              size="sm"
              variant="outline"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextSlide;
