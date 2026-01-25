import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Keenan Joe",
  description: "Learn more about the journey and intention behind these meditations.",
};

export default function AboutPage() {
  return (
    <div className="grain retro-gradient min-h-[calc(100vh-140px)] overflow-hidden">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="retro-circle absolute -top-20 -left-20 h-64 w-64" />
        <div className="retro-circle absolute bottom-40 -right-32 h-80 w-80" />
      </div>

      <section className="relative mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            About
          </h1>
          {/* Wavy underline */}
          <svg 
            className="mx-auto mt-4 h-6 w-32 text-amber/60" 
            viewBox="0 0 120 15" 
            fill="none"
          >
            <path 
              d="M0 7.5 Q15 0, 30 7.5 T60 7.5 T90 7.5 T120 7.5" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              fill="none"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="retro-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-amber to-terracotta" />
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                The Journey
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80 mb-4">
              Hello, I&apos;m Keenan. This space grew from a simple desire: to share 
              the peace that meditation has brought into my life. What started as a 
              personal practice has become something I feel called to offer others.
            </p>
            <p className="text-lg leading-relaxed text-charcoal/80">
              I believe that stillness is not something we find outside ourselves, 
              but something we remember. Each meditation here is an invitation to 
              return home to that quiet center within.
            </p>
          </div>

          <div className="retro-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-olive to-amber" />
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                The Intention
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80 mb-4">
              These meditations are offered freely, as gifts. They draw from various 
              contemplative traditions while remaining accessible to seekers of all 
              backgrounds. There is no dogma here—only presence.
            </p>
            <p className="text-lg leading-relaxed text-charcoal/80">
              Whether you have five minutes or fifty, whether you&apos;re seeking calm 
              or clarity, my hope is that you&apos;ll find something here that speaks 
              to where you are right now.
            </p>
          </div>

          <div className="retro-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-terracotta to-olive" />
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                Connect
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80">
              I&apos;d love to hear from you. Whether you have questions, reflections, 
              or simply want to say hello, feel free to reach out. We&apos;re all 
              walking each other home.
            </p>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <svg className="h-6 w-12 text-olive/40" viewBox="0 0 50 20" fill="none">
              <path d="M0 10 Q12.5 0, 25 10 T50 10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="h-3 w-3 rounded-full bg-amber/40" />
            <svg className="h-6 w-12 text-olive/40" viewBox="0 0 50 20" fill="none">
              <path d="M0 10 Q12.5 20, 25 10 T50 10" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <p className="font-serif text-lg italic text-charcoal/60">
            &quot;The quieter you become, the more you can hear.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
