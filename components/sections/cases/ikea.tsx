import AutoScrollImage from "../../../islands/AutoScrollImage.tsx";
import { i18n } from "../../../shared/i18n.ts";
import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Ikea = () => {
  return (
    <div class="grid gap-8">
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
            <div class="relative block w-max border-t-1 border-l-1 border-r-1 border-gray-3">
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
                {...{
                  "aria-label": i18n.t("3e5e78f7-eb25-447b-9d39-ce42217a5329"),
                }}
              />
            </div>
            <div class="relative block w-max absolute bottom-0 right-0 border-t-1 border-l-1 border-r-1 border-gray-3">
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
                {...{
                  "aria-label": i18n.t("11ec35a0-440a-4059-94ef-c813100a7642"),
                }}
              />
            </div>
          </div>
          <a
            href="/image/9bd12f11-faba-42dd-8317-0ee245d4534b.png"
            data-pswp-width="431"
            data-pswp-height="4096"
            target="_blank"
            {...{
              "aria-label": i18n.t("3edd8405-a492-449c-92c3-5b5017911e47"),
            }}
          >
            <AutoScrollImage
              containerHeight="640px"
              imageProps={{
                src: "/image/9bd12f11-faba-42dd-8317-0ee245d4534b.jpg",
                width: 431,
                height: 4096,
                className: "w-[158px] border-1 border-gray-3 max-h-[9999px]",
              }}
            />
          </a>
        </div>
        <div class="flex gap-2.5">
          <a
            href="https://www.figma.com/proto/iZu5EKfo2B8brGXZ0RMYR1/IKEA?page-id=601%3A1283&node-id=601%3A1284&viewport=441%2C718%2C0.18&scaling=min-zoom"
            class="border-1 border-gray-800 border-1 border-gray-800 border-opacity-[0.1] hover:border-opacity-[0.2]"
            {...{
              "aria-label": i18n.t("2db923c0-89c7-455d-b353-eb048f5c751e"),
            }}
            target="_blank"
          >
            <icons.Figma />
          </a>
          <Button
            text={i18n.t("7768c92a-a21a-4e80-a1b7-681a5ccb6d34")}
            data={{
              onclick:
                "galleryOpen('gallery-e98834a4-bae3-4d4b-86f2-45aedbbe4866')",
            }}
          />
        </div>
      </div>
      <div class="grid gap-6 text-2xl max-w-[813px]">
        <span>{i18n.t("63fa46d9-25bd-4286-9cc0-ac31d8a5745b")}</span>
        <span>{i18n.t("f7eba3d1-808a-4391-bf8a-cc5fdbe0c3a3")}</span>
      </div>
    </div>
  );
};
