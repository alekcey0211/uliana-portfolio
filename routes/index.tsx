import { HeadElement } from "../components/head.tsx";
import { Image } from "../components/image.tsx";
import { PageProps } from "$fresh/server.ts";
import { icons } from "../components/icons.tsx";
import { Button } from "../components/button.tsx";

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
            src="1c07e0592012839423ea9e1d2d40472b.png"
            alt="Красивый трехмерный куб разваливающийся на части"
            isLazy={false}
            width={1486}
            height={1388}
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
          <div class="flex gap-9">
            <a
              href="#"
              class="grid justify-items-center content-start gap-y-3 py-16 hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="0b53eb00-d156-472c-8ae9-6ad43cf6066d.jpg"
                width={446}
                height={1014}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">Корпоративный сайт</span>
            </a>
            <a
              href="#"
              class="grid justify-items-center content-start gap-y-3 hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="5c75b2bd-436c-4cf8-bbac-40bf3c51385d.jpg"
                width={446}
                height={1014}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">Лендинг</span>
            </a>
            <a
              href="#"
              class="grid justify-items-center content-start gap-y-3 self-end hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="2521dcea-dd4a-40d5-80ed-d5e49e9f69b0.jpg"
                width={446}
                height={776}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">3D Моделирование</span>
            </a>
            <a
              href="#"
              class="grid justify-items-center content-start gap-y-3 hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="49225d18-0abf-4be4-ab35-b8663a4eb695.jpg"
                width={446}
                height={1014}
                className="w-[223px] block"
              />
              <span class="text-xl font-extralight">Графический дизайн</span>
            </a>
            <a
              href="#"
              class="grid justify-items-center content-start gap-y-3 py-16 hover:children:scale-105 children:transition-transform"
            >
              <Image
                src="7ef3367e-5d52-4172-b0a7-3bc2cdf584f2.jpg"
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
              src="6885e49c-fa9d-40ee-a2d0-fedc11fcaf38.jpg"
              width={660}
              height={822}
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
                Я создаю дизайн сайтов и лендингов.
                <br />
                Больше всего мне нравится делать проекты с нуля.
                <br />
                Все мои работы выполнены с душой и любовью к своему делу.
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
          <div class="grid gap-y-8 mb-14">
            <CaseTitle order={1} text="Корпоративный сайт" />
            <div class="flex gap-x-9 items-end">
              <div class="relative flex gap-x-16 gradient-1 p-12 w-max overflow-hidden">
                <div class="grid content-start gap-y-2.5">
                  <div class="w-16 h-16 rounded-full bg-[#9C9EA8]" />
                  <div class="w-16 h-16 rounded-full bg-[#0089CC]" />
                  <div class="w-16 h-16 rounded-full bg-[#0A529A]" />
                  <div class="w-16 h-16 rounded-full bg-[#39446B]" />
                </div>
                <Image
                  src="c59a320d-728a-458e-9e36-bb75eac4c2ec.jpg"
                  width={1920}
                  height={1644}
                  className="w-[640px] -rotate-[20.1deg] translate-y-8 origin-top-right"
                />
              </div>
              <Button text="Подробнее" icon={<icons.ArrowRight />} />
            </div>
            <div class="grid text-2xl">
              <span class="mb-6">
                Задача: Редизайн сайта на основе брендбука.
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
          <div class="relative grid gap-y-8 mb-14">
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
                <div class="relative pl-[80px]">
                  <Image
                    src="dae5af52a61694b49b7f6753ea710f45.jpg"
                    width={1024}
                    height={1652}
                    className="absolute w-[386px] left-0 top-[80px]"
                  />
                  <Image
                    src="cce8a78dcac310d1c7dcc7ba020b3650.jpg"
                    width={1440}
                    height={2211}
                    className="w-[440px]"
                  />
                </div>
              </div>
              <Button text="Подробнее" icon={<icons.ArrowRight />} />
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
              <div class="relative flex bg-grey-5 w-max overflow-hidden">
                <div class="grid content-start gap-y-2.5 p-12">
                  <div class="w-16 h-16 rounded-full bg-[#D06401]" />
                  <div class="w-16 h-16 rounded-full bg-[#4968E3]" />
                  <div class="w-16 h-16 rounded-full bg-[#8A9ADE]" />
                  <div class="w-16 h-16 rounded-full bg-[#201F1F]" />
                </div>
                <Image
                  src="506cf3302231ebfdf0581b9811f38369.jpg"
                  width={1273}
                  height={1164}
                  className="w-[650px] pt-20"
                />
              </div>
              <Button text="Подробнее" icon={<icons.ArrowRight />} />
            </div>
            <div class="grid text-2xl">
              <span class="mb-6">
                Задача: Создать отзывчивый сайт для клуба любителей велосипедов
              </span>
              <span>Описание: Учебный проект.</span>
            </div>
          </div>
          <div class="grid gap-y-8 mb-14">
            <CaseTitle order={3} text="3D моделирование" />
            <div class="relative grid grid-cols-[1fr_1fr] gap-x-24 px-24 pt-36 pb-4">
              <div class="absolute -z-10 inset-y-0 left-0 -right-[9999px] gradient-1" />
              <div class="grid grid-rows-[500px_auto] justify-items-center gap-y-16">
                <Image
                  src="c71053d57898d9cc8a6187382c4fbe39.png"
                  width={612}
                  height={561}
                  className="w-auto h-full"
                />
                <span class="text-2xl text-grey-3">
                  Композиция с эффектом вращения
                </span>
              </div>
              <div class="grid grid-rows-[500px_auto] justify-items-center gap-y-16">
                <Image
                  src="1c07e0592012839423ea9e1d2d40472b.png"
                  width={684}
                  height={655}
                  className="w-auto h-full"
                />
                <span class="text-2xl text-grey-3">
                  Разбиение объекта на фрагменты
                </span>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_1fr] gap-x-24 px-16 pt-36 pb-4">
              <div class="grid grid-rows-[500px_auto] justify-items-center gap-y-16">
                <Image
                  src="37c3cd914a91b42aa972d754db2d8817.png"
                  width={644}
                  height={634}
                  className="w-auto h-full"
                />
                <span class="text-2xl text-grey-3">
                  Полигональное моделирование
                </span>
              </div>
              <div class="grid grid-rows-[500px_auto] justify-items-center gap-y-16">
                <Image
                  src="3fb0879262f7a55baa9c4d60d606aaaf.png"
                  width={354}
                  height={346}
                  className="w-auto h-full"
                />
                <span class="text-2xl text-grey-3">
                  Деформация объектов в композиции
                </span>
              </div>
            </div>
            <div class="grid text-2xl">
              <span>Описание: Модели созданы в Cinema 4D.</span>
            </div>
          </div>
          <CaseTitle order={4} text="Графический дизайн" />
          <CaseTitle order={5} text="Дизайн интерфейса" />
        </div>
      </section>
      <footer class="gradient-1-inverse">
        <div class="relative container h-[800px]" />
      </footer>
    </>
  );
}
