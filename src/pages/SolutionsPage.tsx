import {ArrowRight, Calculator, CheckCircle2, Compass, ScanLine} from 'lucide-react';
import {useState} from 'react';
import {IMAGES, PageRoute, SCANNER_PRESETS, ScannerPreset} from '../data/siteData';
import {ImageWithFallback} from '../components/ImageWithFallback';

interface SolutionsPageProps {
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

type CoachAudience = 'household' | 'cafe' | 'corporate';

const COACH_PLAYBOOKS: Record<
  CoachAudience,
  {
    title: string;
    subtitle: string;
    actions: string[];
    expectedImpact: string;
  }
> = {
  household: {
    title: 'Melbourne Household & Balcony Grower Plan',
    subtitle: 'Cut kitchen organic waste and avoid kerbside soft-plastic contamination.',
    actions: [
      'Keep a sealed counter tub for soft plastics (bean bags, pasta wraps) and scan multi-layer foils before dropping at participating pods.',
      'Collect a free 5 kg coffee-ground pail weekly and blend 1:4 with shredded cardboard or dry autumn leaves.',
      'Limit worm farm coffee ground feeds to 15% by volume per week to keep bedding pH balanced.',
    ],
    expectedImpact: 'Diverts ~140 kg/year of household organics & packaging from Victorian landfill.',
  },
  cafe: {
    title: 'Specialty Café & Hospitality Bar Playbook',
    subtitle: 'Streamlined back-of-house coffee waste collection and clean milk-crate wraps.',
    actions: [
      'Position a 15 L LoopWise knock-box caddy within arm’s reach of the espresso grinder to capture 98% of spent grounds uncontaminated.',
      'Mount a wall sleeve next to the cool-room exclusively for dry dairy delivery wrap and coffee bean bags.',
      'Schedule 48-hour electric cargo-trike pickups to eliminate bin odours and reduce general skip weight.',
    ],
    expectedImpact: 'Cuts typical 25-seat café landfill volume by 34% and saves ~$1,900/yr in haulage.',
  },
  corporate: {
    title: 'Victorian Office & Commercial ESG Audit Plan',
    subtitle: 'Structured commercial waste audit Victoria workflow for NABERS and Scope 3 reporting.',
    actions: [
      'Deploy AI Waste Scanner QR prompts at kitchenette sorting stations across every tenant floor.',
      'Establish a baseline 14-day commercial waste audit measuring organic weight, paper moisture, and soft plastic film leakage.',
      'Export monthly weighbridge-verified diversion certificates directly into your annual ESG disclosure pack.',
    ],
    expectedImpact: 'Lifts multi-tenant commercial building diversion rates from 58% average to 85%+.',
  },
};

export function SolutionsPage({onNavigate}: SolutionsPageProps) {
  const [selectedPreset, setSelectedPreset] = useState<ScannerPreset>(SCANNER_PRESETS[0]);
  const [customItemInput, setCustomItemInput] = useState('');
  const [customResult, setCustomResult] = useState<ScannerPreset | null>(null);

  const [coachAudience, setCoachAudience] = useState<CoachAudience>('cafe');

  const [weeklyCoffeeKg, setWeeklyCoffeeKg] = useState(45);
  const [weeklySoftPlasticKg, setWeeklySoftPlasticKg] = useState(14);

  // Calculations for ESG Impact Calculator
  const annualCoffeeTonnes = (weeklyCoffeeKg * 52) / 1000;
  const annualPlasticTonnes = (weeklySoftPlasticKg * 52) / 1000;
  const totalDivertedTonnes = annualCoffeeTonnes + annualPlasticTonnes;
  // Victoria landfill methane & material recovery factors (conservative ESG model)
  const co2eAvoidedTonnes = annualCoffeeTonnes * 1.42 + annualPlasticTonnes * 1.85;
  const compostProducedKg = Math.round(weeklyCoffeeKg * 52 * 0.72);
  const levyAndHaulageSavedAud = Math.round(totalDivertedTonnes * 295);

  const handleCustomScan = (e: React.FormEvent) => {
    e.preventDefault();
    const query = customItemInput.trim().toLowerCase();
    if (!query) return;

    if (query.includes('coffee') || query.includes('ground') || query.includes('puck')) {
      setCustomResult(SCANNER_PRESETS[0]);
    } else if (query.includes('cup') || query.includes('lid') || query.includes('pla')) {
      setCustomResult(SCANNER_PRESETS[3]);
    } else if (query.includes('wrap') || query.includes('pallet') || query.includes('ldpe')) {
      setCustomResult(SCANNER_PRESETS[2]);
    } else {
      setCustomResult({
        id: 'custom',
        item: customItemInput.trim(),
        material: 'Mixed Commercial / Household Packaging Check',
        stream: 'Soft Plastic Pod or Residual Audit Stream',
        diversionPath:
          'Verify polymer resin code via LoopWise mobile camera; keep dry films out of yellow kerbside bins.',
        contaminationRisk: 'Medium',
        advice:
          'If the item stretches or scrunches cleanly without tearing like paper, keep it out of municipal recycling and route to a dedicated LoopWise soft plastic pod.',
      });
    }
  };

  const activeScan = customResult ?? selectedPreset;
  const activeCoach = COACH_PLAYBOOKS[coachAudience];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Sitemap Page: AI Solutions — Overview Header */}
      <section className="max-w-3xl space-y-4">
        <p className="text-xs font-medium text-[#1F5C3A]">
          AI Solutions · Commercial Waste Audit Victoria
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#14241B]">
          Circular intelligence from the kitchen counter to the boardroom
        </h1>
        <p className="text-base sm:text-lg text-[#14241B]/80 leading-relaxed">
          Combine instant waste recognition, tailored sustainability coaching, and an auditable ESG
          impact calculator built specifically for Victorian municipal rules and hospitality
          logistics.
        </p>
      </section>

