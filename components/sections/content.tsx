import { i18n } from "../../shared/i18n.ts";
import { Image } from "../image.tsx";

const Item = ({
  href,
  title,
  className,
  image,
}: {
  href: string;
  title: string;
  className?: string;
  image: Parameters<typeof Image>[number];
}) => {
  return (
    <a
      href={href}
      class={`grid grid-cols-1 justify-items-center content-start gap-y-3 hover:children:scale-105 children:transition-transform ${className}`}
    >
      <Image className="max-w-full block" {...image} />
      <span
        class="text-xl font-extralight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </a>
  );
};

export const Content = () => {
  return (
    <section id="content" class="py-20 bg-white">
      <div class="container">
        <div class="relative w-max mb-28">
          <h2 class="text-3xl font-extralight text-section-title">
            {i18n.t("89f5ded1-2841-4ca0-a500-ab4373a48dda")}
          </h2>
          <div class="absolute bottom-0 right-0 -left-96 border-b-2 border-red" />
        </div>
        <div class="grid grid-cols-5 gap-9">
          <Item
            href="#corporate-website"
            title={i18n.t("19688695-7e40-4570-917b-646dbd0dfac3")}
            className="py-16"
            image={{
              src: "/image/0b53eb00-d156-472c-8ae9-6ad43cf6066d.jpg",
              width: 446,
              height: 1014,
            }}
          />
          <Item
            href="#landing-page"
            title={i18n.t("cf26947e-31f4-43e9-845a-9496ca38b01a")}
            image={{
              src: "/image/5c75b2bd-436c-4cf8-bbac-40bf3c51385d.jpg",
              width: 446,
              height: 1014,
            }}
          />
          <Item
            href="#3d-modeling"
            title={i18n.t("e7bca6ea-a978-4b0c-9cdc-fdc86e0fc273")}
            className="self-end"
            image={{
              src: "/image/2521dcea-dd4a-40d5-80ed-d5e49e9f69b0.jpg",
              width: 446,
              height: 776,
            }}
          />
          <Item
            href="#graphic-design"
            title={i18n.t("b6011c60-06ca-4810-bb19-33edced1d01a")}
            image={{
              src: "/image/49225d18-0abf-4be4-ab35-b8663a4eb695.jpg",
              width: 446,
              height: 1014,
            }}
          />
          <Item
            href="#interface-design"
            title={i18n.t("520b3974-d57d-449c-9d81-7b665e298655")}
            className="py-16"
            image={{
              src: "/image/7ef3367e-5d52-4172-b0a7-3bc2cdf584f2.jpg",
              width: 446,
              height: 1014,
            }}
          />
        </div>
      </div>
    </section>
  );
};
