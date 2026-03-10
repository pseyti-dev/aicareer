import React, { useState, useEffect } from 'react';

function SkillCard({ skill, checked, onChange }) {
  const getDifficultyColor = () => {
    switch (skill.difficulty) {
      case 'easy': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'hard': return '#f43f5e';
      default: return '#4b5280';
    }
  };
  const color = getDifficultyColor();

  return (
    <div className="bg-[#0d1120] border border-[#1e2340] rounded-lg p-4 transition-all duration-300 hover:border-[#06B6D4]"
      style={{ borderLeftWidth: '4px', borderLeftColor: checked ? '#10b981' : 'transparent' }}>
      <div className="flex items-start gap-4">
        <button onClick={() => onChange(!checked)}
          aria-label={checked ? `Unmark ${skill.name}` : `Mark ${skill.name} as learned`}
          className="flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center mt-1 transition-all"
          style={{ borderColor: checked ? '#10b981' : '#4b5280', backgroundColor: checked ? '#10b98120' : 'transparent' }}>
          {checked && <span className="text-[#10b981] text-sm font-bold">✓</span>}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="font-bold text-[#e2e6f5]"
              style={{ textDecoration: checked ? 'line-through' : 'none', opacity: checked ? 0.6 : 1 }}>
              {skill.name}
            </h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-medium uppercase"
              style={{ backgroundColor: `${color}20`, color }}>
              {skill.difficulty}
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#06B6D4] bg-opacity-20 text-[#06B6D4]">
              -{skill.riskReduction}pts
            </span>
          </div>
          <p className="text-sm text-[#4b5280] mb-3">{skill.description}</p>
          <div className="flex flex-wrap gap-2">
            <a href={skill.freeResource.url} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-[#1e2340] text-sm font-medium text-[#e2e6f5] hover:border-[#06B6D4] transition-all">
              ▶ Free Resource
            </a>
            <a href={skill.paidResource.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)', boxShadow: '0 4px 12px rgba(6,182,212,0.3)' }}>
              🚀 {skill.paidResource.label}
            </a>
          </div>
        </div>
      </div>
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
    try { localStorage.setItem(`progress_${slug}`, JSON.stringify(checkedSkills)); } catch {}
  }, [checkedSkills, slug]);

  const showToast = (msg) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const handleToggle = (skillId, checked) => {
    if (checked) { setCheckedSkills(prev => [...prev, skillId]); showToast('Skill added! Risk score updated. 🎉'); }
    else { setCheckedSkills(prev => prev.filter(id => id !== skillId)); showToast('Skill removed.'); }
  };

  const currentScore = Math.max(0, baseRiskScore - checkedSkills.reduce((sum, skillId) => {
    const skill = skills.find(s => s.id === skillId);
    return sum + (skill ? skill.riskReduction : 0);
  }, 0));

  const totalPossibleReduction = skills.reduce((sum, s) => sum + s.riskReduction, 0);
  const currentReduction = baseRiskScore - currentScore;
  const progressPercentage = (currentReduction / totalPossibleReduction) * 100;

  return (
    <div>
      {/* Live gauge */}
      <div className="bg-[#0d1120] border border-[#1e2340] rounded-xl p-8 mb-8">
        <div className="flex flex-col items-center">
          <RiskGaugeInline score={currentScore} size={200} />
          <div className="mt-4 text-center">
            <p className="text-sm text-[#4b5280] mb-1">Your Current AI Risk Score</p>
            <p className="text-2xl font-bold text-[#e2e6f5]">{Math.round(currentScore)}% Risk</p>
            {currentReduction > 0 && (
              <p className="text-sm text-[#10b981] mt-1">You've reduced your risk by {currentReduction} points 🎉</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between text-sm text-[#4b5280] mb-2">
            <span>Upskilling Progress</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full h-3 bg-[#1e2340] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#06B6D4] to-[#10b981] rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }} />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4 mb-8">
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill} checked={checkedSkills.includes(skill.id)}
            onChange={(checked) => handleToggle(skill.id, checked)} />
        ))}
      </div>

      {/* Toasts */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {toasts.map(({ id, msg }) => (
          <div key={id} className="bg-[#0d1120] border border-[#06B6D4] rounded-lg px-4 py-3 shadow-lg max-w-sm"
            style={{ animation: 'slideUp 0.3s ease-out' }}>
            <div className="flex items-center gap-2 text-[#e2e6f5]">
              <span className="text-[#06B6D4]">✓</span>
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
  useEffect(() => { const t = setTimeout(() => setAnimatedScore(score), 100); return () => clearTimeout(t); }, [score]);
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;
  const color = score <= 40 ? '#10b981' : score <= 70 ? '#f59e0b' : '#f43f5e';
  const badge = score <= 40 ? { text: 'SAFE', color: '#10b981' } : score <= 70 ? { text: 'CAUTION', color: '#f59e0b' } : { text: 'CRITICAL', color: '#f43f5e' };
  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#1e2340" strokeWidth="12" />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth="12"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s ease-out' }} />
        <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="middle"
          style={{ fontSize: size*0.25, fontWeight:'bold', fill:'#e2e6f5', transform:'rotate(90deg)', transformOrigin:'center' }}>
          {Math.round(animatedScore)}
        </text>
      </svg>
      <div className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
        style={{ backgroundColor: `${badge.color}20`, color: badge.color, border: `1px solid ${badge.color}` }}>
        {badge.text}
      </div>
    </div>
  );
}
