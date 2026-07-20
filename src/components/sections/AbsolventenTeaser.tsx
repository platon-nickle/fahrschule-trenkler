"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const GRADUATES = [
  { id: 1, name: "Amelie", date: "Juli 2026", image: "/bestanden/Amelie.jpg" },
  { id: 2, name: "Dennis", date: "Juni 2026", image: "/bestanden/Dennis.png" },
  { id: 3, name: "Sarah", date: "Juni 2026", image: "/bestanden/Sarah.png" },
];

export default function AbsolventenTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".graduate-card");
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
    <section ref={sectionRef} className="py-[120px] bg-offwhite border-b border-divider">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-h2 md:text-h2-md text-ink mb-4">Erfolgreich bestanden</h2>
            <p className="text-secondary text-p">Wir gratulieren unseren neuesten Absolventen zur bestandenen Prüfung.</p>
          </div>
          <Link href="/ueber-uns/absolventen" className="group flex items-center gap-2 text-ink font-semibold hover:text-accent transition-colors">
            Zur Galerie
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GRADUATES.map((grad) => (
            <div 
              key={grad.id}
              className="graduate-card group relative overflow-hidden rounded-2xl bg-white border border-divider"
            >
              <div className="relative aspect-square">
                <Image
                  src={grad.image}
                  alt={grad.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-ink/90 to-transparent">
                <p className="text-white font-bold text-h5 mb-1">{grad.name}</p>
                <p className="text-white/80 text-small">{grad.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
