// "use client";

// import { ReactNode, useEffect } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// // import Sidebar from "./components/Sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const { status } = useSession();
//   const router = useRouter();

//   // 🔐 Protect dashboard
//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.replace("/auth/login");
//     }
//   }, [status, router]);

//   if (status === "loading") {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-400">
//         Loading dashboard…
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen bg-[#0b0f14] text-white">
//       {/* Sidebar */}
//       {/* <Sidebar /> */}

//       {/* Main content */}
//       <main className="flex-1 px-6 py-10">
//         {children}
//       </main>
//     </div>
//   );
// }


"use client";

import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardHeader from "./components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading dashboard…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <DashboardHeader />
      <main className="mx-auto max-w-7xl px-6 py-10">
        {children}
      </main>
    </div>
  );
}
