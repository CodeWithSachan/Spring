"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({
  to,
  suffix = "",
  duration = 1200,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;
        let startTime: number | null = null;

        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out
          setValue(Math.floor(eased * to));

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {value === to && suffix}
    </span>
  );
}
