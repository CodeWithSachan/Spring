export default function ProjectSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-pulse">
      <div className="h-5 w-3/4 rounded bg-white/10 mb-4" />
      <div className="h-4 w-full rounded bg-white/10 mb-2" />
      <div className="h-4 w-5/6 rounded bg-white/10 mb-4" />

      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 rounded-full bg-white/10" />
        <div className="h-6 w-20 rounded-full bg-white/10" />
      </div>

      <div className="flex justify-between">
        <div className="h-6 w-24 rounded-full bg-white/10" />
        <div className="h-6 w-20 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
