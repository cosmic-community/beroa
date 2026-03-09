import Link from 'next/link';
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic';
import ServiceCard from '@/components/ServiceCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionHeading from '@/components/SectionHeading';

export default async function HomePage() {
  const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding py-24 md:py-36 lg:py-44">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 rounded-full mb-6">
              Professional Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
              We build solutions that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                drive results.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-navy-300 max-w-2xl leading-relaxed">
              Beroa partners with forward-thinking organizations to deliver strategy, consulting, and technology solutions that transform businesses and create lasting impact.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-navy-600 hover:border-amber-400 hover:text-amber-400 rounded-xl transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {services.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <SectionHeading
              label="What We Do"
              title="Our Services"
              description="We offer a comprehensive range of professional services designed to help your business achieve its goals."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.slice(0, 6).map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
            {services.length > 6 && (
              <div className="text-center mt-10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-amber-600 border-2 border-amber-300 hover:bg-amber-50 rounded-xl transition-colors"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Team Section */}
      {teamMembers.length > 0 && (
        <section className="section-padding">
          <div className="container-max">
            <SectionHeading
              label="Our Team"
              title="Meet the Experts"
              description="Our talented team of professionals brings diverse expertise and a shared passion for delivering exceptional results."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.slice(0, 4).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
            {teamMembers.length > 4 && (
              <div className="text-center mt-10">
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-amber-600 border-2 border-amber-300 hover:bg-amber-50 rounded-xl transition-colors"
                >
                  See Full Team →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <section className="section-padding bg-navy-950">
          <div className="container-max">
            <SectionHeading
              label="Our Work"
              title="Featured Case Studies"
              description="Discover how we've helped organizations overcome challenges and achieve measurable results."
              light
            />
            <div className="space-y-6">
              {caseStudies.slice(0, 3).map((cs, index) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} index={index} />
              ))}
            </div>
            {caseStudies.length > 3 && (
              <div className="text-center mt-10">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-amber-400 border-2 border-amber-400/40 hover:bg-amber-400/10 rounded-xl transition-colors"
                >
                  View All Case Studies →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <SectionHeading
              label="Client Feedback"
              title="What Our Clients Say"
              description="Don't just take our word for it — hear from the organizations we've had the privilege to serve."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            {testimonials.length > 3 && (
              <div className="text-center mt-10">
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-amber-600 border-2 border-amber-300 hover:bg-amber-50 rounded-xl transition-colors"
                >
                  Read All Testimonials →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
            Let&apos;s discuss how Beroa can help you achieve your goals with our expert services and proven methodologies.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center mt-8 px-10 py-4 text-base font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}