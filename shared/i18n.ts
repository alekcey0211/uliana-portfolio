import i18next from "https://deno.land/x/i18next@v22.4.10/index.js";
import i18nextMiddleware from "https://deno.land/x/i18next_http_middleware@v3.2.2/index.js";
import enTranslation from "../locales/en.json" assert { type: "json" };
import ruTranslation from "../locales/ru.json" assert { type: "json" };

i18next.use(i18nextMiddleware.LanguageDetector).init({
//   debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
  },
});

export const i18n = i18next;
export const middleware = i18nextMiddleware;
