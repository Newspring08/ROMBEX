// app/components/LenisProvider.tsx
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
