import Head from "next/head";
// import { Inter } from "@next/font/google";

// components------------------------
import { Page } from "@/stories/Page";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Diet App</title>
        <meta name="description" content="Generated by Diet app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <p>hello</p>
      </Page>
    </>
  );
}
