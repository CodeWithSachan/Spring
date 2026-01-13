"use client";

export default function ProjectSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-12 flex justify-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects, tech, or keywords…"
        className="
          w-full max-w-xl
          rounded-2xl
          bg-white/[0.06]
          border border-white/10
          px-5 py-3
          text-sm text-white
          placeholder-gray-400
          outline-none
          transition-all
          hover:border-pink-500/30
          focus:border-pink-500/60
          focus:ring-2 focus:ring-pink-500/20
        "
      />
    </div>
  );
}
