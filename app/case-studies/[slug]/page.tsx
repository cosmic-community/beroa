// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/cosmic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) return { title: 'Case Study Not Found — Beroa' };
  return {
    title: `${cs.metadata?.headline || cs.title} — Beroa Case Study`,
    description: cs.metadata?.challenge || `Read about our work for ${cs.metadata?.client_name || 'our client'}.`,
  };
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);

  if (!cs) {
    notFound();
  }

  const headline = cs.metadata?.headline || cs.title;
  const clientName = cs.metadata?.client_name || '';
  const service = cs.metadata?.service;
  const challenge = cs.metadata?.challenge || '';
  const solution = cs.metadata?.solution || '';
  const results = cs.metadata?.results || '';
  const image = cs.metadata?.featured_image;

  const sections = [
    { title: 'The Challenge', content: challenge, icon: '🎯' },
    { title: 'Our Solution', content: solution, icon: '💡' },
    { title: 'The Results', content: results, icon: '📈' },
  ].filter((s) => s.content);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding py-20 md:py-28">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-400 hover:text-amber-400 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 rounded-full">
              Case Study
            </span>
            {clientName && (
              <span className="px-3 py-1 text-xs font-semibold bg-white/10 text-navy-200 rounded-full">
                {clientName}
              </span>
            )}
            {service && (
              <span className="px-3 py-1 text-xs font-semibold bg-white/10 text-navy-200 rounded-full">
                {service.title}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl">
            {headline}
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      {image && (
        <section className="container-max px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={`${image.imgix_url}?w=1600&h=700&fit=crop&auto=format,compress`}
              alt={headline}
              className="w-full h-auto"
              width={800}
              height={350}
            />
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          {sections.length > 0 ? (
            <div className="space-y-12 md:space-y-16">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className={`${index > 0 ? 'pt-12 md:pt-16 border-t border-navy-100' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{section.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div
                    className="prose prose-lg prose-navy max-w-none prose-p:text-navy-600 prose-headings:text-navy-900"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-navy-500 text-center py-12">
              Detailed information about this case study will be available soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}