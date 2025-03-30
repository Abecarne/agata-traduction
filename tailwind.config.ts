import type { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3B82F6' // Bleu Tailwind
      }
    }
  }
};