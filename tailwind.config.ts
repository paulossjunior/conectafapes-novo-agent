import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/modules/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fapes: {
                    blue: '#3b82f6',
                    lime: '#89b42c',
                    cyan: '#67e8f9',
                    navy: '#0f172a',
                    slate: '#1e293b'
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
    darkMode: 'selector'
} satisfies Config
