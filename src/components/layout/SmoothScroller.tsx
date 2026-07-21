"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useSyncExternalStore, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const MOTION = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // lenis default easing
};

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const isReducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);

  const lenis = useLenis(ScrollTrigger.update);

  useEffect(() => {
    // Images (e.g. the hero carousel) can finish loading after ScrollTrigger's
    // initial measurement, shifting page height and desyncing pinned sections.
    // Lenis also caches the document height internally, so it needs its own
    // resize() call or it caps scrolling at the stale (shorter) height.
    const refresh = () => {
      lenis?.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    const images = Array.from(document.images).filter((img) => !img.complete);
    images.forEach((img) => img.addEventListener("load", refresh));
    const resizeObserver = new ResizeObserver(refresh);
    resizeObserver.observe(document.body);
    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      images.forEach((img) => img.removeEventListener("load", refresh));
      resizeObserver.disconnect();
    };
  }, [lenis]);

  // If reduced motion is requested, render without Lenis entirely to preserve native scroll behavior completely
  if (isReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: MOTION.duration,
        easing: MOTION.easing,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
