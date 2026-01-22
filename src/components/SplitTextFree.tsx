import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TagType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SplitTextFreeProps {
  text: string;
  className?: string;
  tag?: TagType;
  textAlign?: React.CSSProperties["textAlign"];
  delay?: number; // ms
  duration?: number; // seconds
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
}

export default function SplitTextFree({
  text,
  className = "",
  tag = "p",
  textAlign = "left",
  delay = 28,
  duration = 1.0,
  ease = "power3.out",
  from = { opacity: 0, y: 30 },
  to = { opacity: 1, y: 0 },
}: SplitTextFreeProps) {
  const elRef = useRef<HTMLElement | null>(null);

  const letters = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLElement>("[data-char]");

    const tween = gsap.fromTo(
      chars,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [text, delay, duration, ease, JSON.stringify(from), JSON.stringify(to)]);

  const Tag = tag as any;

  return (
    <Tag
      ref={elRef as any}
      className={`split-parent ${className}`}
      style={{ textAlign, display: "inline-block", overflow: "hidden" }}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          data-char
          className="split-char"
          style={{
            display: "inline-block",
            whiteSpace: ch === " " ? "pre" : "normal",
            willChange: "transform, opacity",
          }}
        >
          {ch}
        </span>
      ))}
    </Tag>
  );
}
