/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./context/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a',
                },
            },
            keyframes: {
                'branch-sway': {
                    '0%, 100%': { transform: 'rotate(-2deg)' },
                    '50%': { transform: 'rotate(2deg)' },
                },
                'branch-rustle': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(1px, 1px)' },
                    '75%': { transform: 'translate(-1px, 0.5px)' },
                },
                'leaf-float': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(2px, -3px)' },
                }
            },
            animation: {
                'branch-sway': 'branch-sway 8s ease-in-out infinite',
                'branch-rustle': 'branch-rustle 4s ease-in-out infinite',
                'leaf-float': 'leaf-float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
