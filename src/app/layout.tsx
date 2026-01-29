
// import "@/styles/globals.css";
// import { Providers } from "./providers";
// import NavbarWrapper from "@/components/NavbarWrapper";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#0b0f14] text-white antialiased overflow-x-hidden">

//         {/* Floating petals */}
//         <div className="petal" style={{ left: "15%", animationDuration: "10s" }}>🌸</div>
//         <div className="petal" style={{ left: "35%", animationDuration: "12s", animationDelay: "4s" }}>🌸</div>
//         <div className="petal" style={{ left: "55%", animationDuration: "11s", animationDelay: "8s" }}>🌸</div>
//         <div className="petal" style={{ left: "75%", animationDuration: "13s", animationDelay: "2s" }}>🌸</div>

//         {/* Global background glow */}
//         <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.15),_transparent_60%)]" />

//         <Providers>
//           {/* ✅ Navbar appears ONLY on non-dashboard routes */}
//           <NavbarWrapper />

//           <main className="relative">
//             {children}
//           </main>
//         </Providers>

//       </body>
//     </html>
//   );
// }
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://spring.silicality.com"),

  title: {
    default: "Spring of Silicality — Open Source & Developer Programs",
    template: "%s | Spring of Silicality",
  },

  description:
    "Spring of Silicality is a seasonal open-source and developer program by Silicality that helps beginners and early builders gain real-world experience through guided contributions, mentorship, and real projects.",

  keywords: [
    "Spring of Silicality",
    "open source programs",
    "developer programs",
    "open source contributions",
    "beginner open source",
    "Silicality Spring",
    "student developers",
    "software mentorship",
  ],

  authors: [{ name: "Silicality" }],
  creator: "Silicality",

  openGraph: {
    title: "Spring of Silicality — Open Source & Developer Programs",
    description:
      "A seasonal open-source contribution program helping beginners and developers build real-world software through guided mentorship and real projects.",
    url: "https://spring.silicality.com",
    siteName: "Spring of Silicality",
    images: [
      {
        url: "/loog.png",
        width: 1200,
        height: 630,
        alt: "Spring of Silicality Open Source Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spring of Silicality — Open Source Program",
    description:
      "Build real-world software through guided open-source contributions and mentorship.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0f14] text-white antialiased overflow-x-hidden">

        {/* Floating petals */}
        <div className="petal" style={{ left: "15%", animationDuration: "10s" }}>🌸</div>
        <div className="petal" style={{ left: "35%", animationDuration: "12s", animationDelay: "4s" }}>🌸</div>
        <div className="petal" style={{ left: "55%", animationDuration: "11s", animationDelay: "8s" }}>🌸</div>
        <div className="petal" style={{ left: "75%", animationDuration: "13s", animationDelay: "2s" }}>🌸</div>

        {/* Global background glow */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.15),_transparent_60%)]" />

        <Providers>
          {/* Navbar only on non-dashboard routes */}
          <NavbarWrapper />

          <main className="relative">
            {children}
          </main>
        </Providers>

      </body>
    </html>
  );
}