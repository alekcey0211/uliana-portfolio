import { i18n } from "../../../shared/i18n.ts";
import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Carving = () => {
  return (
    <div class="grid gap-6">
      <div class="flex flex-wrap gap-9 items-end">
        <div class="relative flex w-max overflow-hidden gradient-1 p-12 justify-between flex-grow-1 max-w-[802px]">
          <div class="grid content-start gap-y-2.5">
            <div
              class="w-16 h-16 rounded-full"
              style="background: linear-gradient(180deg, #CDCDCD 13.54%, rgba(244, 122, 122, 0.93) 100%)"
            />
            <div class="w-16 h-16 rounded-full bg-[#FAD4B5]" />
            <div class="w-16 h-16 rounded-full bg-[#F47A7A]" />
            <div class="w-16 h-16 rounded-full bg-[#FAB5B5]" />
          </div>
          <div
            id="gallery-420fa789-8aea-4206-b14e-f199575e6b85"
            class="relative"
          >
            <a
              class="block w-max"
              href="/image/087b41e7eb7ac31a9d1a69c5a9d3ddec.png"
              data-pswp-width="2480"
              data-pswp-height="1754"
              target="_blank"
              {...{
                "aria-label": i18n.t("661cce83-309e-4b6e-9e24-1ee2c89dcd68"),
              }}
            >
              <Image
                src="/image/087b41e7eb7ac31a9d1a69c5a9d3ddec.jpg"
                width={1132}
                height={800}
                className="w-[565px]"
              />
            </a>
            <a
              class="block w-max -mt-28 ml-auto"
              href="/image/d14b6b2117018705636b39102ab79fa4.png"
              data-pswp-width="2480"
              data-pswp-height="1754"
              target="_blank"
              {...{
                "aria-label": i18n.t("c694e37f-b13d-4c4e-99b7-43fd8a995476"),
              }}
            >
              <Image
                src="/image/d14b6b2117018705636b39102ab79fa4.jpg"
                width={849}
                height={600}
                className="w-[424px]"
              />
            </a>
          </div>
        </div>
        <div class="flex gap-2.5 max-w-[802px]">
          <a
            href="#"
            class="border-1 border-gray-800 border-1 border-gray-800 border-opacity-[0.1] hover:border-opacity-[0.2]"
            {...{
              "aria-label": i18n.t("1789e6ef-d02a-43a6-9cc4-3e472acd9e74"),
            }}
            target="_blank"
          >
            <icons.Figma />
          </a>
          <Button
            text={i18n.t("251edcbf-71a7-406f-9b16-46fd1ddeda9c")}
            data={{
              onclick:
                "galleryOpen('gallery-420fa789-8aea-4206-b14e-f199575e6b85')",
            }}
          />
        </div>
      </div>
      <div class="grid gap-6 text-2xl max-w-[753px]">
        <span>{i18n.t("344ce3b2-b35d-48ca-9ccc-d856e8be6542")}</span>
        <span>{i18n.t("2e29eec9-fe67-46c0-9059-f5e114b8fd2b")}</span>
      </div>
    </div>
  );
};
