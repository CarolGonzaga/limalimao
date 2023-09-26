/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bege': '#FAF1E4',
        'verde-bebe': '#CEDEBD',
        'verde-oliva': '#9EB384',
        'verde-escuro': '#435334',
      },
    },
  },
  plugins: [],
}