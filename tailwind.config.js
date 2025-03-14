/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1b1e',
          text: '#e5e7eb',
          border: '#374151'
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-gray-50',
    'text-indigo-600',
    'text-gray-700',
    'hover:text-indigo-600',
    'hover:bg-gray-50',
    'bg-indigo-50',
    'text-indigo-700',
    'bg-green-50',
    'text-green-700',
    'bg-indigo-600',
    'hover:bg-indigo-500',
    'focus-visible:outline-indigo-600'
  ]
}