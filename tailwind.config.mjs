/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "deep-green": "#436C5E",
        "bg-beige": "#F5EFEA",
        gold: "#B99563",
        "text-color": "#483F38",
        "light-green": "#93A9A1",
        "dark-beige": "#D1C7BF",
        base: "#F4F9F1",
        "base-02": "#FAFAFA",
      },
      fontFamily: {
        shippori: ['"Shippori Mincho"', "serif"],
      },
      fontSize: {
        h1: ["36px", { lineHeight: "54px", letterSpacing: "3.6px" }],
        "h1-sp": ["32px", { lineHeight: "48px", letterSpacing: "3.6px" }],
        h2: ["24px", { lineHeight: "32px", letterSpacing: "2.4px" }],
        body: ["16px", { lineHeight: "32px", letterSpacing: "1px" }],
        "body-sp": ["15px", { lineHeight: "27px", letterSpacing: "1.6px" }],
        small: ["14px", { lineHeight: "22.75px", letterSpacing: "1.5px" }],
        caption: ["12px", { lineHeight: "19px", letterSpacing: "0px" }],
      },
      screens: {
        sp: { max: "768px" },
        pc: "1024px",
      },
      spacing: {
        80: "80px",
        120: "120px",
        150: "150px",
      },
    },
  },
  plugins: [],
};
