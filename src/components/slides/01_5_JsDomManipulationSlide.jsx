import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import { Code2, Wand2, FileCode, PlayCircle } from "lucide-react";

const JsDomManipulationSlide = ({ simpleMode }) => {
  const [demoText, setDemoText] = useState("Change me!");
  const [demoColor, setDemoColor] = useState("text-blue-600");
  const [demoSize, setDemoSize] = useState("text-xl");

  const CodeExample = ({ title, code, children }) => (
    <Card className="bg-slate-50 p-4 mb-4">
      <h3 className="text-blue-700 font-semibold flex items-center gap-2 mb-2">
        <FileCode className="w-5 h-5" /> {title}
      </h3>
      <div className="bg-slate-900 text-slate-50 p-4 rounded font-mono text-sm mb-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
      {children}
    </Card>
  );

  const LiveExample = ({ title, children }) => (
    <Card className="bg-white p-4 mb-4">
      <h3 className="text-green-700 font-semibold flex items-center gap-2 mb-2">
        <PlayCircle className="w-5 h-5" /> {title}
      </h3>
      {children}
    </Card>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:p-8 mt-16 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Code2 className="w-6 h-6 text-blue-500" />
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-800">
          JavaScript DOM Magic
        </h1>
      </div>

      <p className="text-center text-blue-600 text-md sm:text-lg max-w-xl mb-8">
        {simpleMode
          ? "Let's see how JavaScript can change our webpage like magic!"
          : "Explore how JavaScript interacts with and manipulates the DOM"}
      </p>

      <div className="w-full max-w-4xl space-y-6">
        {simpleMode ? (
          <>
            <LiveExample title="Change Text Content">
              <div className={`text-center ${demoColor} ${demoSize} mb-4`}>
                {demoText}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  value={demoText}
                  onChange={(e) => setDemoText(e.target.value)}
                  placeholder="Type something..."
                  className="mb-2"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={() => setDemoColor("text-red-500")}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Red
                  </Button>
                  <Button
                    onClick={() => setDemoColor("text-blue-500")}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Blue
                  </Button>
                  <Button
                    onClick={() => setDemoColor("text-green-500")}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    Green
                  </Button>
                </div>
              </div>
            </LiveExample>

            <Card className="bg-white shadow-md p-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-3 flex items-center gap-2">
                <Wand2 className="w-6 h-6" /> What JavaScript Can Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-purple-900">✨ Change text content</p>
                  <p className="text-purple-900">🎨 Modify styles</p>
                  <p className="text-purple-900">➕ Add new elements</p>
                </div>
                <div className="space-y-2">
                  <p className="text-purple-900">🗑️ Remove elements</p>
                  <p className="text-purple-900">👂 Listen to events</p>
                  <p className="text-purple-900">🔄 Update attributes</p>
                </div>
              </div>
            </Card>
          </>
        ) : (
          <>
            <CodeExample
              title="Selecting Elements"
              code={
                <>
                  <span className="text-slate-400">// Get element by ID</span>
                  {"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">element</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-yellow-400">document</span>.
                  <span className="text-green-400">getElementById</span>(
                  <span className="text-orange-400">'myId'</span>);{"\n\n"}
                  <span className="text-slate-400">
                    // Query selector (like CSS)
                  </span>
                  {"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">element</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-yellow-400">document</span>.
                  <span className="text-green-400">querySelector</span>(
                  <span className="text-orange-400">'.my-class'</span>);{"\n\n"}
                  <span className="text-slate-400">// Multiple elements</span>
                  {"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">elements</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-yellow-400">document</span>.
                  <span className="text-green-400">querySelectorAll</span>(
                  <span className="text-orange-400">'button'</span>);
                </>
              }
            />

            <CodeExample
              title="Modifying Content"
              code={
                <>
                  <span className="text-slate-400">// Change text content</span>
                  {"\n"}
                  <span className="text-blue-400">element</span>.
                  <span className="text-green-400">textContent</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-orange-400">'New text'</span>;{"\n\n"}
                  <span className="text-slate-400">// Change HTML content</span>
                  {"\n"}
                  <span className="text-blue-400">element</span>.
                  <span className="text-green-400">innerHTML</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-orange-400">
                    '&lt;span&gt;New HTML&lt;/span&gt;'
                  </span>
                  ;{"\n\n"}
                  <span className="text-slate-400">// Modify attributes</span>
                  {"\n"}
                  <span className="text-blue-400">element</span>.
                  <span className="text-green-400">setAttribute</span>(
                  <span className="text-orange-400">'class'</span>,{" "}
                  <span className="text-orange-400">'new-class'</span>);{"\n"}
                  <span className="text-blue-400">element</span>.
                  <span className="text-green-400">style</span>.
                  <span className="text-cyan-400">color</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-orange-400">'red'</span>;
                </>
              }
            >
              <LiveExample title="Try it Live">
                <div className={`text-center ${demoColor} ${demoSize} mb-4`}>
                  {demoText}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                    placeholder="Type something..."
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setDemoSize("text-lg")}
                      className="bg-slate-500 hover:bg-slate-600"
                    >
                      Small
                    </Button>
                    <Button
                      onClick={() => setDemoSize("text-xl")}
                      className="bg-slate-600 hover:bg-slate-700"
                    >
                      Medium
                    </Button>
                    <Button
                      onClick={() => setDemoSize("text-2xl")}
                      className="bg-slate-700 hover:bg-slate-800"
                    >
                      Large
                    </Button>
                  </div>
                </div>
              </LiveExample>
            </CodeExample>

            <CodeExample
              title="Creating & Adding Elements"
              code={
                <>
                  <span className="text-slate-400">// Create new element</span>
                  {"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">newDiv</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-yellow-400">document</span>.
                  <span className="text-green-400">createElement</span>(
                  <span className="text-orange-400">'div'</span>);{"\n"}
                  <span className="text-blue-400">newDiv</span>.
                  <span className="text-green-400">textContent</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-orange-400">'I am new!'</span>;{"\n\n"}
                  <span className="text-slate-400">// Add to document</span>
                  {"\n"}
                  <span className="text-blue-400">parentElement</span>.
                  <span className="text-green-400">appendChild</span>(
                  <span className="text-blue-400">newDiv</span>);{"\n\n"}
                  <span className="text-slate-400">// Remove element</span>
                  {"\n"}
                  <span className="text-blue-400">element</span>.
                  <span className="text-green-400">remove</span>();
                </>
              }
            />
          </>
        )}
      </div>

      <Separator className="my-8" />

      <p className="text-center text-blue-800 text-base">
        {simpleMode
          ? "JavaScript makes your webpage interactive and fun!"
          : "Understanding DOM manipulation is crucial for building interactive web applications."}
      </p>
    </div>
  );
};

export default JsDomManipulationSlide;
