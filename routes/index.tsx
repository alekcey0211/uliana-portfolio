import { HeadElement } from "../components/head.tsx";
import { Image } from "../components/image.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  const links = [
    { link: "#about", name: "About" },
    { link: "#cases", name: "Cases" },
    { link: "#contact", name: "Contacts" },
  ];
  return (
    <div class="section-gradient relative h-[800px] grid grid-rows-[auto_1fr] pl-28 py-20 text-white">
      <HeadElement title="Портфолио" url={url} />
      <nav class="flex gap-20">
        {links.map(({ link, name }) => (
          <a href={link} class="px-2 text-xl">
            {name}
          </a>
        ))}
      </nav>
      <div class="grid content-center">
        <h1 class="text-6xl">Portfolio</h1>
        <h2 class="text-2xl">Web-disigner Ezhova Ulyana</h2>
      </div>
      <Image
        src="cube.png"
        alt="Красивый трехмерный куб разваливающийся на части"
        isLazy={false}
        width={1486}
        height={1388}
        showAvif={false}
        className="absolute -bottom-8 right-0 w-[800px]"
      />
    </div>
  );
}
