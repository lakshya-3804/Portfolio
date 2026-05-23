/**
 * Home.jsx
 * ─────────────────────────────────────────────────
 * Hero landing page with:
 * – Animated gradient headline
 * – Typewriter role switcher
 * – Quick-stat cards (Codeforces, LLM, etc.)
 * – Primary CTA buttons
 * – Floating profile frame with orbital ring
 */

import React, { useState, useEffect } from 'react';
import { Link }                        from 'react-router-dom';
import Typewriter                      from 'typewriter-effect';
import Icons                           from '../components/Icons';
import { profile }                     from '../data/portfolioData';

/* Animated stat card */
function StatCard({ stat, delay = 0 }) {
  return (
    <div
      className="card px-5 py-4 text-center animate-fade-up"
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <p className="gradient-text text-3xl font-black leading-none">{stat.value}</p>
      <p className="text-white text-xs font-bold mt-1 tracking-wide">{stat.label}</p>
      <p className="text-gray-500 text-xs mt-0.5 font-mono">{stat.sublabel}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── Hero Section ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Pre-heading label */}
            <p className="section-label animate-fade-up" style={{ opacity: 0 }}>
              👋 Welcome to my portfolio
            </p>

            {/* Main headline */}
            <h1 className="section-title mt-3 mb-6 animate-fade-up delay-100" style={{ opacity: 0 }}>
              Hi, I'm{' '}
              <span className="gradient-text">Lakshya</span>
              <br />
              Prajapati
            </h1>

            {/* Typewriter subtitle */}
            <div
              className="text-xl lg:text-2xl font-semibold text-gray-300 mb-6 h-9 animate-fade-up delay-200"
              style={{ opacity: 0 }}
            >
              <Typewriter
                options={{
                  strings:   profile.roles,
                  autoStart: true,
                  loop:      true,
                  delay:     45,
                  deleteSpeed: 30,
                }}
              />
            </div>

            {/* Bio */}
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up delay-300" style={{ opacity: 0 }}>
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up delay-400" style={{ opacity: 0 }}>
              <Link to="/project" id="hero-cta-projects" className="btn-primary">
                <Icons.FolderOpen size={16} />
                View Projects
              </Link>
              <Link to="/resume" id="hero-cta-resume" className="btn-outline">
                <Icons.FileText size={16} />
                My Resume
              </Link>
            </div>

            {/* Social quick-links */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start animate-fade-up delay-500" style={{ opacity: 0 }}>
              <span className="text-xs text-gray-600 font-mono uppercase tracking-wider">Find me on</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Icons.GitHub size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <Icons.LinkedIn size={20} />
              </a>
              <a
                href={profile.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-codeforces"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Icons.Codeforces size={20} />
              </a>
            </div>
          </div>

          {/* Right — Profile Visual */}
          <div className="flex-shrink-0 animate-fade-up delay-200" style={{ opacity: 0 }}>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">

              {/* Outer orbital ring */}
              <div className="absolute inset-[-16px] rounded-full border border-cyan-500/20 animate-spin-slow" />
              <div className="absolute inset-[-8px] rounded-full border border-indigo-500/15" />

              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 blur-2xl" />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl animate-float">
                <img
                  src="https://img.freepik.com/premium-photo/software-engineer-digital-avatar-generative-ai_934475-8997.jpg"
                  alt="Lakshya Prajapati — Developer Avatar"
                  className="w-full h-full object-cover"
                />
                {/* Inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge — CF Specialist */}
              <div className="absolute -bottom-2 -right-2 glass glow-border rounded-xl px-3 py-1.5 text-xs font-bold text-cyan-300 font-mono">
                CF Specialist ✦
              </div>

              {/* Floating badge — AI */}
              <div className="absolute -top-2 -left-2 glass glow-border-purple rounded-xl px-3 py-1.5 text-xs font-bold text-purple-300 font-mono">
                AI Engineer ✦
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ── Call to Action Banner ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="card glow-border p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 pointer-events-none" />

          <p className="section-label mb-3">Let's collaborate</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            I'm always open to interesting opportunities, freelance work, and new challenges. Let's build something great together.
          </p>
          <a
            href={`mailto:${profile.email}`}
            id="hero-email-cta"
            className="btn-primary inline-flex"
          >
            <Icons.Mail size={16} />
            Send Me an Email
          </a>
        </div>
      </section>
    </main>
  );
}
