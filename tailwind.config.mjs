import defaultTheme from "tailwindcss/defaultTheme"
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(circle at 50% 50% ,var(--tw-gradient-stops))",
                "gradient-radial-alternate":
                    "radial-gradient(125%_125%_at_50%_10%,#ffffff,#a78bfa)",
            },
            fontFamily: {
                sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
                display: ["Figtree Variable", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
    darkMode: "selector",
}
