"use client";

export default function PetalLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 24 }).map((_, i) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 10;
        const size = 12 + Math.random() * 10;

        return (
          <span
            key={i}
            className="petal"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            🌸
          </span>
        );
      })}
    </div>
  );
}
