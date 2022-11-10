import { icons } from "./icons.tsx";
import { Image } from "./image.tsx";

export const Footer = () => {
  return (
    <footer id="footer" class="gradient-1 relative">
      <div class="container pt-20 pb-14">
        <div class="grid grid-cols-3 text-white mb-20">
          <div class="grid gap-y-8 items-start">
            <span class="text-3xl underline">Компетенции</span>
            <ul class="text-3xl grid gap-1">
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
              class="text-3xl underline"
              href="/files/CV Ezhova Uliana. Web-designer.pdf"
              target="_blank"
            >
              Резюме
            </a>
          </div>
          <div class="grid gap-y-8 items-start text-right">
            <a
              class="text-3xl underline"
              href="/image/5c8139a1ad804f6d90dd6f6b2a6516f3.jpg"
              data-pswp-width="1440"
              data-pswp-height="1308"
              target="_blank"
              {...{ "aria-label": "open image in fullscreen view" }}
            >
              Дипломы
            </a>
          </div>
        </div>
        <div id="contacts">
          <span class="block mb-8 text-3xl text-red">Контакты</span>
          <ul class="grid gap-y-4 text-3xl">
            <li class="flex items-center gap-4">
              <icons.Phone className="flex-shrink-0 text-grey-6" />
              <span>
                Телефон:&nbsp;<a href="tel:+381629328386">+381-62-9328-386</a>
              </span>
            </li>
            <li class="flex items-center gap-4">
              <icons.Whatsapp className="flex-shrink-0 text-grey-6" />
              <span>
                Whats App:&nbsp;
                <a href={`https://wa.me/+79162447626?text=""`}>
                  +7-916-244-76-26
                </a>
              </span>
            </li>
            <li class="flex items-center gap-4">
              <icons.Envelope className="flex-shrink-0 text-grey-6" />
              <span>
                e-mail:&nbsp;
                <a href="mailto:ulyana.nickolaeva@yandex.ru">
                  ulyana.nickolaeva@yandex.ru
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-grey-1 py-14">
        <div class="container text-white grid gap-4">
          <span class="text-6xl">Portfolio</span>
          <span class="text-2xl">Web-designer Ezhova Ulyana</span>
        </div>
      </div>
      <Image
        src="/image/2ef77200ef94e61c0855893855d5e3b7.png"
        alt="Красивый трехмерный куб разваливающийся на части"
        width={686}
        height={653}
        className="absolute bottom-8 right-10 w-[600px]"
      />
    </footer>
  );
};
