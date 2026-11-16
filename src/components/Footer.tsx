import {ShieldCheck} from 'lucide-react';
import {PageRoute} from '../data/siteData';

interface FooterProps {
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

export function Footer({onNavigate}: FooterProps) {
  return (
    <footer className="bg-[#14241B] text-[#F7F5EF] border-t border-[#1F5C3A]/30 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Brand Summary */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="font-display text-2xl font-bold tracking-tight text-white inline-block"
            >
              LoopWise AI
            </a>
            <p className="text-sm text-[#F7F5EF]/80 leading-relaxed max-w-sm">
              Scan smarter. Waste less. Loop better. Helping Melbourne households, hospitality
              venues, and Victorian ESG teams divert coffee grounds and soft plastics from landfill.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#A8D5BA] pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Social Traders certified waste service · Victoria, Australia</span>
            </div>
          </div>

          {/* Sitemap Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-display font-semibold text-white mb-3">Platform</h3>
              <ul className="space-y-2.5 text-[#F7F5EF]/75">
                <li>
                  <a
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('home');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#/solutions#waste-scanner"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('solutions', 'waste-scanner');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    AI Waste Scanner
                  </a>
                </li>
                <li>
                  <a
                    href="#/solutions#sustainability-coach"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('solutions', 'sustainability-coach');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    AI Sustainability Coach
                  </a>
                </li>
                <li>
                  <a
                    href="#/solutions#esg-calculator"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('solutions', 'esg-calculator');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    ESG Impact Calculator
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-white mb-3">Resources</h3>
              <ul className="space-y-2.5 text-[#F7F5EF]/75">
                <li>
                  <a
                    href="#/learning-hub"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('learning-hub');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    Learning Hub
                  </a>
                </li>
                <li>
                  <a
                    href="#/success-stories"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('success-stories');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#/about"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('about');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    About LoopWise AI
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-display font-semibold text-white mb-3">Get Started</h3>
              <ul className="space-y-2.5 text-[#F7F5EF]/75">
                <li>
                  <a
                    href="#/contact#b2b-consultation"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('contact', 'b2b-consultation');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    Commercial Waste Audit Victoria
                  </a>
                </li>
                <li>
                  <a
                    href="#/contact#community-booking"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('contact', 'community-booking');
                    }}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    Free Community Access
                  </a>
                </li>
                <li className="text-xs text-[#F7F5EF]/60 pt-1">
                  42 Kerr St, Fitzroy VIC 3065
                </li>
                <li className="text-xs text-[#F7F5EF]/60">hello@loopwise.org.au</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F7F5EF]/60">
          <p>© 2026 LoopWise AI Pty Ltd. Circular Economy Social Enterprise Melbourne.</p>
          <p>
            Coffee Ground Recycling Melbourne · Soft Plastic Recycling Melbourne · Commercial Waste
            Audit Victoria
          </p>
        </div>
      </div>
    </footer>
  );
}
