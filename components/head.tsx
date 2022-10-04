import { Head } from "$fresh/runtime.ts";

export function HeadElement({
  description,
  image,
  title,
  url,
}: {
  url: URL;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="UTF-8" />
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      /> */}
      <meta name="viewport" content="width=1440" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url.hostname} />
      <meta property="twitter:url" content={url.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link rel="stylesheet" href="photoswipe/photoswipe.css" />
      <script type="module" src="app.js" />
    </Head>
  );
}
