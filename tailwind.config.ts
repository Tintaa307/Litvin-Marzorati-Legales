import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        meshedDisplay: ["var(--font-meshedDisplay)"],
        dmSerif: ["var(--font-dmSerif)"],
        ubuntu: ["var(--font-ubuntu)"],
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
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        moveBg: "moveBg 10s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        moveBg: {
          "0%": {
            "background-position": "100%",
          },
          "25%": {
            "background-position": "100%",
          },
          "50%": {
            "background-position": "0%",
          },
          "75%": {
            "background-position": "0%",
          },
          "100%": {
            "background-position": "100%",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      screens: {
        service: "1370px",
        "3xl": "1600px",
        feed: { max: "930px" },
        min_feed: { max: "630px" },
        chatbot_sm: { max: "560px" },
        chatbot_xs: { max: "400px" },
      },
    },
  },
  // @ts-ignore
  darkMode: ["false", "class"],
  plugins: [],
}

export default config
