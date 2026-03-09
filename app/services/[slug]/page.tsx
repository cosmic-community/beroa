// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getServiceBySlug, getServices } from '@/lib/cosmic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found — Beroa' };
  return {
    title: `${service.title} — Beroa`,
    description: service.metadata?.description || `Learn about our ${service.title} service.`,
  };
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const description = service.metadata?.description || '';
  const content = service.metadata?.content || service.content || '';
  const image = service.metadata?.featured_image;
  const icon = service.metadata?.icon || '🔧';

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding py-20 md:py-28">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-400 hover:text-amber-400 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{icon}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 rounded-full">
              Service
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {service.title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-navy-300 max-w-3xl leading-relaxed">{description}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          {image && (
            <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
              <img
                src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
                alt={service.title}
                className="w-full h-auto"
                width={800}
                height={400}
              />
            </div>
          )}
          {content && (
            <div
              className="prose prose-lg prose-navy max-w-none prose-headings:font-bold prose-headings:text-navy-900 prose-p:text-navy-600 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {!content && !image && (
            <p className="text-navy-500 text-center py-12">
              Detailed information about this service will be available soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}