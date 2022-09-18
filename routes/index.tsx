import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="style.css" />
      </Head>
      <div
        class="h-screen w-screen grid content-center pl-28 text-white"
        style="background: linear-gradient(180deg, #2B2A29 0%, #FFFFFF 100%)"
      >
        <h1 class="text-6xl">Portfolio</h1>
        <h2 class="text-2xl">Web-disigner Ezhova Ulyana</h2>
      </div>
    </>
  );
}
