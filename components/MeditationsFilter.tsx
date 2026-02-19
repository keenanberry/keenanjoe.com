"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import type { MeditationMeta } from "@/lib/meditations";
import MeditationCard from "@/components/MeditationCard";

interface MeditationsFilterProps {
  meditations: MeditationMeta[];
}

export default function MeditationsFilter({
  meditations,
}: MeditationsFilterProps) {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    meditations.forEach((m) => m.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [meditations]);

  const filtered = useMemo(() => {
    return meditations.filter((m) => {
      const matchesQuery =
        query.trim() === "" ||
        m.title.toLowerCase().includes(query.toLowerCase()) ||
        m.excerpt.toLowerCase().includes(query.toLowerCase());

      const matchesTags =
        activeTags.size === 0 || m.tags.some((t) => activeTags.has(t));

      return matchesQuery && matchesTags;
    });
  }, [meditations, query, activeTags]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }

  function clearFilters() {
    setQuery("");
    setActiveTags(new Set());
  }

  const hasActiveFilters = query.trim() !== "" || activeTags.size > 0;

  return (
    <div>
      {/* Search + Filter Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search meditations..."
            className="w-full rounded-full border border-amber/20 bg-cream-light/80 py-3 pl-11 pr-10 text-base text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-amber/50 focus:ring-2 focus:ring-amber/20"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isActive = activeTags.has(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-amber text-cream-light shadow-sm"
                    : "bg-cream-light/80 text-charcoal/60 border border-amber/15 hover:border-amber/40 hover:text-charcoal"
                }`}
              >
                {tag}
              </button>
            );
          })}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-burnt-orange hover:text-burnt-orange/80 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((meditation) => (
            <MeditationCard key={meditation.slug} meditation={meditation} />
          ))}
        </div>
      ) : (
        <div className="retro-card p-12 text-center">
          <p className="text-lg text-charcoal/70">
            No meditations match your search. Try different keywords or{" "}
            <button
              onClick={clearFilters}
              className="text-amber hover:text-burnt-orange font-medium underline transition-colors"
            >
              clear filters
            </button>
            .
          </p>
        </div>
      )}
    </div>
  );
}
