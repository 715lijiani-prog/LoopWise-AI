import {Menu, X} from 'lucide-react';
import {useState} from 'react';
import {PageRoute} from '../data/siteData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

const NAV_ITEMS: {label: string; page: PageRoute}[] = [
  {label: 'Solutions', page: 'solutions'},
  {label: 'Learning Hub', page: 'learning-hub'},
  {label: 'Stories', page: 'success-stories'},
  {label: 'About', page: 'about'},
  {label: 'Contact', page: 'contact'},
];

export function Navbar({currentPage, onNavigate}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageRoute, anchor?: string) => {
    setMobileOpen(false);
    onNavigate(page, anchor);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5EF]/95 backdrop-blur-sm border-b border-[#1F5C3A]/12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="font-display text-xl font-bold tracking-tight text-[#1F5C3A] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          LoopWise AI
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.page}
                href={`#/${item.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.page);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#1F5C3A] border-[#E07A3F]'
                    : 'text-[#14241B]/75 border-transparent hover:text-[#1F5C3A] hover:border-[#1F5C3A]/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNav('contact', 'b2b-consultation')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-[#E07A3F] text-[#14241B] hover:bg-[#CC662C] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Audit
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#1F5C3A]/20 text-[#1F5C3A] hover:bg-[#A8D5BA]/25 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#1F5C3A]/12 bg-[#F7F5EF] px-4 py-4 space-y-1"
        >
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('home');
            }}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              currentPage === 'home'
                ? 'bg-[#A8D5BA]/35 text-[#1F5C3A]'
                : 'text-[#14241B] hover:bg-[#EFECE3]'
            }`}
          >
            Home
          </a>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.page}
              href={`#/${item.page}`}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.page);
              }}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPage === item.page
                  ? 'bg-[#A8D5BA]/35 text-[#1F5C3A]'
                  : 'text-[#14241B] hover:bg-[#EFECE3]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleNav('contact', 'b2b-consultation')}
              className="w-full py-3 px-4 rounded-lg text-sm font-semibold bg-[#E07A3F] text-[#14241B] hover:bg-[#CC662C] hover:text-white transition-colors cursor-pointer"
            >
              Book Commercial Waste Audit
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
