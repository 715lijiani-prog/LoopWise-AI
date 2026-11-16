import {ArrowRight, Calculator, Compass, ScanLine, Sprout} from 'lucide-react';
import {IMAGES, LEARNING_ARTICLES, PageRoute} from '../data/siteData';
import {ImageWithFallback} from '../components/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: PageRoute, anchor?: string) => void;
  onSelectArticle: (articleId: string) => void;
}

const VALUE_PROPOSITIONS = [
  {
    index: '01.',
    audience: 'Cafés & Hospitality',
    title: 'Sustainable Café Waste Management',
    description:
      'Replace smelly wet-waste skips with scheduled electric cargo-trike coffee waste collection and clean soft plastic sleeves tailored to Melbourne laneways.',
    ctaLabel: 'Book Café Collection',
    route: 'contact' as PageRoute,
    anchor: 'b2b-consultation',
  },
  {
    index: '02.',
    audience: 'Corporate ESG & Councils',
    title: 'Commercial Waste Audit Victoria',
    description:
      'Turn bin-room guesswork into NABERS-ready diversion ledgers. Track coffee grounds, soft plastic recycling, and Scope 3 carbon reductions across every tenant floor.',
    ctaLabel: 'Explore ESG Calculator',
    route: 'solutions' as PageRoute,
    anchor: 'esg-calculator',
  },
  {
    index: '03.',
    audience: 'Households & Gardens',
    title: 'Free Coffee Grounds Garden Melbourne',
    description:
      'Check your Victorian postcode in seconds to reserve free 5 kg and 10 kg spent espresso ground pails from participating neighbourhood roasters.',
    ctaLabel: 'Check Postcode Eligibility',
    route: 'contact' as PageRoute,
    anchor: 'community-booking',
  },
];

const IMPACT_KPI_STRIP = [
  {value: '1,480 t', label: 'Cumulative Tonnage Diverted (2023–2026)'},
  {value: '412', label: 'Active Melbourne Cafés & Roasters'},
  {value: '91.4%', label: 'Average Clean-Stream Diversion Rate'},
  {value: '48', label: 'Victorian Community Gardens Supplied'},
];

const PARTNER_LOGOS = [
  'Zoos Victoria',
  'Mirvac Building 7',
  'City of Melbourne',
  'Seven Seeds Roastery',
  'CERES Environment Park',
  'South Melbourne Market',
];

const TESTIMONIALS = [
  {
    quote:
      'Before partnering with LoopWise AI, 38% of our lobby recycling was contaminated by soft plastics and wet coffee waste. Within 90 days of our Building 7 commercial waste audit, diversion climbed to 89.6% with verifiable monthly ESG data.',
    name: 'Hannah Gallagher',
    role: 'Precinct Sustainability Lead',
    org: 'Mirvac — Docklands Building 7',
  },
  {
    quote:
      'Separating espresso pucks at the knock-box took our baristas less than twenty seconds per shift. Our wet-bin haulage weight dropped by nearly a third, and our regulars love seeing our grounds nourish Parkville garden beds.',
    name: 'Liam O’Connor',
    role: 'Head of Hospitality Operations',
    org: 'Brunswick & Fitzroy Roasters Collective',
  },
];

