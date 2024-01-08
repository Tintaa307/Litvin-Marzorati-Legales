import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["var(--font-poppins)"],
        "meshedDisplay": ["var(--font-meshedDisplay)"],
        "dmSerif": ["var(--font-dmSerif)"],
      },
      colors: {
        background: {
          DEFAULT: "var(--color-background)",
        },
        accent: {
          orange: "var(--accent-orange)",
          brown: "var(--accent-brown)",
        },
        footer: {
          DEFAULT: "var(--color-footer)",
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
