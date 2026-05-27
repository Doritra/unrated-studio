"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };

    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (dot.current) {
        dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const onEnter = () => ring.current?.classList.add("scale-up");
    const onLeave = () => ring.current?.classList.remove("scale-up");
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed; top: 0; left: 0; width: 8px; height: 8px;
          background: #F5F3EE; border-radius: 50%; pointer-events: none; z-index: 9999;
          transition: background 0.2s;
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0; width: 36px; height: 36px;
          border: 0.5px solid rgba(245,243,238,0.5); border-radius: 50%;
          pointer-events: none; z-index: 9998;
          transition: transform 0.05s, border-color 0.2s;
        }
        .cursor-ring.scale-up {
          width: 48px; height: 48px;
          border-color: rgba(245,243,238,0.8);
          margin: -6px;
        }
      `}</style>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}
