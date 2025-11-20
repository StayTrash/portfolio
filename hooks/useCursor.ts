import { useState, useEffect } from 'react';

export interface CursorVariants {
  default: {
    x: number;
    y: number;
    backgroundColor: string;
    mixBlendMode: string;
    width: number;
    height: number;
  };
  text: {
    height: number;
    width: number;
    x: number;
    y: number;
    backgroundColor: string;
    mixBlendMode: string;
  };
}

export function useCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "text">("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants: CursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
      width: 32,
      height: 32
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return {
    variants,
    cursorVariant,
    textEnter,
    textLeave
  };
}

