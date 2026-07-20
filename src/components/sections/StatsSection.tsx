"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".stat-card");
    if (!cards) return;

    gsap.fromTo(cards,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="pt-18 md:pt-30 pb-14 md:pb-18 bg-offwhite border-b border-divider">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="stat-card flex flex-col items-start p-6 bg-white rounded-2xl border border-divider">
            <div className="text-stat md:text-stat-md mb-2">90%</div>
            <div className="text-secondary font-semibold text-small">Praxis bestanden<br/>TÜV Hessen 2025</div>
          </div>

          <div className="stat-card flex flex-col items-start p-6 bg-white rounded-2xl border border-divider">
            <div className="text-stat md:text-stat-md mb-2">79%</div>
            <div className="text-secondary font-semibold text-small">Theorie bestanden<br/>TÜV Hessen 2025</div>
          </div>

          <div className="stat-card flex flex-col items-start p-6 bg-white rounded-2xl border border-divider">
            <div className="text-stat md:text-stat-md mb-2 flex items-baseline">
              5,0
              <span className="text-h4 text-accent ml-1">★</span>
            </div>
            <div className="text-secondary font-semibold text-small">270 Google-Bewertungen</div>
          </div>

          <div className="stat-card flex flex-col items-start justify-center p-6 bg-white rounded-2xl border border-divider">
            <div className="text-stat md:text-stat-md mb-2">1962</div>
            <div className="text-secondary font-semibold text-small">Familienbetrieb</div>
          </div>

        </div>
      </div>
    </section>
  );
}
