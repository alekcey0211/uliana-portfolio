import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Bicycle = () => {
  return (
    <div class="grid gap-y-8">
      <div class="flex flex-wrap gap-9 items-end">
        <div
          id="gallery-d15f5b36-bf22-4332-8de7-83c2f9c98a7f"
          class="relative flex bg-gray-5 overflow-hidden justify-between flex-grow-1 max-w-[802px]"
        >
          <div class="grid content-start gap-y-2.5 p-12">
            <div class="w-16 h-16 rounded-full bg-[#D06401]" />
            <div class="w-16 h-16 rounded-full bg-[#4968E3]" />
            <div class="w-16 h-16 rounded-full bg-[#8A9ADE]" />
            <div class="w-16 h-16 rounded-full bg-[#201F1F]" />
          </div>
          <div class="relative block w-max mt-20">
            <Image
              src="/image/506cf3302231ebfdf0581b9811f38369.jpg"
              width={1273}
              height={1164}
              className="w-[650px]"
            />
            <a
              class="absolute inset-0"
              href="/image/f3a1c3e5ee4a4d36c0674d449a4f9511.png"
              data-pswp-width="1078"
              data-pswp-height="4096"
              target="_blank"
              {...{ "aria-label": "open image in fullscreen view" }}
            />
          </div>
        </div>
        <div class="flex gap-2.5">
          <a
            href="https://www.figma.com/proto/87OhG7sOLyswloc7orD4bX/bicycle?page-id=0%3A1&node-id=1%3A5&viewport=954%2C436%2C0.62&scaling=min-zoom&starting-point-node-id=1%3A5"
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
                "galleryOpen('gallery-d15f5b36-bf22-4332-8de7-83c2f9c98a7f')",
            }}
          />
        </div>
      </div>
      <div class="grid gap-6 text-2xl max-w-[802px]">
        <span>Проект: Сайт для клуба любителей велосипедов</span>
        <span>
          Описание: Создала макет сайта. Отработала применение акцентных цветов.
          Учебный проект.
        </span>
      </div>
    </div>
  );
};
