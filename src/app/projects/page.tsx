
"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { projects } from "./data";
import ProjectGrid from "./components/ProjectGrid";
import ProjectFilters from "./components/ProjectFilters";
import ProjectSort from "./components/ProjectSort";

import type {
  ProjectFilterState,
  ProjectSort as SortType,
} from "./types/project";

export default function ProjectsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [filters, setFilters] = useState<ProjectFilterState>({
    difficulty: "",
    tech: "",
    accepting: null,
    search: "",
  });

  const [sort, setSort] = useState<SortType>("featured");

  /* 🔐 Redirect unauthenticated users */
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth/login");
    }
  }, [status, router]);

  /* ✅ SAME filtering + sorting logic as 1st version */
  const visibleProjects = useMemo(() => {
    if (!session) return [];

    let list = projects.filter((p) => {
      if (!p.published) return false;

      if (filters.difficulty && p.difficulty !== filters.difficulty)
        return false;

      if (filters.accepting === true && !p.accepting)
        return false;

      if (filters.search) {
        const q = filters.search.toLowerCase();
        const match =
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q));
        if (!match) return false;
      }

      return true;
    });

    switch (sort) {
      case "featured":
        return [...list].sort(
          (a, b) => Number(!!b.featured) - Number(!!a.featured)
        );

      case "beginner":
        return [...list].sort(
          (a, b) =>
            (a.difficulty === "Beginner" ? -1 : 1) -
            (b.difficulty === "Beginner" ? -1 : 1)
        );

      case "newest":
        return [...list].reverse();

      default:
        return list;
    }
  }, [filters, sort, session]);

  /* ⏳ Loading */
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading projects…
      </div>
    );
  }

  /* 🔁 Redirecting */
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Redirecting to login…
      </div>
    );
  }

  return (
    <>
      {/* ===== AUTH HEADER (added, does NOT change layout) ===== */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f14]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <h2 className="text-white font-semibold">Silicality</h2>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name ?? "User"}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm text-gray-300">
                {session.user?.name}
              </span>
            </div>

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 text-sm bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg border border-red-600/30"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav> */}

      {/* ===== PROJECTS SECTION (IDENTICAL TO 1st IMAGE) ===== */}
      <section className="relative w-full px-6 py-32 bg-[#0b0f14] overflow-hidden pt-28">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="mt-32 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-pink-500/15 to-purple-500/15 blur-[200px]" />
        </div>

        <div className="relative mx-auto max-w-7xl space-y-14">
          {/* ===== TITLE ===== */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Open Source{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              Jump into real-world coding with production-ready open source projects.
            </p>
          </div>

          {/* ===== SEARCH BAR ===== */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search projects by name, tech, or keywords…"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
              className="
                w-full max-w-xl
                rounded-xl
                bg-white/[0.06]
                border border-white/10
                px-5 py-3
                text-sm text-white
                outline-none
                transition
                placeholder:text-gray-500
                hover:border-pink-500/40
                focus:border-pink-500/60
                focus:ring-2 focus:ring-pink-500/20
              "
            />
          </div>

          {/* ===== FILTERS ===== */}
          <ProjectFilters filters={filters} setFilters={setFilters} />

          {/* ===== SORT ===== */}
          <ProjectSort value={sort} onChange={setSort} />

          {/* ===== GRID ===== */}
          <ProjectGrid projects={visibleProjects} />
        </div>
      </section>
    </>
  );
}
