import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Kush Dhingra</title>
        <meta name="description" content="Kush Dhingra" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"/>
      </Head>
      <body className="min-h-[100vh] bg-custom-bg text-white bg-block-pattern bg-[size:block-pattern] bg-[position:block-pattern]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

