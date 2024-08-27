import React from "react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from "next/head";

export const OGHead = ({
  title,
  description,
  url,
  image,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
}) => {
  return (
    <Head>
      {/*Primary Meta Tags */}
      <title key="title">{title}</title>
      <meta key="meta:title" name="title" content={title} />
      <meta key="meta:description" name="description" content={description} />

      {/*/!*Open Graph / Facebook*!/*/}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={image} />

      {/*/!*Twitter*!/*/}
      <meta key="twitter:card" property="twitter:card" content="summary_large_image" />
      <meta key="twitter:url" property="twitter:url" content={url} />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta key="twitter:description" property="twitter:description" content={description} />
      <meta key="twitter:image" property="twitter:image" content={image} />

      {/*Android Color*/}
      <meta key="color" name="theme-color" content="#141414" />

      <link key="favicon" rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};
