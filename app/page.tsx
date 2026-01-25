import Link from "next/link";

export default function Home() {
  return (
    <div className="grain retro-gradient min-h-[calc(100vh-140px)] overflow-hidden">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="retro-circle absolute -top-32 -right-32 h-96 w-96" />
        <div className="retro-circle absolute top-1/2 -left-48 h-72 w-72" />
        <div className="retro-circle absolute bottom-20 right-20 h-48 w-48" />
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-8">
          {/* Groovy decorative line */}
          <div className="mx-auto mb-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 rounded-full bg-olive/50" />
            <div className="h-1 w-4 rounded-full bg-amber" />
            <div className="h-0.5 w-8 rounded-full bg-olive/50" />
          </div>
          
          <h1 className="font-serif text-5xl font-bold text-charcoal md:text-6xl">
            <span className="groovy-underline">Welcome</span>, Traveler
          </h1>
          
          {/* Wavy decorative element */}
          <svg 
            className="mx-auto mt-6 h-8 w-48 text-amber/40" 
            viewBox="0 0 200 20" 
            fill="none"
          >
            <path 
              d="M0 10 Q25 0, 50 10 T100 10 T150 10 T200 10" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-charcoal/80">
          This is a space for stillness, connection, and the gentle art of presence. 
          Here, we explore the inner landscape through meditation, reflection, and 
          the wisdom of simply being.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/meditations"
            className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-medium"
          >
            Explore Meditations
          </Link>
          <Link
            href="/about"
            className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-medium"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="relative h-16">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
            fill="rgba(253, 246, 227, 0.7)"
          />
        </svg>
      </div>

      {/* Intro Section */}
      <section className="relative bg-cream/70">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="retro-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 rounded-full bg-gradient-to-b from-amber to-terracotta" />
              <h2 className="font-serif text-3xl font-semibold text-charcoal">
                A Journey Inward
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-charcoal/80 mb-4">
              Using this space to connect and share meditations... which are coming soon. 
              Each offering here is an invitation to pause, breathe, and return to the 
              present moment.
            </p>
            <p className="text-lg leading-relaxed text-charcoal/80">
              Whether you&apos;re new to meditation or have walked this path for years, 
              you&apos;re welcome here. Take what resonates, leave what doesn&apos;t, and 
              remember: the practice is simply showing up.
            </p>
          </div>
        </div>
        
        {/* Bottom wavy divider */}
        <svg
          className="w-full"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,20 C300,40 600,0 900,20 C1050,30 1150,10 1200,20 L1200,0 L0,0 Z"
            fill="rgba(253, 246, 227, 0.7)"
          />
        </svg>
      </section>

      {/* Decorative Quote Section */}
      <section className="relative mx-auto max-w-4xl px-6 py-16 text-center">
        {/* Groovy decorative element */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <svg className="h-6 w-12 text-olive/40" viewBox="0 0 50 20" fill="none">
            <path d="M0 10 Q12.5 0, 25 10 T50 10" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="h-3 w-3 rounded-full bg-amber/40" />
          <svg className="h-6 w-12 text-olive/40" viewBox="0 0 50 20" fill="none">
            <path d="M0 10 Q12.5 20, 25 10 T50 10" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <p className="font-serif text-2xl italic text-charcoal/70 max-w-lg mx-auto">
          &quot;Be still and know.&quot;
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <svg className="h-6 w-12 text-olive/40" viewBox="0 0 50 20" fill="none">
            <path d="M0 10 Q12.5 20, 25 10 T50 10" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="h-3 w-3 rounded-full bg-amber/40" />
          <svg className="h-6 w-12 text-olive/40" viewBox="0 0 50 20" fill="none">
            <path d="M0 10 Q12.5 0, 25 10 T50 10" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </section>
    </div>
  );
}
