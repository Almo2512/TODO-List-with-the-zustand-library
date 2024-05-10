import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui')],
daisyui: {
  themes: [
    {
      customLight: {
        primary: '#464D77',
        secondary: '#EA526F',
        accent: '#1B998B',
        neutral: '#2b3440',
        info: '#87BFFF',
        success: '#139f02',
        warning: '#FFB400',
        error: '#C84630',
        'base-100': '#ffffff',
      },
    },

    {
      customDark: {
        primary: '#545f9f',
        secondary: '#EA526F',
        accent: '#1bab9b',
        neutral: '#2b3440',
        info: '#87BFFF',
        success: '#139f02',
        warning: '#FFB400',
        error: '#C84630',
        'base-100': '#2a2a2c',
      },
    },
    'light',
    'dark',
  ],
},
};
export default config;
