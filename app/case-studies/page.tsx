import type { Metadata } from 'next';
import { getCaseStudies } from '@/lib/cosmic';
import CaseStudyCard from '@/components/CaseStudyCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Case Studies — Beroa',
  description: 'Explore our case studies and see how Beroa has helped organizations overcome challenges and achieve success.',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 section-padding py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max">
          <SectionHeading
            label="Our Work"
            title="Case Studies"
            description="Real projects, real results. See how we've helped organizations solve complex challenges and achieve measurable outcomes."
            light
          />
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {caseStudies.length > 0 ? (
            <div className="space-y-6 md:space-y-8">
              {caseStudies.map((cs, index) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-5xl mb-4 block">📊</span>
              <p className="text-navy-500 text-lg">Case studies coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}