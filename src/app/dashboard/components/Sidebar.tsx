// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { label: "Overview", href: "/dashboard", icon: "🏠" },
//   { label: "Projects", href: "/dashboard/projects", icon: "📦" },
//   { label: "Timeline", href: "/dashboard/timeline", icon: "🧭" },
//   { label: "Badges", href: "/dashboard/badges", icon: "🏅" },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="
//       hidden md:flex
//       w-64 shrink-0
//       border-r border-white/10
//       bg-[#0b0f14]
//       px-4 py-6
//     ">
//       <nav className="flex flex-col gap-2 w-full">
//         {navItems.map((item) => {
//           const active = pathname === item.href;

//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`
//                 flex items-center gap-3
//                 rounded-xl px-4 py-3
//                 text-sm font-medium
//                 transition
//                 ${active
//                   ? "bg-pink-500/15 text-pink-400"
//                   : "text-gray-400 hover:bg-white/5 hover:text-white"}
//               `}
//             >
//               <span>{item.icon}</span>
//               {item.label}
//             </Link>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// }
