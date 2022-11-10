import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Rosneft = () => {
  return (
    <>
      <div class="flex flex-wrap gap-9 items-end">
        <div
          id="gallery-a5cc5b0e-c309-42ce-917b-ca5e253bdb69"
          class="relative flex gap-x-4 bg-grey-5 justify-between flex-grow-1 max-w-[802px]"
        >
          <div class="grid content-start gap-y-2.5 p-12">
            <div
              class="w-16 h-16 rounded-full"
              style="background: linear-gradient(180deg, #FFCC00 29.17%, #FFA400 65.62%);"
            />
            <div
              class="w-16 h-16 rounded-full"
              style="background: linear-gradient(180deg, #FF9900 46.35%, rgba(5, 5, 5, 0.89) 95.31%);"
            />
            <div class="w-16 h-16 rounded-full bg-black" />
            <div class="w-16 h-16 rounded-full bg-[#858585]" />
          </div>
          <a
            class="block w-max mt-20"
            href="/image/4e94074ae2a4d85253b30da5777f013b.jpg"
            data-pswp-width="1440"
            data-pswp-height="1308"
            target="_blank"
            {...{ "aria-label": "open image in fullscreen view" }}
          >
            <Image
              src="/image/4e94074ae2a4d85253b30da5777f013b.jpg"
              width={1440}
              height={1308}
              className="w-[660px]"
            />
          </a>
        </div>
        <div class="flex gap-2.5">
          <a
            href="https://www.figma.com/proto/1yRYYzVuzn0FrRdKNal1kI/colour?page-id=0%3A1&node-id=33%3A240&scaling=min-zoom"
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
                "galleryOpen('gallery-a5cc5b0e-c309-42ce-917b-ca5e253bdb69')",
            }}
          />
        </div>
      </div>
      <div class="grid text-2xl mb-24 max-w-[802px]">
        <span class="max-w-[830px] mb-6">
          Задача: Создать дизайн интерфейса для ведения базы данных пилотного
          проекта компании Роснефть в соответствии с брендбуком.
        </span>
        <span>Описание: нереализованный проект.</span>
      </div>
    </>
  );
};
