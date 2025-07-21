import { motion } from "framer-motion";
import { useState } from "react";
import { Code, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import jsxIllustration from "../../assets/jsx-illustration.png";

const JSXSlide = ({ simpleMode }) => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16 mt-16 mb-16">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-800 mb-4 sm:mb-6 text-center"
        >
          JSX
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode
            ? "HTML + JavaScript = JSX Magic!"
            : "JavaScript XML - The Syntax Extension"}
        </motion.h2>

        {/* Main Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <img
            src={jsxIllustration}
            alt="JSX Transformation"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
          {/* Left Column - Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                {simpleMode ? "What is JSX?" : "JSX Fundamentals"}
              </h3>

              {simpleMode ? (
                <div className="space-y-3 text-blue-700">
                  <p>JSX lets you write HTML-like code inside JavaScript!</p>
                  <p>It's like having the best of both worlds:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Write HTML structure</li>
                    <li>Use JavaScript power</li>
                    <li>Keep everything together</li>
                    <li> Use className instead of class</li>
                    <li> Close all tags</li>
                    <li> Use {} for JavaScript</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-blue-700">
                  <p>
                    JSX (JavaScript XML) is a syntax extension for JavaScript
                    that allows you to write HTML-like code within JavaScript
                    files.
                  </p>
                  <p>Key benefits:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Declarative syntax for UI description</li>
                    <li>Compile-time error checking</li>
                    <li>Enhanced developer experience</li>
                    <li>Seamless JavaScript integration</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Interactive Button */}
            {!simpleMode ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      <Code className="w-6 h-6 mr-2" />
                      Babel
                    </h3>
                    <div className="space-y-3  text-blue-700">
                      <p>
                        Babel is a JavaScript compiler that makes your code
                        browser-ready!
                      </p>
                      <p>It helps modern code run everywhere:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Converts JSX into plain JavaScript</li>
                        <li>
                          Transforms modern JS (ES6+) into compatible versions
                        </li>
                        <li>Lets you use next-gen features today</li>
                      </ul>
                    </div>
                    <Button
                      onClick={() => setShowComparison(!showComparison)}
                      className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      {showComparison ? "Hide Examples" : "Show JSX Examples"}
                    </Button>
                  </div>
                </motion.div>
              </>
            ) : (
              <div></div>
            )}
          </motion.div>

          {/* Right Column - Code Examples */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            {/* Basic JSX Example */}
            {simpleMode ? (
              <div className="bg-gray-900 rounded-lg p-4 text-xl font-mono text-white">
                <div className="text-gray-400 mb-2">// JSX Example</div>
                <div>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-yellow-400">element</span> = (
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-green-400">&lt;div</span>{" "}
                    <span className="text-pink-400">className=</span>
                    <span className="text-rose-400">"welcome"</span>
                    <span className="text-green-400">&gt;</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-green-400">&lt;h1&gt;</span>
                      Hello, <span className="text-yellow-400">{"{name}"}</span>
                      !<span className="text-green-400">&lt;/h1&gt;</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-green-400">&lt;/div&gt;</span>
                  </div>
                </div>
                <div>);</div>
              </div>
            ) : (
              <div className="bg-gray-900 rounded-lg p-4 text-xl font-mono text-white">
                <div className="text-gray-400 mb-2">
                  // Fragments & Embedding Expressions
                </div>
                <div>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-yellow-400">Greeting</span> = (
                  {<span className="text-yellow-400">name</span>}) =&gt; (
                </div>
                <div className="ml-4">
                  <div className="text-green-400">&lt;&gt;</div>
                  <div className="ml-4">
                    <span className="text-green-400">&lt;h1&gt;</span>
                    Hello, <span className="text-yellow-400">{"{name}"}</span>!
                    <span className="text-green-400">&lt;/h1&gt;</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">&lt;p&gt;</span>
                    Today is{" "}
                    <span className="text-yellow-400">
                      {"{new Date().toLocaleDateString()}"}
                    </span>
                    .<span className="text-green-400">&lt;/p&gt;</span>
                  </div>
                  <div className="text-green-400">&lt;/&gt;</div>
                </div>
                <div>);</div>
              </div>
            )}

            {/* JSX Rules */}
            {!simpleMode && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      <Code className="w-6 h-6 mr-2" />
                      JSX Syntax Rules
                    </h3>
                    <div className="space-y-3  text-blue-700">
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li> Must return a single parent element</li>
                        <li> Use className instead of class attribute</li>
                        <li> Self-closing tags must end with /&gt;</li>
                        <li> JavaScript expressions in curly braces {"{}"}</li>
                        <li> camelCase for HTML attributes</li>
                        <li>
                          Wrap multiple elements with a fragment{" "}
                          <code>
                            (<>...</>)
                          </code>{" "}
                          or a container.
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>

        {/* Extended Examples */}
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
          >
            {/* Without JSX */}
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-3">
                Without JSX (Harder)
              </h4>
              <div className="bg-gray-900 rounded p-3 text-xl font-mono text-white">
                <div>
                  <span className="text-blue-400">React.createElement</span>(
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-green-400">'div'</span>,
                  </div>
                  <div>
                    <span className="text-yellow-400">
                      {'{ className: "welcome" }'}
                    </span>
                    ,
                  </div>
                  <div>
                    <span className="text-blue-400">React.createElement</span>(
                    <div className="ml-4">
                      <div>
                        <span className="text-green-400">'h1'</span>,
                      </div>
                      <div>
                        <span className="text-yellow-400">null</span>,
                      </div>
                      <div>
                        <span className="text-green-400">'Hello, World!'</span>
                      </div>
                    </div>
                    )
                  </div>
                </div>
                );
              </div>
            </div>

            {/* With JSX */}
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">
                With JSX (Easier!)
              </h4>
              <div className="bg-gray-900 rounded p-3 text-xl font-mono text-white">
                <div>
                  <span className="text-green-400">&lt;div</span>{" "}
                  <span className="text-pink-400">className=</span>
                  <span className="text-rose-400">"welcome"</span>
                  <span className="text-green-400">&gt;</span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-green-400">&lt;h1&gt;</span>Hello,
                    World!<span className="text-green-400">&lt;/h1&gt;</span>
                  </div>
                </div>
                <div>
                  <span className="text-green-400">&lt;/div&gt;</span>
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
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 mr-2" />
            Key Takeaway
          </h3>
          <p className="text-blue-100">
            {simpleMode
              ? "JSX makes React code easier to read and write - it's like HTML with superpowers!"
              : "JSX provides a more intuitive way to describe UI structure while maintaining the full power of JavaScript expressions."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JSXSlide;
