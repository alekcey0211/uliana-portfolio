import { i18n } from "../../../shared/i18n.ts";
import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Carsharing = () => {
  return (
    <div class="grid gap-8">
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
                height={1615}
                className="w-[386px]"
              />
              <a
                class="absolute inset-0"
                href="/image/dae5af52a61694b49b7f6753ea710f45.png"
                data-pswp-width="1024"
                data-pswp-height="2650"
                target="_blank"
                {...{
                  "aria-label": i18n.t("d4a71aeb-a81c-4eab-897a-4b240c1aa889"),
                }}
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
                {...{
                  "aria-label": i18n.t("ce8432ff-937f-4e4f-be8f-750f5efe186f"),
                }}
              />
            </div>
          </div>
        </div>
        <div class="flex gap-2.5">
          <a
            href="https://www.figma.com/proto/afa3IMww9XW81PUBefsV71/carshare-(Copy)?page-id=402%3A30&node-id=402%3A387&viewport=770%2C812%2C0.54&scaling=min-zoom"
            class="border-1 border-gray-800 border-1 border-gray-800 border-opacity-[0.1] hover:border-opacity-[0.2]"
            {...{
              "aria-label": i18n.t("66170f09-5fbe-4458-ae96-b6266fd3f7c9"),
            }}
            target="_blank"
          >
            <icons.Figma />
          </a>
          <Button
            text={i18n.t("f06e487c-0f68-412e-9ddc-083c9be95cdf")}
            data={{
              onclick:
                "galleryOpen('gallery-1e3e0c0d-89b7-464c-823d-fdd5647e1cc9')",
            }}
          />
        </div>
      </div>
      <div class="grid gap-6 text-2xl max-w-[812px]">
        <span>{i18n.t("4a854ade-aecd-497e-8582-19e2765f9f27")}</span>
        <span>{i18n.t("bbc0f290-314f-4d38-8a36-cd8d4f6c2292")}</span>
      </div>
    </div>
  );
};
