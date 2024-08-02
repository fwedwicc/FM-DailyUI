/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'border-gradient': 'linear-gradient(135deg, rgba(68,177,109,1) 0%, rgba(26,69,42,1) 26%, rgba(23,23,23,1) 43%)', //Hero Page
        'landing-hero': "url('/src/assets/day03/hero-bg.png')", //Day03
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@codaworks/react-glow/tailwind')
  ],
}

