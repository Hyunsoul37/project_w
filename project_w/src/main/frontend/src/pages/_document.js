import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <div id="Modalroot"></div>
        <Main />
        <div id="BackdropRoot"></div>
        <NextScript />
      </body>
    </Html>
  );
}
