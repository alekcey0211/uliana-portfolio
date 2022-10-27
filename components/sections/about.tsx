import { Image } from "../image.tsx";

export const About = () => {
  return (
    <section id="about" class="py-20 bg-grey-6">
      <div class="container">
        <div class="relative w-max mb-14">
          <h2 class="text-3xl font-extralight">Обо мне</h2>
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
            <span class="text-xl xl:text-2xl text-grey-2">
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
            </span>
            <div class="flex items-center gap-x-24 text-2xl text-red :children:hover:underline">
              <a href="#">Resume</a>
              <a href="#footer">Contacts</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
