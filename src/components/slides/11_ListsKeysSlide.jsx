import { motion } from "framer-motion";
import { useState } from "react";
import { List, Key, Plus, Trash2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const ListsKeysSlide = ({ simpleMode }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build an app", completed: false },
    { id: 3, text: "Deploy to production", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [showBadExample, setShowBadExample] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

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
          Lists & Keys
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {simpleMode
            ? "Rendering Multiple Items Efficiently"
            : "Dynamic List Rendering with Unique Identifiers"}
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
              📝 Interactive Todo List Demo
            </h3>

            <div className="max-w-md mx-auto">
              {/* Add Todo */}
              <div className="flex space-x-2 mb-6">
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTodo()}
                  placeholder="Add a new todo..."
                  className="flex-1 p-2 border rounded"
                />
                <Button onClick={addTodo} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Todo List */}
              <div className="space-y-2">
                {todos.map((todo) => (
                  <motion.div
                    key={todo.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-lg p-3 shadow flex items-center space-x-3"
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="rounded"
                    />
                    <span
                      className={`flex-1 ${
                        todo.completed
                          ? "line-through text-gray-500"
                          : "text-gray-800"
                      }`}
                    >
                      {todo.text}
                    </span>
                    <span className="text-xs text-gray-400">
                      key: {todo.id}
                    </span>
                    <Button
                      onClick={() => removeTodo(todo.id)}
                      size="sm"
                      variant="outline"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </motion.div>
                ))}
              </div>

              {todos.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  No todos yet. Add one above!
                </div>
              )}
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
            {/* What are Lists & Keys */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <List className="w-6 h-6 mr-2" />
                {simpleMode
                  ? "What are Lists & Keys?"
                  : "Lists & Keys Fundamentals"}
              </h3>

              {simpleMode ? (
                <div className="space-y-3 text-green-700">
                  <p>
                    When you have multiple similar items, you render them as a
                    list!
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Use .map() to create multiple elements</li>
                    <li>Each item needs a unique "key"</li>
                    <li>Keys help React track changes</li>
                    <li>Makes updates faster and smoother</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-green-700">
                  <p>
                    Lists allow you to render multiple similar components
                    dynamically. Keys are unique identifiers that help React
                    efficiently update the DOM when list items change.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Virtual DOM diffing optimization</li>
                    <li>Component state preservation during re-orders</li>
                    <li>Performance improvements for large lists</li>
                    <li>Predictable component lifecycle behavior</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Why Keys Matter */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Why Keys Matter
              </h4>
              <div className="space-y-3 text-sm text-yellow-700">
                {simpleMode ? (
                  <>
                    <p>Without keys, React gets confused when items change!</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Slow updates</li>
                      <li>Lost form data</li>
                      <li>Weird animations</li>
                      <li>Bugs in your app</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>Keys enable React's reconciliation algorithm to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Identify which items have changed, been added, or
                        removed
                      </li>
                      <li>Preserve component state during re-renders</li>
                      <li>Optimize DOM manipulations</li>
                      <li>Maintain focus and scroll position</li>
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Key Rules */}
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Key Rules & Best Practices
              </h4>
              <ul className="space-y-2 text-sm text-red-700">
                {simpleMode ? (
                  <>
                    <li>• Keys must be unique among siblings</li>
                    <li>• Don't use array index as key (usually)</li>
                    <li>• Use stable, predictable values</li>
                    <li>• IDs from your data are perfect</li>
                  </>
                ) : (
                  <>
                    <li>• Keys must be unique among siblings (not globally)</li>
                    <li>• Avoid using array indices for dynamic lists</li>
                    <li>• Use stable identifiers (IDs, UUIDs)</li>
                    <li>• Keys should be consistent across re-renders</li>
                    <li>• Don't generate keys during render</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Code Examples */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            {/* Basic List Example */}
            <div className="bg-gray-900 rounded-lg p-4 text-base font-mono">
              <div className="text-slate-500 mb-2">// Basic List Rendering</div>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-cyan-300">items</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-pink-400">[</span>
              <span className="text-green-300">'Apple'</span>
              <span className="text-pink-400">,</span>{" "}
              <span className="text-green-300">'Banana'</span>
              <span className="text-pink-400">,</span>{" "}
              <span className="text-green-300">'Cherry'</span>
              <span className="text-pink-400">]</span>
              <span className="text-pink-400">;</span>
              <br />
              <br />
              <span className="text-pink-400">return</span>{" "}
              <span className="text-pink-400">(</span>
              <div className="ml-4">
                <div>
                  <span className="text-blue-300">{"<ul>"}</span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-cyan-300">items</span>
                    <span className="text-pink-400">.</span>
                    <span className="text-blue-300">map</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">item</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">index</span>
                    <span className="text-pink-400">)</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-pink-400">(</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-blue-300">{"<li"}</span>{" "}
                      <span className="text-cyan-400">key</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">index</span>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-blue-300">{">"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">item</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-300">{"</li>"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">{"}"}</span>
                  </div>
                </div>
                <div>
                  <span className="text-blue-300">{"</ul>"}</span>
                </div>
              </div>
              <span className="text-pink-400">)</span>
              <span className="text-pink-400">;</span>
            </div>

            {/* Better Example with IDs */}
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">
                Better: Using Unique IDs
              </h4>
              <div className="bg-gray-900 rounded p-3 text-base font-mono">
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-cyan-300">users</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-pink-400">[</span>
                </div>
                <div className="ml-4">
                  <div>
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-cyan-300">id</span>
                    <span className="text-pink-400">:</span>{" "}
                    <span className="text-orange-300">1</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">name</span>
                    <span className="text-pink-400">:</span>{" "}
                    <span className="text-green-300">"Alice"</span>
                    <span className="text-pink-400">{"}"}</span>
                  </div>
                  <div>
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-cyan-300">id</span>
                    <span className="text-pink-400">:</span>{" "}
                    <span className="text-orange-300">2</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">name</span>
                    <span className="text-pink-400">:</span>{" "}
                    <span className="text-green-300">"Bob"</span>
                    <span className="text-pink-400">{"}"}</span>
                  </div>
                </div>
                <div>
                  <span className="text-pink-400">]</span>
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
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">users</span>
                      <span className="text-pink-400">.</span>
                      <span className="text-blue-300">map</span>
                      <span className="text-pink-400">(</span>
                      <span className="text-cyan-300">user</span>{" "}
                      <span className="text-pink-400">=&gt;</span>{" "}
                      <span className="text-pink-400">(</span>
                    </div>
                    <div className="ml-4">
                      <div>
                        <span className="text-blue-300">{"<div"}</span>{" "}
                        <span className="text-cyan-400">key</span>
                        <span className="text-pink-400">=</span>
                        <span className="text-pink-400">{"{"}</span>
                        <span className="text-cyan-300">user</span>
                        <span className="text-pink-400">.</span>
                        <span className="text-cyan-300">id</span>
                        <span className="text-pink-400">{"}"}</span>
                        <span className="text-blue-300">{">"}</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-pink-400">{"{"}</span>
                        <span className="text-cyan-300">user</span>
                        <span className="text-pink-400">.</span>
                        <span className="text-cyan-300">name</span>
                        <span className="text-pink-400">{"}"}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">{"</div>"}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-pink-400">)</span>
                      <span className="text-pink-400">)</span>
                      <span className="text-pink-400">{"}"}</span>
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
            </div>

            {/* Bad vs Good Example Toggle */}
            <div className="bg-red-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-red-800">Common Mistakes</h4>
                <Button
                  onClick={() => setShowBadExample(!showBadExample)}
                  size="sm"
                  variant="outline"
                >
                  {showBadExample ? "Hide" : "Show"} Bad Example
                </Button>
              </div>

              {showBadExample && (
                <div className="bg-gray-900 rounded p-3 text-base font-mono">
                  <div className="text-red-400">
                    // ❌ DON'T: Using index as key for dynamic lists
                  </div>
                  <div>
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-cyan-300">items</span>
                    <span className="text-pink-400">.</span>
                    <span className="text-blue-300">map</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">item</span>
                    <span className="text-pink-400">,</span>{" "}
                    <span className="text-cyan-300">index</span>
                    <span className="text-pink-400">)</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-pink-400">(</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-blue-300">{"<div"}</span>{" "}
                      <span className="text-red-400">key</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">index</span>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-blue-300">{">"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">item</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-300">{"</div>"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">{"}"}</span>
                  </div>
                  <br />
                  <div className="text-green-400">
                    // ✅ DO: Use unique, stable identifiers
                  </div>
                  <div>
                    <span className="text-pink-400">{"{"}</span>
                    <span className="text-cyan-300">items</span>
                    <span className="text-pink-400">.</span>
                    <span className="text-blue-300">map</span>
                    <span className="text-pink-400">(</span>
                    <span className="text-cyan-300">item</span>{" "}
                    <span className="text-pink-400">=&gt;</span>{" "}
                    <span className="text-pink-400">(</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-blue-300">{"<div"}</span>{" "}
                      <span className="text-green-400">key</span>
                      <span className="text-pink-400">=</span>
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">item</span>
                      <span className="text-pink-400">.</span>
                      <span className="text-cyan-300">id</span>
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-blue-300">{">"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-pink-400">{"{"}</span>
                      <span className="text-cyan-300">item</span>
                      <span className="text-pink-400">.</span>
                      <span className="text-cyan-300">name</span>
                      <span className="text-pink-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-300">{"</div>"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">)</span>
                    <span className="text-pink-400">{"}"}</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6"
        >
          <h4 className="font-semibold text-blue-800 mb-4 text-center">
            ⚡ Performance Impact of Keys
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-100 rounded-lg p-4">
              <h5 className="font-medium text-red-800 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Without Proper Keys
              </h5>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• React re-creates all DOM nodes</li>
                <li>• Component state is lost</li>
                <li>• Animations break</li>
                <li>• Poor performance on large lists</li>
                <li>• Focus and scroll position lost</li>
              </ul>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <h5 className="font-medium text-green-800 mb-2 flex items-center">
                <Key className="w-4 h-4 mr-2" />
                With Proper Keys
              </h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• React reuses existing DOM nodes</li>
                <li>• Component state preserved</li>
                <li>• Smooth animations</li>
                <li>• Optimal performance</li>
                <li>• Maintains user experience</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">🔑 Key Success</h3>
          <p className="text-green-100">
            {simpleMode
              ? "Always use unique, stable keys when rendering lists! Your users will thank you for the smooth experience."
              : "Proper key usage is crucial for React's performance and user experience. Use stable, unique identifiers to help React efficiently manage your dynamic lists."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ListsKeysSlide;
