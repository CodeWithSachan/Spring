import Link from "next/link";
import { trackResourceClick } from "@/lib/analytics/trackResourceClick";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  tags: string[];
  category: string;
  recommended?: boolean;
}

export default function ResourceCard({
  title,
  description,
  href,
  tags,
  category,
  recommended,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        void trackResourceClick(title, category);
      }}
      className="
        group relative
        rounded-2xl
        border border-white/10
        bg-white/5
        p-6
        transition
        hover:border-pink-400/40
        hover:bg-white/10
      "
    >
      {/* Recommended badge */}
      {recommended && (
        <span className="
          absolute right-4 top-4
          rounded-full
          bg-emerald-500/20
          px-3 py-1
          text-xs
          text-emerald-400
        ">
          Recommended
        </span>
      )}

      <div className="flex items-start justify-between">
        <h3 className="text-white font-semibold group-hover:text-pink-400 transition">
          {title}
        </h3>
        <span className="text-gray-500 group-hover:text-pink-400 transition">
          ↗
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
