import { icons } from "./icons.tsx";
import { Image } from "./image.tsx";

export const Footer = () => {
  return (
    <footer id="footer" class="gradient-1 relative">
      <div class="container pt-20 pb-14">
        <div class="grid grid-cols-3 text-white mb-20">
          <div class="grid gap-y-8">
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
          <div class="grid gap-y-8 text-center">
            <span class="text-3xl underline">Резюме</span>
          </div>
          <div class="grid gap-y-8 text-right">
            <span class="text-3xl underline">Дипломы</span>
          </div>
        </div>
        <div id="contacts">
          <span class="block mb-8 text-3xl text-red">Контакты</span>
          <ul class="grid gap-y-4 text-3xl">
            <li class="flex items-center gap-4">
              <icons.Phone className="flex-shrink-0 text-red" />
              <span>
                Телефон:&nbsp;<a href="tel:+381629328386">+381-62-9328-386</a>
              </span>
            </li>
            <li class="flex items-center gap-4">
              <icons.Whatsapp className="flex-shrink-0 text-red" />
              <span>
                Whats App:&nbsp;
                <a href={`https://wa.me/+79162447626?text=""`}>
                  +7-916-244-76-26
                </a>
              </span>
            </li>
            <li class="flex items-center gap-4">
              <icons.Envelope className="flex-shrink-0 text-red" />
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
        src="/image/db60cb2f411b46e1bec6c9912cfb50c9.png"
        alt="Красивый трехмерный куб разваливающийся на части"
        width={567}
        height={565}
        className="absolute bottom-0 right-0 w-[600px]"
      />
    </footer>
  );
};
