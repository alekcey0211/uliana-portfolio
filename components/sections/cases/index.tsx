import { Image } from "../../image.tsx";
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
      <span class="text-9xl text-grey-3">
        {order.toString().padStart(2, "0")}
      </span>
      <span class="text-3xl text-red uppercase">{text}</span>
    </div>
  );
};

export const Cases = () => {
  return (
    <section id="cases" class="py-20 overflow-hidden">
      <div class="container">
        <div class="relative w-max mb-14">
          <h2 class="text-3xl font-extralight">Кейсы</h2>
          <div class="absolute bottom-0 right-0 -left-96 border-b-2 border-red" />
        </div>
        <div id="corporate-website" class="grid gap-y-8 mb-14">
          <Title order={1} text="Корпоративный сайт" />
          <Tehmet />
        </div>
        <div id="landing-page" class="relative grid gap-y-8 mb-6 py-8">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] gradient-1" />
          <Title order={2} text="Лендинг" />
          <Carsharing />
        </div>
        <div class="relative grid gap-y-8 mb-14">
          <Bicycle />
        </div>
        <div id="3d-modeling" class="grid gap-y-8 mb-14">
          <Title order={3} text="3D моделирование" />
          <Models3d />
        </div>
        <div id="graphic-design" class="grid gap-y-8 mb-14">
          <Title order={4} text="Графический дизайн" />
          <Carving />
        </div>
        <div id="interface-design" class="grid gap-y-8 mb-14">
          <Title order={5} text="Дизайн интерфейса" />
          <Rosneft />
          <Ikea />
        </div>
      </div>
    </section>
  );
};
