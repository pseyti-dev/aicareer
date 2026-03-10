import React, { useState } from 'react';

export default function CareerSelector({ careers, specialOptions }) {
  const [selectedOption, setSelectedOption] = useState('');

  const getLinkPath = () => {
    if (!selectedOption) return '#';
    if (selectedOption === 'ai-ready' || selectedOption === 'ai-entrepreneur') return `/special/${selectedOption}/`;
    return `/risk/${selectedOption}/`;
  };

  return (
    <div className="bg-[#0d1120] border border-[#1e2340] rounded-xl p-6 sm:p-8 max-w-xl mx-auto">
      <label htmlFor="career-select" className="block text-left mb-3 text-sm font-medium text-[#e2e6f5]">
        Select your career or goal:
      </label>
      <select
        id="career-select"
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-[#06070f] border border-[#1e2340] text-[#e2e6f5] focus:outline-none focus:border-[#06B6D4] transition-colors mb-4"
      >
        <option value="">Choose an option...</option>
        <optgroup label="Special Options">
          {specialOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </optgroup>
        <optgroup label="Career Risk Assessments">
          {careers.map(c => <option key={c.slug} value={c.slug}>{c.title} — {c.baseRiskScore}% Risk</option>)}
        </optgroup>
      </select>
      {selectedOption ? (
        <a href={getLinkPath()}
          className="block w-full px-6 py-3 rounded-lg font-bold text-white text-center transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)', boxShadow: '0 4px 12px rgba(6,182,212,0.3)' }}>
          Check My Risk Score →
        </a>
      ) : (
        <button disabled className="w-full px-6 py-3 rounded-lg font-bold text-[#4b5280] bg-[#1e2340] cursor-not-allowed">
          Check My Risk Score →
        </button>
      )}
    </div>
  );
}
