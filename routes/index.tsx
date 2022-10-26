import { HeadElement } from "../components/head.tsx";
import { Image } from "../components/image.tsx";
import { PageProps } from "$fresh/server.ts";
import { icons } from "../components/icons.tsx";
import { Button } from "../components/button.tsx";
import ScrollToTop from "../islands/ScrollToTop.tsx";
import AutoScrollImage from "../islands/AutoScrollImage.tsx";

const CaseTitle = ({ order, text }: { order: number; text: string }) => {
  return (
    <div class="-ml-10 flex gap-x-2 items-baseline">
      <span class="text-9xl text-grey-4">
        {order.toString().padStart(2, "0")}
      </span>
      <span class="text-3xl text-red uppercase">{text}</span>
    </div>
  );
};

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  const links = [
    { link: "#about", name: "About" },
    { link: "#cases", name: "Cases" },
    { link: "#contact", name: "Contacts" },
  ];
  return (
    <>
      <HeadElement title="Портфолио" url={url} />
      <header class="gradient-1">
        <div class="relative container h-[800px] grid grid-rows-[auto_1fr] py-20 text-white">
          <nav class="flex gap-20">
            {links.map(({ link, name }) => (
              <a href={link} class="px-2 text-xl">
                {name}
              </a>
            ))}
          </nav>
          <div class="grid content-center">
            <h1 class="text-6xl">Portfolio</h1>
            <h2 class="text-2xl">Web-designer Ezhova Ulyana</h2>
          </div>
          <Image
            src="/image/2ef77200ef94e61c0855893855d5e3b7.png"
            alt="Красивый трехмерный куб разваливающийся на части"
            isLazy={false}
            width={699}
            height={663}
            className="absolute bottom-8 right-0 w-[600px]"
          />
        </div>
      </header>
      <section id="content" class="py-20">
        <div class="container">
          <div class="relative w-max mb-28">
            <h1 class="text-3xl font-extralight">Cодержание</h1>
            <div class="absolute bottom-0 right-0 -left-96 border-b-2 border-red" />
          </div>
          <div class="grid grid-cols-5 gap-9">
            <a
              href="#corporate-website"
              class="grid justify-items-center content-start gap-y-3 py-16 hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="/image/0b53eb00-d156-472c-8ae9-6ad43cf6066d.jpg"
                width={446}
                height={1014}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">Корпоративный сайт</span>
            </a>
            <a
              href="#landing-page"
              class="grid justify-items-center content-start gap-y-3 hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="/image/5c75b2bd-436c-4cf8-bbac-40bf3c51385d.jpg"
                width={446}
                height={1014}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">Лендинг</span>
            </a>
            <a
              href="#3d-modeling"
              class="grid justify-items-center content-start gap-y-3 self-end hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="/image/2521dcea-dd4a-40d5-80ed-d5e49e9f69b0.jpg"
                width={446}
                height={776}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">3D Моделирование</span>
            </a>
            <a
              href="#graphic-design"
              class="grid justify-items-center content-start gap-y-3 hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="/image/49225d18-0abf-4be4-ab35-b8663a4eb695.jpg"
                width={446}
                height={1014}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">Графический дизайн</span>
            </a>
            <a
              href="#interface-design"
              class="grid justify-items-center content-start gap-y-3 py-16 hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="/image/7ef3367e-5d52-4172-b0a7-3bc2cdf584f2.jpg"
                width={446}
                height={1014}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">Дизайн интерфейсов</span>
            </a>
          </div>
        </div>
      </section>
      <section id="about" class="py-20 bg-grey-6">
        <div class="container">
          <div class="relative w-max mb-14">
            <h1 class="text-3xl font-extralight">Обо мне</h1>
            <div class="absolute bottom-0 right-0 -left-96 border-b-2 border-red" />
          </div>
          <div class="grid grid-cols-[330px_1fr] gap-x-20">
            <Image
              src="/image/fd14c40717264b8ea1b1e46ba74d547d.jpg"
              width={630}
              height={745}
              class="rounded-full"
            />
            <div class="grid gap-y-10">
              <div class="text-2xl text-grey-2">
                Привет!
                <br />
                Меня зовут Ульяна.
                <br />
                Ищу удаленную работу в дружном коллективе.
                <br />
                <br />
                Я создаю дизайны сайтов, лендингов и мобильных приложений.
                <br />
                Успела полюбить свою новую профессию и рада учится новому.
                <br />
                <br />
                В веб-дизайне я могу реализовывать свои идеи и делать
                <br />
                жизнь других людей приятнее и удобнее.
                <br />
              </div>
              <div class="flex items-center gap-x-24 text-2xl text-red :children:hover:underline">
                <a href="#">Resume</a>
                <a href="#">Contacts</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cases" class="py-20 overflow-hidden">
        <div class="container">
          <div class="relative w-max mb-14">
            <h1 class="text-3xl font-extralight">Кейсы</h1>
            <div class="absolute bottom-0 right-0 -left-96 border-b-2 border-red" />
          </div>
          <div id="corporate-website" class="grid gap-y-8 mb-14">
            <CaseTitle order={1} text="Корпоративный сайт" />
            <div class="flex gap-x-9 items-end">
              <div class="relative flex gap-x-16 gradient-1 p-12 w-max overflow-hidden">
                <div class="grid content-start gap-y-2.5">
                  <div class="w-16 h-16 rounded-full bg-[#9C9EA8]" />
                  <div class="w-16 h-16 rounded-full bg-[#0089CC]" />
                  <div class="w-16 h-16 rounded-full bg-[#0A529A]" />
                  <div class="w-16 h-16 rounded-full bg-[#39446B]" />
                </div>
                <a
                  class="gallery-open -rotate-[20.1deg] translate-y-8 origin-top-right"
                  href="/image/ac388fcf-5a6f-4413-aa7c-8eb3f2c5ca9a.png"
                  data-pswp-width="3600"
                  data-pswp-height="16404"
                  target="_blank"
                >
                  <Image
                    src="/image/c59a320d-728a-458e-9e36-bb75eac4c2ec.jpg"
                    width={1920}
                    height={1644}
                    className="w-[640px]"
                  />
                </a>
              </div>
              <Button
                className="gallery-open"
                text="Подробнее"
                icon={<icons.ArrowRight />}
                href="/image/ac388fcf-5a6f-4413-aa7c-8eb3f2c5ca9a.png"
                target="_blank"
                data={{
                  "data-pswp-width": "3600",
                  "data-pswp-height": "16404",
                }}
              />
            </div>
            <div class="grid text-2xl">
              <span class="mb-6">
                Задача: Редизайн сайта компании "Техмет Урал" на основе брендбука.
              </span>
              <span>
                Описание: Реальный проект. Корпоративный сайт с элементами
                интернет-магазина.
              </span>
              <span>
                Ознакомиться с работой можно по&nbsp;
                <a href="https://tehmet.su/" class="text-red" target="_blank">
                  ссылке
                </a>
              </span>
            </div>
          </div>
          <div id="landing-page" class="relative grid gap-y-8 mb-14">
            <div class="absolute -z-10 inset-y-0 -inset-x-[9999px] gradient-1" />
            <CaseTitle order={2} text="Лендинг" />
            <div class="flex gap-x-9 items-end">
              <div class="relative flex gap-x-[112px] bg-white w-max overflow-hidden">
                <div class="grid content-start gap-y-2.5 p-12">
                  <div
                    class="w-16 h-16 rounded-full"
                    style="background: linear-gradient(180deg, #EC656D 0%, #EF914F 99.99%, rgba(239, 145, 79, 0) 100%, rgba(239, 145, 79, 0) 100%, #EF914F 100%)"
                  />
                  <div class="w-16 h-16 rounded-full bg-[#DBEBD4]" />
                  <div class="w-16 h-16 rounded-full bg-[#F1F7FA]" />
                  <div class="w-16 h-16 rounded-full bg-[#B3B3B3]" />
                </div>
                <div
                  id="gallery-1e3e0c0d-89b7-464c-823d-fdd5647e1cc9"
                  class="relative pl-[80px]"
                >
                  <a
                    class="block w-max absolute left-0 top-[80px]"
                    href="/image/dae5af52a61694b49b7f6753ea710f45.png"
                    data-pswp-width="1024"
                    data-pswp-height="2650"
                    target="_blank"
                  >
                    <Image
                      src="/image/dae5af52a61694b49b7f6753ea710f45.jpg"
                      width={1024}
                      height={1652}
                      className="w-[386px]"
                    />
                  </a>
                  <a
                    class="block w-max"
                    href="/image/cce8a78dcac310d1c7dcc7ba020b3650.png"
                    data-pswp-width="1440"
                    data-pswp-height="3275"
                    target="_blank"
                  >
                    <Image
                      src="/image/cce8a78dcac310d1c7dcc7ba020b3650.jpg"
                      width={1440}
                      height={2211}
                      className="w-[440px]"
                    />
                  </a>
                </div>
              </div>
              <Button
                text="Подробнее"
                icon={<icons.ArrowRight />}
                data={{
                  onclick:
                    "galleryOpen('gallery-1e3e0c0d-89b7-464c-823d-fdd5647e1cc9')",
                }}
              />
            </div>
            <div class="grid text-2xl">
              <span class="mb-6">
                Задача: Создать лендинг для компании каршеринга с адаптивом для
                планшета
              </span>
              <span>Описание: Учебный проект.</span>
            </div>
          </div>
          <div class="relative grid gap-y-8 mb-14">
            <div class="flex gap-x-9 items-end">
              <div
                id="gallery-d15f5b36-bf22-4332-8de7-83c2f9c98a7f"
                class="relative flex bg-grey-5 w-max overflow-hidden"
              >
                <div class="grid content-start gap-y-2.5 p-12">
                  <div class="w-16 h-16 rounded-full bg-[#D06401]" />
                  <div class="w-16 h-16 rounded-full bg-[#4968E3]" />
                  <div class="w-16 h-16 rounded-full bg-[#8A9ADE]" />
                  <div class="w-16 h-16 rounded-full bg-[#201F1F]" />
                </div>
                <a
                  class="block w-max mt-20"
                  href="/image/506cf3302231ebfdf0581b9811f38369.png"
                  data-pswp-width="1280"
                  data-pswp-height="1573"
                  target="_blank"
                >
                  <Image
                    src="/image/506cf3302231ebfdf0581b9811f38369.jpg"
                    width={1273}
                    height={1164}
                    className="w-[650px]"
                  />
                </a>
              </div>
              <Button
                text="Подробнее"
                icon={<icons.ArrowRight />}
                data={{
                  onclick:
                    "galleryOpen('gallery-d15f5b36-bf22-4332-8de7-83c2f9c98a7f')",
                }}
              />
            </div>
            <div class="grid text-2xl">
              <span class="mb-6">
                Задача: Создать отзывчивый сайт для клуба любителей велосипедов
              </span>
              <span>Описание: Учебный проект.</span>
            </div>
          </div>
          <div id="3d-modeling" class="grid gap-y-8 mb-14">
            <CaseTitle order={3} text="3D моделирование" />
            <div class="relative grid grid-cols-[1fr_1fr] gap-x-24 pl-24 pr-8 pt-36 pb-4">
              <div class="absolute -z-10 inset-y-0 left-0 -right-[9999px] gradient-1" />
              <div class="grid content-between gap-y-16">
                <Image
                  src="/image/c71053d57898d9cc8a6187382c4fbe39.png"
                  width={612}
                  height={561}
                  className="w-full h-full max-w-[530px] mx-auto object-contain object-center aspect-square"
                />
                <span class="text-2xl text-grey-3 text-center">
                  Композиция с эффектом вращения
                </span>
              </div>
              <div class="grid content-between gap-y-16">
                <Image
                  src="/image/2ef77200ef94e61c0855893855d5e3b7.png"
                  width={699}
                  height={663}
                  className="w-full h-full max-w-[530px] mx-auto object-contain object-center aspect-square"
                />
                <span class="text-2xl text-grey-3 text-center">
                  Разбиение объекта на фрагменты
                </span>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_1fr] gap-x-24 pl-24 pr-8 pt-36 pb-4">
              <div class="grid content-between gap-y-16">
                <Image
                  src="/image/37c3cd914a91b42aa972d754db2d8817.png"
                  width={644}
                  height={634}
                  className="w-full h-full max-w-[530px] mx-auto object-contain object-center aspect-square"
                />
                <span class="text-2xl text-grey-3 text-center">
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
                <span class="text-2xl text-grey-3 text-center">
                  Деформация объектов в композиции
                </span>
              </div>
            </div>
            <div class="grid text-2xl">
                <span class="mb-6">
                Задача: Создала свою модель (логотип/элемент брендинга) для фестиваля фигурного катания с использованием Arnold Render.
                  <br/>
