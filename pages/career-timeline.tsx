import {
  Box,
  Center,
  Heading,
  Link,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

const steps = [
  {
    title: "Senior Software Engineer",
    organization: "EstimateOne",
    link: "https://estimateone.com/",
    location: "Melbourne, Australia 🇦🇺",
    dates: "May 2022 - present (1 year and 4 months, and counting)",
    description: "Working as a Senior Software Engineer at E1",
    type: "Work",
  },
  {
    title: "Full Stack Developer",
    organization: "Arkade",
    link: "https://arkade.com.au/",
    location: "Melbourne, Australia 🇦🇺",
    dates: "Nov 2020 - May 2022 (1 year and 6 months)",
    description: "Worked as Full Stack Developer in e-commerce",
    type: "Work",
  },
  {
    title: "Full Stack Developer",
    organization: "OpenSponsorship",
    link: "https://opensponsorship.com/",
    location: "New York, United States 🇺🇸",
    dates: "Mar 2018 - Mar 2020 (2 years)",
    description: "Worked as Full Stack Developer in e-commerce",
    type: "Work",
  },
  {
    title: "Full Stack Developer",
    organization: "Binfer",
    link: "https://binfer.com/",
    location: "Chicago, United States 🇺🇸",
    dates: "Jun 2017 - Mar 2018 (10 months)",
    description: "Worked as Full Stack Developer in e-commerce",
    type: "Work",
  },
  {
    title: "Master of Science (Computer Science)",
    organization: "University of Illinois",
    link: "https://www.uic.edu/",
    location: "Chicago, United States 🇺🇸",
    dates: "Aug 2015 - May 2017",
    description: "Completed my masters degree",
    type: "Study",
  },
  {
    title: "Bachelor of Technology (Information Technology)",
    link: "http://www.ipu.ac.in/",
    organization: "Indraprastha University",
    location: "New Delhi, India 🇮🇳",
    dates: "Aug 2011 - Jun 2015",
    description:
      "Completed my bachelors degree. Completed my bachelors degree.Completed my bachelors degreeCompleted my bachelors degreeCompleted my bachelors degreeCompleted my bachelors degreeCompleted my bachelors degreeCompleted my bachelors degreeCompleted my bachelors degreeCompleted my bachelors degreeCompleted my bachelors degreeCompleted my bachelors degree",
    type: "Study",
  },
];

export default function ContactMe() {
  const { activeStep } = useSteps({
    index: 6,
    count: steps.length,
  });
  return (
    <>
      <Head>
        <title>Career Timeline | Ankur Lathwal | Full Stack Developer</title>
        <meta name="description" content="Personal website of Ankur Lathwal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Center py="40px">
          <Stepper size="lg" orientation="vertical" index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus complete={step.type === "Work" ? `💼` : `📖`} />
                </StepIndicator>

                <Box flexShrink="0">
                  <Heading size="sm" as={"h3"}>
                    {step.title}
                  </Heading>
                  <Text fontSize={"xs"} as="u">
                    <Link as={NextLink} href={step.link} target="_blank">
                      {step.organization}
                    </Link>
                  </Text>
                  <Text fontSize={"xs"}>{step.location}</Text>
                  <Text fontSize={"xs"} as="i">
                    {step.dates}
                  </Text>
                  {/* <Container mt="8px" fontSize={"xs"}>
                    I've have worked across different startups in the US 🇺🇸
                    (Chicago and New York), wearing all hats and doing frontend,
                    backend, infrastructure, moving from EC2 to
                    ElasticBeanstalk, logging, CI/CD, scaling up, implementing
                    SCRUM, arranging office desks, organizing fun parties, etc.
                    I currently work at more of a scale up product company in{" "}
                    <b>Melbourne, Australia</b> 🇦🇺 focusing on clean, testable
                    and maintainable code.
                  </Container> */}
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Center>
      </main>
    </>
  );
}
