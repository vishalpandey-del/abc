import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  CheckCircle2,
  Upload,
  Loader2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { JOB_OPENINGS } from '@/data/content';
import { supabase } from '@/lib/supabase';

export function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-200">
              Careers at CRUX
            </div>
            <h1 className="text-h1 text-white text-balance">
              Build Your Career Where Risk Meets Intelligence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Join a team that has been at the forefront of risk management and verification since 2005.
              Grow your career in banking risk management with a company that values expertise, integrity,
              and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Why Join CRUX"
              title="A Career Built on Expertise and Growth"
              subtitle="We offer an environment where you can develop your skills, work with major institutions, and build a meaningful career in risk management."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Briefcase, title: 'Banking Exposure', desc: 'Work with major banks and financial institutions across India.' },
              { icon: GraduationCap, title: 'Learning Opportunities', desc: 'Continuous learning and skill development in risk management.' },
              { icon: TrendingUp, title: 'Career Growth', desc: 'Clear paths for advancement in a growing organisation.' },
              { icon: Users, title: 'Great Work Environment', desc: 'A collaborative, professional, and supportive workplace.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-navy-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <item.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section-pad bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Open Positions"
              title="Current Job Openings"
              subtitle="Explore our current openings and find the role that's right for you."
            />
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {JOB_OPENINGS.map((job, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-navy-200 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{job.title}</h3>
                      <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-500">
                        <span>{job.department}</span>
                        <span>·</span>
                        <span>{job.location}</span>
                        <span>·</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <a href="#apply" className="btn-outline shrink-0">
                    Apply Now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section-pad bg-white">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Apply Now"
                title="Submit Your Application"
                subtitle="Fill out the form below and our team will get back to you. We look forward to learning about your experience and interest in CRUX."
              />
              <div className="mt-6 space-y-3">
                {[
                  'Competitive compensation and benefits',
                  'Professional development and training',
                  'Opportunity to work with major institutions',
                  'Collaborative and supportive work culture',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className="shrink-0 text-navy-600" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <CareerForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

function CareerForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [cvUrl, setCvUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('career_applications').insert({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        position: form.position,
        cv_url: cvUrl || null,
        message: form.message || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', position: '', message: '' });
      setCvUrl('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-green-600" />
        <h3 className="mt-4 text-lg font-semibold text-slate-900">Application Submitted!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Thank you for your interest in joining CRUX. Our team will review your application and get back to you.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline mt-6"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8 shadow-soft">
      <div className="space-y-5">
        <FormField label="Full Name" required>
          <input
            type="text"
            required
            value={form.full_name}
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            className="input-field"
            placeholder="Your full name"
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Email" required>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-field"
              placeholder="you@example.com"
            />
          </FormField>

          <FormField label="Phone">
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="input-field"
              placeholder="+91 12345 67890"
            />
          </FormField>
        </div>

        <FormField label="Position">
          <select
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
            className="input-field"
          >
            <option value="">Select a position</option>
            {JOB_OPENINGS.map((job) => (
              <option key={job.title} value={job.title}>{job.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </FormField>

        <FormField label="CV / Resume Link">
          <div className="relative">
            <input
              type="url"
              value={cvUrl}
              onChange={(e) => setCvUrl(e.target.value)}
              className="input-field pr-10"
              placeholder="Link to your CV (Google Drive, Dropbox, etc.)"
            />
            <Upload size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
          <p className="mt-1.5 text-xs text-slate-400">
            Provide a link to your CV or resume (Google Drive, Dropbox, etc.)
          </p>
        </FormField>

        <FormField label="Message">
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input-field resize-none"
            placeholder="Tell us about yourself and why you're interested in joining CRUX..."
          />
        </FormField>

        {status === 'error' && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label className="label-field">
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      {children}
    </div>
  );
}
