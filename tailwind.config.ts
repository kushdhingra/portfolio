import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        'hover': 'var(--hover-cursor)',
      },
      screens: {
        "smol": "1025px"
      },
      backgroundImage: {
        'block-pattern': `linear-gradient(#151515 1px, transparent 1px), linear-gradient(to right, #151515 1px, transparent 1px)`,
      },
      backgroundSize: {
        'block-pattern': '32px 32px',
      },
      colors: {
        'block-pattern': '#090909',
      }
    },
    keyframes: {
      fadeIn: {
        '0%': {
          opacity: "0",
          transform: 'translateY(10%)',
        },
        '100%': {
          opacity: "1",
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.4s ease-in-out',
    },
  },
  plugins: [],
};

export default config;

