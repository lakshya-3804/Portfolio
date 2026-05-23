/**
 * splineBackground.jsx
 * ─────────────────────────────────────────────────
 * Renders the Spline 3-D scene as a full-screen
 * fixed background with an animated CSS mesh
 * gradient as a graceful fallback if Spline is slow.
 */

import React, { useState, Suspense } from 'react';

/* Lazy-load heavy Spline component to keep initial load size under 50KB */
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function BackgroundSpline() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* ── CSS Mesh Gradient Fallback (always visible until Spline loads) ── */}
      {!loaded && <div className="mesh-bg" aria-hidden="true" />}

      {/* ── Spline 3-D Scene ─────────────────────── */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-10]"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
        aria-hidden="true"
      >
        <Suspense fallback={<div className="mesh-bg animate-pulse-glow" aria-hidden="true" />}>
          <Spline
            scene="https://prod.spline.design/HnaT1Yj7CFxirQTD/scene.splinecode"
            onLoad={() => setLoaded(true)}
          />
        </Suspense>
      </div>

      {/* ── Mesh gradient always layered on top for color depth ── */}
      {loaded && <div className="mesh-bg" aria-hidden="true" />}
    </>
  );
}
