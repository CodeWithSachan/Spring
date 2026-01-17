"use client";

import { useState } from "react";

export default function JoinProjectButton({
  projectId,
}: {
  projectId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  async function join() {
    setLoading(true);

    const res = await fetch(`/api/projects/${projectId}/join`, {
      method: "POST",
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      alert(data.error);
      return;
    }

    setJoined(true);
  }

  if (joined) {
    return (
      <span className="text-emerald-400 font-medium">
        ✅ Joined this project
      </span>
    );
  }

  return (
    <button
      onClick={join}
      disabled={loading}
      className="
        rounded-full
        bg-gradient-to-r from-pink-500 to-purple-600
        px-6 py-2
        text-white text-sm font-medium
        hover:scale-[1.03]
        disabled:opacity-50
      "
    >
      {loading ? "Joining…" : "Join Project"}
    </button>
  );
}
