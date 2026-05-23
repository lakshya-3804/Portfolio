/**
 * NavBar.jsx
 * ─────────────────────────────────────────────────
 * Floating glassmorphic navigation bar.
 * – Active route indicator with neon underline glow
 * – Mobile hamburger with animated slide-in menu
 * – Sticky top positioning with blur backdrop
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation }          from 'react-router-dom';
import Icons                           from './Icons';

/* Navigation link definitions */
const NAV_LINKS = [
  { label: 'Home',     path: '/',        icon: Icons.Home       },
  { label: 'About',    path: '/about',   icon: Icons.User       },
  { label: 'Projects', path: '/project', icon: Icons.FolderOpen },
  { label: 'Resume',   path: '/resume',  icon: Icons.FileText   },
];

export default function NavBar() {
  const location             = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Add shadow/blur boost after scrolling past 20px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-gray-950/60 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ───────────────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            id="nav-logo"
            aria-label="Lakshya Prajapati — Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-md">
              <span className="text-gray-950 font-black text-sm font-mono">LP</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-200 hidden sm:block">
              Lakshya<span className="gradient-text">.</span>
            </span>
          </Link>

          {/* ── Desktop Links ───────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                id={`nav-${label.toLowerCase()}`}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  isActive(path)
                    ? 'text-cyan-300'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={15} />
                {label}
                {/* Active neon underline */}
                {isActive(path) && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
                )}
              </Link>
            ))}
          </div>

          {/* ── Desktop CTA ─────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:lakshyaiffco.prajapati@gmail.com"
              id="nav-contact-cta"
              className="btn-primary text-sm py-2 px-4"
            >
              <Icons.Mail size={14} />
              Contact
            </a>
          </div>

          {/* ── Mobile Hamburger ────────────────────── */}
          <button
            id="nav-menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
          >
            {menuOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Slide-in Menu ──────────────────── */}
      {menuOpen && (
        <div className="md:hidden glass-strong border-t border-white/5 animate-slide-down">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                id={`nav-mobile-${label.toLowerCase()}`}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(path)
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={17} />
                {label}
              </Link>
            ))}
            <div className="border-t border-white/5 mt-2 pt-2">
              <a
                href="mailto:lakshyaiffco.prajapati@gmail.com"
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                <Icons.Mail size={15} />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
