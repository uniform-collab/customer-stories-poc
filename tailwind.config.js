/** @type {import('tailwindcss').Config} */

import theme from "./tailwind.config.theme.json";
import { generateTailwindcssColorKeysPattern } from "./utils/palette";

const safelist = [
  { pattern: /grid-cols-(1[0-2]|[1-9]|none|subgrid)/, variants: ["lg", "md"] },
  {
    pattern: /gap-(x|y)-(0(\.5)?|1(\.5)?|2(\.5)?|3(\.5)?|[1-9]?[0-9]|px)/,
    variants: ["lg", "md"],
  },
  {
    pattern: /(col|row)-start-(1[0-2]|[1-9]|none|subgrid)/,
    variants: ["lg", "md"],
  },
  {
    pattern: /(col|row)-(auto|span-(1[0-2]|[1-9]|full))/,
    variants: ["lg", "md"],
  },
  { pattern: /justify-(start|center|end)/ },
  {
    pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    variants: ["lg", "md"],
  },
  { pattern: /text-(left|center|right)/, variants: ["lg", "md"] },
];

const colorKeys = Object.keys(theme.extend.colors || {});
if (colorKeys.length) {
  safelist.push(generateTailwindcssColorKeysPattern(colorKeys));
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist,
  theme,
  plugins: [require("@tailwindcss/typography")],
};
