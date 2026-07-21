"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type World = "fuehrerschein" | "berufskraftfahrer";

interface WorldContextType {
  world: World;
  setWorld: (w: World) => void;
}

const WorldContext = createContext<WorldContextType | undefined>(undefined);

function worldFromPathname(pathname: string): World | null {
  if (pathname.startsWith("/berufskraftfahrer")) return "berufskraftfahrer";
  if (pathname.startsWith("/fuehrerschein")) return "fuehrerschein";
  return null;
}

export function WorldProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const derivedWorld = worldFromPathname(pathname);
  const [fallbackWorld, setFallbackWorld] = useState<World>(derivedWorld ?? "fuehrerschein");

  // Pages outside both worlds (e.g. /ueber-uns) keep showing the last active world.
  // This runs post-commit so it never races the in-flight navigation transition.
  useEffect(() => {
    if (derivedWorld) setFallbackWorld(derivedWorld);
  }, [derivedWorld]);

  const world = derivedWorld ?? fallbackWorld;

  return (
    <WorldContext.Provider value={{ world, setWorld: setFallbackWorld }}>
      {children}
    </WorldContext.Provider>
  );
}

export function useWorld() {
  const context = useContext(WorldContext);
  if (!context) {
    throw new Error("useWorld must be used within a WorldProvider");
  }
  return context;
}
