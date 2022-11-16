import { Image } from "../../image.tsx";

export const Models3d = () => {
  return (
    <div class="grid gap-y-20">
      <div class="relative grid grid-cols-[1fr_1fr] gap-x-24 pl-24 pr-8 pt-36 pb-4">
        <div class="absolute -z-10 inset-y-0 left-0 -right-[9999px] gradient-1" />
        <div class="grid content-between gap-y-16">
          <Image
            src="/image/c71053d57898d9cc8a6187382c4fbe39.png"
            width={612}
            height={561}
            className="w-full h-full max-w-[530px] mx-auto object-contain object-center aspect-square"
          />
          <span class="text-2xl text-gray-3 text-center">
            Композиция с эффектом вращения
          </span>
        </div>
        <div class="grid content-between gap-y-16">
          <Image
            src="/image/2ef77200ef94e61c0855893855d5e3b7.png"
            width={686}
            height={653}
            className="w-full h-full max-w-[530px] mx-auto object-contain object-center aspect-square"
          />
          <span class="text-2xl text-gray-3 text-center">
            Разбиение объекта на фрагменты
          </span>
        </div>
      </div>
      <div class="grid grid-cols-[1fr_1fr] gap-x-24 pl-24 pr-8 pt-12 pb-4">
        <div class="grid content-between gap-y-16">
          <Image
            src="/image/37c3cd914a91b42aa972d754db2d8817.png"
            width={644}
            height={634}
            className="w-full h-full max-w-[530px] mx-auto object-contain object-center aspect-square"
          />
          <span class="text-2xl text-gray-3 text-center">
            Полигональное моделирование
          </span>
        </div>
        <div class="grid content-between gap-y-16">
          <Image
            src="/image/3fb0879262f7a55baa9c4d60d606aaaf.png"
            width={354}
            height={346}
            className="w-full h-full max-w-[530px] mx-auto object-contain object-center aspect-square"
          />
          <span class="text-2xl text-gray-3 text-center">
            Деформация объектов в композиции
          </span>
        </div>
      </div>
      <div class="grid gap-6 text-2xl">
        <span class="max-w-[1030px]">
          Проекты: Создание 3D моделей для брендинга.
        </span>
        <span>
          Описание: Композиции выполнены с использованием различных эффекторов и
          материалов.
          <br />
          Модели созданы в Cinema 4D с ArnoldRender.
        </span>
      </div>
    </div>
  );
};
