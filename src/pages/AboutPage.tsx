import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Eye, Target, ShieldCheck, Search, FileCheck, Users, Smartphone, Building2, Lock, Workflow } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SOLUTIONS, INDUSTRIES, WHY_BEENSURE } from '@/data/content';

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-200">
              About BeEnsure
            </div>
            <h1 className="text-h1 text-white text-balance">
              Building Trust Through Verification and Intelligence
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              In an environment where businesses increasingly depend on accurate information,
              verification has become an essential part of risk management. BeEnsure helps
              organizations validate critical information before it becomes a business risk.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <SectionHeading
                eyebrow="What We Do"
                title="Combining Technology, Data, and Human Expertise"
                subtitle="BeEnsure combines technology, structured verification processes, data intelligence, and human expertise to provide organizations with a comprehensive view of information required for informed decision-making."
              />
              <div className="mt-6 space-y-3">
                {[
                  'Customer verification',
                  'Business verification',
                  'Employment checks',
                  'Document validation',
                  'Due diligence',
                  'Risk assessment',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className="shrink-0 text-navy-600" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Smartphone, title: 'Digital Technology', desc: 'Platforms, APIs, and automation' },
                  { icon: Search, title: 'Field Intelligence', desc: 'Field-level verification' },
                  { icon: FileCheck, title: 'Document Validation', desc: 'Structured document checks' },
                  { icon: Users, title: 'Human Expertise', desc: 'Experienced professionals' },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-white">
                      <item.icon size={18} />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="section-pad bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Who We Serve"
              title="Industries That Rely on BeEnsure"
              subtitle="BeEnsure serves sectors where reliable verification and actionable intelligence are critical."
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-navy-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <industry.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{industry.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Eye size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  To build a more trusted business ecosystem. Our vision is to create a
                  technology-driven verification ecosystem where organizations can access reliable
                  information, identify risks earlier and make informed decisions with greater
                  confidence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Target size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Making verification simpler, smarter and more reliable. Our mission is to combine
                  technology, data and human expertise to deliver scalable verification and risk
                  intelligence solutions that solve real business problems.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why BeEnsure */}
      <section className="section-pad bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Why BeEnsure"
              title="What Sets Us Apart"
              subtitle="Six principles that define how we deliver verification and risk intelligence."
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_BEENSURE.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-navy-200">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                      <item.icon size={22} />
                    </div>
                    <span className="text-2xl font-extrabold text-slate-100 group-hover:text-navy-200">{item.number}</span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-pad bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="container-max relative">
          <ScrollReveal>
            <SectionHeading
              centered
              light
              eyebrow="Security & Compliance"
              title="Built With Data Responsibility in Mind"
              subtitle="BeEnsure's technology and operational processes are designed with appropriate access controls, data security, auditability, and controlled information handling."
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Lock, title: 'Access Controls', desc: 'Authorized access only.' },
              { icon: ShieldCheck, title: 'Data Security', desc: 'Sensitive information protected.' },
              { icon: FileCheck, title: 'Auditability', desc: 'Audit-ready records.' },
              { icon: Workflow, title: 'Controlled Handling', desc: 'Defined workflows and client requirements.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                    <item.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
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
                <h2 className="text-h2 text-white">Ready to Verify with Confidence?</h2>
                <p className="mt-4 text-slate-300">Let's discuss how BeEnsure can support your verification needs.</p>
                <Link to="/contact" className="btn-primary mt-8">
                  Talk to BeEnsure
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
