import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import { Baby, GraduationCap, Braces, LayoutList } from "lucide-react";

const DomBasicsSlide = ({ simpleMode }) => {
  const [content, setContent] = useState("Welcome to DOM!");
  const [key, setKey] = useState(0);

  const handleChange = (e) => {
    setContent(e.target.value);
    setKey((prev) => prev + 1); // force re-render animation
  };

  const SimulatedDomTree = () => (
    <motion.div
      key={key}
      initial={{ opacity: 0.4, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-2 bg-white p-4 rounded shadow-inner text-sm text-blue-900"
    >
      <div className="pl-2">&lt;html&gt;</div>
      <div className="pl-6">&lt;body&gt;</div>
      <div className="pl-10">&lt;h1&gt;Hello&lt;/h1&gt;</div>
      <div className="pl-10">&lt;p&gt;{content}&lt;/p&gt;</div>
      <div className="pl-6">&lt;/body&gt;</div>
      <div className="pl-2">&lt;/html&gt;</div>
    </motion.div>
  );

  const TreeNode = ({ label, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-blue-100 text-blue-800 rounded-lg px-4 py-2 font-mono text-xs shadow">
        {label}
      </div>
      <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
        {children}
      </div>
    </motion.div>
  );

  return (
    <div className="w-full  flex flex-col items-center justify-center p-4 sm:p-8 mt-16 mb-8 overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        {simpleMode ? (
          <Baby className="w-6 h-6 text-blue-500" />
        ) : (
          <GraduationCap className="w-6 h-6 text-blue-500" />
        )}
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-800">
          DOM Basics
        </h1>
      </div>

      <p className="text-center text-blue-600 text-md sm:text-lg max-w-xl mb-8">
        {simpleMode
          ? "The DOM is like a magic tree made of your HTML. Let’s climb it together!"
          : "DOM (Document Object Model) is how the browser understands your HTML as a live structure."}
      </p>

      {simpleMode ? (
        <div className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tree-Like Structure */}
          <Card className="bg-white shadow-md p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              🌳 The Magic Tree
            </h3>
            <p className="text-green-900 text-base leading-relaxed">
              Your webpage is like a growing tree! Every tag you write becomes a
              branch, and each piece connects to another. That’s the DOM!
            </p>
          </Card>

          {/* Tags Build Things */}
          <Card className="bg-white shadow-md p-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">
              🛠️ Tags Are Builders
            </h3>
            <p className="text-purple-900 text-base">
              Tags like{" "}
              <code className="bg-gray-100 px-1 rounded">&lt;button&gt;</code>{" "}
              or <code className="bg-gray-100 px-1 rounded">&lt;img&gt;</code>{" "}
              are like tiny builders that create parts of your page!
            </p>
          </Card>

          {/* Nesting Elements */}
          <Card className="bg-white shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              📦 Boxes Inside Boxes
            </h3>
            <p className="text-blue-900 text-base">
              Just like toys inside toy boxes, HTML tags can go inside other
              tags. That’s called <strong>nesting</strong>!
            </p>
          </Card>

          {/* Browsers Understand DOM */}
          <Card className="bg-white shadow-md p-6">
            <h3 className="text-2xl font-semibold text-pink-700 mb-3">
              🧭 Browsers Read the Tree
            </h3>
            <p className="text-pink-900 text-base">
              Your browser (like Chrome or Firefox) reads your HTML tags and
              builds the page by understanding the DOM tree.
            </p>
          </Card>

          {/* JavaScript Uses It */}
          <Card className="bg-white shadow-md p-6">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
              🧙 JavaScript = Magic Wand
            </h3>
            <p className="text-yellow-900 text-base">
              JavaScript can find things in the DOM and change them! Like making
              a button turn red when clicked!
            </p>
          </Card>

          {/* Visual DOM Tree */}
          <Card className="bg-white shadow-md p-6 col-span-full">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              🌐 See the DOM as a Tree
            </h3>
            <div className="bg-blue-50 p-4 rounded shadow-inner">
              <TreeNode label="&lt;html&gt;">
                <TreeNode label="&lt;head&gt;" />
                <TreeNode label="&lt;body&gt;">
                  <TreeNode label="&lt;h1&gt;Hello!&lt;/h1&gt;" />
                  <TreeNode label="&lt;p&gt;Welcome to the DOM world!&lt;/p&gt;" />
                </TreeNode>
              </TreeNode>
            </div>
          </Card>

          {/* HTML Example */}
          <Card className="bg-white shadow-md p-6 col-span-full">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              🧾 What Does HTML Look Like?
            </h3>
            <div className="bg-slate-100 p-4 rounded font-mono text-sm text-slate-700">
              <pre>{`
<html>
  <body>
    <h1>Hello!</h1>
    <p>This is a web page.</p>
  </body>
</html>
        `}</pre>
            </div>
          </Card>

          {/* Real World Analogy */}
          <Card className="bg-white shadow-md p-6 col-span-full">
            <h3 className="text-2xl font-semibold text-red-700 mb-3">
              👨‍👩‍👧‍👦 Like a Family Tree
            </h3>
            <p className="text-red-900 text-base">
              Think of DOM like a family tree: <br />
              <Tooltip>
                <TooltipTrigger className="underline decoration-dotted cursor-help">
                  Parent
                </TooltipTrigger>
                <TooltipContent>Holds other elements</TooltipContent>
              </Tooltip>
              ,{" "}
              <Tooltip>
                <TooltipTrigger className="underline decoration-dotted cursor-help">
                  Child
                </TooltipTrigger>
                <TooltipContent>Nested inside another tag</TooltipContent>
              </Tooltip>
              ,{" "}
              <Tooltip>
                <TooltipTrigger className="underline decoration-dotted cursor-help">
                  Sibling
                </TooltipTrigger>
                <TooltipContent>
                  Next to each other under same parent
                </TooltipContent>
              </Tooltip>
              .
            </p>
          </Card>
        </div>
      ) : (
        <div className="w-full max-w-4xl space-y-6">
          <Card className="bg-slate-50 shadow-sm p-4">
            <h3 className="text-blue-700 font-semibold flex items-center gap-2 mb-4">
              <LayoutList className="w-5 h-5" /> Simulated DOM Tree (Re-render
              Effect)
            </h3>
            <SimulatedDomTree />

            <div className="mt-6">
              <label className="text-sm text-blue-800 mb-1 block">
                Change &lt;p&gt; tag content:
              </label>
              <Input
                value={content}
                onChange={handleChange}
                className="bg-white text-blue-800"
              />
            </div>
          </Card>
        </div>
      )}

      <Separator className="my-8" />

      <p className="text-center text-blue-800 text-base">
        {simpleMode
          ? "You don’t see the DOM, but it’s how your browser understands what to show!"
          : "Even changing one element in the DOM can cause a layout refresh or repaint — especially with older or larger pages."}
      </p>
    </div>
  );
};

export default DomBasicsSlide;
