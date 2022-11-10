import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Tehmet = () => {
  return (
    <>
      <div class="flex flex-wrap gap-9 items-end">
        <div class="relative flex justify-between gradient-1 p-12 w-max overflow-hidden flex-grow-1 max-w-[802px]">
          <div class="grid content-start gap-y-2.5">
            <div class="w-16 h-16 rounded-full bg-[#9C9EA8]" />
            <div class="w-16 h-16 rounded-full bg-[#0089CC]" />
            <div class="w-16 h-16 rounded-full bg-[#0A529A]" />
            <div class="w-16 h-16 rounded-full bg-[#39446B]" />
          </div>
          <div class="relative -rotate-[20.1deg] translate-y-8 origin-top-right">
            <Image
              src="/image/c59a320d-728a-458e-9e36-bb75eac4c2ec.jpg"
              width={1920}
              height={1644}
              className="w-[640px]"
            />
            <a
              class="gallery-open absolute inset-0"
              href="/image/ac388fcf-5a6f-4413-aa7c-8eb3f2c5ca9a.png"
              data-pswp-width="3600"
              data-pswp-height="16404"
              target="_blank"
              {...{ "aria-label": "open image in fullscreen view" }}
            />
          </div>
        </div>
        <div class="flex gap-2.5">
          <a
            href="https://www.figma.com/proto/3lviJ0Q7kLHbhGq9Wvv4qb/TEXMET-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0?page-id=604%3A5028&node-id=604%3A5400&viewport=222%2C239%2C0.06&scaling=min-zoom"
            class="border-1 border-gray-800 border-1 border-gray-800 border-opacity-[0.1] hover:border-opacity-[0.2]"
            {...{ "aria-label": "open project in figma" }}
            target="_blank"
          >
            <icons.Figma />
          </a>
          <Button
            className="gallery-open"
            text="Подробнее"
            href="/image/ac388fcf-5a6f-4413-aa7c-8eb3f2c5ca9a.png"
            target="_blank"
            data={{
              "data-pswp-width": "3600",
              "data-pswp-height": "16404",
            }}
          />
        </div>
      </div>
      <div class="grid text-2xl max-w-[802px]">
        <span class="mb-6">
          Задача: Редизайн сайта компании "Техмет Урал" на основе брендбука.
        </span>
        <span>
          Описание: Реальный проект. Корпоративный сайт с элементами
          интернет-магазина.
        </span>
        <span>
          Ознакомиться с работой можно по&nbsp;
          <a href="https://tehmet.su/" class="text-red" target="_blank">
            ссылке
          </a>
        </span>
      </div>
    </>
  );
};
