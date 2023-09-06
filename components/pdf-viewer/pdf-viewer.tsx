import {
  ArrowLeftIcon,
  ArrowRightIcon,
  AttachmentIcon,
  DownloadIcon,
} from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [renderNav, setRenderNav] = useState(false);
  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
    setRenderNav(true);
  }

  const options = {
    cMapUrl: "/cmaps/",
    standardFontDataUrl: "/standard_fonts/",
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Flex>
        <Heading as={"h1"} size={"lg"}>
          <AttachmentIcon></AttachmentIcon> Resume - Ankur Lathwal
        </Heading>
        <Spacer />
        <Button
          rightIcon={<DownloadIcon />}
          variant={"outline"}
          colorScheme="brand"
          type="submit"
          onClick={() => {
            window.open("./Resume - Ankur Lathwal.pdf");
          }}
        >
          Download
        </Button>
      </Flex>
      <Center>
        <Document
          file="./Resume - Ankur Lathwal.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          <Page
            pageNumber={currentPage}
            renderTextLayer={false}
            renderAnnotationLayer={true}
            scale={1.5}
          />
        </Document>
      </Center>
      {renderNav && (
        <>
          <Center>
            <Text>Page {currentPage}</Text>
          </Center>
          <Center py="10px">
            <ButtonGroup isAttached variant="outline" size="md">
              <IconButton
                aria-label="Previous Page"
                icon={<ArrowLeftIcon />}
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              />
              <IconButton
                aria-label="Next Page"
                icon={<ArrowRightIcon />}
                onClick={goToNextPage}
                disabled={currentPage === numPages}
              />
            </ButtonGroup>
          </Center>
        </>
      )}
    </>
  );
}
