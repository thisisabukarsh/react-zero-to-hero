import { motion } from "framer-motion";
import { useState } from "react";
import {
  Palette,
  Code,
  Zap,
  Sparkles,
  Brush,
  Layers,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const TailwindSlide = ({ simpleMode }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [activeClass, setActiveClass] = useState("bg-blue-500");
  const [showComparison, setShowComparison] = useState(false);

  const simpleContent = {
    title: "Tailwind CSS",
    subtitle: "Utility-First CSS Framework",
    points: [
      {
        icon: Palette,
        title: "What is Tailwind?",
        description:
          "A utility-first CSS framework that lets you build custom designs without leaving your HTML. Think of it as a box of LEGO pieces for styling!",
      },
      {
        icon: Zap,
        title: "Why Use Tailwind?",
        description:
          "1- Write styles faster with pre-built classes\n2- No need to write custom CSS\n3- Consistent design system\n4- Responsive by default\n5- Small bundle size in production",
      },
      {
        icon: Code,
        title: "How It Works",
        description:
          "Instead of writing CSS, you use utility classes directly in your HTML. Tailwind generates only the CSS you actually use, making your final bundle tiny!",
      },
      {
        icon: Sparkles,
        title: "Perfect for React",
        description:
          "Tailwind works amazingly with React components. You can style components quickly and create reusable design systems that scale beautifully!",
      },
    ],
    examples: [
      "bg-blue-500 text-white px-4 py-2 rounded",
      "flex items-center justify-center space-x-4",
      "grid grid-cols-1 md:grid-cols-3 gap-6",
      "hover:bg-blue-600 transition-colors duration-200",
    ],
  };

  const advancedContent = {
    title: "Tailwind CSS: Utility-First Architecture",
    subtitle: "Modern CSS Framework for Rapid UI Development",
    points: [
      {
        icon: Palette,
        title: "Core Philosophy",
        description:
          "Utility-first approach where you compose designs using low-level utility classes rather than writing custom CSS. This promotes consistency and rapid development.",
      },
      {
        icon: Zap,
        title: "Key Features",
        description:
          "Atomic CSS methodology, JIT (Just-In-Time) compilation, responsive design utilities, dark mode support, custom configuration, plugin ecosystem, and excellent developer experience.",
      },
      {
        icon: Code,
        title: "Technical Benefits",
        description:
          "PurgeCSS integration for minimal bundle size, PostCSS processing, TypeScript support, framework integrations (React, Vue, Angular), and comprehensive design system.",
      },
      {
        icon: Sparkles,
        title: "Advanced Patterns",
        description:
          "Component extraction with @apply, custom utilities, responsive variants, state variants (hover, focus, active), and integration with design tokens and design systems.",
      },
    ],
    examples: [
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300",
      "flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6",
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
      "transform hover:scale-105 transition-transform duration-200 ease-in-out",
    ],
  };

  const content = simpleMode ? simpleContent : advancedContent;

  const demoClasses = [
    {
      name: "Blue Button",
      class: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded",
    },
    {
      name: "Green Card",
      class:
        "bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg shadow",
    },
    {
      name: "Purple Gradient",
      class:
        "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg",
    },
    {
      name: "Red Alert",
      class:
        "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded border-2 border-red-600",
    },
  ];

  const comparisonData = [
    {
      aspect: "Button Styling",
      tailwind: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded",
      regularCSS:
        "button { background: #3b82f6; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem; } button:hover { background: #2563eb; }",
    },
    {
      aspect: "Flexbox Layout",
      tailwind: "flex items-center justify-center space-x-4",
      regularCSS:
        ".container { display: flex; align-items: center; justify-content: center; } .container > * + * { margin-left: 1rem; }",
    },
    {
      aspect: "Responsive Grid",
      tailwind: "grid grid-cols-1 md:grid-cols-3 gap-4",
      regularCSS:
        ".grid { display: grid; gap: 1rem; grid-template-columns: 1fr; } @media (min-width: 768px) { .grid { grid-template-columns: repeat(3, 1fr); } }",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16 my-16">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-800 mb-4 sm:mb-6 text-center"
        >
          {content.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-8 sm:mb-12 text-center font-medium"
        >
          {content.subtitle}
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
          {/* Left Column - Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {content.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                  <point.icon className="w-5 h-5 mr-2" />
                  {point.title}
                </h3>
                <div className="text-blue-700 whitespace-pre-line">
                  {point.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Examples & Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Examples */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Quick Examples
              </h3>
              <div className="space-y-3">
                {content.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded p-3 text-sm font-mono text-gray-700 border-l-4 border-blue-500"
                  >
                    {example}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center">
                <Brush className="w-5 h-5 mr-2" />
                Interactive Demo
              </h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {demoClasses.map((demo, index) => (
                    <Button
                      key={index}
                      onClick={() => setActiveClass(demo.class)}
                      variant={
                        activeClass === demo.class ? "default" : "outline"
                      }
                      size="sm"
                      className="text-xs"
                    >
                      {demo.name}
                    </Button>
                  ))}
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                  <div className={`${activeClass} transition-all duration-300`}>
                    <span className="text-sm font-mono text-current">
                      {activeClass}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-green-800 flex items-center">
                <Layers className="w-6 h-6 mr-2" />
                Tailwind vs Regular CSS
              </h3>
              <Button
                onClick={() => setShowComparison(!showComparison)}
                variant="outline"
                size="sm"
              >
                {showComparison ? (
                  <EyeOff className="w-4 h-4 mr-2" />
                ) : (
                  <Eye className="w-4 h-4 mr-2" />
                )}
                {showComparison ? "Hide" : "Show"} Comparison
              </Button>
            </div>

            {showComparison && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {comparisonData.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      {item.aspect}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-green-600 mb-2">
                          Tailwind CSS
                        </div>
                        <div className="bg-green-50 rounded p-3 text-sm font-mono text-green-800">
                          {item.tailwind}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-600 mb-2">
                          Regular CSS
                        </div>
                        <div className="bg-blue-50 rounded p-3 text-sm font-mono text-blue-800">
                          {item.regularCSS}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
              <Sparkles className="w-6 h-6 mr-2" />
              Best Practices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-yellow-800">
                    ✅ Component Extraction
                  </div>
                  <div className="text-sm text-yellow-700">
                    Use @apply for repeated patterns
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-yellow-800">
                    ✅ Responsive Design
                  </div>
                  <div className="text-sm text-yellow-700">
                    Mobile-first approach with breakpoints
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-yellow-800">
                    ✅ Custom Configuration
                  </div>
                  <div className="text-sm text-yellow-700">
                    Extend theme in tailwind.config.js
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-yellow-800">
                    ✅ Performance
                  </div>
                  <div className="text-sm text-yellow-700">
                    Purge unused styles in production
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-yellow-800">
                    ✅ Consistency
                  </div>
                  <div className="text-sm text-yellow-700">
                    Use design tokens and spacing scale
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="font-medium text-yellow-800">
                    ✅ Accessibility
                  </div>
                  <div className="text-sm text-yellow-700">
                    Focus states and color contrast
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Demo Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="text-center"
        >
          <Button
            onClick={() => setShowDemo(!showDemo)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            <Brush className="w-4 h-4 mr-2" />
            {showDemo ? "Hide" : "Show"} Live Demo
          </Button>
        </motion.div>

        {/* Live Demo */}
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm"
          >
            <div className="text-gray-500 mb-4">// Live Tailwind Demo</div>
            <div className="space-y-2">
              <div>
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">TailwindDemo</span>() {"{"}
              </div>
              <div className="ml-4">
                <div>
                  <span className="text-blue-400">return</span> (
                </div>
                <div className="ml-4 text-green-400">
                  &lt;div className="
                  <span className="text-cyan-400">
                    bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6
                    py-4 rounded-lg shadow-lg hover:shadow-xl transition-all
                    duration-300
                  </span>
                  "&gt;
                </div>
                <div className="ml-8 text-gray-300">Hello Tailwind!</div>
                <div className="ml-4 text-green-400">&lt;/div&gt;</div>
                <div>);</div>
              </div>
              {"}"}
            </div>

            {/* Rendered result */}
            <div className="mt-4 bg-gray-800 text-white p-4 rounded">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Hello Tailwind!
              </div>
            </div>
          </motion.div>
        )}

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full px-8 py-4 shadow-xl">
            <p className="text-white font-medium">
              🎨 Tailwind CSS: Write styles faster, ship better designs!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TailwindSlide;
