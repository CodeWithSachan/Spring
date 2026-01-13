"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import EmptyState from "./EmptyState";
import { Project } from "../data";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 🔹 Skeleton while grid not visible yet
  if (!visible) {
    return (
      <div
        ref={ref}
        className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // 🔹 Empty state
  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <div
      ref={ref}
      className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {projects.map((project, i) => (
        <div
          key={project.id}
          style={{ transitionDelay: `${i * 120}ms` }}
          className="transition-all duration-700 ease-out opacity-100 translate-y-0"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
