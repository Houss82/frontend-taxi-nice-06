/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/contexts/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}",
    "./src/utils/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E66F5", // bleu principal (Riviera)
        primaryDark: "#1552C8", // hover
        silver: "#C0C0C0", // argenté
        ink: "#0F172A", // texte
      },
      boxShadow: {
        soft: "0 12px 30px rgba(2,6,23,.08)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
