"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const menuRef = useRef<HTMLDivElement>(null);

  /* ===== SCROLL EFFECT ===== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0f14]/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >

          
      {/* ===== NAVBAR ===== */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* ===== LOGO ===== */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Silicality logo"
            className="h-28 w-auto"
          />
        </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden sm:flex items-center gap-10">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/#timeline" className="nav-link">Timeline</Link>
            <Link href="/resources" className="nav-link">Resources</Link>
            <Link href="/sponsors" className="nav-link">Sponsors</Link>
            <Link href="/about" className="nav-link">About</Link>

            {status === "loading" ? null : session ? (
              <Link
                href="/dashboard"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 hover:bg-white/10 transition"
              >
                Dashboard
              </Link>
            ) : (
              <button
                onClick={() => signIn("github", { callbackUrl: "/projects" })}
                className="
                  rounded-full
                  border border-pink-500/40
                  px-5 py-2
                  text-base font-semibold
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
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-[7px]"}`} />
            <span className={`h-[2px] w-6 bg-white transition ${open && "opacity-0"}`} />
            <span className={`h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-[7px]"}`} />
          </button>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="sm:hidden fixed inset-0 z-40 bg-[#0b0f14]/95 backdrop-blur-lg">
          <div className="flex h-full flex-col justify-center px-8 gap-6 text-white">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold hover:text-pink-400 transition"
            >
              Home
            </Link>

            <Link
              href="/#timeline"
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold hover:text-pink-400 transition"
            >
              Timeline
            </Link>

                                  <Link
            href="/resources"
            className="text-2xl font-semibold hover:text-pink-400 transition"
          >
            Resources
          </Link>

                                                        <Link
            href="/sponsors"
            className="text-2xl font-semibold hover:text-pink-400 transition"
          >
            Sponsors
          </Link>

                      <Link
            href="/about"
            className="text-2xl font-semibold hover:text-pink-400 transition"
          >
            About
          </Link>

            {session && (
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold hover:text-pink-400 transition"
              >
                Dashboard
              </Link>
            )}

            {session ? (
              <button
                onClick={() => {
                  setOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="mt-6 text-xl font-medium text-red-400 hover:text-red-300 transition"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  signIn("github", { callbackUrl: "/projects" });
                }}
                className="
                  mt-8 rounded-xl
                  bg-gradient-to-r from-pink-500 to-purple-600
                  px-6 py-3
                  text-lg font-semibold
                  text-white
                "
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
