/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-hero': "url('/src/assets/hero-bg.jpg')", // Day03
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@codaworks/react-glow/tailwind')
  ],
}

