import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SERVICES } from '@/data/content';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <Link to="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              All Services
            </Link>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-blue-300">
              <service.icon size={30} />
            </div>
            <h1 className="text-h1 text-white text-balance">{service.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-h3 text-slate-900">Overview</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{service.description}</p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="mt-10 text-h3 text-slate-900">Key Features</h2>
                <div className="mt-5 space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={150}>
                <div className="sticky top-24 rounded-2xl border border-slate-200 bg-gradient-to-br from-navy-950 to-navy-900 p-6 text-white shadow-soft-lg">
                  <h3 className="text-lg font-bold text-white">Interested in this service?</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Talk to our experts to learn how {service.name} can support your organisation.
                  </p>
                  <Link to="/contact" className="btn-primary mt-5 w-full">
                    Talk to Our Experts
                    <ArrowRight size={15} />
                  </Link>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="text-xs text-slate-400">Explore more services</div>
                    <Link
                      to={`/services/${nextService.slug}`}
                      className="mt-2 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                    >
                      {nextService.name}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
