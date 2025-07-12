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
        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16">
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
                <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                  <div className="text-gray-400 mb-2">
                    // Creating and Using Context
                  </div>

                  {/* Create Context */}
                  <div className="mb-4">
                    <div className="text-gray-400 text-xs">
                      // 1. Create Context
                    </div>
                    <div className="text-blue-400">const</div>{" "}
                    <span className="text-yellow-400">ThemeContext</span> ={" "}
                    <span className="text-green-400">createContext</span>();
                  </div>

                  {/* Provider */}
                  <div className="mb-4">
                    <div className="text-gray-400 text-xs">
                      // 2. Provide Context
                    </div>
                    <div className="text-green-400">
                      &lt;ThemeContext.Provider
                    </div>{" "}
                    <span className="text-yellow-400">value</span>={"{theme}"}
                    <div className="text-green-400">&gt;</div>
                    <div className="ml-4">
                      <div className="text-green-400">&lt;App /&gt;</div>
                    </div>
                    <div className="text-green-400">
                      &lt;/ThemeContext.Provider&gt;
                    </div>
                  </div>

                  {/* Consumer */}
                  <div>
                    <div className="text-gray-400 text-xs">
                      // 3. Consume Context
                    </div>
                    <div className="text-blue-400">const</div>{" "}
                    <span className="text-yellow-400">theme</span> ={" "}
                    <span className="text-green-400">useContext</span>(
                    <span className="text-yellow-400">ThemeContext</span>);
                  </div>
                </div>

                {/* Complete Example */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Complete Example
                  </h4>
                  <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                    <div className="text-gray-400">
                      // Theme Provider Component
                    </div>
                    <div className="text-blue-400">function</div>{" "}
                    <span className="text-yellow-400">ThemeProvider</span>(
                    {"{children}"}) {"{"}
                    <div className="ml-4">
                      <div className="text-blue-400">const</div> [
                      <span className="text-yellow-400">theme</span>,{" "}
                      <span className="text-yellow-400">setTheme</span>] ={" "}
                      <span className="text-green-400">useState</span>(
                      <span className="text-orange-400">'light'</span>);
                      <br />
                      <div className="text-blue-400">return</div> (
                      <div className="ml-4">
                        <div className="text-green-400">
                          &lt;ThemeContext.Provider
                        </div>
                        <div className="ml-4">
                          <div>
                            <span className="text-yellow-400">value</span>=
                            <span>{"{{ "}</span>
                            <span className="text-yellow-400">theme</span>,{" "}
                            <span className="text-yellow-400">setTheme</span>
                            <span>{" }}"}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div>{"{children}"}</div>
                        </div>
                        <div className="text-green-400">
                          &lt;/ThemeContext.Provider&gt;
                        </div>
                      </div>
                      );
                    </div>
                    {"}"}
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
                    <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                      <div className="text-green-400">&lt;AuthProvider&gt;</div>
                      <div className="ml-4">
                        <div className="text-green-400">
                          &lt;ThemeProvider&gt;
                        </div>
                        <div className="ml-4">
                          <div className="text-green-400">
                            &lt;LanguageProvider&gt;
                          </div>
                          <div className="ml-4">
                            <div className="text-green-400">&lt;App /&gt;</div>
                          </div>
                          <div className="text-green-400">
                            &lt;/LanguageProvider&gt;
                          </div>
                        </div>
                        <div className="text-green-400">
                          &lt;/ThemeProvider&gt;
                        </div>
                      </div>
                      <div className="text-green-400">
                        &lt;/AuthProvider&gt;
                      </div>
                    </div>
                  </div>

                  {/* Context with Reducer */}
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Context + useReducer
                    </h5>
                    <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                      <div className="text-blue-400">const</div> [
                      <span className="text-yellow-400">state</span>,{" "}
                      <span className="text-yellow-400">dispatch</span>] ={" "}
                      <span className="text-green-400">useReducer</span>(
                      <span className="text-yellow-400">reducer</span>,{" "}
                      <span className="text-yellow-400">initialState</span>);
                      <br />
                      <br />
                      <div className="text-green-400">
                        &lt;StateContext.Provider
                      </div>{" "}
                      <span className="text-yellow-400">value</span>={"{state}"}
                      <div className="text-green-400">&gt;</div>
                      <div className="ml-4">
                        <div className="text-green-400">
                          &lt;DispatchContext.Provider
                        </div>{" "}
                        <span className="text-yellow-400">value</span>=
                        {"{dispatch}"}
                        <div className="text-green-400">&gt;</div>
                        <div className="ml-4">
                          <div>{"{children}"}</div>
                        </div>
                        <div className="text-green-400">
                          &lt;/DispatchContext.Provider&gt;
                        </div>
                      </div>
                      <div className="text-green-400">
                        &lt;/StateContext.Provider&gt;
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
