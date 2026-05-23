/**
 * About.jsx
 * ─────────────────────────────────────────────────
 * About page with:
 * – Personal bio & profile image
 * – "What I Do" interactive capability tiles
 * – Hobbies & interests section
 * – Availability / contact CTA
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import { profile } from '../data/portfolioData';

/* Capability tile data */
const CAPABILITIES = [
  {
    icon: Icons.Layers,
    title: 'Frontend Development',
    desc: 'Building responsive, accessible, and high-performance UIs with ReactJS, Redux, and modern CSS architectures.',
    tags: ['ReactJS', 'Tailwind CSS', 'Redux'],
    color: 'cyan',
  },
  {
    icon: Icons.Database,
    title: 'Backend & APIs',
    desc: 'Designing scalable REST APIs using Node.js, ExpressJS, and Spring Boot with MongoDB and SQL databases.',
    tags: ['Node.js', 'ExpressJS', 'MongoDB'],
    color: 'indigo',
  },
  {
    icon: Icons.Cpu,
    title: 'AI / LLM Engineering',
    desc: 'Crafting structured LLM evaluation tasks with atomic/binary rubrics and integrating ML pipelines for model benchmarking.',
    tags: ['Prompt Engineering', 'scikit-learn', 'PyTorch'],
    color: 'purple',
  },
  {
    icon: Icons.Trophy,
    title: 'Competitive Programming',
    desc: 'Codeforces Specialist (max 1409) and CodeChef 3-Star (max 1731) — consistently solving algorithmic challenges.',
    tags: ['Codeforces', 'CodeChef', 'C++'],
    color: 'green',
  },
];

/* Color mapping for tile accent */
const COLORS = {
  cyan: 'from-cyan-500/10  border-cyan-500/20  text-cyan-300',
  indigo: 'from-indigo-500/10 border-indigo-500/20 text-indigo-300',
  purple: 'from-purple-500/10 border-purple-500/20 text-purple-300',
  green: 'from-emerald-500/10 border-emerald-500/20 text-emerald-300',
};

const TAG_COLORS = {
  cyan: 'tag',
  indigo: 'tag tag-purple',
  purple: 'tag tag-purple',
  green: 'tag tag-green',
};

/* Capability card */
function CapabilityCard({ cap }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon, title, desc, tags, color } = cap;
  const accent = COLORS[color];

  return (
    <div
      className={`card p-6 flex flex-col gap-3 cursor-default transition-all duration-300 ${hovered ? 'border-white/15' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent.split(' ')[0]} border ${accent.split(' ')[1]} flex items-center justify-center flex-shrink-0`}>
        <Icon size={20} className={accent.split(' ')[2]} />
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold text-white mb-1.5">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {tags.map((t) => (
          <span key={t} className={TAG_COLORS[color]}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">

      {/* ── Section Header ────────────────────────── */}
      <div className="text-center mb-16">
        <p className="section-label">Who I am</p>
        <h1 className="section-title mt-2">
          About <span className="gradient-text">Me</span>
        </h1>
      </div>

      {/* ── Profile Intro ─────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">

        {/* Profile image */}
        <div className="relative flex-shrink-0">
          <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://img.freepik.com/premium-photo/software-engineer-digital-avatar-generative-ai_934475-8997.jpg"
              alt="Lakshya Prajapati"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Glow behind image */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-xl -z-10 scale-110" />
        </div>

        {/* Bio block */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-1">Lakshya Prajapati</h2>
          <p className="gradient-text font-semibold text-sm mb-6">
            Full Stack Developer · AI/LLM Engineer · Competitive Programmer
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            {profile.bio}
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I thrive at the intersection of <strong className="text-cyan-300">software engineering</strong> and <strong className="text-indigo-300">artificial intelligence</strong>, whether it's architecting full-stack web apps or writing atomic/binary rubrics to benchmark frontier AI models. I'm driven by curiosity, a deep love for problem-solving, and a desire to build things that matter.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              id="about-email"
              className="flex items-center gap-2 glass glow-border rounded-full px-4 py-2 text-sm text-gray-300 hover:text-cyan-300 transition-all duration-200"
            >
              <Icons.Mail size={14} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              id="about-phone"
              className="flex items-center gap-2 glass glow-border rounded-full px-4 py-2 text-sm text-gray-300 hover:text-cyan-300 transition-all duration-200"
            >
              <Icons.Phone size={14} />
              {profile.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Capabilities Grid ─────────────────────── */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <p className="section-label">What I do</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            My <span className="gradient-text">Expertise</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CAPABILITIES.map((cap) => (
            <CapabilityCard key={cap.title} cap={cap} />
          ))}
        </div>
      </section>

      {/* ── Hobbies ──────────────────────────────── */}
      <section className="mb-20">
        <div className="card p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="section-label mb-2">Beyond the screen</p>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-5">
                Hobbies & Interests
              </h2>
              <div className="space-y-4">
                {[
                  { emoji: '🎵', title: 'Music', desc: 'Exploring new genres and revisiting classics — music fuels my focus during deep work sessions.' },
                  { emoji: '⚽', title: 'Sports', desc: 'Team games and activities that inspire collaboration, strategy, and a competitive spirit.' },
                  { emoji: '🧩', title: 'Problem Solving', desc: 'Competitive programming on Codeforces and CodeChef keeps my algorithmic thinking sharp.' },
                  { emoji: '🌐', title: 'Open Source', desc: 'Contributing to and learning from the open-source community to grow as an engineer.' },
                ].map(({ emoji, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <span className="text-2xl flex-shrink-0">{emoji}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-white/5 self-stretch" />

            {/* Collaboration CTA */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 border border-cyan-500/20 flex items-center justify-center mb-5">
                <Icons.Zap size={24} className="text-cyan-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Let's Work Together</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I'm driven by curiosity and the desire to continuously improve. Whether it's a startup idea, a complex engineering challenge, or a research collaboration — I'm in.
              </p>
              <Link to="/project" id="about-projects-cta" className="btn-primary">
                <Icons.ArrowRight size={15} />
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
