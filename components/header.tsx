import { i18n } from "../shared/i18n.ts";
import { Image } from "./image.tsx";

export const Header = () => {
  const links = [
    { link: "#about", name: i18n.t("375990e3-243c-41a5-9de9-39e892b20504") },
    { link: "#cases", name: i18n.t("a1b563e3-8530-4ff4-ac32-5521c3549eb4") },
    { link: "#contacts", name: i18n.t("00f43638-8eab-418f-af6c-5ca0775c1314") },
  ];

  return (
    <header class="gradient-1 pb-20">
      <div class="relative container h-[800px] grid grid-rows-[auto_1fr] py-20 text-white">
        <nav class="flex gap-20 items-center">
          {links.map(({ link, name }) => (
            <a href={link} class="px-2 text-xl hover:underline">
              {name}
            </a>
          ))}
          <div class="ml-auto" />
          <div>
            <a href="/?lng=en">EN</a>&nbsp; | &nbsp;<a href="/?lng=ru">RU</a>
          </div>
        </nav>
        <div class="flex items-center justify-between gap-8">
          <h1 class="grid">
            <span class="text-6xl">
              {i18n.t("b20fcba7-3e74-4a1c-ab58-eb8e34211408")}
            </span>
            <span
              class="text-2xl"
              dangerouslySetInnerHTML={{
                __html: i18n.t("16bf7f6b-74ac-4879-9248-d67bcf4c9d65"),
              }}
            />
          </h1>
          <Image
            src="/image/2ef77200ef94e61c0855893855d5e3b7.png"
            alt={i18n.t("07c67997-7829-4d61-8174-7996842fc035")}
            isLazy={false}
            width={686}
            height={653}
            className="w-[600px] translate-y-20"
          />
        </div>
      </div>
    </header>
  );
};
