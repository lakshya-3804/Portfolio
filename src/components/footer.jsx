/**
 * Footer.jsx
 * ─────────────────────────────────────────────────
 * Sleek glassmorphic footer with social icon links,
 * hover glow animations, and clean copyright block.
 */

import React        from 'react';
import { Link }     from 'react-router-dom';
import Icons        from './Icons';
import { profile }  from '../data/portfolioData';

/* Social link config */
const SOCIALS = [
  { label: 'GitHub',    href: profile.github,    Icon: Icons.GitHub,    color: 'hover:text-white' },
  { label: 'LinkedIn',  href: profile.linkedin,  Icon: Icons.LinkedIn,  color: 'hover:text-blue-400' },
  { label: 'Twitter',   href: profile.twitter,   Icon: Icons.Twitter,   color: 'hover:text-sky-400'  },
  { label: 'Instagram', href: profile.instagram, Icon: Icons.Instagram, color: 'hover:text-pink-400' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="glass-strong">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* ── Branding ─────────────────────────── */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center">
                  <span className="text-gray-950 font-black text-xs font-mono">LP</span>
                </div>
                <span className="font-bold text-base text-white">
                  Lakshya<span className="gradient-text">.</span>
                </span>
              </Link>
              <p className="text-xs text-gray-500 font-mono">
                Full Stack Developer & AI Engineer
              </p>
            </div>

            {/* ── Social Icons ─────────────────────── */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  id={`footer-${label.toLowerCase()}`}
                  className={`p-2 rounded-lg text-gray-500 transition-all duration-200 hover:bg-white/5 ${color}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* ── Copyright ────────────────────────── */}
            <p className="text-xs text-gray-600 font-mono text-center md:text-right">
              © {year} Lakshya Prajapati
              <span className="block text-gray-700 mt-0.5">Made with React & 🤍</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
