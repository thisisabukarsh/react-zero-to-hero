import { useState, memo } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import { Baby, GraduationCap, MonitorSmartphone } from "lucide-react";

// 👇 Memoized static node – won't re-render unless props change
const VNodeStatic = memo(({ type, children }) => {
  return (
    <div className="ml-4 bg-white rounded px-3 py-1 shadow text-xs font-mono text-gray-800">
      {`{ type: "${type}", props: { children: "${children}" } }`}
    </div>
  );
});

// 👇 Dynamic node – will re-render and animate on content change
const VNodeDynamic = ({ type, children }) => {
  return (
    <motion.div
      key={children} // This forces re-animation only for changed content
      initial={{ backgroundColor: "#fefcbf", opacity: 0.6, y: 4 }}
      animate={{ backgroundColor: "#ffffff", opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ml-4 bg-white rounded px-3 py-1 shadow text-xs font-mono text-gray-800"
    >
      {`{ type: "${type}", props: { children: "${children}" } }`}
    </motion.div>
  );
};

// 👇 Main VDOM tree simulation
const SimulatedVDOM = ({ text }) => (
  <div className="bg-slate-100 p-4 rounded shadow-inner text-sm font-mono space-y-2">
    <div>{"{"}</div>
    <div className="pl-4">type: "div",</div>
    <div className="pl-4">children: [</div>
    <div className="pl-8">
      <VNodeStatic type="h1" children="Hello" />
    </div>
    <div className="pl-8">
      <VNodeDynamic type="p" children={text} />
    </div>
    <div className="pl-4">]</div>
    <div>{"}"}</div>
  </div>
);

// 👇 Optional tree node for simple mode
const TreeNode = ({ label, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <div className="bg-yellow-100 text-yellow-800 rounded-lg px-4 py-2 font-mono text-xs shadow">
      {label}
    </div>
    <div className="ml-4 mt-2 space-y-2 border-l-2 border-yellow-300 pl-4">
      {children}
    </div>
  </motion.div>
);

// 👇 Full slide component
const VdomBasicsSlide = ({ simpleMode }) => {
  const [text, setText] = useState("Welcome to Virtual DOM!");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:p-8 mt-16 mb-8 overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        {simpleMode ? (
          <Baby className="w-6 h-6 text-yellow-500" />
        ) : (
          <GraduationCap className="w-6 h-6 text-yellow-500" />
        )}
        <h1 className="text-3xl sm:text-5xl font-bold text-yellow-800">
          Virtual DOM Basics
        </h1>
      </div>

      <p className="text-center text-yellow-600 text-md sm:text-lg max-w-xl mb-8">
        {simpleMode
          ? "Think of the Virtual DOM as an imaginary version of your page that helps React know what to change!"
          : "Virtual DOM is a lightweight copy of the real DOM. It enables efficient UI updates by comparing differences."}
      </p>

      {simpleMode ? (
        <div className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md p-6">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
              🧠 Smart Copy
            </h3>
            <p className="text-yellow-900 text-base">
              The Virtual DOM is like a smart copy of your web page that React
              keeps in memory.
            </p>
          </Card>

          <Card className="bg-white shadow-md p-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">
              🔍 Spot the Difference
            </h3>
            <p className="text-purple-900 text-base">
              React compares the old and new virtual trees, finds the
              differences, and updates only the changed parts.
            </p>
          </Card>

          <Card className="bg-white shadow-md p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              ⚡ Super Efficient
            </h3>
            <p className="text-green-900 text-base">
              This avoids redrawing the whole page, making updates smooth and
              fast!
            </p>
          </Card>

          <Card className="bg-white shadow-md p-6 col-span-full">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">
              🌱 What the Virtual DOM Looks Like
            </h3>
            <div className="bg-yellow-50 p-4 rounded shadow-inner">
              <TreeNode label={`{ type: "div" }`}>
                <TreeNode
                  label={`{ type: "h1", props: { children: "Hello" } }`}
                />
                <TreeNode
                  label={`{ type: "p", props: { children: "${text}" } }`}
                />
              </TreeNode>
            </div>
          </Card>

          <Card className="bg-white shadow-md p-6 col-span-full">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              🤝 React + VDOM = 💛
            </h3>
            <p className="text-blue-900 text-base">
              React updates the VDOM first, figures out the smallest change, and
              only updates that part in the real DOM.
            </p>
          </Card>

          <Card className="bg-white shadow-md p-6 col-span-full">
            <h3 className="text-2xl font-semibold text-pink-700 mb-3">
              🧠 Think of it like this:
            </h3>
            <p className="text-pink-900 text-base">
              It’s like having a{" "}
              <Tooltip>
                <TooltipTrigger className="underline decoration-dotted cursor-help">
                  blueprint
                </TooltipTrigger>
                <TooltipContent>
                  React's internal model of the UI
                </TooltipContent>
              </Tooltip>{" "}
              that only redraws what’s changed, not the whole structure!
            </p>
          </Card>
        </div>
      ) : (
        <div className="w-full max-w-4xl space-y-6">
          <Card className="bg-slate-50 shadow-sm p-4">
            <h3 className="text-yellow-700 font-semibold flex items-center gap-2 mb-4">
              <MonitorSmartphone className="w-5 h-5" /> Simulated Virtual DOM
              Tree (Efficient Render)
            </h3>
            <SimulatedVDOM text={text} />
            <div className="mt-6">
              <label className="text-sm text-yellow-800 mb-1 block">
                Change <code>&lt;p&gt;</code> content:
              </label>
              <Input
                value={text}
                onChange={handleChange}
                className="bg-white text-yellow-800"
              />
            </div>
          </Card>
        </div>
      )}

      <Separator className="my-8" />

      <p className="text-center text-yellow-800 text-base">
        {simpleMode
          ? "The Virtual DOM helps React figure out what really needs to change on the screen!"
          : "Only the changed parts of the Virtual DOM are re-rendered, making updates fast and efficient."}
      </p>
    </div>
  );
};

export default VdomBasicsSlide;
