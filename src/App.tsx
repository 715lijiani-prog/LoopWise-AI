/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useCallback, useEffect, useState} from 'react';
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {PAGE_SEO, PageRoute} from './data/siteData';
import {Ga4PageTracker} from './hooks/useGa4PageTracking';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';
import {HomePage} from './pages/HomePage';
import {LearningHubPage} from './pages/LearningHubPage';
import {SolutionsPage} from './pages/SolutionsPage';
import {SuccessStoriesPage} from './pages/SuccessStoriesPage';

const PATH_TO_PAGE: Record<string, PageRoute> = {
  '/': 'home',
  '/home': 'home',
  '/solutions': 'solutions',
  '/learning-hub': 'learning-hub',
  '/success-stories': 'success-stories',
  '/contact': 'contact',
  '/about': 'about',
};

function getPageFromPathname(pathname: string): PageRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return PATH_TO_PAGE[normalized] ?? 'home';
}

export default function App() {
  const location = useLocation();
  const routerNavigate = useNavigate();
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const currentPage = getPageFromPathname(location.pathname);

  const handleNavigate = useCallback(
    (page: PageRoute, anchor?: string) => {
      const targetPath = page === 'home' ? '/' : `/${page}`;
      routerNavigate({
        pathname: targetPath,
        hash: anchor ? `#${anchor}` : '',
      });
    },
    [routerNavigate]
  );

  // Handle section anchor scrolling or scroll-to-top on route change
  useEffect(() => {
    const anchorId = location.hash.replace(/^#/, '');
    if (anchorId) {
      const timer = window.setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }, 60);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [location.pathname, location.hash]);

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
      <Ga4PageTracker />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onNavigate={handleNavigate}
                onSelectArticle={(articleId) => setSelectedArticleId(articleId)}
              />
            }
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/solutions" element={<SolutionsPage onNavigate={handleNavigate} />} />
          <Route
            path="/learning-hub"
            element={
              <LearningHubPage
                selectedArticleId={selectedArticleId}
                onSelectArticle={setSelectedArticleId}
                onNavigate={handleNavigate}
              />
            }
          />
          <Route
            path="/success-stories"
            element={<SuccessStoriesPage onNavigate={handleNavigate} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
