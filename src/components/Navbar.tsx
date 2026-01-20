"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* ===== SCROLL EFFECT ===== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== ESC KEY CLOSE ===== */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* ===== CLICK OUTSIDE CLOSE (FIXED) ===== */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      // Ignore clicks on hamburger button
      if (toggleRef.current?.contains(target)) return;

      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

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
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1">
          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Silicality logo"
              className="h-24 w-auto"
            />
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden sm:flex items-center gap-10">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/resources" className="nav-link">Resources</Link>
            <Link href="/mentors" className="nav-link">Mentor</Link>
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
                className="rounded-full border border-pink-500/40 px-5 py-2 font-semibold hover:bg-pink-500/10 transition"
              >
                Sign In
              </button>
            )}
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            ref={toggleRef}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="sm:hidden flex flex-col gap-[5px] z-50"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open && "rotate-45 translate-y-[7px]"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open && "opacity-0"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open && "-rotate-45 -translate-y-[7px]"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={menuRef}
        className={`
          sm:hidden fixed inset-0 z-40
          bg-[#0b0f14]/95 backdrop-blur-lg
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col justify-center px-8 gap-6 text-white">
          <MobileLink href="/" setOpen={setOpen}>Home</MobileLink>
          <MobileLink href="/resources" setOpen={setOpen}>Resources</MobileLink>
          <MobileLink href="/mentors" setOpen={setOpen}>Mentors</MobileLink>
          <MobileLink href="/sponsors" setOpen={setOpen}>Sponsors</MobileLink>
          <MobileLink href="/about" setOpen={setOpen}>About</MobileLink>

          {session && (
            <MobileLink href="/dashboard" setOpen={setOpen}>
              Dashboard
            </MobileLink>
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
              className="mt-8 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-lg font-semibold"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/* ===== REUSABLE MOBILE LINK ===== */
function MobileLink({
  href,
  setOpen,
  children,
}: {
  href: string;
  setOpen: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="text-2xl font-semibold hover:text-pink-400 transition"
    >
      {children}
    </Link>
  );
}
