/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['var(--font-jakarta)'],
      },
      fontSize: {
        'preset-1': ['56px', { lineHeight: '125%' }],
        'preset-2': ['24px', { lineHeight: '125%' }],
        'preset-3': ['18px', { lineHeight: '125%', fontWeight: '700' }],
        'preset-4': ['16px', { lineHeight: '150%' }],
        'preset-5': ['14px', { lineHeight: '150%' }],
      },
      colors: {
        primary: {
          lime: 'hsl(61, 70%, 52%)',
          red: 'hsl(4, 69%, 50%)',
        },
        slate: {
          100: 'hsl(202, 86%, 94%)',
          300: 'hsl(203, 41%, 72%)',
          500: 'hsl(200, 26%, 54%)',
          700: 'hsl(200, 24%, 40%)',
          900: 'hsl(202, 55%, 16%)',
        },
      },
      boxShadow: {
        'custom': '0px 32px 64px 0px rgba(19, 48, 65, 0.1)',
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
