import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>Crossminton</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
