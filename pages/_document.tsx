import { Html, Head, Main, NextScript } from "next/document";
import { DarkModeProvider } from "../contexts/DarkModeContext";

export default function Document() {
  return (
    <Html>
      <title>Mark Grech</title>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-poppins">
        <DarkModeProvider darkMode={false}>
          <Main />
          <NextScript />
        </DarkModeProvider>
      </body>
    </Html>
  );
}
