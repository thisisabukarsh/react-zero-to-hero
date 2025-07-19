import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import { GitCompare, Cpu, Layers, Zap } from "lucide-react";

const VdomInteractiveSlide = ({ simpleMode }) => {
  const [elements, setElements] = useState(["Header", "Paragraph"]);
  const [showVirtualUpdate, setShowVirtualUpdate] = useState(false);
  const [showRealUpdate, setShowRealUpdate] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);

  const addElement = () => {
    setShowVirtualUpdate(true);
    setTimeout(() => {
      setShowVirtualUpdate(false);
      setShowRealUpdate(true);
      setElements([...elements, `New Element ${elements.length + 1}`]);
      setTimeout(() => {
        setShowRealUpdate(false);
      }, 1000);
    }, 1000);
    setUpdateCount((prev) => prev + 1);
  };

  const TreeNode = ({
    label,
    isVirtual = false,
    isNew = false,
    isUpdating = false,
  }) => (
    <motion.div
      initial={isNew ? { opacity: 0, x: -50 } : { opacity: 1 }}
      animate={{ opacity: 1, x: 0 }}
      className={`relative ${isVirtual ? "mr-4" : "ml-4"}`}
    >
      <motion.div
        className={`
          rounded-lg px-4 py-2 font-mono text-sm shadow-md
          ${
            isVirtual
              ? "bg-purple-100 text-purple-800"
              : "bg-blue-100 text-blue-800"
          }
          ${isUpdating ? "ring-2 ring-green-400 ring-offset-2" : ""}
        `}
        animate={
          isUpdating
            ? {
                scale: [1, 1.05, 1],
                transition: { duration: 0.5, repeat: Infinity },
              }
            : {}
        }
      >
        {label}
      </motion.div>
      {isNew && (
        <motion.div
          className="absolute -right-8 top-1/2 transform -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Zap className="w-4 h-4 text-yellow-500" />
        </motion.div>
      )}
    </motion.div>
  );

  const TreeContainer = ({ title, icon: Icon, isVirtual, showUpdate }) => (
    <Card className="flex-1 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Icon
          className={`w-5 h-5 ${
            isVirtual ? "text-purple-500" : "text-blue-500"
          }`}
        />
        <h3
          className={`font-semibold ${
            isVirtual ? "text-purple-700" : "text-blue-700"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="space-y-2">
        <motion.div className="pl-4 space-y-2">
          {elements.map((el, idx) => (
            <TreeNode
              key={`${el}-${idx}`}
              label={el}
              isVirtual={isVirtual}
              isNew={idx === elements.length - 1 && showUpdate}
              isUpdating={idx === elements.length - 1 && showUpdate}
            />
          ))}
        </motion.div>
      </div>
    </Card>
  );

  const ComparisonArrow = () => (
    <div className="flex flex-col items-center justify-center px-4">
      <GitCompare className="w-6 h-6 text-gray-400" />
      <span className="text-xs text-gray-500 mt-1">Reconciliation</span>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:p-8 mt-16 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Layers className="w-6 h-6 text-blue-500" />
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-800">
          Virtual DOM in Action
        </h1>
      </div>

      <p className="text-center text-blue-600 text-md sm:text-lg max-w-xl mb-8">
        {simpleMode
          ? "Watch how React magically updates the page using its special Virtual DOM!"
          : "Visualize how React's Virtual DOM optimizes updates through reconciliation."}
      </p>

      <div className="w-full max-w-6xl space-y-8">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          <TreeContainer
            title="Virtual DOM"
            icon={Cpu}
            isVirtual={true}
            showUpdate={showVirtualUpdate}
          />
          <ComparisonArrow />
          <TreeContainer
            title="Actual DOM"
            icon={Layers}
            isVirtual={false}
            showUpdate={showRealUpdate}
          />
        </div>

        <div className="flex justify-center">
          <Button
            onClick={addElement}
            className="bg-green-500 hover:bg-green-600 text-white px-6"
            disabled={showVirtualUpdate || showRealUpdate}
          >
            Add New Element
          </Button>
        </div>

        <Card className="p-6 bg-slate-50">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            How it Works:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-slate-700">
                <span className="font-semibold">1.</span> Changes first happen
                in Virtual DOM
              </p>
              <p className="text-slate-700">
                <span className="font-semibold">2.</span> React calculates the
                best way to update
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-700">
                <span className="font-semibold">3.</span> Only necessary changes
                are applied
              </p>
              <p className="text-slate-700">
                <span className="font-semibold">4.</span> Real DOM updates
                efficiently
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center text-blue-600">
          Updates performed: {updateCount}
        </div>
      </div>

      <Separator className="my-8" />

      <p className="text-center text-blue-800 text-base">
        {simpleMode
          ? "React's Virtual DOM helps make your app super fast!"
          : "The Virtual DOM enables React to optimize rendering performance through efficient diffing and batched updates."}
      </p>
    </div>
  );
};

export default VdomInteractiveSlide;
