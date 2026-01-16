"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const menuRef = useRef<HTMLDivElement>(null);

  /* ===== SCROLL EFFECT ===== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== CLOSE DROPDOWN ON OUTSIDE CLICK ===== */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f14]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* ===== LOGO ===== */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Silu.png"
            alt="Silicality logo"
            width={150}
            height={150}
            priority
            className="rounded-md hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"
          />
        </Link>

        {/* ===== DESKTOP NAV ===== */}
        <div className="hidden sm:flex items-center gap-10">

          <Link href="/" className="nav-link">Home</Link>
          <Link href="/#timeline" className="nav-link">Timeline</Link>

          {/* ===== AUTH ===== */}
          {status === "loading" ? null : session ? (
            <div className="relative" ref={menuRef}>
              {/* Avatar Button */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10 transition"
              >
                <img
                  src={session.user?.image ?? "/avatar.png"}
                  alt={session.user?.name ?? "User"}
                  className="h-9 w-9 rounded-full"
                />
              </button>

              {/* Dropdown */}
              {menuOpen && (
                <div className="
                  absolute right-0 mt-3 w-56
                  rounded-xl border border-white/10
                  bg-[#0b0f14]/95 backdrop-blur
                  shadow-xl
                  overflow-hidden
                  z-50
                ">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm font-medium text-white">
                      {session.user?.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      Contributor
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col text-sm">
                    <Link
                      href="/dashboard"
                      className="px-4 py-2 hover:bg-white/5 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      📊 Dashboard
                    </Link>

                    <Link
                      href="/dashboard/projects"
                      className="px-4 py-2 hover:bg-white/5 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      📁 My Projects
                    </Link>

                    <Link
                      href="/dashboard/badges"
                      className="px-4 py-2 hover:bg-white/5 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      🏆 Badges
                    </Link>
{/* 
                    <Link
                      href="/dashboard/settings"
                      className="px-4 py-2 hover:bg-white/5 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      ⚙️ Settings
                    </Link> */}

                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="px-4 py-2 text-left text-red-400 hover:bg-red-500/10 transition"
                    >
                      🚪 Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => signIn("github", { callbackUrl: "/projects" })}
              className="
                rounded-full
                border border-pink-500/40
                px-5 py-2
                text-base font-bold
                text-white
                hover:bg-pink-500/10
                hover:border-pink-400
                transition
              "
            >
              Sign In
            </button>
          )}
        </div>

        {/* ===== MOBILE TOGGLE ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-[5px]"
        >
          <span className={`h-[2px] w-6 bg-white ${open && "rotate-45 translate-y-[7px]"}`} />
          <span className={`h-[2px] w-6 bg-white ${open && "opacity-0"}`} />
          <span className={`h-[2px] w-6 bg-white ${open && "-rotate-45 -translate-y-[7px]"}`} />
        </button>
      </nav>
    </header>
  );
}
