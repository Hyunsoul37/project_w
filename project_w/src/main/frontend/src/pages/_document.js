import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link href="/font/font.css" rel="stylesheet" />
        <meta
          name="google-site-verification"
          content="HC_-ZbJtY9NQHbgdTdF_Fz17JG1FcfR3YEm4kNTivdw"
        />
      </Head>

      <body>
        <div id="Modalroot"></div>
        <Main />
        <div id="BackdropRoot"></div>
        <NextScript />
      </body>
    </Html>
  );
}
