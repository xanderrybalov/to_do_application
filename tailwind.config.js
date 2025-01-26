/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#34D399',
        'task-completed': '#9CA3AF',
        'task-pending': '#4B5563',
        'background-light': '#F9FAFB',
      },
      spacing: {
        'header-gap': '1rem',
        'task-gap': '0.5rem',
        'input-padding': '0.75rem',
      },
      borderRadius: {
        'task-item': '0.5rem',
        button: '9999px',
      },
    },
  },
  plugins: [],
};
