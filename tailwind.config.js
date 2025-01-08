/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'primary': '#1a1a1a',
            'secondary': '#262626',
            'accent': '#a855f7',
            'accent-light': '#e9d5ff',
            'text-primary': '#f3f4f6',
            'text-secondary': '#d1d5db',
            'cyan': '#00ffff',
          },
        },
      },
      plugins: [],
    }
