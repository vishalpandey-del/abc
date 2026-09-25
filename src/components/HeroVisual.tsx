import {
  ShieldCheck,
  FileCheck,
  Search,
  Network,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Fingerprint,
} from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      {/* Outer rings */}
      <div className="absolute inset-0 rounded-full border border-navy-200/40 animate-pulse-soft" />
      <div className="absolute inset-8 rounded-full border border-navy-200/30" />
      <div className="absolute inset-16 rounded-full border border-navy-200/20" />

      {/* Central dashboard card */}
      <div className="absolute left-1/2 top-1/2 w-[66%] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white">
                <ShieldCheck size={16} />
              </div>
              <span className="text-xs font-semibold text-slate-700">Verification Intelligence</span>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
          </div>

          {/* Verification stages */}
          <div className="space-y-2.5">
            {[
              { label: 'Identity Check', value: 'Verified', pct: 100, color: 'from-green-500 to-green-400' },
              { label: 'Document Validation', value: 'In Progress', pct: 75, color: 'from-navy-600 to-blue-500' },
              { label: 'Address Verification', value: 'Pending', pct: 40, color: 'from-amber-500 to-amber-400' },
              { label: 'Risk Assessment', value: 'Analyzing', pct: 60, color: 'from-navy-600 to-blue-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span>{item.label}</span>
                  <span className="font-semibold text-navy-700">{item.value}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Status items */}
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
            {[
              { icon: CheckCircle2, text: 'Identity verified', color: 'text-green-500' },
              { icon: CheckCircle2, text: 'KYC validated', color: 'text-green-500' },
              { icon: AlertTriangle, text: 'Flagged for review', color: 'text-amber-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon size={12} className={item.color} />
                <span className="text-[10px] text-slate-500">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating nodes */}
      <FloatingNode className="left-0 top-[10%]" icon={Fingerprint} label="Identity" delay={0} />
      <FloatingNode className="right-0 top-[18%]" icon={FileCheck} label="Documents" delay={0.5} />
      <FloatingNode className="left-[5%] bottom-[14%]" icon={MapPin} label="Geo-Tag" delay={1} />
      <FloatingNode className="right-[8%] bottom-[10%]" icon={Network} label="Intelligence" delay={1.5} />

      {/* Connecting circles */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="120" stroke="#5d76e8" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
        <circle cx="200" cy="200" r="160" stroke="#5d76e8" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
      </svg>
    </div>
  );
}

function FloatingNode({
  className,
  icon: Icon,
  label,
  delay,
}: {
  className: string;
  icon: typeof FileCheck;
  label: string;
  delay: number;
}) {
  return (
    <div
      className={`absolute ${className} animate-float`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-soft">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
          <Icon size={14} />
        </div>
        <span className="text-xs font-semibold text-slate-700">{label}</span>
      </div>
    </div>
  );
}
