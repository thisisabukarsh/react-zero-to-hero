// Import slide components
import IntroSlide from "../components/slides/01_IntroSlide.jsx";
import JsDomManipulationSlide from "../components/slides/01_5_JsDomManipulationSlide.jsx";
import WhatIsReactSlide from "../components/slides/03_WhatIsReactSlide.jsx";
import JSXSlide from "../components/slides/05_JSXSlide.jsx";
import ComponentsSlide from "../components/slides/06_ComponentsSlide.jsx";
import PropsSlide from "../components/slides/07_PropsSlide.jsx";
import StateSlide from "../components/slides/08_StateSlide.jsx";
import EventsSlide from "../components/slides/09_EventsSlide.jsx";
import ConditionalRenderingSlide from "../components/slides/ConditionalRenderingSlide.jsx";
import ListsKeysSlide from "../components/slides/ListsKeysSlide.jsx";
import HooksSlide from "../components/slides/HooksSlide.jsx";
import ContextSlide from "../components/slides/ContextSlide.jsx";
import PerformanceSlide from "../components/slides/PerformanceSlide.jsx";
import ConclusionSlide from "../components/slides/ConclusionSlide.jsx";
import DomBasicsSlide from "@/components/slides/02_DomBasicsSlide.jsx";
import VdomBasicsSlide from "@/components/slides/04_VdomBasicsSlide.jsx";
import VdomInteractiveSlide from "@/components/slides/04_5_VdomInteractiveSlide.jsx";

// Configure your slides here
export const slides = [
  {
    id: "intro",
    component: IntroSlide,
    title: "Welcome to React Zero to Hero",
  },
  {
    id: "js-dom-manipulation",
    component: JsDomManipulationSlide,
    title: "JavaScript DOM Manipulation",
  },
  {
    id: "dom-basics",
    component: DomBasicsSlide,
    title: "DOM Basics",
  },
  {
    id: "what-is-react",
    component: WhatIsReactSlide,
    title: "What is React?",
  },
  {
    id: "vdom-basics",
    component: VdomBasicsSlide,
    title: "Virtual DOM Basics",
  },
  {
    id: "vdom-interactive",
    component: VdomInteractiveSlide,
    title: "Virtual DOM in Action",
  },
  {
    id: "jsx",
    component: JSXSlide,
    title: "JSX - JavaScript XML",
  },
  {
    id: "components",
    component: ComponentsSlide,
    title: "Components - Building Blocks",
  },
  {
    id: "props",
    component: PropsSlide,
    title: "Props - Passing Data",
  },
  {
    id: "state",
    component: StateSlide,
    title: "State - Managing Data",
  },
  {
    id: "events",
    component: EventsSlide,
    title: "Events - User Interactions",
  },
  {
    id: "conditional-rendering",
    component: ConditionalRenderingSlide,
    title: "Conditional Rendering",
  },
  {
    id: "lists-keys",
    component: ListsKeysSlide,
    title: "Lists & Keys",
  },
  {
    id: "hooks",
    component: HooksSlide,
    title: "Hooks - Modern React",
  },
  {
    id: "context",
    component: ContextSlide,
    title: "Context API - Global State",
  },
  {
    id: "performance",
    component: PerformanceSlide,
    title: "Performance Optimization",
  },
  {
    id: "conclusion",
    component: ConclusionSlide,
    title: "Congratulations! You're a React Hero!",
  },
];

// Presentation configuration
export const presentationConfig = {
  title: "React Zero to Hero",
  subtitle: "Complete Learning Journey from Beginner to Expert",
  author: "AbdulRahman, Youssef",
  theme: {
    primaryColor: "blue",
    secondaryColor: "cyan",
    backgroundColor: "from-blue-100 via-cyan-50 to-blue-100",
  },
};
