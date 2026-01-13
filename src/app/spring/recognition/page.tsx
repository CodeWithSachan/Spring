"use client";

import RecognitionCard from "./components/RecognitionCard";
import { recognitions } from "./data";

export default function RecognitionPage() {
  return (
    <section className="relative w-full px-6 py-32 bg-[#0b0f14]">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Spring{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Recognition
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Celebrating contributors who made real impact in production code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recognitions.map((r) => (
            <RecognitionCard key={r.id} recognition={r} />
          ))}
        </div>

      </div>
    </section>
  );
}
