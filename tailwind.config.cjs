/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            red: "#ff4655",
            blue: "#0f1923",
            black: "#111",
            gray: {
                200: "#f9f9f9",
                300: "#ece8e1",
                400: "#768079",
                500: "#383e3a",
                600: "#292929",
                700: "#32333dff",
            },
            dark: {
                500: "#32333dff",
                550: "#272c34ff",
                600: "#27272fff",
            },
            greenInfo: "#8b978f",
        },
    },
    plugins: [],
    prefix: "tw-",
};
