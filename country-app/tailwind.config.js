// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
