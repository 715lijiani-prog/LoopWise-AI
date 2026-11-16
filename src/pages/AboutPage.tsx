import {ArrowRight, ShieldCheck} from 'lucide-react';
import {IMAGES, PageRoute} from '../data/siteData';
import {ImageWithFallback} from '../components/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

const LOOP_PILLARS = [
  {
    index: '01.',
    title: 'AI Recognition at the Source',
    body: 'We eliminate stream confusion where waste is created—at the espresso bar, office kitchenette, and household pantry—using instant Victorian sorting intelligence.',
  },
  {
    index: '02.',
    title: 'Electric Hyper-Local Logistics',
    body: 'Instead of shipping wet coffee grounds 60 km to regional landfill, our cargo-bike and EV fleet keeps nutrient loops within a 7.4 km urban radius.',
  },
  {
    index: '03.',
    title: 'Certified Social Enterprise Reinvestment',
    body: 'As a Social Traders certified waste service, over 50% of operating surplus funds free community garden pails, worm-farm workshops, and council education.',
  },
];

export function AboutPage({onNavigate}: AboutPageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Sitemap Page: About LoopWise AI — Brand Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
          <p className="text-xs font-medium text-[#1F5C3A]">
            About LoopWise AI · Circular Economy Social Enterprise Melbourne
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#14241B]">
            Turning Melbourne’s coffee culture into Victoria’s cleanest circular loop
          </h1>
          <p className="text-base text-[#14241B]/80 leading-relaxed">
            Melbourne drinks more specialty coffee per capita than almost any city on Earth—yet
            thousands of tonnes of spent grounds and soft plastic bean bags still end up buried in
            landfill every year.
          </p>
          <p className="text-base text-[#14241B]/80 leading-relaxed">
            Founded in Fitzroy in 2023, LoopWise AI pairs practical computer-vision sorting with
            electric hyper-local collection so cafés, corporate towers, councils, and home gardeners
            can close the loop together with transparent ESG accountability.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact', 'b2b-consultation')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#E07A3F] text-[#14241B] hover:bg-[#CC662C] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Partner With LoopWise AI</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('success-stories')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border border-[#1F5C3A] text-[#1F5C3A] hover:bg-[#1F5C3A] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View Impact Stories</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="h-full min-h-[300px] rounded-xl overflow-hidden border border-[#1F5C3A]/15 bg-[#EFECE3]">
            <ImageWithFallback
              src={IMAGES.communityGarden}
              alt="Volunteers harvesting leafy greens grown with LoopWise AI Melbourne coffee ground compost"
              fallbackLabel="Melbourne Community Compost Loop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sitemap Page: About LoopWise AI — Social Traders Certification Badge & Positioning */}
      <section className="rounded-xl bg-[#1F5C3A] text-[#F7F5EF] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 p-6 rounded-xl bg-[#143D26] border border-[#A8D5BA]/30 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A8D5BA]">
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            <span>Certified Credential</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-white">
            Social Traders Certified Waste Service
          </h2>
          <p className="text-xs text-[#F7F5EF]/75 leading-relaxed">
            Independently verified social enterprise procurement partner for Victorian councils,
            universities, and commercial ESG supply chains.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <h3 className="font-display text-2xl font-bold text-white">
            Profit-for-purpose governance you can audit
          </h3>
          <p className="text-sm sm:text-base text-[#F7F5EF]/85 leading-relaxed">
            Every commercial waste audit in Victoria and café subscription directly underwrites free
            neighbourhood compost pails, community garden soil testing, and multilingual soft
            plastic sorting workshops across Greater Melbourne.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/15">
            <div>
              <div className="font-mono text-2xl font-semibold text-[#A8D5BA] tabular-nums">
                54%
              </div>
              <div className="text-xs text-[#F7F5EF]/75 mt-0.5">
                Annual Surplus Reinvested in Community Composting
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold text-[#A8D5BA] tabular-nums">
                100%
              </div>
              <div className="text-xs text-[#F7F5EF]/75 mt-0.5">
                Victorian Reprocessing &amp; Local Soil Return
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold text-[#A8D5BA] tabular-nums">
                4.8 km
              </div>
              <div className="text-xs text-[#F7F5EF]/75 mt-0.5">
                Average Inner-Melbourne Collection Radius
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Page: About LoopWise AI — How Our Enterprise Works */}
      <section className="space-y-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14241B]">
          How our circular social enterprise operates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOOP_PILLARS.map((pillar) => (
            <article
              key={pillar.index}
              className="p-6 sm:p-7 rounded-xl bg-white border border-[#1F5C3A]/12 space-y-3"
            >
              <div className="font-mono text-sm font-semibold text-[#1F5C3A] tabular-nums">
                {pillar.index}
              </div>
              <h3 className="font-display text-xl font-bold text-[#14241B]">{pillar.title}</h3>
              <p className="text-sm text-[#14241B]/80 leading-relaxed">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
