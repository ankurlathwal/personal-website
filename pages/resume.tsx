import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";

const PDFViewer = dynamic(() => import("../components/pdf-viewer/pdf-viewer"), {
  ssr: false,
});

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Ankur Lathwal | Full Stack Developer</title>
        <meta name="description" content="Resume of Ankur Lathwal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box py="80px">
          <PDFViewer />
        </Box>
      </main>
    </>
  );
}
