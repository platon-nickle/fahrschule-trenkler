"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { Car } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: 1, label: "Anmeldung" },
  { id: 2, label: "Theorieunterricht" },
  { id: 3, label: "Fahrstunden" },
  { id: 4, label: "Theorieprüfung" },
  { id: 5, label: "Praktische Prüfung" },
  { id: 6, label: "Führerschein" },
];

const POSITIONS = STEPS.map((_, i) => (i / (STEPS.length - 1)) * 100);
const TRAVEL = 1;
const HOLD = 0.3;

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

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);

  useEffect(() => {
    if (isReducedMotion) {
      setActiveStepIndex(STEPS.length - 1);
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!containerRef.current || !fillRef.current || !carRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          end: "bottom 35%",
          scrub: 0.3,
          onEnter: () => setActiveStepIndex(0),
        },
      });

      let t = 0;
      for (let i = 1; i < STEPS.length; i++) {
        const stepIndex = i;
        tl.to(carRef.current, { left: `${POSITIONS[i]}%`, duration: TRAVEL, ease: "power2.inOut" }, t)
          .to(fillRef.current, { scaleX: POSITIONS[i] / 100, duration: TRAVEL, ease: "power2.inOut" }, t)
          .call(() => setActiveStepIndex(stepIndex), [], t + TRAVEL);
        t += TRAVEL + HOLD;
      }
      tl.to({}, { duration: 0.4 }, t);
    });

    return () => mm.revert();
  }, [isReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-24 bg-offwhite overflow-hidden border-b border-divider"
    >
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-h2 md:text-h2-md mb-16 text-center">Dein Weg zum Führerschein</h2>

        <div className="relative pt-14 pb-28 mx-4 md:mx-14">
          {/* Track background */}
          <div
            ref={trackRef}
            className="absolute left-0 right-0 top-14 h-2 bg-divider rounded-full"
          >
            {/* Track fill */}
            <div
              ref={fillRef}
              className={cn(
                "absolute left-0 top-0 bottom-0 bg-accent rounded-full origin-left",
                isReducedMotion ? "w-full scale-x-100" : "w-full scale-x-0"
              )}
            ></div>
          </div>

          {/* Car Icon — rides on top of the track */}
          <div
            ref={carRef}
            className="absolute top-14 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: isReducedMotion ? "100%" : "0%" }}
          >
            <div className="bg-white p-1.5 rounded-full shadow-lg border-2 border-accent -mt-6">
              <Car className="w-7 h-7 md:w-8 md:h-8 text-accent" strokeWidth={2} />
            </div>
          </div>

          {/* Steps — positioned in the same 0-100% coordinate space as the track/car */}
          <div className="relative h-2 top-14">
            {STEPS.map((step, index) => {
              const isActive = isReducedMotion || index <= activeStepIndex;
              const justArrived = !isReducedMotion && index === activeStepIndex;

              return (
                <div
                  key={step.id}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
                  style={{ left: `${POSITIONS[index]}%` }}
                >
                  <div
                    key={justArrived ? `pulse-${index}` : `static-${index}`}
                    className={cn(
                      "w-6 h-6 rounded-full border-4 transition-colors duration-300 bg-white",
                      isActive ? "border-accent" : "border-divider",
                      justArrived && "animate-checkpoint-pulse"
                    )}
                  ></div>
                  <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-center flex flex-col items-center gap-1">
                    <span
                      className={cn(
                        "font-archivo font-black text-small md:text-p transition-colors duration-300",
                        isActive ? "text-accent" : "text-divider"
                      )}
                    >
                      {String(step.id).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-semibold transition-colors duration-300 text-p md:text-h6",
                        isActive ? "text-ink" : "text-secondary"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
