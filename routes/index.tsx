import { PageProps } from "$fresh/server.ts";

import ScrollToTop from "../islands/ScrollToTop.tsx";

import { Footer } from "../components/footer.tsx";
import { HeadElement } from "../components/head.tsx";
import { Header } from "../components/header.tsx";

import { About } from "../components/sections/about.tsx";
import { Cases } from "../components/sections/cases/index.tsx";
import { Content } from "../components/sections/content.tsx";
import { i18n } from "../shared/i18n.ts";

export default function Home(ctx: PageProps) {
  const { url } = ctx;

  return (
    <>
      <HeadElement
        title={i18n.t("e487f62f-42f7-423e-8e7f-bfb6636c37b9")}
        url={url}
      />
      <Header />
      <Content />
      <About />
      <Cases />
      <Footer />
      <ScrollToTop ariaLabel={i18n.t("054edeb7-a676-4138-b509-a755b1069835")} />
    </>
  );
}
