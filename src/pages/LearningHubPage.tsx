import {ArrowRight, ChevronDown, Search, X} from 'lucide-react';
import {useMemo, useState} from 'react';
import {LEARNING_ARTICLES, LearningArticle, PageRoute} from '../data/siteData';

interface LearningHubPageProps {
  selectedArticleId: string | null;
  onSelectArticle: (articleId: string | null) => void;
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

const CATEGORIES = [
  'All Topics',
  'Circular Economy',
  'Recycling Guides',
  'Sustainability Tips',
  'ESG Resources',
] as const;

const FAQS = [
  {
    q: "Why can't soft plastic go into municipal recycling bins in Melbourne?",
    a: 'Scrunchable plastics wrap around star-screen sorting shafts at Victorian Material Recovery Facilities and contaminate clean paper bales, causing up to 90% of loose soft film in kerbside bins to be rejected to landfill.',
  },
  {
    q: 'What is the ideal coffee ground composting ratio for community gardens?',
    a: 'Use a 1:4 ratio by volume—no more than 20% spent coffee grounds blended thoroughly with 80% dry carbon ("browns") such as shredded cardboard, straw, or autumn leaves.',
  },
  {
    q: 'Can households pick up free coffee grounds for a garden in Melbourne?',
    a: 'Yes. Enter your Victorian postcode on our Contact & Community Booking page to reserve free 5 kg or 10 kg espresso ground pails from participating local cafés.',
  },
];

export function LearningHubPage({
  selectedArticleId,
  onSelectArticle,
  onNavigate,
}: LearningHubPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All Topics');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredArticles = useMemo(() => {
    return LEARNING_ARTICLES.filter((article) => {
      const matchesCategory =
        activeCategory === 'All Topics' || article.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const activeArticle: LearningArticle | null = useMemo(() => {
    if (!selectedArticleId) return null;
    return LEARNING_ARTICLES.find((a) => a.id === selectedArticleId) ?? null;
  }, [selectedArticleId]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-14">
      {/* Sitemap Page: Learning Hub — Intro & Search/Tag Controls */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-medium text-[#1F5C3A]">
            Learning Hub · Circular Economy Social Enterprise Melbourne
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#14241B]">
            Field guides for Melbourne cafés, gardens, and ESG teams
          </h1>
          <p className="text-base sm:text-lg text-[#14241B]/80 leading-relaxed">
            Evidence-backed guides from our circular economy social enterprise in Melbourne—covering
            coffee ground recycling, soft plastic sorting, worm farms, and Victorian commercial
            waste audits.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
          {/* Interactive Tag Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#EFECE3] border border-[#1F5C3A]/12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#1F5C3A] text-white'
                    : 'text-[#14241B]/75 hover:text-[#1F5C3A]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search
              className="w-4 h-4 text-[#14241B]/50 absolute left-3.5 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            />
            <label htmlFor="learning-hub-search" className="sr-only">
              Search Learning Hub articles
            </label>
            <input
              id="learning-hub-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee grounds, soft plastic, ESG..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-white text-sm text-[#14241B] placeholder:text-[#14241B]/50"
            />
          </div>
        </div>
      </section>

      {/* Sitemap Page: Learning Hub — Reader Panel when an article is opened */}
      {activeArticle && (
        <article
          aria-label={activeArticle.title}
          className="rounded-xl bg-white border border-[#1F5C3A]/25 p-6 sm:p-10 space-y-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#1F5C3A] font-medium">
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.published}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14241B]">
                {activeArticle.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onSelectArticle(null)}
              aria-label="Close article reader"
              className="w-10 h-10 rounded-lg border border-[#1F5C3A]/20 flex items-center justify-center text-[#14241B] hover:bg-[#EFECE3] shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4 text-base text-[#14241B]/85 leading-relaxed max-w-3xl">
            {activeArticle.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-[#A8D5BA]/30 border border-[#1F5C3A]/15 text-sm text-[#14241B]">
            <strong className="font-semibold text-[#1F5C3A]">Key Takeaway:</strong>{' '}
            {activeArticle.keyTakeaway}
          </div>
        </article>
      )}

      {/* Sitemap Page: Learning Hub — Filtered Article Grid */}
      <section aria-label="Learning Hub Articles">
        {filteredArticles.length === 0 ? (
          <div className="p-10 rounded-xl bg-[#EFECE3] border border-[#1F5C3A]/15 text-center space-y-3">
            <p className="text-base font-semibold text-[#14241B]">
              No guides matched “{searchQuery}”.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Topics');
              }}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#1F5C3A] text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="p-6 rounded-xl bg-white border border-[#1F5C3A]/12 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#14241B]/65">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.published}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-[#14241B] leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#14241B]/75 leading-relaxed">{article.summary}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onSelectArticle(article.id);
                    window.scrollTo({top: 180, behavior: 'smooth'});
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5C3A] hover:text-[#E07A3F] transition-colors self-start cursor-pointer"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Sitemap Page: Learning Hub — FAQ Section (Paired with FAQPage JSON-LD) */}
      <section className="rounded-xl bg-[#EFECE3]/70 border border-[#1F5C3A]/15 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-bold text-[#14241B]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#14241B]/75">
              Quick answers on Melbourne soft plastic rules and garden composting ratios.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact', 'community-booking')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5C3A] hover:text-[#E07A3F] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Claim Free Coffee Grounds</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="divide-y divide-[#1F5C3A]/15">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={faq.q} className="py-4">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left font-semibold text-base text-[#14241B] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-[#1F5C3A] transition-transform duration-150 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="mt-2.5 text-sm text-[#14241B]/80 leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
