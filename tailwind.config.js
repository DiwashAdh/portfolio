/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container
        padding: {
          DEFAULT: '1rem', // Default padding
          sm: '2rem', // Padding for small screens
          md: '3rem', // Padding for medium screens
          lg: '4rem', // Padding for large screens
          xl: '5rem', // Padding for extra-large screens
        },
        screens: {
          sm: '100%',   // Small screen max width
          md: '720px',  // Medium screen max width
          lg: '960px',  // Large screen max width
          xl: '1140px', // Extra large screen max width
          '2xl': '1320px', // Custom size for 2xl
        },
      },
    },
  },
  plugins: [],
}

