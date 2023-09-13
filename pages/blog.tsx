import { Box, Center, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Ankur Lathwal | Full Stack Developer</title>
        <meta name="description" content="Resume of Ankur Lathwal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box py="80px">
          <Center>
            <Text>Page coming soon...</Text>
          </Center>
        </Box>
      </main>
    </>
  );
}
