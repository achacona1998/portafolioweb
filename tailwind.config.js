/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#77001A',
          dark: '#550012',
          light: '#AA0020',
        }
      },
    },
  },
  plugins: [],
}