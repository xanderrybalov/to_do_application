/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#34D399',
        'secondary-violett': '#b0afdb',
        'header-line-primary': '#f5f6fb',
        'task-completed': '#9CA3AF',
        'task-pending': '#4B5563',
        'background-primary': '#f0efe9',
        'background-light': '#F9FAFB',
      },
      fontWeight: {
        'header-light': '300',
        'header-semibold': '600',
        'header-bold': '700',
      },
      spacing: {
        'task-gap': '0.7rem',
        'input-padding': '0.75rem',
        'container-margin': '2.5rem 1.5rem 2rem 1.5rem',
      },
      fontSize: {
        'header-title': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      maxWidth: {
        container: '20rem',
      },
      borderRadius: {
        'task-item': '0.5rem',
        container: '0.5rem',
        button: '9999px',
      },
      borderWidth: {
        'header-line': '0.3rem',
      },
      boxShadow: {
        container: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
