export default function ProjectCardSkeleton() {
  return (
    <div
      className="
        rounded-2xl border border-white/10
        bg-white/[0.04] backdrop-blur-xl
        p-6 animate-pulse
      "
    >
      {/* Title */}
      <div className="h-5 w-3/4 rounded bg-white/10 mb-3" />

      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full rounded bg-white/10" />
        <div className="h-3 w-5/6 rounded bg-white/10" />
      </div>

      {/* Tech pills */}
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 rounded-full bg-white/10" />
        <div className="h-6 w-12 rounded-full bg-white/10" />
        <div className="h-6 w-14 rounded-full bg-white/10" />
      </div>

      {/* Meta */}
      <div className="flex justify-between mb-4">
        <div className="h-5 w-20 rounded-full bg-white/10" />
        <div className="h-4 w-28 rounded bg-white/10" />
      </div>

      {/* CTA */}
      <div className="h-4 w-24 rounded bg-white/10" />
    </div>
  );
}
