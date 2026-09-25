import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileCheck, Search } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { INSIGHTS, INSIGHT_CATEGORIES } from '@/data/content';

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...INSIGHT_CATEGORIES.map((c) => c.name)];
  const filtered = activeCategory === 'All'
    ? INSIGHTS
    : INSIGHTS.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-200">
              Insights
            </div>
            <h1 className="text-h1 text-white text-balance">
              Perspectives on Risk, Verification & Compliance
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Explore our insights on risk management, verification, fraud prevention, and the
              evolving landscape of financial services in India.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white py-8 border-b border-slate-100">
        <div className="container-max">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-pad bg-slate-50">
        <div className="container-max">
          {filtered.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 80}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:border-navy-200 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy-100 to-blue-100">
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
          ) : (
            <div className="py-20 text-center">
              <Search size={40} className="mx-auto text-slate-300" />
              <p className="mt-4 text-sm text-slate-400">No articles found in this category yet.</p>
            </div>
          )}

          {/* Note */}
          <ScrollReveal delay={200}>
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <p className="text-sm text-slate-500">
                We're working on bringing you insightful content on risk management, verification,
                and compliance. Check back soon for updates.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 p-10 lg:p-16 text-center">
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="relative">
                <h2 className="text-h2 text-white">Have Questions About Risk Management?</h2>
                <p className="mt-4 text-slate-300">Our experts are ready to help.</p>
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
