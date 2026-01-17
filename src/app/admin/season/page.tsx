"use client";

import { useEffect, useState } from "react";

const PHASES = [
  "REGISTRATION",
  "CONTRIBUTION",
  "EVALUATION",
  "RECOGNITION",
];

export default function AdminSeasonPage() {
  const [season, setSeason] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/admin/season")
      .then((res) => res.json())
      .then(setSeason);
  }, []);

  async function updatePhase(phase: string) {
    setLoading(true);
    await fetch("/api/admin/season", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phase }),
    });
    setSeason({ ...season, phase });
    setLoading(false);
  }

  if (!season) {
    return <div className="p-10 text-gray-400">Loading season…</div>;
  }

  return (
    <section className="p-10 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Season Control</h1>

      <div className="mb-6">
        <p><strong>Season:</strong> {season.name}</p>
        <p><strong>Current Phase:</strong> {season.phase}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {PHASES.map((p) => (
          <button
            key={p}
            disabled={loading}
            onClick={() => updatePhase(p)}
            className={`
              rounded-lg px-4 py-2 text-sm font-medium
              ${
                season.phase === p
                  ? "bg-pink-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }
            `}
          >
            {p}
          </button>
        ))}
      </div>
    </section>
  );
}
