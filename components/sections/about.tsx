import { i18n } from "../../shared/i18n.ts";
import { Image } from "../image.tsx";

export const About = () => {
  return (
    <section id="about" class="py-20 bg-gray-6">
      <div class="container">
        <div class="relative w-max mb-14">
          <h2 class="text-3xl font-extralight text-section-title">
            {i18n.t("5bccc5e4-05b6-4c02-8af7-b8434fe80c66")}
          </h2>
          <div class="absolute bottom-0 right-0 -left-96 border-b-2 border-red" />
        </div>
        <div class="grid grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr] gap-x-20">
          <Image
            src="/image/c1f440eb66d383640e12735580f8ab8e.jpg"
            width={721}
            height={961}
            className="rounded-full aspect-square object-cover object-center"
          />
          <div class="grid gap-y-10">
            <p class="text-xl xl:text-2xl m-0 whitespace-break-spaces">
              {i18n.t("f9f8b818-6961-41c3-aebe-fcac3c5ced71")}
              <br />
              <br />
              {i18n.t("b8087681-2767-4f63-8717-c621eda65834")}
              <br />
              <br />
              {i18n.t("6d3b1ba3-f24a-4d21-a32f-20ba16955a10")}
            </p>
            <div class="flex items-center gap-x-24 text-2xl text-red :children:hover:underline">
              <a
                href="/files/CV Ezhova Uliana. Web-designer.pdf"
                target="_blank"
              >
                {i18n.t("0fe8a49c-187d-468a-a868-0b4261ec11f8")}
              </a>
              <a href="#contacts">
                {i18n.t("e0b2836a-ea2e-4d25-ba63-daf275ca69ed")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
