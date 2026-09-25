import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { INDUSTRIES } from '@/data/content';

export function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-200">
              Industries We Serve
            </div>
            <h1 className="text-h1 text-white text-balance">Built for High-Stakes Decisions.</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              CRUX serves sectors where accuracy, compliance, and timely delivery are non-negotiable.
              Our risk-management and verification services are tailored to the specific needs of each industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:border-navy-200 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <industry.icon size={26} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-navy-900">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {industry.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-navy-600 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="section-pad bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Our Approach"
              title="How CRUX Supports Your Industry"
              subtitle="Every industry has unique risk and verification requirements. We tailor our approach accordingly."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { step: '01', title: 'Understand', desc: 'We begin by understanding the specific risk and verification needs of your industry and organisation.' },
              { step: '02', title: 'Design', desc: 'We design a verification and risk-management approach tailored to your requirements.' },
              { step: '03', title: 'Deliver', desc: 'We execute with accuracy, compliance, and timely delivery, providing actionable insights.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
                  <span className="text-3xl font-extrabold text-navy-100">{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 p-10 lg:p-16 text-center">
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="relative">
                <h2 className="text-h2 text-white">Does Your Industry Need Risk-Management Support?</h2>
                <p className="mt-4 text-slate-300">Let's discuss how CRUX can help your organisation.</p>
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
