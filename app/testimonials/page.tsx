import type { Metadata } from 'next';
import { getTestimonials } from '@/lib/cosmic';
import TestimonialCard from '@/components/TestimonialCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Testimonials — Beroa',
  description: 'Read what our clients say about working with Beroa. Real feedback from real organizations.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 section-padding py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute bottom-1/3 -left-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max">
          <SectionHeading
            label="Client Feedback"
            title="Testimonials"
            description="Hear from the organizations we've had the privilege to serve. Their success is our greatest measure of impact."
            light
          />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-5xl mb-4 block">⭐</span>
              <p className="text-navy-500 text-lg">Testimonials coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}