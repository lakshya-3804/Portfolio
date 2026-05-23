/**
 * NotFound.jsx
 * ─────────────────────────────────────────────────
 * Premium 404 page with glowing number display
 * and a back-to-home CTA.
 */

import React   from 'react';
import { Link } from 'react-router-dom';
import Icons    from '../components/Icons';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">

        {/* Giant glowing 404 */}
        <div className="relative mb-8 select-none">
          <h1 className="text-[120px] md:text-[180px] font-black leading-none gradient-text opacity-20">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-black gradient-text">
              404
            </h2>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          Page Not Found
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-8 max-w-sm mx-auto leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/" id="notfound-home-cta" className="btn-primary inline-flex">
          <Icons.Home size={16} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
