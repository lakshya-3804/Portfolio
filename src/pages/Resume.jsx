/**
 * Resume.jsx
 * ─────────────────────────────────────────────────
 * Full resume page with tabbed sections:
 * – Work Experience (timeline)
 * – Education (cards with grades)
 * – Skills (category grid with icon)
 * – Achievements (badge-style listing)
 * – Leadership & Volunteering
 */

import React, { useState }                     from 'react';
import Icons                                    from '../components/Icons';
import { experience, education, skills, achievements, leadership } from '../data/portfolioData';

/* ── Tab Definitions ───────────────────────────── */
const TABS = [
  { id: 'experience',  label: 'Experience',  Icon: Icons.Briefcase       },
  { id: 'education',   label: 'Education',   Icon: Icons.GraduationCap   },
  { id: 'skills',      label: 'Skills',      Icon: Icons.Code            },
  { id: 'achievements',label: 'Achievements',Icon: Icons.Trophy          },
  { id: 'leadership',  label: 'Leadership',  Icon: Icons.Star            },
];

/* ─────────────────────────────────────────────────
   Work Experience Tab
───────────────────────────────────────────────── */
function ExperienceTab() {
  return (
    <div className="space-y-6">
      {experience.map((job, index) => (
        <article key={job.id} className="card p-6 relative overflow-hidden group">
          {/* Left accent border */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />

          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pl-4">
            <div>
              <h3 className="font-bold text-white text-lg">{job.role}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-cyan-300 font-semibold text-sm">{job.company}</span>
                <span className="text-gray-600">·</span>
                <span className="tag tag-purple">{job.client}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {job.period}
            </div>
          </div>

          {/* Bullet points */}
          <ul className="space-y-3 pl-4">
            {job.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                <Icons.ArrowRight size={13} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Education Tab
───────────────────────────────────────────────── */
function EducationTab() {
  return (
    <div className="space-y-5">
      {education.map((edu, index) => (
        <article key={edu.id} className="card p-6 group">
          <div className="flex items-start gap-5">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <Icons.GraduationCap size={20} className="text-indigo-300" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="font-bold text-white leading-tight">{edu.institution}</h3>
                <span className="text-xs text-gray-500 font-mono flex-shrink-0">{edu.period}</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{edu.degree}</p>
              <span className="tag tag-green">{edu.score}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Skills Tab
───────────────────────────────────────────────── */

/* Icon map for skill categories */
const SKILL_ICONS = {
  'Languages':          Icons.Code,
  'Web & Frameworks':   Icons.Layers,
  'Databases & Cloud':  Icons.Database,
  'Tools & AI/ML':      Icons.Cpu,
  'CS Fundamentals':    Icons.Book,
};

const SKILL_COLORS = [
  'from-cyan-500/10 border-cyan-500/20 text-cyan-300',
  'from-indigo-500/10 border-indigo-500/20 text-indigo-300',
  'from-purple-500/10 border-purple-500/20 text-purple-300',
  'from-emerald-500/10 border-emerald-500/20 text-emerald-300',
  'from-amber-500/10 border-amber-500/20 text-amber-300',
];

function SkillsTab() {
  return (
    <div className="space-y-5">
      {skills.map((group, idx) => {
        const Icon   = SKILL_ICONS[group.category] || Icons.Code;
        const colors = SKILL_COLORS[idx % SKILL_COLORS.length];

        return (
          <div key={group.category} className="card p-6">
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${colors.split(' ')[0]} border ${colors.split(' ')[1]} flex items-center justify-center flex-shrink-0`}>
                <Icon size={16} className={colors.split(' ')[2]} />
              </div>
              <h3 className="font-semibold text-white">{group.category}</h3>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-sm text-gray-300 font-medium hover:border-cyan-500/30 hover:text-cyan-200 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Achievements Tab
───────────────────────────────────────────────── */

const BADGE_COLORS = {
  cyan:   'bg-cyan-500/10   border-cyan-500/30   text-cyan-300',
  yellow: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300',
  green:  'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
  red:    'bg-red-500/10    border-red-500/30    text-red-300',
  orange: 'bg-orange-500/10 border-orange-500/30 text-orange-300',
  indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
};

function AchievementsTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {achievements.map((ach) => {
        const badgeClass = BADGE_COLORS[ach.color] || BADGE_COLORS.cyan;

        return (
          <article
            key={ach.id}
            className="card p-5 group flex flex-col gap-3"
          >
            {/* Badge */}
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${badgeClass}`}>
                {ach.badge}
              </span>
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`achievement-link-${ach.id}`}
                  className="text-gray-600 hover:text-cyan-400 transition-colors"
                  aria-label={`View ${ach.title} certificate`}
                >
                  <Icons.ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Details */}
            <div>
              <h3 className="font-semibold text-white text-sm mb-1">{ach.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{ach.detail}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Leadership Tab
───────────────────────────────────────────────── */
function LeadershipTab() {
  return (
    <div className="space-y-5">
      {leadership.map((item) => (
        <article key={item.id} className="card p-6 flex gap-5 items-start group">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
            <Icons.Zap size={20} className="text-purple-300" />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-bold text-white mb-0.5">{item.org}</h3>
            <p className="text-xs text-purple-300 font-mono mb-3">{item.role}</p>
            <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Tab Content Switcher
───────────────────────────────────────────────── */
const TAB_COMPONENTS = {
  experience:   <ExperienceTab />,
  education:    <EducationTab />,
  skills:       <SkillsTab />,
  achievements: <AchievementsTab />,
  leadership:   <LeadershipTab />,
};

/* ─────────────────────────────────────────────────
   Resume Page (Orchestrator)
───────────────────────────────────────────────── */
export default function Resume() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">

      {/* ── Section Header ────────────────────────── */}
      <div className="text-center mb-12">
        <p className="section-label">My background</p>
        <h1 className="section-title mt-2">
          My <span className="gradient-text">Resume</span>
        </h1>
      </div>

      {/* ── Tab Navigation ────────────────────────── */}
      {/* Desktop: horizontal tabs */}
      <div className="hidden md:flex items-center gap-1 p-1 glass rounded-2xl mb-8 w-fit mx-auto">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            id={`resume-tab-${id}`}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === id
                ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-white border border-white/10'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {/* Mobile: scrollable pill row */}
      <div className="md:hidden overflow-x-auto pb-2 mb-6">
        <div className="flex gap-2 w-max px-1">
          {TABS.map(({ id, label, Icon }) => (
            <button
              key={id}
              id={`resume-tab-mobile-${id}`}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 transition-all duration-200 border ${
                activeTab === id
                  ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40'
                  : 'text-gray-500 border-white/8 hover:text-gray-300'
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ───────────────────────────── */}
      <div key={activeTab} className="animate-fade-up" style={{ opacity: 0, animationFillMode: 'forwards' }}>
        {TAB_COMPONENTS[activeTab]}
      </div>
    </main>
  );
}
