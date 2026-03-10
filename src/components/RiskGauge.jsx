import React, { useState, useEffect } from 'react';

export default function RiskGauge({ score, size = 200, careerTitle = "this career" }) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 100);
    return () => clearTimeout(timer);
  }, [score]);

  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  const getColor = () => {
    if (score <= 40) return '#10b981';
    if (score <= 70) return '#f59e0b';
    return '#f43f5e';
  };

  const getBadge = () => {
    if (score <= 40) return { text: 'SAFE', color: '#10b981' };
    if (score <= 70) return { text: 'CAUTION', color: '#f59e0b' };
    return { text: 'CRITICAL', color: '#f43f5e' };
  };

  const color = getColor();
  const badge = getBadge();

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={size} height={size} className="transform -rotate-90"
        role="img" aria-label={`Risk gauge: ${Math.round(animatedScore)}% AI risk for ${careerTitle}`}>
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#1e2340" strokeWidth="12" />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth="12"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s ease-out' }} />
        <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="middle"
          style={{ fontSize: size * 0.25, fontWeight: 'bold', fill: '#e2e6f5', transform: 'rotate(90deg)', transformOrigin: 'center' }}>
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
