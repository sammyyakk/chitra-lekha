"use client";

import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Disable cursor on small screens
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't run the cursor logic on mobile

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      cursor.style.transform = `translate(${x}px, ${y}px)`;
      follower.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
    };

    const handleHover = () => setIsHovering(true);
    const resetHover = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", resetHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);

  if (isMobile) return null; // Don't render cursor on mobile

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? "cursor-hover" : ""}`}
      ></div>
      <div
        ref={followerRef}
        className={`cursor-trail ${isHovering ? "trail-hover" : ""}`}
      ></div>
    </>
  );
}