      {/* Sitemap Page: AI Solutions — 01. AI Waste Scanner */}
      <section
        id="waste-scanner"
        className="scroll-mt-24 rounded-xl bg-white border border-[#1F5C3A]/15 p-6 sm:p-8 lg:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1F5C3A]">
              <ScanLine className="w-4 h-4" aria-hidden="true" />
              <span>01. AI Waste Scanner</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14241B]">
              Stop contamination before it hits the bin
            </h2>
            <p className="text-sm sm:text-base text-[#14241B]/80 leading-relaxed">
              Test how our computer-vision sorting engine classifies Melbourne café and household
              streams. Select a preset sample or type an item below.
            </p>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#1F5C3A]/12">
              <ImageWithFallback
                src={IMAGES.scannerDemo}
                alt="Barista using smartphone AI Waste Scanner over coffee grounds and soft plastic film on a Melbourne café counter"
                fallbackLabel="AI Waste Scanner in Action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold text-[#14241B]/70 mb-2">
                Choose a common Melbourne stream to simulate a scan:
              </div>
              <div className="flex flex-wrap gap-2">
                {SCANNER_PRESETS.map((preset) => {
                  const selected = !customResult && selectedPreset.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => {
                        setCustomResult(null);
                        setSelectedPreset(preset);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                        selected
                          ? 'bg-[#1F5C3A] text-white border-[#1F5C3A]'
                          : 'bg-[#F7F5EF] text-[#14241B] border-[#1F5C3A]/20 hover:border-[#1F5C3A]'
                      }`}
                    >
                      {preset.item}
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleCustomScan} className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="scanner-item-input" className="sr-only">
                Enter waste item to classify
              </label>
              <input
                id="scanner-item-input"
                type="text"
                value={customItemInput}
                onChange={(e) => setCustomItemInput(e.target.value)}
                placeholder="Or type an item (e.g. oat milk carton, bean bag, espresso puck)..."
                className="flex-1 px-4 py-2.5 rounded-lg border border-[#1F5C3A]/25 bg-[#F7F5EF] text-sm text-[#14241B] placeholder:text-[#14241B]/50"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#E07A3F] text-[#14241B] hover:bg-[#CC662C] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Scan Item
              </button>
            </form>

            {/* Scan Output Panel */}
            <div className="p-6 rounded-xl bg-[#EFECE3]/80 border border-[#1F5C3A]/15 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1F5C3A]/12">
                <div>
                  <div className="text-xs text-[#14241B]/65">Classification Result</div>
                  <h3 className="font-display text-lg font-bold text-[#14241B]">
                    {activeScan.item}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#1F5C3A]">
                  Contamination Risk: {activeScan.contaminationRisk}
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs text-[#14241B]/65">Material Profile</dt>
                  <dd className="font-medium text-[#14241B] mt-0.5">{activeScan.material}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#14241B]/65">Assigned Victorian Stream</dt>
                  <dd className="font-semibold text-[#1F5C3A] mt-0.5">{activeScan.stream}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs text-[#14241B]/65">Circular Recovery Pathway</dt>
                  <dd className="font-medium text-[#14241B] mt-0.5">{activeScan.diversionPath}</dd>
                </div>
              </dl>

              <p className="text-sm text-[#14241B]/85 leading-relaxed pt-2 border-t border-[#1F5C3A]/10">
                <strong className="font-semibold text-[#14241B]">Handling Guidance:</strong>{' '}
                {activeScan.advice}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Page: AI Solutions — 02. AI Sustainability Coach */}
      <section
        id="sustainability-coach"
        className="scroll-mt-24 rounded-xl bg-[#EFECE3]/75 border border-[#1F5C3A]/15 p-6 sm:p-8 lg:p-10"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#1F5C3A]/12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1F5C3A]">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>02. AI Sustainability Coach</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14241B]">
              Actionable routines tailored to your role
            </h2>
            <p className="text-sm sm:text-base text-[#14241B]/80">
              Select your Victorian profile to preview weekly waste-reduction recommendations.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Select Sustainability Coach audience"
            className="inline-flex p-1 rounded-lg bg-[#F7F5EF] border border-[#1F5C3A]/15 self-start"
          >
            {(
              [
                {id: 'household', label: 'Household'},
                {id: 'cafe', label: 'Café Owner'},
                {id: 'corporate', label: 'Corporate ESG'},
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={coachAudience === tab.id}
                onClick={() => setCoachAudience(tab.id)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  coachAudience === tab.id
                    ? 'bg-[#1F5C3A] text-white'
                    : 'text-[#14241B]/75 hover:text-[#1F5C3A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display text-xl font-bold text-[#14241B]">{activeCoach.title}</h3>
            <p className="text-sm text-[#14241B]/75 leading-relaxed">{activeCoach.subtitle}</p>
            <div className="pt-3 text-sm font-semibold text-[#1F5C3A]">
              {activeCoach.expectedImpact}
            </div>
          </div>

          <ul className="lg:col-span-8 space-y-4">
            {activeCoach.actions.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[#1F5C3A]/12"
              >
                <CheckCircle2
                  className="w-5 h-5 text-[#1F5C3A] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-sm text-[#14241B]/85 leading-relaxed">
                  <span className="font-semibold text-[#14241B]">Step {index + 1}:</span> {step}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sitemap Page: AI Solutions — 03. ESG Impact Calculator */}
      <section
        id="esg-calculator"
        className="scroll-mt-24 rounded-xl bg-[#14241B] text-[#F7F5EF] p-6 sm:p-8 lg:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A8D5BA]">
              <Calculator className="w-4 h-4" aria-hidden="true" />
              <span>03. ESG Impact Calculator</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Quantify your landfill diversion &amp; Victorian levy savings
            </h2>
            <p className="text-sm sm:text-base text-[#F7F5EF]/80 leading-relaxed">
              Adjust your weekly coffee grounds and soft plastic volumes to estimate annual impact
              prior to scheduling a formal commercial waste audit in Victoria.
            </p>

            <div className="space-y-5 pt-2">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <label htmlFor="coffee-kg-slider" className="font-medium text-white">
                    Weekly Spent Coffee Grounds (kg)
                  </label>
                  <span className="font-mono font-semibold text-[#A8D5BA] tabular-nums">
                    {weeklyCoffeeKg} kg / wk
                  </span>
                </div>
                <input
                  id="coffee-kg-slider"
                  type="range"
                  min={5}
                  max={300}
                  step={5}
                  value={weeklyCoffeeKg}
                  onChange={(e) => setWeeklyCoffeeKg(Number(e.target.value))}
                  className="w-full accent-[#E07A3F] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <label htmlFor="plastic-kg-slider" className="font-medium text-white">
                    Weekly Clean Soft Plastics &amp; Bean Pouches (kg)
                  </label>
                  <span className="font-mono font-semibold text-[#A8D5BA] tabular-nums">
                    {weeklySoftPlasticKg} kg / wk
                  </span>
                </div>
                <input
                  id="plastic-kg-slider"
                  type="range"
                  min={2}
                  max={120}
                  step={2}
                  value={weeklySoftPlasticKg}
                  onChange={(e) => setWeeklySoftPlasticKg(Number(e.target.value))}
                  className="w-full accent-[#E07A3F] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/6 border border-white/12">
                <div className="text-xs text-[#F7F5EF]/70">Annual Landfill Diverted</div>
                <div className="font-mono text-3xl font-semibold text-white tabular-nums mt-1">
                  {totalDivertedTonnes.toFixed(2)} t
                </div>
              </div>
              <div className="p-5 rounded-xl bg-white/6 border border-white/12">
                <div className="text-xs text-[#F7F5EF]/70">Estimated CO2e Avoided</div>
                <div className="font-mono text-3xl font-semibold text-[#A8D5BA] tabular-nums mt-1">
                  {co2eAvoidedTonnes.toFixed(2)} t
                </div>
              </div>
              <div className="p-5 rounded-xl bg-white/6 border border-white/12">
                <div className="text-xs text-[#F7F5EF]/70">Compost &amp; Soil Output</div>
                <div className="font-mono text-3xl font-semibold text-white tabular-nums mt-1">
                  {compostProducedKg.toLocaleString()} kg
                </div>
              </div>
              <div className="p-5 rounded-xl bg-white/6 border border-white/12">
                <div className="text-xs text-[#F7F5EF]/70">Est. Landfill &amp; Haulage Saved</div>
                <div className="font-mono text-3xl font-semibold text-[#E07A3F] tabular-nums mt-1">
                  A${levyAndHaulageSavedAud.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-[#F7F5EF]/70">
                Includes Victorian EPA municipal methane avoidance factors.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('contact', 'b2b-consultation')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#E07A3F] text-[#14241B] hover:bg-[#CC662C] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Request Formal Waste Audit</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
