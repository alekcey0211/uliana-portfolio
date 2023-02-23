import { Bicycle } from "./bicycle.tsx";
import { Carsharing } from "./carsharing.tsx";
import { Carving } from "./carving.tsx";
import { Ikea } from "./ikea.tsx";
import { Models3d } from "./models-3d.tsx";
import { Rosneft } from "./rosneft.tsx";
import { Tehmet } from "./tehmet.tsx";
import { i18n } from "../../../shared/i18n.ts";

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
          <h2 class="text-3xl font-extralight text-section-title">
            {i18n.t("b1affba9-d306-4b02-9ac0-918680d19944")}
          </h2>
          <div class="absolute bottom-14 right-0 -left-96 border-b-2 border-red" />
        </div>
        <div id="corporate-website" class="relative grid gap-y-8 pb-14">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] bg-white" />
          <Title
            order={1}
            text={i18n.t("be7a69c2-14c2-4cdd-bd43-82819ceecd12")}
          />
          <Tehmet />
        </div>
        <div id="landing-page" class="relative grid gap-y-8 mb-6 py-8">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] gradient-1" />
          <Title
            order={2}
            text={i18n.t("47adbe56-fe5e-47e1-96ef-ee5c9fe33072")}
          />
          <Carsharing />
        </div>
        <div class="relative grid gap-y-8 mb-14 py-12">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] bg-white" />
          <Bicycle />
        </div>
        <div id="3d-modeling" class="grid gap-y-8 mb-14">
          <Title
            order={3}
            text={i18n.t("a55c2735-0355-401d-b2de-47710b31eae9")}
          />
          <Models3d />
        </div>
        <div id="graphic-design" class="grid gap-y-8 mb-14 pt-12">
          <Title
            order={4}
            text={i18n.t("c41af4b0-2b41-4926-8ee1-5f51511c215f")}
          />
          <Carving />
        </div>
        <div id="interface-design" class="relative pb-8 pt-12 grid gap-8 mb-14">
          <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] bg-[#DDDDDD]" />
          <Title
            order={5}
            text={i18n.t("bae493fe-c34a-45d0-bf41-0fd123ffbf90")}
          />
          <Rosneft />
        </div>
        <div class="grid gap-y-8">
          <Ikea />
        </div>
      </div>
    </section>
  );
};
