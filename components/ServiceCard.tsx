import Link from 'next/link';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const iconText = service.metadata?.icon || '🔧';
  const description = service.metadata?.description || 'Learn more about this service.';
  const image = service.metadata?.featured_image;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-xl hover:shadow-navy-100/50 hover:-translate-y-1 transition-all duration-300"
    >
      {image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={250}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-3xl">{iconText}</span>
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
          <span className="text-5xl">{iconText}</span>
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
          Service {(index + 1).toString().padStart(2, '0')}
        </span>
        <h3 className="text-lg font-bold text-navy-900 group-hover:text-amber-600 transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-navy-500 leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}