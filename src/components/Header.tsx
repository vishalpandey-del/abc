import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { NAV_LINKS, SOLUTIONS } from '@/data/content';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-white'
      }`}
    >
      <div className="border-b border-slate-100">
        <div className="container-max flex items-center justify-between h-16 lg:h-18">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map((link) =>
              link.label === 'Solutions' ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-navy-900'
                        : 'text-slate-600 hover:text-navy-800'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        solutionsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {/* Mega menu */}
                  {solutionsOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                      <div className="w-[720px] rounded-2xl border border-slate-200 bg-white p-6 shadow-soft-lg animate-fade-down">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-navy-600">
                            Our Solutions
                          </span>
                          <Link
                            to="/solutions"
                            className="flex items-center gap-1 text-xs font-semibold text-navy-700 hover:text-navy-900"
                          >
                            View All Solutions
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {SOLUTIONS.map((solution) => (
                            <Link
                              key={solution.slug}
                              to={`/solutions/${solution.slug}`}
                              className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50"
                            >
                              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                                <solution.icon size={18} />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-800 group-hover:text-navy-900">
                                  {solution.name}
                                </div>
                                <div className="text-xs text-slate-400 line-clamp-1">
                                  {solution.shortDescription}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-navy-900'
                      : 'text-slate-600 hover:text-navy-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:inline-flex btn-primary">
              Talk to BeEnsure
              <ArrowRight size={15} />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 xl:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-slate-100 bg-white xl:hidden animate-fade-in">
          <nav className="container-max flex flex-col py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {NAV_LINKS.map((link) =>
              link.label === 'Solutions' ? (
                <div key={link.path}>
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="flex w-full items-center justify-between border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
                  >
                    Solutions
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="py-2 pl-4">
                      <Link
                        to="/solutions"
                        className="block py-2 text-sm font-semibold text-navy-700"
                      >
                        All Solutions
                      </Link>
                      {SOLUTIONS.map((solution) => (
                        <Link
                          key={solution.slug}
                          to={`/solutions/${solution.slug}`}
                          className="flex items-center gap-2 py-2 text-sm text-slate-600"
                        >
                          <solution.icon size={14} className="text-navy-500" />
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`border-b border-slate-100 py-3 text-sm font-medium ${
                    isActive(link.path) ? 'text-navy-900' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link to="/contact" className="btn-primary mt-4">
              Talk to BeEnsure
              <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
