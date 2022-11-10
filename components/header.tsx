import { Image } from "./image.tsx";

export const Header = () => {
  const links = [
    { link: "#about", name: "About" },
    { link: "#cases", name: "Cases" },
    { link: "#contacts", name: "Contacts" },
  ];

  return (
    <header class="gradient-1">
      <div class="relative container h-[800px] grid grid-rows-[auto_1fr] py-20 text-white">
        <nav class="flex gap-20">
          {links.map(({ link, name }) => (
            <a href={link} class="px-2 text-xl">
              {name}
            </a>
          ))}
        </nav>
        <div class="flex items-center justify-between gap-8">
          <h1 class="grid">
            <span class="text-6xl">Portfolio</span>
            <span class="text-2xl">Web-designer Ezhova&nbsp;Ulyana</span>
          </h1>
          <Image
            src="/image/2ef77200ef94e61c0855893855d5e3b7.png"
            alt="Красивый трехмерный куб разваливающийся на части"
            isLazy={false}
            width={686}
            height={653}
            className="w-[600px] translate-y-20"
          />
        </div>
      </div>
    </header>
  );
};
