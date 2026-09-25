import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  ctaText,
  ctaLink,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] ${
            light ? 'text-blue-300' : 'text-navy-600'
          }`}
        >
          <span className={`h-px w-8 ${light ? 'bg-blue-400' : 'bg-navy-400'}`} />
          {eyebrow}
        </div>
      )}
      <h2 className={`text-h2 ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      {ctaText && ctaLink && (
        <Link
          to={ctaLink}
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
            light ? 'text-blue-300 hover:text-blue-200' : 'text-navy-700 hover:text-navy-900'
          }`}
        >
          {ctaText}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
