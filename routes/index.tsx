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
            src="10d52be6-0587-481c-a50e-58b67b0e9d93.png"
            alt="Красивый трехмерный куб разваливающийся на части"
            isLazy={false}
            width={1486}
            height={1388}
            showAvif={false}
            className="absolute -bottom-8 right-0 w-[800px]"
          />
        </div>
      </header>
      <section id="content" class="py-20 bg-white">
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
      <section id="cases" class="py-20 bg-white">
        <div class="container">
          <div class="relative w-max mb-14">
            <h1 class="text-3xl font-extralight">Кейсы</h1>
            <div class="absolute bottom-0 right-0 -left-96 border-b-2 border-red" />
          </div>
          <div class="grid gap-y-8">
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
            <p class="text-2xl">
              Задача: Редизайн сайта на основе брендбука.
              <br />
              <br />
              Описание: Реальный проект. Корпоративный сайт с элементами
              интернет-магазина.
              <br />
              Ознакомиться с работой можно по&nbsp;
              <a href="https://tehmet.su/" class="text-red" target="_blank">
                ссылке
              </a>
            </p>
          </div>
          <CaseTitle order={2} text="Лендинг" />
          <CaseTitle order={3} text="3D моделирование" />
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
