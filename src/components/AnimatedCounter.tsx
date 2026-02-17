"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  repeatInterval?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  repeatInterval = 10000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const animate = useCallback(() => {
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-in-out quartic for fluid finish
      const eased =
        progress < 0.5
          ? 8 * progress * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 4) / 2;
      const value = Math.round(eased * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    setCount(0);
    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    animate();
    const interval = setInterval(animate, repeatInterval);
    return () => clearInterval(interval);
  }, [isVisible, animate, repeatInterval]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
