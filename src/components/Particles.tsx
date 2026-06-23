import { useEffect, useRef } from "react";

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const count = 50;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const x = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 12 + 8;
      const delay = Math.random() * 12;
      p.style.cssText = `
        left: ${x}%;
        bottom: -10px;
        width: ${size}px;
        height: ${size}px;
        opacity: ${Math.random() * 0.5 + 0.1};
        animation: float ${duration}s ${delay}s linear infinite;
      `;
      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return <div id="particles" ref={containerRef} />;
}
