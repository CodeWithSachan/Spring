// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 z-50 w-full transition-all duration-300 ${
//         scrolled
//           ? "bg-[#0b0f14]/80 backdrop-blur-md border-b border-white/10"
//           : "bg-transparent"
//       }`}
//     >
//       {/* ===== NAVBAR ===== */}
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

//         {/* ===== LOGO (UNCHANGED SIZE) ===== */}
//         <Link
//           href="/spring"
//           className="flex items-center gap-3 font-semibold tracking-tight text-white transition hover:opacity-90"
//         >
//           <Image
//             src="/images/Silu.png"
//             alt="Silicality logo"
//             width={150}
//             height={150}
//             priority
//             className="
//               rounded-md
//               transition
//               hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]
//             "
//           />
//         </Link>

// {/* ===== DESKTOP NAV ===== */}
// <div className="hidden sm:flex items-center gap-10">

//   <Link
//     href="/spring#hero"
//     className="
//       relative
//       text-base font-medium
//       text-gray-300 hover:text-white
//       transition
//       after:absolute after:left-0 after:-bottom-1.5
//       after:h-[2.5px] after:w-0
//       after:bg-gradient-to-r after:from-pink-500 after:to-purple-500
//       after:transition-all after:duration-300
//       hover:after:w-full
//     "
//   >
//     Home
//   </Link>

//   <Link
//     href="/spring#timeline"
//     className="
//       relative
//       text-base font-medium
//       text-gray-300 hover:text-white
//       transition
//       after:absolute after:left-0 after:-bottom-1.5
//       after:h-[2.5px] after:w-0
//       after:bg-gradient-to-r after:from-pink-500 after:to-purple-500
//       after:transition-all after:duration-300
//       hover:after:w-full
//     "
//   >
//     Timeline
//   </Link>

//   <Link
//     href="/spring#apply"
//     className="
//       rounded-full
//       border border-pink-500/40
//       px-5 py-2
//       text-base font-bold
//       text-white-400
//       hover:bg-pink-500/10
//       hover:border-pink-400
//       transition
//     "
//   >
//     Sign In
//   </Link>

// </div>


//         {/* ===== MOBILE HAMBURGER ===== */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="sm:hidden flex flex-col justify-center gap-[5px]"
//           aria-label="Toggle menu"
//         >
//           <span
//             className={`h-[2px] w-6 bg-white transition ${
//               open ? "rotate-45 translate-y-[7px]" : ""
//             }`}
//           />
//           <span
//             className={`h-[2px] w-6 bg-white transition ${
//               open ? "opacity-0" : ""
//             }`}
//           />
//           <span
//             className={`h-[2px] w-6 bg-white transition ${
//               open ? "-rotate-45 -translate-y-[7px]" : ""
//             }`}
//           />
//         </button>
//       </nav>

//       {/* ===== MOBILE MENU ===== */}
//       <div
//         className={`sm:hidden absolute top-full left-0 w-full
//           bg-[#0b0f14]/95 backdrop-blur-xl
//           border-b border-white/10
//           transition-all duration-300
//           ${
//             open
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 -translate-y-2 pointer-events-none"
//           }
//         `}
//       >
//         <div className="flex flex-col gap-6 px-6 py-6 text-sm text-gray-300">
//           <Link href="/spring#hero" onClick={() => setOpen(false)}>Home</Link>
//           <Link href="/spring#timeline" onClick={() => setOpen(false)}>Timeline</Link>
//           <Link
//             href="/spring#apply"
//             onClick={() => setOpen(false)}
//             className="w-fit rounded-full border border-pink-500/40 px-4 py-1.5 text-pink-400"
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        <Link href="/spring" className="flex items-center gap-3">
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

          <Link href="/spring#hero" className="nav-link">Home</Link>
          <Link href="/spring#timeline" className="nav-link">Timeline</Link>

          {/* 🔐 AUTH BUTTON */}
          {status === "loading" ? null : session ? (
            <div className="flex items-center gap-3">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="User avatar"
                  className="w-9 h-9 rounded-full border border-white/20"
                />
              )}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="
                  rounded-full
                  border border-red-500/40
                  px-5 py-2
                  text-sm font-semibold
                  text-red-400
                  hover:bg-red-500/10
                  transition
                "
              >
                Sign Out
              </button>
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

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full
          bg-[#0b0f14]/95 backdrop-blur-xl
          border-b border-white/10
          transition-all duration-300
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-6 px-6 py-6 text-gray-300">
          <Link href="/spring#hero" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/spring#timeline" onClick={() => setOpen(false)}>Timeline</Link>

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-fit text-red-400"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn("github", { callbackUrl: "/projects" })}
              className="w-fit text-pink-400"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
