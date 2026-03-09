import Link from 'next/link';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export default function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  const headline = caseStudy.metadata?.headline || caseStudy.title;
  const clientName = caseStudy.metadata?.client_name || '';
  const service = caseStudy.metadata?.service;
  const image = caseStudy.metadata?.featured_image;
  const challenge = caseStudy.metadata?.challenge || '';

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group relative flex flex-col md:flex-row bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-xl hover:shadow-navy-100/50 transition-all duration-300"
    >
      <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={headline}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={300}
          />
        ) : (
          <div className="w-full h-full min-h-[14rem] bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <span className="text-5xl opacity-60">📊</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 text-navy-800 rounded-full">
            Case Study #{(index + 1).toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {clientName && (
            <span className="px-2.5 py-1 text-xs font-semibold bg-amber-50 text-amber-700 rounded-md">
              {clientName}
            </span>
          )}
          {service && (
            <span className="px-2.5 py-1 text-xs font-semibold bg-navy-50 text-navy-600 rounded-md">
              {service.title}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-navy-900 group-hover:text-amber-600 transition-colors mb-3">
          {headline}
        </h3>
        {challenge && (
          <p className="text-sm text-navy-500 leading-relaxed line-clamp-3 flex-1">
            {challenge}
          </p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
          Read Case Study
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}