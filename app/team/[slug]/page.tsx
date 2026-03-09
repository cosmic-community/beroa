// app/team/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getTeamMemberBySlug, getTeamMembers } from '@/lib/cosmic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);
  if (!member) return { title: 'Team Member Not Found — Beroa' };
  const name = member.metadata?.name || member.title;
  const role = member.metadata?.role || '';
  return {
    title: `${name} — Beroa Team`,
    description: `${name}${role ? `, ${role}` : ''} at Beroa.`,
  };
}

export async function generateStaticParams() {
  const members = await getTeamMembers();
  return members.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const name = member.metadata?.name || member.title;
  const role = member.metadata?.role || '';
  const bio = member.metadata?.bio || '';
  const photo = member.metadata?.photo;
  const email = member.metadata?.email || '';
  const linkedin = member.metadata?.linkedin_url || '';

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 section-padding py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-400 hover:text-amber-400 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>
        </div>
      </section>

      {/* Profile */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Photo */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                {photo ? (
                  <img
                    src={`${photo.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
                    alt={name}
                    className="w-full h-full object-cover"
                    width={300}
                    height={400}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-300 flex items-center justify-center">
                    <span className="text-8xl text-navy-400">👤</span>
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
                {name}
              </h1>
              {role && (
                <p className="mt-2 text-lg font-semibold text-amber-600">{role}</p>
              )}

              {/* Contact Links */}
              <div className="flex items-center gap-4 mt-6">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy-700 bg-navy-50 hover:bg-navy-100 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>

              {/* Bio */}
              {bio && (
                <div className="mt-8">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-navy-400 mb-4">About</h2>
                  <div
                    className="text-navy-600 leading-relaxed prose prose-navy max-w-none"
                    dangerouslySetInnerHTML={{ __html: bio }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}