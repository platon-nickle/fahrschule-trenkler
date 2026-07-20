"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { MapPin, Calendar } from "lucide-react";

const DUMMY_DATES = [
  { id: 1, title: "Intensivkurs Theorie (Ferien)", category: "Theorie B", date: "15.08.2026", time: "09:00 - 12:00", location: "Luisenstraße 28" },
  { id: 2, title: "Grundqualifikation LKW", category: "Grundquali", date: "22.08.2026", time: "08:00 - 16:00", location: "Aschaffenburger Str. 32" },
  { id: 3, title: "Modul 1: Eco-Training", category: "Module", date: "29.08.2026", time: "08:00 - 16:00", location: "Strackgasse 15" },
];

export default function TermineTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".date-card");
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
    <section ref={sectionRef} className="pt-14 md:pt-18 pb-18 md:pb-30 bg-offwhite border-b border-divider">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-h2 md:text-h2-md text-ink mb-4">Nächste Termine</h2>
            <p className="text-secondary text-p">Theoriekurse, Intensivausbildungen und Module auf einen Blick.</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/termine">Alle Termine ansehen</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DUMMY_DATES.map((item) => (
            <div 
              key={item.id}
              className="date-card group flex flex-col p-6 bg-white rounded-xl border border-divider hover:border-ink hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent px-3 py-1 rounded-full text-caption text-ink uppercase tracking-wide font-bold group-hover:scale-105 transition-transform">
                  {item.category}
                </span>
              </div>
              <h3 className="text-h4 text-ink mb-6 flex-1">{item.title}</h3>
              
              <div className="flex flex-col gap-2 pt-4 border-t border-divider">
                <div className="flex items-center gap-3 text-secondary text-small">
                  <Calendar className="w-4 h-4 text-ink" />
                  <span>{item.date} | {item.time}</span>
                </div>
                <div className="flex items-center gap-3 text-secondary text-small">
                  <MapPin className="w-4 h-4 text-ink" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
