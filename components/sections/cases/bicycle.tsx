import { i18n } from "../../../shared/i18n.ts";
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
              {...{
                "aria-label": i18n.t("f237a8ce-1d39-4c74-ae71-8f6df6f7f3e2"),
              }}
            />
          </div>
        </div>
        <div class="flex gap-2.5">
          <a
            href="https://www.figma.com/proto/87OhG7sOLyswloc7orD4bX/bicycle?page-id=0%3A1&node-id=1%3A5&viewport=954%2C436%2C0.62&scaling=min-zoom&starting-point-node-id=1%3A5"
            class="border-1 border-gray-800 border-1 border-gray-800 border-opacity-[0.1] hover:border-opacity-[0.2]"
            {...{
              "aria-label": i18n.t("439cc882-2331-4284-bc40-9d9417c431d3"),
            }}
            target="_blank"
          >
            <icons.Figma />
          </a>
          <Button
            text={i18n.t("9d5f68f4-133f-4d76-8f43-9765702ad32b")}
            data={{
              onclick:
                "galleryOpen('gallery-d15f5b36-bf22-4332-8de7-83c2f9c98a7f')",
            }}
          />
        </div>
      </div>
      <div class="grid gap-6 text-2xl max-w-[802px]">
        <span>{i18n.t("b3b6e9fc-b0a0-41da-a065-01d672d79cb5")}</span>
        <span>{i18n.t("c3dc5c3a-60c1-43a5-82ff-cd3e52637f32")}</span>
      </div>
    </div>
  );
};
