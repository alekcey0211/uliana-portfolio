import { PageProps } from "$fresh/server.ts";

import ScrollToTop from "../islands/ScrollToTop.tsx";

import { HeadElement } from "../components/head.tsx";
import { Header } from "../components/header.tsx";
import { Footer } from "../components/footer.tsx";

import { Content } from "../components/sections/content.tsx";
import { About } from "../components/sections/about.tsx";
import { Cases } from "../components/sections/cases.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;

  return (
    <>
      <HeadElement title="Портфолио" url={url} />
      <Header />
      <Content />
      <About />
      <Cases />
      <Footer />
      <ScrollToTop />
    </>
  );
}
