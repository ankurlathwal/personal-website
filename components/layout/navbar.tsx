import { Box, Center, Divider, HStack, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <nav>
      <Center bg={"gray.100"}>
        <HStack
          spacing={"32px"}
          py={"16px"}
          color={"brand.primary"}
          fontSize={"2xl"}
        >
          <Box as="a" href="/">
            <Text>Home</Text>
          </Box>
          <Box as="a" href="/stack">
            <Text>Stack</Text>
          </Box>
          <Box as="a" href="/career-timeline">
            <Text>Career Timeline</Text>
          </Box>
          <Box as="a" href="/projects">
            <Text>Projects</Text>
          </Box>
          <Box as="a" href="/resume">
            <Text>Resume</Text>
          </Box>
          <Box as="a" href="/blog">
            <Text>Blog</Text>
          </Box>
        </HStack>
      </Center>
      <Center>
        <Divider />
      </Center>
    </nav>
  );
};
