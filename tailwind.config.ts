import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        5: "5px",
        10: "10px",
        20: "20px",
        50: "50px",
      },
      zIndex: {
        1: "1",
        5: "5",
        75: "75",
        100: "100",
      },
      screens: {
        mobile: "320px",
        tablet: "640px",
        laptop: "1024px",
        laptopL: "1280px",
        laptopXL: "1536px",
      },
      width: {
        layout: "576px",
        tablet: "640px",
        18: "72px",
      },
      minHeight: {
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
      height: {
        18: "72px",
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
      maxHeight: {
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        options?: { respectPrefix?: boolean; respectImportant?: boolean }
      ) => void;
    }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".snap-x-items-list": {
          overflowX: "auto",
          "-webkit-overflow-scrolling": "touch",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        },
        // Hide scrollbar for webkit browsers
        ".hide-scroll": {
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        },
        ".skeleton": {
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          backgroundColor: "#D3D3D3",
          borderRadius: "6px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
