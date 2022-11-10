import AutoScrollImage from "../../../islands/AutoScrollImage.tsx";
import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Ikea = () => {
  return (
    <>
      <div class="flex flex-wrap gap-9 items-end">
        <div
          id="gallery-e98834a4-bae3-4d4b-86f2-45aedbbe4866"
          class="relative flex gap-x-4 gradient-1 justify-between flex-grow-1 max-w-[802px] overflow-hidden pr-12"
        >
          <div class="grid content-start gap-y-2.5 p-12">
            <div class="w-16 h-16 rounded-full bg-[#0058A3]" />
            <div class="w-16 h-16 rounded-full bg-white" />
            <div class="w-16 h-16 rounded-full bg-[#DFDFDF]" />
            <div class="w-16 h-16 rounded-full bg-black" />
          </div>
          <div class="relative pt-3 pr-16 mr-8">
            <div class="relative block w-max border-t-1 border-l-1 border-r-1 border-grey-3">
              <Image
                src="/image/4f3faee47e9313e0e9d7e9a6346cb2cb.jpg"
                width={879}
                height={1843}
                className="w-[322px]"
              />
              <a
                class="absolute inset-0"
                href="/image/9fcd4621-bb75-4be5-a346-872c27706ac8.png"
                data-pswp-width="879"
                data-pswp-height="4096"
                target="_blank"
                {...{ "aria-label": "open image in fullscreen view" }}
              />
            </div>
            <div class="relative block w-max absolute bottom-0 right-0 border-t-1 border-l-1 border-r-1 border-grey-3">
              <Image
                src="/image/d7fe4f682a857b4c383ce78fc6b8867e.jpg"
                width={632}
                height={1373}
                className="w-[231px]"
              />
              <a
                class="absolute inset-0"
                href="/image/7b8899d0-f31d-416a-9aeb-cc760884fffe.png"
                data-pswp-width="632"
                data-pswp-height="4096"
                target="_blank"
                {...{ "aria-label": "open image in fullscreen view" }}
              />
            </div>
          </div>
          <a
            href="/image/9bd12f11-faba-42dd-8317-0ee245d4534b.png"
            data-pswp-width="431"
            data-pswp-height="4096"
            target="_blank"
            {...{ "aria-label": "open image in fullscreen view" }}
          >
            <AutoScrollImage
              containerHeight="640px"
              imageProps={{
                src: "/image/9bd12f11-faba-42dd-8317-0ee245d4534b.jpg",
                width: 431,
                height: 4096,
                className: "w-[158px] border-1 border-grey-3 max-h-[9999px]",
              }}
            />
          </a>
        </div>
        <div class="flex gap-2.5">
          <a
            href="https://www.figma.com/proto/iZu5EKfo2B8brGXZ0RMYR1/IKEA?page-id=601%3A1283&node-id=601%3A1284&viewport=441%2C718%2C0.18&scaling=min-zoom"
            class="border-1 border-gray-800 border-1 border-gray-800 border-opacity-[0.1] hover:border-opacity-[0.2]"
            {...{ "aria-label": "open project in figma" }}
            target="_blank"
          >
            <icons.Figma />
          </a>
          <Button
            text="Подробнее"
            data={{
              onclick:
                "galleryOpen('gallery-e98834a4-bae3-4d4b-86f2-45aedbbe4866')",
            }}
          />
        </div>
      </div>
      <div class="grid text-2xl max-w-[802px]">
        <span class="mb-6">
          Задача: Создание макета карточки товара из интернет-магазина IKEA в
          Figma разрешение 1440px, 375px, 768px.
        </span>
        <span>
          Описание: Учебная работа. Повтор макета существующего ресурса.
        </span>
      </div>
    </>
  );
};
