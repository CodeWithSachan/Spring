export function DashboardProjects({ contributions }) {
  if (contributions.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-gray-400">
        You haven’t joined any projects yet.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {contributions.map((c) => (
        <div key={c.id} className="rounded-2xl bg-white/5 p-6 border border-white/10">
          <h3 className="text-white font-medium">
            {c.project.title}
          </h3>
          <p className="text-sm text-gray-400">
            Status: <span className="text-pink-400">{c.status}</span>
          </p>
          <p className="text-xs text-gray-500">
            Season: {c.season.name}
          </p>
        </div>
      ))}
    </div>
  );
}
