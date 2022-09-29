import { Configuration } from "twind";

export default {
  // selfURL: import.meta.url,
  hash: false,
  plugins: {
    "section-gradient": {
      background: "linear-gradient(180deg, #2B2A29 0%, #FFFFFF 100%)",
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
    },
  },
  preflight: {
    "@import": `url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400&display=swap')`,
  },
} as Configuration;
