import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-navy-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const clientName = testimonial.metadata?.client_name || 'Anonymous';
  const clientTitle = testimonial.metadata?.client_title || '';
  const quote = testimonial.metadata?.quote || '';
  const rating = testimonial.metadata?.rating || 5;
  const photo = testimonial.metadata?.client_photo;

  return (
    <div className="relative flex flex-col bg-white rounded-2xl border border-navy-100 p-6 md:p-8 hover:shadow-lg hover:shadow-navy-100/50 transition-all duration-300">
      <div className="absolute top-6 right-6 text-5xl text-navy-100 font-serif leading-none select-none">
        &ldquo;
      </div>
      <StarRating rating={rating} />
      <blockquote className="mt-4 text-navy-700 leading-relaxed flex-1 relative z-10">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 pt-6 border-t border-navy-100 flex items-center gap-3">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={clientName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-200"
            width={40}
            height={40}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-white font-bold text-sm">
            {clientName.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-navy-900">{clientName}</p>
          {clientTitle && (
            <p className="text-xs text-navy-400">{clientTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}