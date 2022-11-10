import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Carsharing = () => {
  return (
    <>
      <div class="flex flex-wrap gap-9 items-end">
        <div class="relative flex justify-between bg-white flex-grow-1 max-w-[802px]">
          <div class="grid content-start gap-y-2.5 p-12">
            <div
              class="w-16 h-16 rounded-full"
              style="background: linear-gradient(180deg, #EC656D 0%, #EF914F 99.99%, rgba(239, 145, 79, 0) 100%, rgba(239, 145, 79, 0) 100%, #EF914F 100%)"
            />
            <div class="w-16 h-16 rounded-full bg-[#DBEBD4]" />
            <div class="w-16 h-16 rounded-full bg-[#F1F7FA]" />
            <div class="w-16 h-16 rounded-full bg-[#B3B3B3]" />
          </div>
          <div
            id="gallery-1e3e0c0d-89b7-464c-823d-fdd5647e1cc9"
            class="relative pl-[80px] isolate"
          >
            <div class="w-max absolute left-0 bottom-0 z-10">
              <Image
                src="/image/dae5af52a61694b49b7f6753ea710f45.jpg"
                width={1024}
                height={1576}
                className="w-[386px]"
              />
              <a
                class="absolute inset-0"
                href="/image/dae5af52a61694b49b7f6753ea710f45.png"
                data-pswp-width="1024"
                data-pswp-height="2650"
                target="_blank"
                {...{ "aria-label": "open image in fullscreen view" }}
              />
            </div>
            <div class="relative w-max">
              <Image
                src="/image/cce8a78dcac310d1c7dcc7ba020b3650.jpg"
                width={1440}
                height={2211}
                className="w-[440px]"
              />
              <a
                class="absolute inset-0"
                href="/image/cce8a78dcac310d1c7dcc7ba020b3650.png"
                data-pswp-width="1440"
                data-pswp-height="3275"
                target="_blank"
                {...{ "aria-label": "open image in fullscreen view" }}
              />
            </div>
          </div>
        </div>
        <div class="flex gap-2.5">
          <a
            href="https://www.figma.com/proto/afa3IMww9XW81PUBefsV71/carshare-(Copy)?page-id=402%3A30&node-id=402%3A387&viewport=770%2C812%2C0.54&scaling=min-zoom"
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
                "galleryOpen('gallery-1e3e0c0d-89b7-464c-823d-fdd5647e1cc9')",
            }}
          />
        </div>
      </div>
      <div class="grid text-2xl max-w-[802px]">
        <span class="mb-6">
          Задача: Создать лендинг для компании каршеринга с адаптивом для
          планшета
        </span>
        <span>Описание: Учебный проект.</span>
      </div>
    </>
  );
};
