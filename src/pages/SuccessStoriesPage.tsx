import {ArrowRight} from 'lucide-react';
import {useState} from 'react';
import {CASE_STUDIES, PageRoute} from '../data/siteData';
import {ImageWithFallback} from '../components/ImageWithFallback';

interface SuccessStoriesPageProps {
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

type SectorFilter = 'All Sectors' | 'Conservation & Community' | 'Hospitality & Precincts';

export function SuccessStoriesPage({onNavigate}: SuccessStoriesPageProps) {
  const [sectorFilter, setSectorFilter] = useState<SectorFilter>('All Sectors');

  const visibleCases =
    sectorFilter === 'All Sectors'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.sector === sectorFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Sitemap Page: Success Stories — Header & Filter */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-medium text-[#1F5C3A]">
            Success Stories · Verified Victorian Outcomes
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#14241B]">
            Measurable circular impact across Melbourne &amp; Victoria
          </h1>
          <p className="text-base text-[#14241B]/80 leading-relaxed">
            Explore how conservation precincts, commercial towers, and neighbourhood hospitality
            collectives turn daily waste streams into verified environmental and financial returns.
          </p>
        </div>

        <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-lg bg-[#EFECE3] border border-[#1F5C3A]/12 self-start">
          {(
            ['All Sectors', 'Conservation & Community', 'Hospitality & Precincts'] as const
          ).map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setSectorFilter(sector)}
              className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                sectorFilter === sector
                  ? 'bg-[#1F5C3A] text-white'
                  : 'text-[#14241B]/75 hover:text-[#1F5C3A]'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </section>

      {/* Sitemap Page: Success Stories — Challenge–Solution–Result Case Cards */}
      <section className="space-y-10">
        {visibleCases.map((study) => (
          <article
            key={study.id}
            className="rounded-xl bg-white border border-[#1F5C3A]/15 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className="lg:col-span-5 min-h-[260px] bg-[#EFECE3]">
              <ImageWithFallback
                src={study.image}
                alt={study.imageAlt}
                fallbackLabel={study.organization}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#1F5C3A] font-medium">
                  <span>{study.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.sector}</span>
                </div>

                <h2 className="font-display text-2xl font-bold text-[#14241B] leading-snug">
                  {study.title}
                </h2>

                {/* Quantitative KPI Row */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#1F5C3A]/12">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-mono text-xl sm:text-2xl font-semibold text-[#1F5C3A] tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[#14241B]/70 mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge - Solution - Result Structure */}
                <div className="space-y-3 text-sm text-[#14241B]/85 leading-relaxed">
                  <p>
                    <strong className="font-semibold text-[#14241B]">Challenge:</strong>{' '}
                    {study.challenge}
                  </p>
                  <p>
                    <strong className="font-semibold text-[#14241B]">Solution:</strong>{' '}
                    {study.solution}
                  </p>
                  <p>
                    <strong className="font-semibold text-[#1F5C3A]">Result:</strong> {study.result}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'b2b-consultation')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5C3A] hover:text-[#E07A3F] transition-colors cursor-pointer"
                >
                  <span>Request a similar waste audit for your site</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
