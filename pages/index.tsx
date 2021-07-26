import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankur Lathwal | Full Stack Developer</title>
        <meta name="description" content="Ankur Lathwal personal website" />
        <link rel="icon" href="/favicons/favicon-rounded.ico" />
      </Head>
      <main className="container laptop:wrapper">
        <div className="mt-32 border rounded border-primary p-16 flex justify-center gap-32">
          <div className="relative h-96 w-96">
            <Image
              className="rounded-full"
              src="/images/dp.jpeg"
              alt="Ankur Lathwal"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div>
            <h1 className="font-bold text-40">
              <span>Welcome to my world!&#128075;</span>
            </h1>
            <div className="font-regular text-center">
              My name is Ankur Lathwal and I am a Full Stack Developer based in
              Melbourne, Australia.
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
