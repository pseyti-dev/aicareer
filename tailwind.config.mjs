/** @type {import('tailwindcss').Config} */

// Semantic colour tokens. Values live in src/styles/global.css as RGB channels
// so that Tailwind's `/opacity` modifier keeps working and dark mode is a
// variable swap rather than a second set of classes.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: token('paper-bg'),
        'paper-alt': token('paper-alt'),
        surface: token('paper-surface'),
        rule: token('paper-border'),
        ink: token('ink'),
        muted: token('ink-muted'),
        accent: token('accent'),
        'accent-solid': token('accent-solid'),
        'accent-deep': token('accent-deep'),
        'on-accent': token('on-accent'),
        'risk-high': token('risk-high'),
        'risk-mid': token('risk-mid'),
        'risk-low': token('risk-low'),
      },
    },
  },
  plugins: [],
};
