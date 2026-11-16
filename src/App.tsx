/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useState} from 'react';
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {PAGE_SEO, PageRoute} from './data/siteData';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';
import {HomePage} from './pages/HomePage';
import {LearningHubPage} from './pages/LearningHubPage';
import {SolutionsPage} from './pages/SolutionsPage';
import {SuccessStoriesPage} from './pages/SuccessStoriesPage';

const VALID_PAGES: PageRoute[] = [
  'home',
  'solutions',
  'learning-hub',
  'success-stories',
  'contact',
  'about',
];

function parseRouteFromHash(): {page: PageRoute; anchor?: string} {
  const rawHash = window.location.hash.replace(/^#/, '');
  if (!rawHash) return {page: 'home'};
  const [pagePart, anchorPart] = rawHash.split('/');
  if (VALID_PAGES.includes(pagePart as PageRoute)) {
    return {page: pagePart as PageRoute, anchor: anchorPart};
  }
  return {page: 'home'};
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => parseRouteFromHash().page);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const navigate = (page: PageRoute, anchor?: string) => {
    setCurrentPage(page);
    const nextHash = anchor ? `#${page}/${anchor}` : `#${page}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }

    if (anchor) {
      window.setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }, 60);
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  // Sync browser back/forward navigation
  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseRouteFromHash();
      setCurrentPage(parsed.page);
      if (parsed.anchor) {
        window.setTimeout(() => {
          const el = document.getElementById(parsed.anchor!);
          el?.scrollIntoView({behavior: 'smooth', block: 'start'});
        }, 60);
      } else {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Sync per-page SEO title, meta description, OpenGraph, and JSON-LD structured data
  useEffect(() => {
    const seo = PAGE_SEO[currentPage];
    document.title = seo.title;

    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', seo.description);
    updateMeta('meta[property="og:title"]', seo.title);
    updateMeta('meta[property="og:description"]', seo.description);
    updateMeta('meta[name="twitter:title"]', seo.title);
    updateMeta('meta[name="twitter:description"]', seo.description);

    const jsonLdScript = document.getElementById('loopwise-jsonld');
    if (jsonLdScript) {
      jsonLdScript.textContent = JSON.stringify(seo.jsonLd);
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#14241B]">
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigate}
            onSelectArticle={(articleId) => setSelectedArticleId(articleId)}
          />
        )}
        {currentPage === 'solutions' && <SolutionsPage onNavigate={navigate} />}
        {currentPage === 'learning-hub' && (
          <LearningHubPage
            selectedArticleId={selectedArticleId}
            onSelectArticle={setSelectedArticleId}
            onNavigate={navigate}
          />
        )}
        {currentPage === 'success-stories' && <SuccessStoriesPage onNavigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
