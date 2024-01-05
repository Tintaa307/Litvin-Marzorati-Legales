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
      }
    },
  },
  plugins: [],
}
export default config
