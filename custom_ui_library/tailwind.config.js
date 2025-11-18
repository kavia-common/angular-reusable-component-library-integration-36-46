module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--ui-primary)",
        secondary: "var(--ui-secondary)",
        success: "var(--ui-success)",
        error: "var(--ui-error)",
        background: "var(--ui-background)",
        surface: "var(--ui-surface)",
        text: "var(--ui-text)",
      },
      boxShadow: {
        subtle: "var(--ui-shadow)",
      },
      borderRadius: {
        md: "var(--ui-radius)",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(to bottom, rgba(59,130,246,0.1), #ffffff)'
      }
    },
  },
  plugins: [],
}
