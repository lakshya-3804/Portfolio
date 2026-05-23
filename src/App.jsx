/**
 * App.jsx
 * ─────────────────────────────────────────────────
 * Root application component.
 * Renders page routes inside a <Suspense> boundary.
 */

import React, { Suspense } from 'react';
import { Routes, Route }   from 'react-router-dom';
import ScrollToTop         from './ScrollToTop';
/* Lazy-loaded pages to support dynamic code-splitting and faster initial page loads */
const Home     = React.lazy(() => import('./pages/Home'));
const About    = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Resume   = React.lazy(() => import('./pages/Resume'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

/* Lightweight fallback while chunks are loading */
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-3 text-gray-500">
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"        element={<Home     />} />
          <Route path="/about"   element={<About    />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume"  element={<Resume   />} />
          <Route path="*"        element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
