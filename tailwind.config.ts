module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  animation: {
    scroll: 'scroll 25s linear infinite',
  },
  keyframes: {
    scroll: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' },
    },
  },
},

      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Updated brand font
      },
      colors: {
        lugha: {
          navy: '#2C3E70',        // Primary Brand Color
          mist: '#E9EEF6',        // Background or Light Accent
          white: '#FFFFFF',       // Clean Canvas
          coral: '#F36B6B',       // Warm CTA / Emotional Accent
          teal: '#14B8A6',        // Cool Accent / Buttons
          gold: '#F5A623',        // Highlight / Borders
          ink: '#222831',         // Text & Icon Base
        },
      },
    },
  },
  plugins: [],
}
