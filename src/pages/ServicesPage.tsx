import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SERVICES } from '@/data/content';

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-200">
              Our Services
            </div>
            <h1 className="text-h1 text-white text-balance">
              A Comprehensive Risk-Management Ecosystem
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              From credit verification to due diligence, CRUX offers ten specialised services
              designed to help organizations manage risk with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 50}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:border-navy-200 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                      <service.icon size={26} />
                    </div>
                    <span className="text-sm font-bold text-slate-200 transition-colors group-hover:text-navy-300">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-navy-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {service.shortDescription}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {service.features.slice(0, 3).map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 size={12} className="shrink-0 text-navy-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-navy-700">
                    Learn More
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-navy-600 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 p-10 lg:p-16 text-center">
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="relative">
                <h2 className="text-h2 text-white">Need a Customised Risk-Management Solution?</h2>
                <p className="mt-4 text-slate-300">We tailor our services to meet your specific organisational requirements.</p>
                <Link to="/contact" className="btn-primary mt-8">
                  Talk to Our Experts
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
