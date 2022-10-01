import { Configuration } from "twind";

export default {
  // selfURL: import.meta.url,
  hash: false,
  plugins: {
    scroll: (parts) => ({
      "scroll-behavior": parts[0],
    }),
    "gradient-1": {
      background: "linear-gradient(180deg, #2B2A29 0%, #FFFFFF 100%)",
    },
    "gradient-1-inverse": {
      background: "linear-gradient(180deg, #FFFFFF 0%, #2B2A29 100%)",
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
  },
  theme: {
    extend: {
      fontFamily: {
        sans: "'Noto Sans', sans-serif",
        "noto-sans": '"Noto Sans"',
      },
      colors: {
        red: "#B62E1F",
        "grey-2": "#4F4F4F",
        "grey-4": "#BDBDBD",
        "grey-6": "#F2F2F2",
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
  preflight: (cssRule, theme) => {
    const css = theme.css;

    cssRule["@import"] = [
      "url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400&display=swap')",
    ];

    cssRule[":root"] = css("scroll-smooth");
    cssRule["body"] = css("bg-[#2B2A29]");
    cssRule["img"] = css("block");
  },
} as Configuration;
