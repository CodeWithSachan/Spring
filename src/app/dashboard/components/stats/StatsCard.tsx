type StatsCardProps = {
  label: string;
  value: number;
};

export default function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
}
