import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  Hide,
  Show,
  Square,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Stack",
    link: "/stack",
  },
  {
    label: "Career Timeline",
    link: "/career-timeline",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Resume",
    link: "/resume",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

export const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <nav>
      <Hide below="md">
        <Center bg={"gray.100"}>
          <HStack
            spacing={"32px"}
            py={"16px"}
            color={"brand.primary"}
            fontSize={"2xl"}
          >
            {navLinks.map((navItem) => (
              <Box key={navItem.link} as="a" href={navItem.link}>
                <Text>{navItem.label}</Text>
              </Box>
            ))}
          </HStack>
        </Center>
      </Hide>
      <Show below="md">
        <HStack
          color={"brand.primary"}
          fontSize={"2xl"}
          gap={"32px"}
          py="2px"
          bgColor={"gray.100"}
        >
          <Square
            as="button"
            size={"80px"}
            bg="transparent"
            ref={btnRef}
            onClick={onOpen}
          >
            <HamburgerIcon></HamburgerIcon>
          </Square>
          <Heading as={"h1"}>Ankur Lathwal</Heading>
        </HStack>
        <Drawer
          placement="left"
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent p="64px" bgColor={"gray.100"}>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack gap={"32px"}>
                {navLinks.map((navItem) => (
                  <Box key={navItem.link} as="a" href={navItem.link}>
                    <Text>{navItem.label}</Text>
                  </Box>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </nav>
  );
};
