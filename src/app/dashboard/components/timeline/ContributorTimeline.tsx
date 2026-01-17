type Contribution = {
  id: string;
  status: string;
  createdAt: string;
  project: {
    title: string;
  };
};

export default function ContributorTimeline({
  contributions,
}: {
  contributions: Contribution[];
}) {
  if (contributions.length === 0) {
    return (
      <p className="text-gray-500 text-sm">
        No activity yet.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {contributions.map((c) => (
        <li
          key={c.id}
          className="rounded-xl border border-white/10 bg-white/5 p-4"
        >
          <p className="text-white font-medium">
            {c.project.title}
          </p>

          <p className="text-sm text-gray-400">
            Status:{" "}
            <span className="text-pink-400">
              {c.status}
            </span>
          </p>

          <p className="text-xs text-gray-500">
            {new Date(c.createdAt).toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
