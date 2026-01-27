import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-elevated": "hsl(var(--surface-elevated))",
        hover: "hsl(var(--hover))",
        active: "hsl(var(--active))",
        focus: "hsl(var(--focus))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          soft: "hsl(var(--primary-soft))",
        },
        
        // New minimal accent system
        "accent-green": {
          DEFAULT: "hsl(var(--accent-green))",
          soft: "hsl(var(--accent-green-soft))",
        },
        "accent-blue": {
          DEFAULT: "hsl(var(--accent-blue))",
          soft: "hsl(var(--accent-blue-soft))",
        },
        "accent-warm": {
          DEFAULT: "hsl(var(--accent-warm))",
          soft: "hsl(var(--accent-warm-soft))",
        },
        "accent-orange": {
          DEFAULT: "hsl(var(--accent-orange))",
          soft: "hsl(var(--accent-orange-soft))",
        },
        
        // Legacy accent mappings for compatibility
        "accent-gold": {
          DEFAULT: "hsl(var(--accent-gold))",
          soft: "hsl(var(--accent-gold-soft))",
        },
        "accent-purple": {
          DEFAULT: "hsl(var(--accent-purple))",
          soft: "hsl(var(--accent-purple-soft))",
        },
        "accent-cyan": {
          DEFAULT: "hsl(var(--accent-cyan))",
          soft: "hsl(var(--accent-cyan-soft))",
        },
        "accent-pink": "hsl(var(--accent-pink))",
        
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          soft: "hsl(var(--neutral-soft))",
        },
        
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          muted: "hsl(var(--text-muted))",
          inverse: "hsl(var(--text-inverse))",
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
          hover: "hsl(var(--card-hover))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      
      fontFamily: {
        sans: ['Onest', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Geist Mono', 'Fira Code', 'monospace'],
        mono: ['Fira Code', 'Geist Mono', 'monospace'],
        body: ['Onest', 'Inter', 'sans-serif'],
      },
      
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      backdropBlur: {
        xs: '2px',
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-up": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-80px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(80px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "glow": {
          "0%": { boxShadow: "0 0 15px hsl(var(--accent-green) / 0.2)" },
          "100%": { boxShadow: "0 0 25px hsl(var(--accent-green) / 0.3)" }
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 15px hsl(var(--accent-green) / 0.15)" },
          "50%": { boxShadow: "0 0 25px hsl(var(--accent-green) / 0.25)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "scroll-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "scroll-left": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }
        }
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "scroll-right": "scroll-right 30s linear infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "morph": "morph 8s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.pause-animation': {
          'animation-play-state': 'paused',
        },
        '.hover\\:pause-animation:hover': {
          'animation-play-state': 'paused',
        },
        '.line-clamp-4': {
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '4',
          'overflow': 'hidden',
        },
        '.glass': {
          'background': 'hsl(var(--glass))',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid hsl(var(--glass-border))',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
} satisfies Config;
