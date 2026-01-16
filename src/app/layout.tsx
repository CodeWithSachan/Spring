import "@/styles/globals.css";
import { Providers } from "./providers";
import NavbarWrapper from "@/components/NavbarWrapper";

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
          {/* ✅ Navbar appears ONLY on non-dashboard routes */}
          <NavbarWrapper />

          <main className="relative">
            {children}
          </main>
        </Providers>

      </body>
    </html>
  );
}
