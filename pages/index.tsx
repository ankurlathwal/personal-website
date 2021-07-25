import Head from 'next/head'
import {GiHighFive} from 'react-icons/gi';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankur Lathwal | Full Stack Developer</title>
        <meta name="description" content="Ankur Lathwal personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container laptop:wrapper'>
        <h1 className='font-bold flex items-baseline justify-center'><span>Welcome to my world!</span><GiHighFive /></h1>
        <div className='font-regular text-center'>My name is Ankur Lathwal and I am a Full Stack Developer based in Melbourne, Australia.</div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
