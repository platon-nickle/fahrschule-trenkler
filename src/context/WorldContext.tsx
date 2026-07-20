"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";

export type World = "fuehrerschein" | "berufskraftfahrer";

interface WorldContextType {
  world: World;
  setWorld: (w: World) => void;
}

const WorldContext = createContext<WorldContextType | undefined>(undefined);

export function WorldProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const [world, setWorld] = useState<World>("fuehrerschein"); // default to Welt 1
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (pathname.startsWith("/berufskraftfahrer") && world !== "berufskraftfahrer") {
      setWorld("berufskraftfahrer");
    } else if (pathname.startsWith("/fuehrerschein") && world !== "fuehrerschein") {
      setWorld("fuehrerschein");
    }
  }

  return (
    <WorldContext.Provider value={{ world, setWorld }}>
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
