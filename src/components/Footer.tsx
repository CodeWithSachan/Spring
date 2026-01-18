import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0f14] px-6 py-16">
      
      {/* Top section */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 md:grid-cols-3">

        {/* Brand + Description */}
        <div>
          <div className="flex items-center gap-3 text-white font-semibold text-lg">
            <img
              src="/images/logo.png"
              alt="Silicality logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          <p className="mt-4 max-w-sm text-sm text-gray-400 leading-relaxed">
            Silicality helps beginners make real, meaningful contributions to
            production software through guided, seasonal open-source programs.
          </p>
        </div>

        {/* Product Links */}
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-white font-medium">Product</span>
          <a href="#features" className="text-gray-400 hover:text-white transition">
            Features
          </a>
          <a href="#timeline" className="text-gray-400 hover:text-white transition">
            Timeline
          </a>
          <a href="#apply" className="text-gray-400 hover:text-white transition">
            Apply
          </a>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-white font-medium">Company</span>

          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition"
          >
            About
          </Link>

                    <Link
            href="/resources"
            className="text-gray-400 hover:text-white transition"
          >
            Resources
          </Link>

          <span className="text-gray-400 cursor-not-allowed">
            Blog (soon)
          </span>

          <span className="text-gray-400 cursor-not-allowed">
            Careers (soon)
          </span>
        </div>

      </div> {/* ✅ GRID CLOSED HERE */}

      {/* Bottom bar */}
      <div className="mx-auto mt-14 max-w-7xl flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Silicality. All rights reserved.</span>
        <span>Built for learning. Designed for impact.</span>
      </div>

    </footer>
  );
}
