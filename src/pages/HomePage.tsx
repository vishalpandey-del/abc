import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  Search,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Zap,
  BarChart3,
  Workflow,
  Clock,
  FileSearch,
  Fingerprint,
  Users,
  Smartphone,
  Building2,
  Briefcase,
  MapPin,
  CreditCard,
  ShieldAlert,
  Eye,
  Target,
  Lock,
  Network,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { HeroVisual } from '@/components/HeroVisual';
import {
  SOLUTIONS,
  INDUSTRIES,
  WHY_BEENSURE,
  HOW_IT_WORKS,
  TECH_FEATURES,
  VERIFICATION_LIFECYCLE,
  APPROACH_STEPS,
  INSIGHTS,
  COMPANY,
} from '@/data/content';
import { useState, useEffect, useCallback } from 'react';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <SolutionsSection />
      <WhyBeEnsureSection />
      <HowItWorksSection />
      <TechnologySection />
      <IndustriesSection />
      <SecuritySection />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-navy-500/10 blur-3xl" />

      <div className="container-max relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              From Verification to Decision Intelligence
            </div>
            <h1 className="text-hero text-white text-balance">
              Verify with Confidence. Decide with Clarity.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              BeEnsure is a technology-enabled verification and risk intelligence platform
              helping businesses make informed decisions through reliable data, structured
              verification and intelligent risk assessment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Talk to BeEnsure
                <ArrowRight size={16} />
              </Link>
              <Link to="/solutions" className="btn-ghost-light">
                Explore Solutions
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { icon: ShieldCheck, label: 'Technology-Enabled' },
                { icon: FileCheck, label: 'Structured Verification' },
                { icon: BarChart3, label: 'Risk Intelligence' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                  <item.icon size={16} className="text-blue-400" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="relative">
        <svg className="block w-full" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none">
          <path d="M0 48L1440 48L1440 0C1200 24 960 36 720 36C480 36 240 24 0 0L0 48Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ── About ────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div>
              <SectionHeading
                eyebrow="About BeEnsure"
                title="Building Trust Through Verification and Intelligence"
                subtitle="In an environment where businesses increasingly depend on accurate information, verification has become an essential part of risk management. BeEnsure helps organizations validate critical information before it becomes a business risk."
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  'Technology',
                  'Structured verification processes',
                  'Data intelligence',
                  'Human expertise',
                  'Customer verification',
                  'Business verification',
                  'Employment checks',
                  'Document validation',
                  'Due diligence',
                  'Risk assessment',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="shrink-0 text-navy-600" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900">
                Learn More About BeEnsure
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-navy-50 to-blue-50 p-8 shadow-soft">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <Fingerprint size={20} />
                    </div>
                    <div className="mt-3 text-sm font-semibold text-slate-800">Identity & KYC</div>
                    <div className="mt-1 text-xs text-slate-500">Establishing the right identity</div>
                  </div>
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <Building2 size={20} />
                    </div>
                    <div className="mt-3 text-sm font-semibold text-slate-800">Business Verification</div>
                    <div className="mt-1 text-xs text-slate-500">Know before you decide</div>
                  </div>
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <Search size={20} />
                    </div>
                    <div className="mt-3 text-sm font-semibold text-slate-800">Due Diligence</div>
                    <div className="mt-1 text-xs text-slate-500">Comprehensive risk profile</div>
                  </div>
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <ShieldAlert size={20} />
                    </div>
                    <div className="mt-3 text-sm font-semibold text-slate-800">Fraud & Risk</div>
                    <div className="mt-1 text-xs text-slate-500">Identify risk before loss</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-soft-lg">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-800">
                  <ShieldCheck size={18} className="text-navy-600" />
                  Technology + Human Expertise
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── Approach: Information → Verification → Intelligence → Decision ─── */
function ApproachSection() {
  const steps = [
    { icon: FileSearch, label: 'Information', desc: 'Understand the client\'s requirement, risk framework and decision-making process. Collect relevant information from appropriate sources.' },
    { icon: ShieldCheck, label: 'Verification', desc: 'Perform structured verification. Use technology-enabled workflows to organize, validate and process information.' },
    { icon: Network, label: 'Intelligence', desc: 'Apply human expertise where investigation or contextual assessment is required. Consolidate findings into structured observations.' },
    { icon: CheckCircle2, label: 'Decision', desc: 'Enable clients to identify discrepancies, understand potential risks and make better-informed decisions.' },
  ];

  return (
    <section className="section-pad bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-navy-500/10 blur-3xl" />

      <div className="container-max relative">
        <ScrollReveal>
          <SectionHeading
            centered
            light
            eyebrow="Our Approach"
            title="Information → Verification → Intelligence → Decision"
            subtitle="BeEnsure transforms raw information into verified intelligence that enables better business decisions."
          />
        </ScrollReveal>

        <div className="mt-16">
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:flex items-start justify-between gap-2">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120} className="flex-1">
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-blue-300 transition-colors hover:bg-white/10">
                    <step.icon size={26} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-white">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 max-w-[180px]">
                    {step.desc}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-blue-300">
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                      {step.label}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{step.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="ml-7 mt-3 h-6 w-px bg-white/15" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Solutions ────────────────────────────────────────────── */
function SolutionsSection() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeading
            centered
            eyebrow="Our Solutions"
            title="A Comprehensive Verification Ecosystem"
            subtitle="From customer verification to fraud and risk detection, BeEnsure offers eleven specialised solutions designed to help organizations verify with confidence."
            ctaText="View All Solutions"
            ctaLink="/solutions"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <ScrollReveal key={solution.slug} delay={i * 40}>
              <Link
                to={`/solutions/${solution.slug}`}
                className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:border-navy-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <solution.icon size={22} />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 transition-colors group-hover:text-navy-400">
                    0{i + 1 < 10 ? i + 1 : i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900 group-hover:text-navy-900">
                  {solution.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
                  {solution.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy-700 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn More
                  <ArrowRight size={14} />
                </div>
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-navy-600 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why BeEnsure ─────────────────────────────────────────── */
function WhyBeEnsureSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeading
            centered
            eyebrow="Why BeEnsure"
            title="Six Reasons Businesses Choose BeEnsure"
            subtitle="Our platform combines technology, data, and human expertise to deliver verification solutions that solve real business problems."
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
                  <span className="text-2xl font-extrabold text-slate-100 transition-colors group-hover:text-navy-200">
                    {item.number}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ─────────────────────────────────────────── */
function HowItWorksSection() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeading
            centered
            eyebrow="How BeEnsure Works"
            title="An 8-Step Verification Process"
            subtitle="From understanding requirements to enabling decisions, every step is designed for accuracy, transparency, and speed."
            ctaText="See the Full Process"
            ctaLink="/how-it-works"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-navy-200">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <step.icon size={20} />
                  </div>
                  <span className="text-2xl font-extrabold text-slate-100 group-hover:text-navy-200">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Technology ───────────────────────────────────────────── */
function TechnologySection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <ScrollReveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Technology"
              title="Technology That Makes Verification Smarter"
              subtitle="BeEnsure combines verification expertise with modern technology to support API integrations, automated data collection, document processing, case allocation, workflow management, geo-tagged evidence, centralized reporting, dashboards, and MIS."
            />
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <Lightbulb size={20} className="shrink-0 text-navy-600" />
              <p className="text-sm text-slate-600">
                Technology is an integrated part of the verification lifecycle — not a replacement for human expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7">
            {/* Verification lifecycle */}
            <ScrollReveal delay={100}>
              <div className="mb-6 rounded-2xl border border-slate-200 bg-navy-950 p-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
                  Verification Lifecycle
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {VERIFICATION_LIFECYCLE.map((stage, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white">
                        {stage}
                      </span>
                      {i < VERIFICATION_LIFECYCLE.length - 1 && (
                        <ArrowRight size={12} className="text-blue-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {TECH_FEATURES.map((feature, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-navy-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                      <feature.icon size={18} />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{feature.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Industries ───────────────────────────────────────────── */
function IndustriesSection() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeading
            centered
            eyebrow="Industries"
            title="Built for Sectors That Demand Reliable Verification"
            subtitle="BeEnsure serves industries where verification, risk assessment, and compliance are critical to business decisions."
            ctaText="Explore Industries"
            ctaLink="/industries"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:border-navy-200 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                  <industry.icon size={22} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900 group-hover:text-navy-900">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {industry.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {industry.support.slice(0, 3).map((s, si) => (
                    <span key={si} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-500">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Security & Compliance ────────────────────────────────── */
function SecuritySection() {
  return (
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
            subtitle="Verification involves sensitive business and personal information. BeEnsure's technology and operational processes are designed with appropriate access controls, data security, auditability, and controlled information handling."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Lock, title: 'Access Controls', desc: 'Appropriate access controls ensure information is handled by authorized personnel only.' },
            { icon: ShieldCheck, title: 'Data Security', desc: 'Data security measures protect sensitive information throughout the verification lifecycle.' },
            { icon: FileSearch, title: 'Auditability', desc: 'Structured workflows and audit-ready records provide traceability.' },
            { icon: Workflow, title: 'Controlled Handling', desc: 'Information is processed according to defined workflows and applicable client requirements.' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
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
  );
}

/* ── Insights ─────────────────────────────────────────────── */
function InsightsSection() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeading
            centered
            eyebrow="Insights"
            title="Perspectives on Verification and Risk Intelligence"
            subtitle="Explore our insights on risk management, verification, and the evolving landscape of business decision-making."
            ctaText="View All Insights"
            ctaLink="/insights"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:border-navy-200 hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-navy-100 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/60 text-navy-700">
                      <FileCheck size={28} />
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock size={12} />
                    {article.date}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-navy-900">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{article.excerpt}</p>
                  {article.isPlaceholder && (
                    <span className="mt-3 inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold text-amber-600">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 p-10 lg:p-16 text-center">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-navy-500/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-h2 text-white max-w-2xl mx-auto text-balance">
                Let's Build a More Reliable Verification Process.
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-slate-300">
                Tell us what you need to verify. We'll help you design the process.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Talk to BeEnsure
                  <ArrowRight size={16} />
                </Link>
                <Link to="/solutions" className="btn-ghost-light">
                  Explore Solutions
                </Link>
              </div>
              <div className="mt-8 text-sm text-slate-400">
                {COMPANY.email}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
