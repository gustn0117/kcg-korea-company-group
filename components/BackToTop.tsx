"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-md bg-brand text-navy-950 shadow-lg transition-all duration-300 hover:bg-brand-soft ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="arrow-up" className="h-5 w-5" />
    </button>
  );
}
