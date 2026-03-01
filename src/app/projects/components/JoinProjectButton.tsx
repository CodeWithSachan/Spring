"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JoinProjectButton({
  projectId,
}: {
  projectId: string;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleJoin = async () => {
    setLoading(true);

    const res = await fetch(`/api/projects/${projectId}/join`, {
      method: "POST",
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      alert(data.error || "Failed to join project");
      return;
    }

    alert("Successfully joined project 🎉");
    router.refresh();
  };

  return (
    <button
      onClick={handleJoin}
      disabled={loading}
      className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 text-white text-sm font-medium hover:scale-[1.03] transition disabled:opacity-60"
    >
      {loading ? "Joining..." : "Join Project"}
    </button>
  );
}