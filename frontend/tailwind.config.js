/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // For root index.html
    "./src/**/*.{js,ts,jsx,tsx}", // All files in src using Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
