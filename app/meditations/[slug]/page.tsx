import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMeditationBySlug, getAllMeditationSlugs } from "@/lib/meditations";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Custom MDX components
const mdxComponents = {
  YouTubeEmbed,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-serif text-3xl font-bold text-charcoal mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-serif text-2xl font-semibold text-charcoal mt-6 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-serif text-xl font-semibold text-charcoal mt-4 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-lg leading-relaxed text-charcoal/85 mb-5" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-amber pl-6 my-6 italic text-charcoal/70"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-5 text-lg text-charcoal/85 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-5 text-lg text-charcoal/85 space-y-2" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-amber hover:text-burnt-orange underline" {...props} />
  ),
};

export async function generateStaticParams() {
  const slugs = await getAllMeditationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meditation = await getMeditationBySlug(slug);

  if (!meditation) {
    return {
      title: "Meditation Not Found | Keenan Joe",
    };
  }

  return {
    title: `${meditation.title} | Keenan Joe`,
    description: meditation.excerpt,
  };
}

export default async function MeditationPage({ params }: PageProps) {
  const { slug } = await params;
  const meditation = await getMeditationBySlug(slug);

  if (!meditation) {
    notFound();
  }

  const typeGradient = meditation.type === "video" 
    ? "from-olive to-amber" 
    : "from-amber to-terracotta";

  return (
    <div className="grain retro-gradient min-h-[calc(100vh-140px)] overflow-hidden">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="retro-circle absolute top-40 -right-32 h-64 w-64" />
        <div className="retro-circle absolute bottom-20 -left-24 h-48 w-48" />
      </div>

      <article className="relative mx-auto max-w-3xl px-6 py-16">
        {/* Back Link */}
        <Link
          href="/meditations"
          className="inline-flex items-center text-sm font-medium text-charcoal/60 hover:text-amber transition-colors mb-8"
        >
          <svg
            className="mr-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Meditations
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-block rounded-full bg-gradient-to-r ${typeGradient} px-3 py-1 text-xs font-medium text-cream-light`}
            >
              {meditation.type === "video" ? "Video" : "Reading"}
            </span>
            <time className="text-sm text-charcoal/50">{meditation.date}</time>
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            {meditation.title}
          </h1>
          {/* Wavy underline */}
          <svg 
            className="mt-4 h-5 w-24 text-amber/60" 
            viewBox="0 0 100 12" 
            fill="none"
          >
            <path 
              d="M0 6 Q12.5 0, 25 6 T50 6 T75 6 T100 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </header>

        {/* Content */}
        <div className="retro-card p-8 md:p-10">
          <div className="prose max-w-none">
            <MDXRemote source={meditation.content} components={mdxComponents} />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
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
            Thank you for being here.
          </p>
        </footer>
      </article>
    </div>
  );
}
