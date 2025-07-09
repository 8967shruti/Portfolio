/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // or 'media' for system preference
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // your custom theme extensions
    },
  },
  plugins: [],
}