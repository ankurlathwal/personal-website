import { theme } from "@/chakra-theme";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="wrapper">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ChakraProvider>
    </>
  );
}
