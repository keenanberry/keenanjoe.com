import type { Metadata } from "next";
import Link from "next/link";
import { getAllMeditations } from "@/lib/meditations";
import MeditationsFilter from "@/components/MeditationsFilter";

export const metadata: Metadata = {
  title: "Meditations | Keenan Joe",
  description: "Guided meditations and reflections for your journey inward.",
};

export default async function MeditationsPage() {
  const meditations = await getAllMeditations();

  return (
    <div className="grain retro-gradient min-h-[calc(100vh-140px)] overflow-hidden">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="retro-circle absolute top-20 -right-24 h-72 w-72" />
        <div className="retro-circle absolute bottom-20 -left-20 h-56 w-56" />
      </div>

      <section className="relative mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Meditations
          </h1>
          {/* Wavy underline */}
          <svg 
            className="mx-auto mt-4 h-6 w-40 text-amber/60" 
            viewBox="0 0 160 15" 
            fill="none"
          >
            <path 
              d="M0 7.5 Q20 0, 40 7.5 T80 7.5 T120 7.5 T160 7.5" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              fill="none"
            />
          </svg>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal/70">
            A collection of guided practices and reflections. Each one is an 
            invitation to pause and return to presence.
          </p>
        </div>

        {/* Search, Filter, and Meditations Grid */}
        {meditations.length > 0 ? (
          <MeditationsFilter meditations={meditations} />
        ) : (
          <div className="retro-card p-12 text-center">
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-charcoal/70 mb-6">
              New meditations are being prepared with care. Check back soon, or 
              subscribe to be notified when they arrive.
            </p>
            <Link
              href="/"
              className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-2 text-base font-medium"
            >
              Return Home
            </Link>
          </div>
        )}

        {/* Decorative Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <svg className="h-6 w-12 text-olive/40" viewBox="0 0 50 20" fill="none">
              <path d="M0 10 Q12.5 0, 25 10 T50 10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="h-3 w-3 rounded-full bg-amber/40" />
            <svg className="h-6 w-12 text-olive/40" viewBox="0 0 50 20" fill="none">
              <path d="M0 10 Q12.5 20, 25 10 T50 10" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
