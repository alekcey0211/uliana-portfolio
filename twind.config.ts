import { Configuration } from "twind";

export default {
  plugins: {
    gallery: {},
    "gallery-open": {},
    "aspect-auto": {
      "aspect-ratio": `auto`,
    },
    "aspect-square": {
      "aspect-ratio": `1 / 1`,
    },
    "aspect-video": {
      "aspect-ratio": `16 / 9`,
    },
    scroll: (parts) => ({
      "scroll-behavior": parts[0],
    }),
    "w-fit": {
      width: "fit-content",
    },
    isolate: {
      isolation: "isolate",
    },
    "gradient-1": {
      background: "linear-gradient(180deg, #2B2A29 0%, #F2F2F2 100%)",
    },
    "gradient-1-inverse": {
      background: "linear-gradient(180deg, #F2F2F2 0%, #2B2A29 100%)",
    },
    "grid-rows": (parts) =>
      parts[0]?.startsWith("[")
        ? {
            "grid-template-rows": parts[0]
              .substring(1, parts[0].length - 1)
              .split("_")
              .join(" "),
          }
        : {
            "grid-template-rows": `repeat(${parts[0]}, minmax(0,1fr))`,
          },
    "grid-cols": (parts) =>
      parts[0]?.startsWith("[")
        ? {
            "grid-template-columns": parts[0]
              .substring(1, parts[0].length - 1)
              .split("_")
              .join(" "),
          }
        : {
            "grid-template-columns": `repeat(${parts[0]}, minmax(0,1fr))`,
          },
    aspect: (parts) =>
      parts[0]?.startsWith("[") && {
        "aspect-ratio": parts[0]
          .substring(1, parts[0].length - 1)
          .split("/")
          .join(" / "),
      },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: "'Noto Sans', sans-serif",
        "noto-sans": '"Noto Sans"',
      },
      colors: {
        red: "#B62E1F",
        "gray-1": "#333333",
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        "gray-4": "#BDBDBD",
        "gray-5": "#E0E0E0",
        "gray-6": "#F2F2F2",
        "section-title": "#383736",
      },
    },
    container: (theme) => {
      return {
        center: true,
        padding: {
          ...theme("padding"),
          sm: "2rem",
          lg: "40px",
          xl: "40px",
          "2xl": "40px",
        },
      };
    },
  },
  preflight: (cssRule, { css, theme }) => {
    cssRule["@import"] = [
      "url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400&display=swap')",
    ];

    cssRule["*:focus"] = {
      "outline-color": theme("colors", "red") + "!important",
    };
    cssRule[":root"] = css("scroll-smooth");
    cssRule["body"] = css("bg-gray-6 text-gray-2");
    // cssRule["img"] = css("block max-w-full max-h-full");
  },
} as Configuration;
