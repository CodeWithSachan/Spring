const timeline = [
  { date: "Feb 12", text: "Applied to Civic Sense" },
  { date: "Feb 20", text: "Opened PR #124" },
  { date: "Feb 22", text: "PR #124 merged 🎉" },
];

export default function ContributorTimeline() {
  return (
    <div className="space-y-4">
      {timeline.map((item, i) => (
        <div key={i} className="flex gap-4">
          <span className="text-xs text-gray-500 w-16">{item.date}</span>
          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}
