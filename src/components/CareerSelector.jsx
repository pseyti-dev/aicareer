import React, { useState } from 'react';

export default function CareerSelector({ careers, specialOptions }) {
  const [selectedOption, setSelectedOption] = useState('');

  const getLinkPath = () => {
    if (!selectedOption) return '#';
    if (selectedOption === 'ai-ready' || selectedOption === 'ai-entrepreneur')
      return `/special/${selectedOption}/`;
    return `/risk/${selectedOption}/`;
  };

  return (
    <div className="bg-surface border border-rule rounded-xl p-6 sm:p-8 max-w-xl mx-auto">
      <label htmlFor="career-select" className="block text-left mb-3 text-sm font-medium text-ink">
        Select your career or goal:
      </label>
      <select
        id="career-select"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-paper border border-rule text-ink focus:outline-none focus:border-accent transition-colors mb-4"
      >
        <option value="">Choose an option...</option>
        <optgroup label="Special Options">
          {specialOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </optgroup>
        <optgroup label="Career Risk Assessments">
          {careers.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title} — {c.baseRiskScore}% Risk
            </option>
          ))}
        </optgroup>
      </select>
      {selectedOption ? (
        <a
          href={getLinkPath()}
          className="block w-full px-6 py-3 rounded-lg font-bold text-white text-center transition-all duration-200"
          style={{
            background:
              'linear-gradient(135deg, rgb(var(--accent-solid)) 0%, rgb(var(--accent-deep)) 100%)',
            boxShadow: '0 4px 12px rgb(var(--accent-solid) / 0.3)',
          }}
        >
          Check My Risk Score →
        </a>
      ) : (
        <button
          disabled
          className="w-full px-6 py-3 rounded-lg font-bold text-muted bg-rule cursor-not-allowed"
        >
          Check My Risk Score →
        </button>
      )}
    </div>
  );
}