Практиковалась в работе с рендером, светом и материалами в 3D моделировании.
              </span>
              <span>Описание: Модели созданы в Cinema 4D.</span>
            </div>
          </div>
          <div id="graphic-design" class="grid gap-y-8 mb-14">
            <CaseTitle order={4} text="Графический дизайн" />
            <div class="flex gap-x-9 items-end">
              <div class="relative flex gap-x-[82px] bg-white w-max overflow-hidden bg-grey-5 p-12">
                <div class="grid content-start gap-y-2.5">
                  <div
                    class="w-16 h-16 rounded-full"
                    style="background: linear-gradient(180deg, #CDCDCD 13.54%, rgba(244, 122, 122, 0.93) 100%)"
                  />
                  <div class="w-16 h-16 rounded-full bg-[#FAD4B5]" />
                  <div class="w-16 h-16 rounded-full bg-[#F47A7A]" />
                  <div class="w-16 h-16 rounded-full bg-[#FAB5B5]" />
                </div>
                <div
                  id="gallery-420fa789-8aea-4206-b14e-f199575e6b85"
                  class="relative"
                >
                  <a
                    class="block w-max"
                    href="/image/087b41e7eb7ac31a9d1a69c5a9d3ddec.png"
                    data-pswp-width="2480"
                    data-pswp-height="1754"
                    target="_blank"
                  >
                    <Image
                      src="/image/087b41e7eb7ac31a9d1a69c5a9d3ddec.jpg"
                      width={1132}
                      height={800}
                      className="w-[565px]"
                    />
                  </a>
                  <a
                    class="block w-max -mt-28 ml-auto"
                    href="/image/d14b6b2117018705636b39102ab79fa4.png"
                    data-pswp-width="2480"
                    data-pswp-height="1754"
                    target="_blank"
                  >
                    <Image
                      src="/image/d14b6b2117018705636b39102ab79fa4.jpg"
                      width={849}
                      height={600}
                      className="w-[424px]"
                    />
                  </a>
                </div>
              </div>
              <Button
                text="Подробнее"
                icon={<icons.ArrowRight />}
                data={{
                  onclick:
                    "galleryOpen('gallery-420fa789-8aea-4206-b14e-f199575e6b85')",
                }}
              />
            </div>
            <div class="grid text-2xl">
              <span class="mb-6">
                Задача: Создать дизайн информационного буклета с карвинг композициями. Подготовить макет к печати.
              </span>
              <span>Описание: Рабочий реализованный проект.</span>
            </div>
            {/* <div class="flex gap-x-24 pt-10 pb-4">
              <div class="grid grid-rows-[500px] justify-items-center gap-y-16">
                <Image
                  src="/image/6f1f68ee31c17554679ec893a49f5718.png"
                  width={1059}
                  height={1277}
                  className="w-auto h-full"
                />
              </div>
            </div> */}
          </div>
          <div id="interface-design" class="grid gap-y-8 mb-14">
            <CaseTitle order={5} text="Дизайн интерфейса" />
            <div class="flex gap-x-9 items-end">
              <div
                id="gallery-a5cc5b0e-c309-42ce-917b-ca5e253bdb69"
                class="relative flex gap-x-4 bg-grey-5 w-max overflow-hidden"
              >
                <div class="grid content-start gap-y-2.5 p-12">
                  <div
                    class="w-16 h-16 rounded-full"
                    style="background: linear-gradient(180deg, #FFCC00 29.17%, #FFA400 65.62%);"
                  />
                  <div
                    class="w-16 h-16 rounded-full"
                    style="background: linear-gradient(180deg, #FF9900 46.35%, rgba(5, 5, 5, 0.89) 95.31%);"
                  />
                  <div class="w-16 h-16 rounded-full bg-black" />
                  <div class="w-16 h-16 rounded-full bg-[#858585]" />
                </div>
                <a
                  class="block w-max mt-20"
                  href="/image/5397dc61b9a8af420f8acd38f6ec57b9.png"
                  data-pswp-width="1440"
                  data-pswp-height="1308"
                  target="_blank"
                >
                  <Image
                    src="/image/5397dc61b9a8af420f8acd38f6ec57b9.jpg"
                    width={1440}
                    height={1308}
                    className="w-[660px]"
                  />
                </a>
              </div>
              <Button
                text="Подробнее"
                icon={<icons.ArrowRight />}
                data={{
                  onclick:
                    "galleryOpen('gallery-a5cc5b0e-c309-42ce-917b-ca5e253bdb69')",
                }}
              />
            </div>
            <div class="grid text-2xl mb-24">
              <span class="max-w-[830px] mb-6">
                Задача: Создать дизайн интерфейса для ведения базы данных
                пилотного проекта компании Роснефть в соответствии с брендбуком.
                </span>
              <span>
                Описание: нереализованный проект.
              </span>
            </div>
            <div class="flex gap-x-9 items-end">
              <div
                id="gallery-e98834a4-bae3-4d4b-86f2-45aedbbe4866"
                class="relative flex gap-x-4 gradient-1 w-max overflow-hidden pr-12"
              >
                <div class="grid content-start gap-y-2.5 p-12">
                  <div class="w-16 h-16 rounded-full bg-[#0058A3]" />
                  <div class="w-16 h-16 rounded-full bg-white" />
                  <div class="w-16 h-16 rounded-full bg-[#DFDFDF]" />
                  <div class="w-16 h-16 rounded-full bg-black" />
                </div>
                <div class="relative pt-3 pr-16 mr-8">
                  <a
                    class="block w-max border-t-1 border-l-1 border-r-1 border-grey-3"
                    href="/image/9fcd4621-bb75-4be5-a346-872c27706ac8.png"
                    data-pswp-width="879"
                    data-pswp-height="4096"
                    target="_blank"
                  >
                    <Image
                      src="/image/4f3faee47e9313e0e9d7e9a6346cb2cb.jpg"
                      width={879}
                      height={1843}
                      className="w-[322px]"
                    />
                  </a>
                  <a
                    class="block w-max absolute bottom-0 right-0 border-t-1 border-l-1 border-r-1 border-grey-3"
                    href="/image/7b8899d0-f31d-416a-9aeb-cc760884fffe.png"
                    data-pswp-width="632"
                    data-pswp-height="4096"
                    target="_blank"
                  >
                    <Image
                      src="/image/d7fe4f682a857b4c383ce78fc6b8867e.jpg"
                      width={632}
                      height={1373}
                      className="w-[231px]"
                    />
                  </a>
                </div>
                <a
                  href="/image/9bd12f11-faba-42dd-8317-0ee245d4534b.png"
                  data-pswp-width="431"
                  data-pswp-height="4096"
                  target="_blank"
                >
                  <AutoScrollImage
                    containerHeight="640px"
                    imageProps={{
                      src: "/image/9bd12f11-faba-42dd-8317-0ee245d4534b.jpg",
                      width: 431,
                      height: 4096,
                      className:
                        "w-[158px] border-1 border-grey-3 max-h-[9999px]",
                    }}
                  />
                </a>
              </div>
              <Button
                text="Подробнее"
                icon={<icons.ArrowRight />}
                data={{
                  onclick:
                    "galleryOpen('gallery-e98834a4-bae3-4d4b-86f2-45aedbbe4866')",
                }}
              />
            </div>
            <div class="grid text-2xl max-w-[830px]">
              <span class="mb-6">
                Задача: Создание макета карточки товара из интернет-магазина
                IKEA в Figma разрешение 1440px, 375px, 768px.
              </span>
              <span>
                Описание: Учебная работа. Повтор макета существующего ресурса.
              </span>
            </div>
          </div>
        </div>
      </section>
      <footer class="gradient-1 relative overflow-hidden">
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
              </ul>
            </div>
            <div class="grid gap-y-8 text-center">
              <span class="text-3xl underline">Резюме</span>
            </div>
            <div class="grid gap-y-8 text-right">
              <span class="text-3xl underline">Дипломы</span>
            </div>
          </div>
          <div>
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
          src="/image/2ef77200ef94e61c0855893855d5e3b7.png"
          alt="Красивый трехмерный куб разваливающийся на части"
          width={699}
          height={663}
          className="absolute -bottom-20 -right-28 w-[600px]"
        />
      </footer>
      <ScrollToTop />
    </>
  );
}
