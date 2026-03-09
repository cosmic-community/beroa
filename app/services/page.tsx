import type { Metadata } from 'next';
import { getServices } from '@/lib/cosmic';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Services — Beroa',
  description: 'Explore our comprehensive range of professional services designed to help your business grow and succeed.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 section-padding py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max">
          <SectionHeading
            label="What We Offer"
            title="Our Services"
            description="From strategy to execution, we provide end-to-end professional services that drive measurable business outcomes."
            light
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-5xl mb-4 block">🛠️</span>
              <p className="text-navy-500 text-lg">No services available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}