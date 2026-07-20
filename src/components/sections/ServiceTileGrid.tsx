"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface ServiceTile {
  id: string;
  title: string;
  description: string;
  href: string;
}

interface ServiceTileGridProps {
  tiles: ServiceTile[];
  title?: string;
}

export default function ServiceTileGrid({ tiles, title }: ServiceTileGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".service-tile");
    if (!cards) return;

    gsap.fromTo(cards,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true
        }
      }
    );
  }, []);

  return (
    <section className="py-[120px] bg-offwhite border-b border-divider">
      <div className="max-w-container mx-auto px-6">
        {title && <h2 className="text-h2 md:text-h2-md mb-12 text-ink">{title}</h2>}
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <Link 
              key={tile.id} 
              href={tile.href}
              className="service-tile group relative bg-white p-8 rounded-xl border border-divider hover:border-ink hover:scale-[1.02] transition-all duration-200 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-8 h-8 bg-transparent group-hover:bg-accent transition-colors duration-200 rounded-bl-xl"></div>
              
              <h3 className="text-h3 md:text-h3-md text-ink mb-4">{tile.title}</h3>
              <p className="text-p text-secondary">{tile.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
