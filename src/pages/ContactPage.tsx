import { useState, type ReactNode } from 'react';
import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Clock,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SERVICES, COMPANY } from '@/data/content';
import { openMailDraft } from '@/lib/utils';

export function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-200">
              Contact Us
            </div>
            <h1 className="text-h1 text-white text-balance">
              Let's Build a More Resilient Business Together.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Whether you need verification, due diligence, or risk-management services, our team is
              ready to help. Reach out and let's discuss how CRUX can support your organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left: contact info */}
            <ScrollReveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Get in Touch"
                title="Contact Information"
                subtitle="Reach out to us through any of the following channels. We're here to help."
              />

              <div className="mt-8 space-y-4">
                <ContactInfoCard
                  icon={MapPin}
                  title="Office Address"
                  lines={[COMPANY.address]}
                />
                <ContactInfoCard
                  icon={Mail}
                  title="Email"
                  lines={[COMPANY.email]}
                  href={`mailto:${COMPANY.email}`}
                />
                <ContactInfoCard
                  icon={Phone}
                  title="Phone"
                  lines={[COMPANY.phone]}
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                />
                <ContactInfoCard
                  icon={Clock}
                  title="Working Hours"
                  lines={[COMPANY.hours, COMPANY.sundayHours]}
                />
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal delay={150} className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-50 py-12">
        <div className="container-max">
          <ScrollReveal>
            <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-navy-50 lg:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={36} className="mx-auto text-navy-400" />
                  <p className="mt-3 text-sm font-medium text-slate-600">{COMPANY.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900"
                  >
                    View on Google Maps
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 grid-pattern opacity-30" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function ContactInfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-navy-200">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        {lines.map((line, i) => (
          <p key={i} className="mt-0.5 text-sm text-slate-500">{line}</p>
        ))}
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : content;
}

function ContactForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    service: '',
    organisation_name: '',
    designation: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      openMailDraft(COMPANY.email, `Enquiry from ${form.full_name}`, {
        Name: form.full_name,
        Email: form.email,
        Phone: form.phone,
        Service: form.service,
        Organisation: form.organisation_name,
        Designation: form.designation,
        Message: form.message,
      });

      setStatus('success');
      setForm({
        full_name: '',
        email: '',
        phone: '',
        service: '',
        organisation_name: '',
        designation: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-green-600" />
        <h3 className="mt-4 text-lg font-semibold text-slate-900">Almost done!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Your email app has opened with your message. Press Send there to reach our team.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline mt-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8 shadow-soft">
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
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

          <FormField label="Email Address" required>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-field"
              placeholder="you@example.com"
            />
          </FormField>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Phone">
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="input-field"
              placeholder="+91 12345 67890"
            />
          </FormField>

          <FormField label="Service">
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="input-field"
            >
              <option value="">Select a service</option>
              {SERVICES.map((service) => (
                <option key={service.slug} value={service.name}>{service.name}</option>
              ))}
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </FormField>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Organisation Name">
            <input
              type="text"
              value={form.organisation_name}
              onChange={(e) => setForm({ ...form, organisation_name: e.target.value })}
              className="input-field"
              placeholder="Your organisation"
            />
          </FormField>

          <FormField label="Designation">
            <input
              type="text"
              value={form.designation}
              onChange={(e) => setForm({ ...form, designation: e.target.value })}
              className="input-field"
              placeholder="Your designation"
            />
          </FormField>
        </div>

        <FormField label="Message" required>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input-field resize-none"
            placeholder="Tell us about your requirements..."
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
              Sending...
            </>
          ) : (
            <>
              Send Message
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
