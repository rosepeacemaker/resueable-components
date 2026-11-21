
import {
  BookOpen,
  Download,
  Palette,
  Type,
  Ruler,
  Layers,
  Code2,
  MousePointer2,
  Sparkles,
  Box,
  CircleHelp,
  Move3D,
} from "lucide-react";

export const navigation = [
  {
    title: "GET STARTED",
    items: [
      { label: "Introduction", icon: BookOpen },
      { label: "Installation", icon: Download },
      { label: "Quick Start", icon: Code2 },
    ],
  },
  {
    title: "FOUNDATIONS",
    items: [
      { label: "Colors", icon: Palette },
      { label: "Typography", icon: Type },
      { label: "Spacing", icon: Ruler },
      { label: "Shadows", icon: Layers },
      { label: "CSS Variables", icon: Code2 },
    ],
  },
  {
    title: "COMPONENTS",
    items: [
      { label: "Buttons", icon: MousePointer2 },
      { label: "Cards", icon: Layers },
      { label: "Inputs", icon: CircleHelp },
      { label: "Navigation", icon: Move3D },
      { label: "Feedback", icon: Sparkles },
    ],
  },
  {
    title: "ANIMATIONS",
    items: [
      { label: "Hover Effects", icon: MousePointer2 },
      { label: "Transitions", icon: Move3D },
      { label: "GSAP Animations", icon: Sparkles },
    ],
  },
  {
    title: "3D & INTERACTIONS",
    items: [
      { label: "3D Components", icon: Box },
      { label: "Half Reveal", icon: Layers },
      { label: "Cursor Effects", icon: MousePointer2 },
    ],
  },
];
