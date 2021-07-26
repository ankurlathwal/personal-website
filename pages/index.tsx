import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankur Lathwal | Full Stack Developer</title>
        <meta name="description" content="Ankur Lathwal personal website" />
        <link rel="icon" href="/favicons/favicon-rounded.ico" />
      </Head>
      <main className="container laptop:wrapper">
        <h1 className="font-bold text-40 flex items-baseline justify-center">
          <span>Welcome to my world!&#128075;</span>
        </h1>
        <div className="font-regular text-center">
          My name is Ankur Lathwal and I am a Full Stack Developer based in
          Melbourne, Australia.
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
