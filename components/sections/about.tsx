import { Image } from "../image.tsx";

export const About = () => {
  return (
    <section id="about" class="py-20 bg-gray-6">
      <div class="container">
        <div class="relative w-max mb-14">
          <h2 class="text-3xl font-extralight text-section-title">Обо мне</h2>
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
            <span class="text-xl xl:text-2xl">
              Привет!
              <br />
              Меня зовут Ульяна.
              <br />
              Ищу удаленную работу в дружном коллективе.
              <br />
              <br />
              Я создаю дизайны сайтов, лендингов и мобильных приложений.
              <br />
              Хорошо себя зарекомендовала в крупном проекте,
              <br />
              как профессионал, который слышит клиента.
              <br />
              <br />
              В веб-дизайне я могу реализовывать свои идеи и делать
              <br />
              жизнь других людей приятнее и удобнее.
              <br />
            </span>
            <div class="flex items-center gap-x-24 text-2xl text-red :children:hover:underline">
              <a
                href="/files/CV Ezhova Uliana. Web-designer.pdf"
                target="_blank"
              >
                Резюме
              </a>
              <a href="#contacts">Контакты</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
