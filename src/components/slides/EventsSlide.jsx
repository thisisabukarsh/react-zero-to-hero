import { motion } from "framer-motion";
import { useState } from "react";
import {
  MousePointer,
  Keyboard,
  //  Touch,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const EventsSlide = ({ simpleMode }) => {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const colors = ["blue", "red", "green", "purple", "yellow"];

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
          Events
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode
            ? "Handling User Interactions"
            : "Event Handling in React - Making UIs Interactive"}
        </motion.h2>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-center text-green-800 mb-6">
              🎮 Interactive Playground
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Click Demo */}
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <MousePointer className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-3">Click Events</h4>
                <Button
                  onClick={() => setClickCount(clickCount + 1)}
                  className="mb-3"
                >
                  Click me!
                </Button>
                <p className="text-sm text-gray-600">
                  Clicked {clickCount} times
                </p>
              </div>

              {/* Input Demo */}
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <Keyboard className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-medium text-gray-800 mb-3">Input Events</h4>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type here..."
                  className="w-full p-2 border rounded mb-3 text-sm"
                />
                <p className="text-sm text-gray-600">
                  You typed: {inputValue || "(nothing)"}
                </p>
              </div>

              {/* Selection Demo */}
              <div className="bg-white rounded-lg p-4 text-center shadow">
                {/* <Touch className="w-8 h-8 text-purple-600 mx-auto mb-3" /> */}
                <h4 className="font-medium text-gray-800 mb-3">
                  Selection Events
                </h4>
                <div className="flex justify-center space-x-2 mb-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-gray-800"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Selected: {selectedColor}
                </p>
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
            {/* What are Events */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                {simpleMode ? "What are Events?" : "React Event System"}
              </h3>

              {simpleMode ? (
                <div className="space-y-3 text-blue-700">
                  <p>Events happen when users interact with your app!</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Clicking buttons</li>
                    <li>Typing in inputs</li>
                    <li>Moving the mouse</li>
                    <li>Submitting forms</li>
                  </ul>
                  <p>
                    React lets you "listen" for these events and respond to
                    them!
                  </p>
                </div>
              ) : (
                <div className="space-y-3 text-blue-700">
                  <p>
                    React uses SyntheticEvents - a cross-browser wrapper around
                    native DOM events that provides consistent behavior across
                    different browsers.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Cross-browser compatibility</li>
                    <li>Event pooling for performance (React 16 and below)</li>
                    <li>Same interface as native events</li>
                    <li>Automatic event delegation</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Common Events */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-3">
                Common Event Types
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {simpleMode ? (
                  <>
                    <div className="bg-white rounded p-2">
                      <div className="font-medium text-green-800">onClick</div>
                      <div className="text-green-600">Button clicks</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-medium text-green-800">onChange</div>
                      <div className="text-green-600">Input changes</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-medium text-green-800">onSubmit</div>
                      <div className="text-green-600">Form submission</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-medium text-green-800">onHover</div>
                      <div className="text-green-600">Mouse hover</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded p-2">
                      <div className="font-medium text-green-800">
                        Mouse Events
                      </div>
                      <div className="text-green-600">
                        onClick, onMouseOver, onMouseOut
                      </div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-medium text-green-800">
                        Keyboard Events
                      </div>
                      <div className="text-green-600">
                        onKeyDown, onKeyUp, onKeyPress
                      </div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-medium text-green-800">
                        Form Events
                      </div>
                      <div className="text-green-600">
                        onChange, onSubmit, onFocus, onBlur
                      </div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-medium text-green-800">
                        Touch Events
                      </div>
                      <div className="text-green-600">
                        onTouchStart, onTouchMove, onTouchEnd
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
            {/* Basic Event Example */}
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
              <div className="text-gray-400 mb-2">// Basic Event Handling</div>
              <div className="text-blue-400">function</div>{" "}
              <span className="text-yellow-400">Button</span>() {"{"}
              <div className="ml-4">
                <div className="text-blue-400">const</div>{" "}
                <span className="text-yellow-400">handleClick</span> = () =&gt;{" "}
                {"{"}
                <div className="ml-4">
                  <div>
                    <span className="text-green-400">alert</span>(
                    <span className="text-orange-400">'Button clicked!'</span>);
                  </div>
                </div>
                {"}"};
                <br />
                <br />
                <div className="text-blue-400">return</div> (
                <div className="ml-4">
                  <div className="text-green-400">&lt;button</div>{" "}
                  <span className="text-yellow-400">onClick</span>=
                  {"{handleClick}"}
                  <div className="text-green-400">&gt;</div>
                  <div className="ml-4">Click me</div>
                  <div className="text-green-400">&lt;/button&gt;</div>
                </div>
                );
              </div>
              {"}"}
            </div>

            {/* Event Object Example */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">Event Object</h4>
              <div className="bg-gray-900 rounded p-3 text-xs font-mono mb-3">
                <div className="text-blue-400">const</div>{" "}
                <span className="text-yellow-400">handleChange</span> = (
                <span className="text-yellow-400">event</span>) =&gt; {"{"}
                <div className="ml-4">
                  <div>
                    <span className="text-green-400">console.log</span>(
                    <span className="text-yellow-400">event</span>.
                    <span className="text-orange-400">target</span>.
                    <span className="text-orange-400">value</span>);
                  </div>
                  <div>
                    <span className="text-yellow-400">setValue</span>(
                    <span className="text-yellow-400">event</span>.
                    <span className="text-orange-400">target</span>.
                    <span className="text-orange-400">value</span>);
                  </div>
                </div>
                {"}"};
              </div>
              <p className="text-blue-700 text-sm">
                The event object contains information about the event, like the
                target element and its value.
              </p>
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
              Advanced Event Patterns
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Delegation */}
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-gray-800 mb-2">
                  Event Delegation
                </h5>
                <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                  <div className="text-blue-400">const</div>{" "}
                  <span className="text-yellow-400">handleListClick</span> = (
                  <span className="text-yellow-400">e</span>) =&gt; {"{"}
                  <div className="ml-4">
                    <div className="text-blue-400">if</div> (
                    <span className="text-yellow-400">e</span>.
                    <span className="text-orange-400">target</span>.
                    <span className="text-orange-400">tagName</span> ==={" "}
                    <span className="text-green-400">'LI'</span>) {"{"}
                    <div className="ml-4">
                      <div>
                        <span className="text-green-400">console.log</span>(
                        <span className="text-yellow-400">e</span>.
                        <span className="text-orange-400">target</span>.
                        <span className="text-orange-400">textContent</span>);
                      </div>
                    </div>
                    {"}"}
                  </div>
                  {"}"};
                  <br />
                  <br />
                  <div className="text-green-400">&lt;ul</div>{" "}
                  <span className="text-yellow-400">onClick</span>=
                  {"{handleListClick}"}
                  <div className="text-green-400">&gt;</div>
                  <div className="ml-4">
                    <div className="text-green-400">&lt;li&gt;</div>Item 1
                    <div className="text-green-400">&lt;/li&gt;</div>
                    <div className="text-green-400">&lt;li&gt;</div>Item 2
                    <div className="text-green-400">&lt;/li&gt;</div>
                  </div>
                  <div className="text-green-400">&lt;/ul&gt;</div>
                </div>
              </div>

              {/* Preventing Default */}
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-gray-800 mb-2">
                  Preventing Default
                </h5>
                <div className="bg-gray-900 rounded p-3 text-xs font-mono">
                  <div className="text-blue-400">const</div>{" "}
                  <span className="text-yellow-400">handleSubmit</span> = (
                  <span className="text-yellow-400">e</span>) =&gt; {"{"}
                  <div className="ml-4">
                    <div>
                      <span className="text-yellow-400">e</span>.
                      <span className="text-green-400">preventDefault</span>();
                    </div>
                    <div className="text-gray-400">
                      // Handle form submission
                    </div>
                    <div>
                      <span className="text-green-400">console.log</span>(
                      <span className="text-orange-400">'Form submitted!'</span>
                      );
                    </div>
                  </div>
                  {"}"};
                  <br />
                  <br />
                  <div className="text-green-400">&lt;form</div>{" "}
                  <span className="text-yellow-400">onSubmit</span>=
                  {"{handleSubmit}"}
                  <div className="text-green-400">&gt;</div>
                  <div className="ml-4">
                    <div className="text-gray-400">// form content</div>
                  </div>
                  <div className="text-green-400">&lt;/form&gt;</div>
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
          className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">⚡ Event Power</h3>
          <p className="text-green-100">
            {simpleMode
              ? "Events make your React apps interactive! Listen for user actions and respond with state updates."
              : "React's event system provides a consistent, performant way to handle user interactions across all browsers, enabling rich interactive experiences."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsSlide;
