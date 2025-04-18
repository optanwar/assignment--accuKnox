/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all relevant files for Tailwind classes
  ],
  theme: {
    extend: {
      // 🖋️ Custom Font Family
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Poppins', 'sans-serif'], // Stylish font for headings
      },

      // 🎨 Custom Colors
      colors: {
        primary: '#003327', 
       
      },

      // 🌄 Custom Background Image
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
        'footer-texture': "url('/src/assets/footer-texture.png')",
        'gradient-radial': 'radial-gradient(circle, #3498db, #2ecc71)',
      },

      // 📦 Custom Container Configuration
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
        },
      },

      // 🔢 Custom Spacing
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        36: '9rem',
        72: '18rem',
      },

      // 🌟 Custom Box Shadows
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 15px rgba(0, 0, 0, 0.2)',
      },

      // 📌 Custom Animations
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounceSlow: 'bounce 3s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Adds the line-clamp  
  
  ],
};
