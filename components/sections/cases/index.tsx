import { Bicycle } from "./bicycle.tsx";
import { Carsharing } from "./carsharing.tsx";
import { Carving } from "./carving.tsx";
import { Ikea } from "./ikea.tsx";
import { Models3d } from "./models-3d.tsx";
import { Rosneft } from "./rosneft.tsx";
import { Tehmet } from "./tehmet.tsx";

const Title = ({ order, text }: { order: number; text: string }) => {
  return (
    <div class="flex gap-x-2 items-baseline">
      <span class="text-9xl text-gray-4">
        {order.toString().padStart(2, "0")}
      </span>
      <span class="text-3xl text-red uppercase">{text}</span>
    </div>
  );
};

export const Cases = () => {
  return (
    <section id="cases" class="overflow-hidden pb-20">
      <div class="container">
        <div class="relative w-max pb-14 pt-20">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] bg-white" />
          <h2 class="text-3xl font-extralight text-section-title">Кейсы</h2>
          <div class="absolute bottom-14 right-0 -left-96 border-b-2 border-red" />
        </div>
        <div id="corporate-website" class="relative grid gap-y-8 pb-14">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] bg-white" />
          <Title order={1} text="Корпоративный сайт" />
          <Tehmet />
        </div>
        <div id="landing-page" class="relative grid gap-y-8 mb-6 py-8">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] gradient-1" />
          <Title order={2} text="Лендинг" />
          <Carsharing />
        </div>
        <div class="relative grid gap-y-8 mb-14 py-12">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] bg-white" />
          <Bicycle />
        </div>
        <div id="3d-modeling" class="grid gap-y-8 mb-14">
          <Title order={3} text="3D моделирование" />
          <Models3d />
        </div>
        <div id="graphic-design" class="grid gap-y-8 mb-14 pt-12">
          <Title order={4} text="Графический дизайн" />
          <Carving />
        </div>
        <div id="interface-design" class="relative pb-8 pt-12 grid gap-8 mb-14">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] bg-[#DDDDDD]" />
          <Title order={5} text="Дизайн интерфейса" />
          <Rosneft />
        </div>
        <div class="grid gap-y-8">
          <Ikea />
        </div>
      </div>
    </section>
  );
};