export function HomePage({onNavigate, onSelectArticle}: HomePageProps) {
  return (
    <div>
      {/* Sitemap Page: Home — Hero & Dual CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <p className="text-xs font-medium tracking-wide text-[#1F5C3A]">
                Victoria’s Circular Economy Platform · Social Traders Certified
              </p>

              <h1 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.06] tracking-tight text-[#14241B]">
                Scan smarter. Waste less. Loop better.
              </h1>

              <p className="text-base sm:text-lg text-[#14241B]/80 leading-relaxed max-w-xl">
                LoopWise AI powers coffee ground recycling in Melbourne and traceable soft plastic
                recycling across Victoria—connecting cafés, corporate ESG teams, and local gardens
                in one measurable circular loop.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'b2b-consultation')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#E07A3F] text-[#14241B] hover:bg-[#CC662C] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>B2B Service Consultation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'community-booking')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold border border-[#1F5C3A] text-[#1F5C3A] bg-transparent hover:bg-[#1F5C3A] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Free Community Access</span>
                </button>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#1F5C3A]/12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#14241B]/70">
              <span>Melbourne Metro &amp; Regional Victoria</span>
              <span aria-hidden="true">·</span>
              <span>48-Hour Electric Collection</span>
              <span aria-hidden="true">·</span>
              <span>NABERS &amp; Scope 3 Ready</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[300px] lg:min-h-[460px] rounded-xl overflow-hidden border border-[#1F5C3A]/12 bg-[#EFECE3]">
              <ImageWithFallback
                src={IMAGES.heroCafe}
                alt="Melbourne specialty café bar preparing spent coffee grounds for LoopWise AI coffee ground recycling in Melbourne"
                fallbackLabel="Melbourne Café Circular Loop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip below Hero Split */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-y border-[#1F5C3A]/15 py-6">
          {IMPACT_KPI_STRIP.map((kpi) => (
            <div key={kpi.label} className="space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#1F5C3A] tabular-nums">
                {kpi.value}
              </div>
              <div className="text-xs sm:text-sm text-[#14241B]/75 leading-snug">{kpi.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sitemap Page: Home — Three-Column Value Proposition */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#14241B]">
            Built for every link in Victoria’s resource loop
          </h2>
          <p className="mt-3 text-base text-[#14241B]/75 leading-relaxed">
            Whether you pour 800 espressos a morning, manage commercial building ESG targets, or
            nurture raised veggie beds in Brunswick, LoopWise AI removes the friction from sorting
            and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPOSITIONS.map((item) => (
            <article
              key={item.index}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#EFECE3]/70 border border-[#1F5C3A]/12"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-[#1F5C3A]">
                  <span className="font-mono tabular-nums">{item.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.audience}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#14241B]">{item.title}</h3>
                <p className="text-sm text-[#14241B]/80 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1F5C3A]/10">
                <button
                  type="button"
                  onClick={() => onNavigate(item.route, item.anchor)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5C3A] hover:text-[#E07A3F] transition-colors cursor-pointer"
                >
                  <span>{item.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sitemap Page: Home — AI Solutions Preview */}
      <section className="bg-[#1F5C3A] text-[#F7F5EF] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium text-[#A8D5BA]">
                AI Solutions · Commercial Waste Audit Victoria
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Three intelligent tools turning daily bins into verified ESG data
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#A8D5BA] text-[#14241B] hover:bg-white transition-colors whitespace-nowrap shrink-0 self-start cursor-pointer"
            >
              <span>Try Interactive Tools</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <article className="md:col-span-5 p-6 sm:p-7 rounded-xl bg-[#143D26] border border-white/12 flex flex-col justify-between">
              <div className="space-y-4">
                <ScanLine className="w-6 h-6 text-[#A8D5BA]" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white">AI Waste Scanner</h3>
                <p className="text-sm text-[#F7F5EF]/80 leading-relaxed">
                  Point any phone camera at packaging, coffee bean foils, or takeaway containers to
                  verify Victorian bin rules and prevent costly soft-plastic contamination.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('solutions', 'waste-scanner')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#A8D5BA] hover:text-white transition-colors self-start cursor-pointer"
              >
                <span>Open Scanner Demo</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </article>

            <article className="md:col-span-3 p-6 sm:p-7 rounded-xl bg-[#143D26] border border-white/12 flex flex-col justify-between">
              <div className="space-y-4">
                <Compass className="w-6 h-6 text-[#A8D5BA]" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white">
                  AI Sustainability Coach
                </h3>
                <p className="text-sm text-[#F7F5EF]/80 leading-relaxed">
                  Role-specific weekly playbooks for home composters, baristas, and facility teams.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('solutions', 'sustainability-coach')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#A8D5BA] hover:text-white transition-colors self-start cursor-pointer"
              >
                <span>View Playbooks</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </article>

            <article className="md:col-span-4 p-6 sm:p-7 rounded-xl bg-[#143D26] border border-white/12 flex flex-col justify-between">
              <div className="space-y-4">
                <Calculator className="w-6 h-6 text-[#A8D5BA]" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white">ESG Impact Calculator</h3>
                <p className="text-sm text-[#F7F5EF]/80 leading-relaxed">
                  Model annual landfill tonnage diverted, CO2e avoided, and Victorian levy savings
                  from your coffee waste collection and commercial waste audit Victoria programme.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('solutions', 'esg-calculator')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#A8D5BA] hover:text-white transition-colors self-start cursor-pointer"
              >
                <span>Run ESG Calculator</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Sitemap Page: Home — Impact Data, Partner Logo Wall & Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#1F5C3A]">
                Verified Victorian Impact · 2023–2026
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#14241B]">
                Trusted by conservation parks, property leaders, and local roasters
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('success-stories')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5C3A] hover:text-[#E07A3F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Read Full Case Studies</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Partner Wall */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner}
                className="px-4 py-4 rounded-lg border border-[#1F5C3A]/15 bg-[#EFECE3]/60 flex items-center justify-center text-center text-xs sm:text-sm font-semibold text-[#14241B]/85"
              >
                {partner}
              </div>
            ))}
          </div>

          {/* Attributable Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.name}
                className="p-6 sm:p-8 rounded-xl bg-white border border-[#1F5C3A]/12 flex flex-col justify-between gap-6"
              >
                <p className="text-base text-[#14241B]/85 leading-relaxed">“{item.quote}”</p>
                <footer className="pt-4 border-t border-[#1F5C3A]/10 text-sm">
                  <div className="font-semibold text-[#14241B]">{item.name}</div>
                  <div className="text-xs text-[#14241B]/70">
                    {item.role} · {item.org}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap Page: Home — Community CTA Block */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-xl bg-[#A8D5BA]/30 border border-[#1F5C3A]/20 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1F5C3A]">
              <Sprout className="w-4 h-4" aria-hidden="true" />
              <span>Household &amp; Community Garden Programme</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14241B]">
              Get free coffee grounds for your garden in Melbourne
            </h2>
            <p className="text-sm sm:text-base text-[#14241B]/80 leading-relaxed max-w-xl">
              Enrich your compost bays and worm farms with fresh, contaminant-free espresso pucks
              collected from local cafés. Check your postcode eligibility and reserve a pickup pail
              in under a minute.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'community-booking')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#1F5C3A] text-white hover:bg-[#143D26] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Check Postcode &amp; Book Pail</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#1F5C3A]/15">
              <ImageWithFallback
                src={IMAGES.communityGarden}
                alt="Melbourne community garden beds enriched with free coffee grounds from LoopWise AI"
                fallbackLabel="Melbourne Community Garden Compost"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Page: Home — Latest Resources Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <p className="text-xs font-medium text-[#1F5C3A]">Learning Hub Preview</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#14241B]">
              Practical guides from Melbourne’s circular frontline
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('learning-hub')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5C3A] hover:text-[#E07A3F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Browse All Guides</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEARNING_ARTICLES.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="p-6 rounded-xl bg-white border border-[#1F5C3A]/12 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#14241B]/65">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.published}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#14241B] leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[#14241B]/75 leading-relaxed">{article.summary}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onSelectArticle(article.id);
                  onNavigate('learning-hub');
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5C3A] hover:text-[#E07A3F] transition-colors self-start cursor-pointer"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
