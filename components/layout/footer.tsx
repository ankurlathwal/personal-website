import {
  Box,
  Center,
  Divider,
  HStack,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <footer>
      <Center>
        <Divider />
      </Center>
      <Center fontSize={"sm"}>
        <HStack py={"16px"} spacing={"32px"}>
          <Box>
            <Text>&copy; {new Date().getFullYear()} Ankur Lathwal.</Text>
          </Box>
          <Spacer />
          <Box>
            <Text>
              Created with ❤️ using{" "}
              <Link
                as={NextLink}
                href="https://nextjs.org/"
                target="_blank"
                isExternal
              >
                <u>Next.js</u>
              </Link>{" "}
              and{" "}
              <Link
                as={NextLink}
                href="https://chakra-ui.com/"
                target="_blank"
                isExternal
              >
                <u>Chakra UI</u>
              </Link>
            </Text>
          </Box>
          <Spacer />
          <Box>
            <HStack spacing={"8px"}>
              <Box
                as="a"
                href="https://www.linkedin.com/in/ankurlathwal/"
                target="_blank"
              >
                <Text>LinkedIn</Text>
              </Box>
              <Box
                as="a"
                href="https://github.com/ankurlathwal"
                target="_blank"
              >
                <Text>Github</Text>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Center>
    </footer>
  );
};
