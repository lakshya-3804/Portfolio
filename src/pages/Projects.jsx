/**
 * Projects.jsx
 * ─────────────────────────────────────────────────
 * Filterable project showcase with:
 * – Category filter tabs (All, Featured, Full Stack, AI & NLP, Utilities)
 * – Animated glassmorphic project cards
 * – Tech tag chips
 * – External GitHub links
 */

import React, { useState, useMemo } from 'react';
import Icons from '../components/Icons';
import { projects, projectCategories } from '../data/portfolioData';

/* Project card component */
function ProjectCard({ project, featured = false }) {
  const { name, tagline, desc, tech, code, live, highlights } = project;

  return (
    <article className={`card flex flex-col group relative overflow-hidden ${featured ? 'glow-border' : ''}`}>

      {/* Featured ribbon */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="tag tag-green flex items-center gap-1">
            <Icons.Star size={10} /> Featured
          </span>
        </div>
      )}

      {/* Gradient header bar */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 flex flex-col gap-4 flex-1">

        {/* Title */}
        <div>
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-200">
            {name}
          </h3>
          <p className="text-xs text-gray-500 font-mono">{tagline}</p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

        {/* Highlights (featured only) */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-1.5">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-gray-400">
                <span className="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2.5 pt-1 w-full">
          {code && !Array.isArray(code) && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-code-${project.id}`}
              className="btn-outline text-xs py-1.5 px-3 flex-1 justify-center whitespace-nowrap"
            >
              <Icons.GitHub size={13} />
              View Code
            </a>
          )}
          {code && Array.isArray(code) && code.map((url, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-code-part-${idx}-${project.id}`}
              className="btn-outline text-xs py-1.5 px-3 flex-1 justify-center whitespace-nowrap"
            >
              <Icons.GitHub size={13} />
              Part {idx === 0 ? 'A' : 'B'}
            </a>
          ))}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-live-${project.id}`}
              className="btn-primary text-xs py-1.5 px-3 flex-1 justify-center whitespace-nowrap"
            >
              <Icons.ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  /* Filter projects by active category */
  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    if (activeFilter === 'featured') return projects.filter((p) => p.featured);
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">

      {/* ── Section Header ────────────────────────── */}
      <div className="text-center mb-12">
        <p className="section-label">What I've built</p>
        <h1 className="section-title mt-2 mb-4">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
          A collection of full-stack applications, AI/NLP pipelines, and utility tools I've built over time.
        </p>
      </div>

      {/* ── Filter Tabs ───────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {projectCategories.map(({ id, label }) => (
          <button
            key={id}
            id={`filter-${id}`}
            onClick={() => setActiveFilter(id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeFilter === id
                ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                : 'bg-transparent text-gray-500 border-white/8 hover:border-white/15 hover:text-gray-300'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Projects Grid ─────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-gray-500 text-sm">No projects in this category yet.</p>
        </div>
      )}

      {/* ── GitHub CTA ───────────────────────────── */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm mb-4 font-mono">Want to see more?</p>
        <a
          href="https://github.com/lakshya-3804"
          target="_blank"
          rel="noopener noreferrer"
          id="projects-github-cta"
          className="btn-outline inline-flex"
        >
          <Icons.GitHub size={16} />
          View All on GitHub
          <Icons.ArrowUpRight size={13} />
        </a>
      </div>
    </main>
  );
}
