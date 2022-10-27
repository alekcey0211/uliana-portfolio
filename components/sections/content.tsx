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
      <span class="text-xl font-extralight">{title}</span>
    </a>
  );
};

export const Content = () => {
  return (
    <section id="content" class="py-20">
      <div class="container">
        <div class="relative w-max mb-28">
          <h2 class="text-3xl font-extralight">Cодержание</h2>
          <div class="absolute bottom-0 right-0 -left-96 border-b-2 border-red" />
        </div>
        <div class="grid grid-cols-5 gap-9">
          <Item
            href="#corporate-website"
            title="Корпоративный сайт"
            className="py-16"
            image={{
              src: "/image/0b53eb00-d156-472c-8ae9-6ad43cf6066d.jpg",
              width: 446,
              height: 1014,
            }}
          />
          <Item
            href="#landing-page"
            title="Лендинг"
            image={{
              src: "/image/5c75b2bd-436c-4cf8-bbac-40bf3c51385d.jpg",
              width: 446,
              height: 1014,
            }}
          />
          <Item
            href="#3d-modeling"
            title="3D&nbsp;Моделирование"
            className="self-end"
            image={{
              src: "/image/2521dcea-dd4a-40d5-80ed-d5e49e9f69b0.jpg",
              width: 446,
              height: 776,
            }}
          />
          <Item
            href="#graphic-design"
            title="Графический дизайн"
            image={{
              src: "/image/49225d18-0abf-4be4-ab35-b8663a4eb695.jpg",
              width: 446,
              height: 1014,
            }}
          />
          <Item
            href="#interface-design"
            title="Дизайн интерфейсов"
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
