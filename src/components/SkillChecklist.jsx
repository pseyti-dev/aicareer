import React, { useState, useEffect } from 'react';

function SkillCard({ skill, checked, onChange }) {
  const getDifficultyColor = () => {
    switch (skill.difficulty) {
      case 'easy':
        return 'rgb(var(--risk-low))';
      case 'medium':
        return 'rgb(var(--risk-mid))';
      case 'hard':
        return 'rgb(var(--risk-high))';
      default:
        return 'rgb(var(--ink-muted))';
    }
  };
  const color = getDifficultyColor();

  return (
    <div
      className="bg-surface border border-rule rounded-lg p-4 transition-all duration-300 hover:border-accent"
      style={{
        borderLeftWidth: '4px',
        borderLeftColor: checked ? 'rgb(var(--risk-low))' : 'transparent',
      }}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={() => onChange(!checked)}
          aria-label={checked ? `Unmark ${skill.name}` : `Mark ${skill.name} as learned`}
          className="flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center mt-1 transition-all"
          style={{
            borderColor: checked ? 'rgb(var(--risk-low))' : 'rgb(var(--ink-muted))',
            backgroundColor: checked ? 'rgb(var(--risk-low) / 0.125)' : 'transparent',
          }}
        >
          {checked && <span className="text-risk-low text-sm font-bold">✓</span>}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3
              className="font-bold text-ink"
              style={{
                textDecoration: checked ? 'line-through' : 'none',
                opacity: checked ? 0.6 : 1,
              }}
            >
              {skill.name}
            </h3>
            <span
              className="px-2 py-0.5 rounded-full text-xs font-medium uppercase"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {skill.difficulty}
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-accent-solid bg-opacity-20 text-accent">
              -{skill.riskReduction}pts
            </span>
          </div>
          <p className="text-sm text-muted mb-3">{skill.description}</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={skill.freeResource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-rule text-sm font-medium text-ink hover:border-accent transition-all"
            >
              Free resource
            </a>
            <a
              href={skill.paidResource.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all"
              style={{
                background:
                  'linear-gradient(135deg, rgb(var(--accent-solid)) 0%, rgb(var(--accent-deep)) 100%)',
                boxShadow: '0 4px 12px rgb(var(--accent-solid) / 0.3)',
              }}
            >
              {skill.paidResource.label} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopRecommendation({ skill, currentScore }) {
  if (!skill) return null;

  const urgency =
    currentScore > 70
      ? {
          label: 'Urgent',
          color: 'rgb(var(--risk-high))',
          bg: 'rgb(var(--risk-high) / 0.071)',
          border: 'rgb(var(--risk-high) / 0.188)',
        }
      : currentScore > 40
        ? {
            label: 'Recommended',
            color: 'rgb(var(--risk-mid))',
            bg: 'rgb(var(--risk-mid) / 0.071)',
            border: 'rgb(var(--risk-mid) / 0.188)',
          }
        : {
            label: 'Next step',
            color: 'rgb(var(--accent))',
            bg: 'rgb(var(--accent) / 0.071)',
            border: 'rgb(var(--accent) / 0.188)',
          };

  return (
    <div
      className="rounded-xl p-5 mb-8 border"
      style={{ background: urgency.bg, borderColor: urgency.border }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="px-2 py-0.5 rounded-full text-xs font-bold uppercase"
              style={{ backgroundColor: `${urgency.color}20`, color: urgency.color }}
            >
              {urgency.label}
            </span>
            <span className="text-xs text-muted">
              Top action — saves {skill.riskReduction} risk points
            </span>
          </div>
          <p className="font-semibold text-ink mb-1">{skill.name}</p>
          <p className="text-xs text-muted mb-3">{skill.description}</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={skill.paidResource.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white"
              style={{
                background:
                  'linear-gradient(135deg, rgb(var(--accent-solid)) 0%, rgb(var(--accent-deep)) 100%)',
                boxShadow: '0 4px 12px rgb(var(--accent-solid) / 0.25)',
              }}
            >
              Start Learning → {skill.paidResource.label}
            </a>
            <a
              href={skill.freeResource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-ink border border-rule hover:border-muted transition-all"
            >
              Free option available
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompletionPanel() {
  return (
    <div className="rounded-xl p-6 mb-8 border border-emerald-500/30 bg-emerald-500/5 text-center">
      <p className="text-2xl mb-2">🎉</p>
      <p className="font-bold text-ink mb-1">You've completed all skills!</p>
      <p className="text-sm text-muted mb-4">
        You've learned every recommended skill for this career. Your risk score reflects your full
        upskilling potential.
      </p>
      <a
        href="/special/ai-ready/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white"
        style={{
          background:
            'linear-gradient(135deg, rgb(var(--accent-solid)) 0%, rgb(var(--accent-deep)) 100%)',
        }}
      >
        Discover Universal AI Skills →
      </a>
    </div>
  );
}

export default function SkillChecklist({ skills, slug, baseRiskScore }) {
  const [checkedSkills, setCheckedSkills] = useState([]);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`progress_${slug}`);
      if (saved) setCheckedSkills(JSON.parse(saved));
    } catch {}
  }, [slug]);

  useEffect(() => {
    try {
      localStorage.setItem(`progress_${slug}`, JSON.stringify(checkedSkills));
    } catch {}
  }, [checkedSkills, slug]);

  const showToast = (msg) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  };

  const handleToggle = (skillId, checked) => {
    if (checked) {
      setCheckedSkills((prev) => [...prev, skillId]);
      showToast('Skill added! Risk score updated.');
    } else {
      setCheckedSkills((prev) => prev.filter((id) => id !== skillId));
      showToast('Skill removed.');
    }
  };

  const currentScore = Math.max(
    0,
    baseRiskScore -
      checkedSkills.reduce((sum, skillId) => {
        const skill = skills.find((s) => s.id === skillId);
        return sum + (skill ? skill.riskReduction : 0);
      }, 0)
  );

  const totalPossibleReduction = skills.reduce((sum, s) => sum + s.riskReduction, 0);
  const currentReduction = baseRiskScore - currentScore;
  const progressPercentage = (currentReduction / totalPossibleReduction) * 100;

  // Highest-impact unchecked skill for contextual recommendation
  const uncheckedSkills = skills.filter((s) => !checkedSkills.includes(s.id));
  const topRecommendation = uncheckedSkills.reduce(
    (best, s) => (!best || s.riskReduction > best.riskReduction ? s : best),
    null
  );
  const allComplete = uncheckedSkills.length === 0;

  return (
    <div>
      {/* Live gauge */}
      <div className="bg-surface border border-rule rounded-xl p-8 mb-8">
        <div className="flex flex-col items-center">
          <RiskGaugeInline score={currentScore} size={200} />
          <div className="mt-4 text-center">
            <p className="text-sm text-muted mb-1">Your Current AI Risk Score</p>
            <p className="text-2xl font-bold text-ink">{Math.round(currentScore)}% Risk</p>
            {currentReduction > 0 && (
              <p className="text-sm text-risk-low mt-1">
                Risk reduced by {currentReduction} points
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between text-sm text-muted mb-2">
            <span>Upskilling Progress</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full h-3 bg-rule rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-risk-low rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Contextual recommendation — risk result → course link */}
      {allComplete ? (
        <CompletionPanel />
      ) : (
        <TopRecommendation skill={topRecommendation} currentScore={currentScore} />
      )}

      {/* Skills */}
      <div className="space-y-4 mb-8">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            checked={checkedSkills.includes(skill.id)}
            onChange={(checked) => handleToggle(skill.id, checked)}
          />
        ))}
      </div>

      {/* Toasts */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {toasts.map(({ id, msg }) => (
          <div
            key={id}
            className="bg-surface border border-accent rounded-lg px-4 py-3 shadow-lg max-w-sm"
            style={{ animation: 'slideUp 0.3s ease-out' }}
          >
            <div className="flex items-center gap-2 text-ink">
              <span className="text-accent">✓</span>
              <span className="text-sm">{msg}</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

// Inline gauge (no separate import needed in this island)
function RiskGaugeInline({ score, size = 200 }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setAnimatedScore(score), 100);
    return () => clearTimeout(t);
  }, [score]);
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;
  const color =
    score <= 40
      ? 'rgb(var(--risk-low))'
      : score <= 70
        ? 'rgb(var(--risk-mid))'
        : 'rgb(var(--risk-high))';
  const badge =
    score <= 40
      ? { text: 'SAFE', color: 'rgb(var(--risk-low))' }
      : score <= 70
        ? { text: 'CAUTION', color: 'rgb(var(--risk-mid))' }
        : { text: 'CRITICAL', color: 'rgb(var(--risk-high))' };
  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          style={{ stroke: 'rgb(var(--paper-border))' }}
          strokeWidth="12"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
        />
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: size * 0.25,
            fontWeight: 'bold',
            fill: 'rgb(var(--ink))',
            transform: 'rotate(90deg)',
            transformOrigin: 'center',
          }}
        >
          {Math.round(animatedScore)}
        </text>
      </svg>
      <div
        className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
        style={{
          backgroundColor: `${badge.color}20`,
          color: badge.color,
          border: `1px solid ${badge.color}`,
        }}
      >
        {badge.text}
      </div>
    </div>
  );
}
