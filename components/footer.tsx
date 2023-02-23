import { i18n } from "../shared/i18n.ts";
import { icons } from "./icons.tsx";
import { Image } from "./image.tsx";

export const Footer = () => {
  return (
    <footer id="footer" class="gradient-1 relative">
      <div class="container pt-20 pb-14">
        <div class="grid grid-cols-3 mb-20">
          <div class="grid gap-y-8 items-start">
            <span class="text-3xl underline text-red">
              {i18n.t("32f89d6a-e993-4480-b702-62f10af768f4")}
            </span>
            <ul class="text-2xl grid gap-1 text-white">
              <li>Figma</li>
              <li>Cinema 4D</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              <li>CorelDRAW</li>
              <li>ProtoPie</li>
              <li>Miro</li>
            </ul>
          </div>
          <div class="grid gap-y-8 items-start text-center">
            <a
              class="text-3xl underline text-red"
              href="/files/CV Ezhova Uliana. Web-designer.pdf"
              target="_blank"
            >
              {i18n.t("05cee6a8-483c-4c56-a130-d68e1dfaffd6")}
            </a>
          </div>
          <div class="grid gap-y-8 items-start text-right">
            <a
              class="text-3xl underline text-red"
              href="/image/5c8139a1ad804f6d90dd6f6b2a6516f3.jpg"
              data-pswp-width="1440"
              data-pswp-height="1308"
              target="_blank"
              {...{
                "aria-label": i18n.t("094b9ce3-4e20-44ee-8a31-a7c8754a771c"),
              }}
            >
              {i18n.t("c7ecc7a6-730c-4b37-80cd-411159775e8a")}
            </a>
          </div>
        </div>
        <div id="contacts">
          <span class="block mb-8 text-3xl text-red">
            {i18n.t("16dc0806-17ef-4952-be6c-122b8e98463e")}
          </span>
          <ul class="grid gap-y-4 text-2xl">
            <li class="flex items-center gap-4">
              <icons.Phone className="flex-shrink-0 text-gray-6" />
              <span class="text-black">
                {i18n.t("2c10c49c-dba9-4f79-a035-7075ca3eae69")}:&nbsp;
                <a href="tel:+381629328386">+381 62 9328 386</a>
              </span>
            </li>
            <li class="flex items-center gap-4">
              <icons.Whatsapp className="flex-shrink-0 text-gray-6" />
              <span class="text-black">
                Whats App:&nbsp;
                <a href={`https://wa.me/+79162447626?text=""`}>
                  +7 (916) 244-76-26
                </a>
              </span>
            </li>
            <li class="flex items-center gap-4">
              <icons.Envelope className="flex-shrink-0 text-gray-6" />
              <span class="text-black">
                e-mail:&nbsp;
                <a href="mailto:ulyana.nickolaeva@yandex.ru">
                  ulyana.nickolaeva@yandex.ru
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-gray-1 py-14">
        <div class="container text-white grid gap-4">
          <span class="text-6xl">
            {i18n.t("0f004933-72e4-40c0-a18e-98a34deb1fc5")}
          </span>
          <span
            class="text-2xl"
            dangerouslySetInnerHTML={{
              __html: i18n.t("1e6a1ac3-c388-47ea-862b-95ca54776b8a"),
            }}
          />
        </div>
      </div>
      <Image
        src="/image/2ef77200ef94e61c0855893855d5e3b7.png"
        alt={i18n.t("707cda20-7aef-4ea5-8007-c32512ca8389")}
        width={686}
        height={653}
        className="absolute bottom-8 right-10 w-[600px]"
      />
    </footer>
  );
};
