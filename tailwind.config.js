/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  mode: 'jit',
  theme: {
    screens: {
      "mn": "400px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite backwards',
      }
    },
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  plugins: [],
}

