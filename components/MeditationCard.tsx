import Link from "next/link";
import type { MeditationMeta } from "@/lib/meditations";

interface MeditationCardProps {
  meditation: MeditationMeta;
}

export default function MeditationCard({ meditation }: MeditationCardProps) {
  const typeLabel = meditation.type === "video" ? "Video" : "Reading";
  const typeGradient = meditation.type === "video" 
    ? "from-olive to-amber" 
    : "from-amber to-terracotta";

  return (
    <Link href={`/meditations/${meditation.slug}`}>
      <article className="group retro-card p-6 transition-all hover:shadow-lg hover:scale-[1.02]">
        <div className="flex items-start justify-between mb-3">
          <span
            className={`inline-block rounded-full bg-gradient-to-r ${typeGradient} px-3 py-1 text-xs font-medium text-cream-light`}
          >
            {typeLabel}
          </span>
          <time className="text-sm text-charcoal/50">{meditation.date}</time>
        </div>

        <h3 className="font-serif text-xl font-semibold text-charcoal group-hover:text-amber transition-colors mb-2">
          {meditation.title}
        </h3>

        <p className="text-base text-charcoal/70 line-clamp-2">
          {meditation.excerpt}
        </p>

        <div className="mt-4 flex items-center text-sm font-medium text-amber group-hover:text-burnt-orange transition-colors">
          Read more
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
