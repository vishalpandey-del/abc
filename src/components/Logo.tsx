import { Link } from 'react-router-dom';

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative h-10 w-10 overflow-hidden rounded-lg">
        <img
          src="/images/WhatsApp_Image_2026-08-17_at_4.55.45_PM.jpeg"
          alt="BeEnsure Logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`text-xl font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-navy-950'
          }`}
        >
          BeEnsure
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
            light ? 'text-blue-300' : 'text-slate-400'
          }`}
        >
          Verification & Risk Intelligence
        </span>
      </div>
    </Link>
  );
}
