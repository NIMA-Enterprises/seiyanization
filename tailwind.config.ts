import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ...colors,
        white: "#FFFFFF",
        black: "#001B2A",

        "sei-border-dark": "#334155",
        "sei-border-light": "#E2E8F0",

        "sei-card-bg-dark": "#0F172A",
        "sei-card-bg-light": "#FFFFFF",

        "sei-card-inner-dark": "#1E293B",
        "sei-card-inner-light": "#F8FAFC",

        "sei-card-hover-dark": "#1E293B",
        "sei-card-hover-light": "#F8FAFC",

        "sei-heading-dark": "#F1F5F9",
        "sei-heading-light": "#1E293B",

        "sei-subheading-dark": "#94A3B8",
        "sei-subheading-light": "#475569",

        "sei-text-dark": "",
        "sei-text-light": "",

        border: "hsl(var(--border))",
        "sei-red": "#2DD4BF",
        "sei-black": "#001119",
        "sei-blue": "#001B2A",
        "sei-dark-blue": "#001119",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
