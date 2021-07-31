import Head from "next/head";
import Intro from "@components/Intro";
import Nav from "@components/Layout/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankur Lathwal | Full Stack Developer</title>
        <meta name="description" content="Ankur Lathwal personal website" />
        <link rel="icon" href="/favicons/favicon-rounded.ico" />
      </Head>
      <section>
        <Intro />
      </section>
    </div>
  );
}
