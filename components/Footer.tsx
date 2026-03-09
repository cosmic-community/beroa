import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-black text-white">
              Beroa
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-400">
              Delivering expert professional services to help businesses innovate, grow, and succeed in a competitive landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/services', label: 'Services' },
                { href: '/team', label: 'Our Team' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/testimonials', label: 'Testimonials' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {['Strategy', 'Consulting', 'Technology', 'Design'].map((service) => (
                <li key={service}>
                  <span className="text-sm text-navy-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-navy-400 leading-relaxed">
              Ready to start your next project? Let&apos;s talk about how we can help your business grow.
            </p>
            <Link
              href="/case-studies"
              className="inline-block mt-4 px-5 py-2.5 text-sm font-semibold text-navy-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            © {currentYear} Beroa. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            Powered by Cosmic CMS
          </p>
        </div>
      </div>
    </footer>
  );
}