import { Box, Center, Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ankur Lathwal | Full Stack Developer</title>
        <meta name="description" content="Personal website of Ankur Lathwal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Center py="80px" >
          <Flex
            flexDirection={["column", "column", "row"]}
            gap={["32px"]}
            alignItems={["center", "center", "start"]}
          >
            <Image
              boxSize={"200px"}
              borderRadius={"full"}
              src="./profile-pic.jpg"
              objectFit="cover"
              alt="Ankur Lathwal Profile Picture"
            ></Image>
            <Spacer />
            <Box>
              <Text>
                Hello there! 👋🏽 Welcome to my personal page. I'm a software
                engineer who can write code to check the fuel efficiency of
                rocket fuel in your space rocket during flight time to notify
                you of any possible combustion issues. I can also write code to
                optimize the performance of any hybrid electric vehicle and
                improve the efficiency by 20%. I can also write code to create a
                self learning natural language processing engine that can stay
                with you in your office and learn everything about your business
                to eventually act as a scalable and always available customer
                agent bot.
                <br />
                <br />
                Impressed, eh?
                <br />
                <br />
                No, I can't do any of that. But I can write solid web
                applications with clean testable code, implementing distributed
                architecture on the cloud, efficient APIs and a beautiful UI/UX
                providing your users with the best possible experience. I write
                mostly in the <b>JavaScript</b> stack, utilizing the powers of{" "}
                <b>ReactJS</b>, <b>Node</b> and <b>Express</b>, <b>NestJS</b>,{" "}
                <b>Next.js</b>, etc. And I like doing it the <b>AGILE</b> way!
                <br />
                <br />
                I've have worked across different startups in the US 🇺🇸 (Chicago
                and New York), wearing all hats and doing frontend, backend,
                infrastructure, moving from EC2 to ElasticBeanstalk, logging,
                CI/CD, scaling up, implementing SCRUM, arranging office desks,
                organizing fun parties, etc. I currently work at more of a scale
                up product company in <b>Melbourne, Australia</b> 🇦🇺 focusing on
                clean, testable and maintainable code.
                <br />
                <br />I live in suburban Melbourne with my wife Monika and our
                grumpy cat Hermoine 🐈.
                <br />
                <br />
                Feel free to checkout{" "}
                <Link
                  color={"brand.primary"}
                  as={NextLink}
                  href="https://www.linkedin.com/in/ankurlathwal/"
                  target="_blank"
                  isExternal
                >
                  my linkedin
                </Link>{" "}
                or grab a free pdf copy of{" "}
                <Link color={"brand.primary"} as={NextLink} href="/resume">
                  my resume.
                </Link>
                <br />
                <br />I can be reached 💬 at{" "}
                <Link
                  color={"brand.primary"}
                  href="mailto:hello@ankurlathwal.com"
                  target="_blank"
                >
                  <i>hello@ankurlathwal.com</i>
                </Link>
              </Text>
            </Box>
          </Flex>
        </Center>
      </main>
    </>
  );
}
