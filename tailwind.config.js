/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#121212",
                surface: "#1E1E1E",
                "surface-elevated": "#282828",
                "surface-hover": "#333333",
                accent: "#A855F7",
                "accent-hover": "#9333EA",
                "text-primary": "#FFFFFF",
                "text-secondary": "#A3A3A3",
                "text-muted": "#6B6B6B",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
}
