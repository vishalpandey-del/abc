import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { SOLUTIONS, COMPANY, NAV_LINKS } from '@/data/content';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-max py-16">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-white">Your Verification & Risk Intelligence Partner.</h3>
              <p className="mt-2 text-sm text-slate-400">
                From Verification to Decision Intelligence.
              </p>
            </div>
            <Link to="/contact" className="btn-accent">
              Talk to BeEnsure
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Company info */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              BeEnsure is a technology-enabled verification and risk intelligence platform
              helping businesses make informed decisions through reliable data, structured
              verification and intelligent risk assessment.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={16} className="shrink-0 text-blue-400" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => l.label !== 'Solutions').map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy-policy" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={14} className="text-blue-400" />
                Built with data responsibility in mind.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Verify with Confidence. Decide with Clarity.
          </p>
        </div>
      </div>
    </footer>
  );
}
