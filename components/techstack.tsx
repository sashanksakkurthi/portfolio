import {
  Box,
  Flex,
  Grid,
  Heading,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <Box mt={"-1"}>
      <Flex justify={"center"} py={"14"} bg={"#18181b"}>
        <VStack gap={10}>
          <Heading
            textColor={"gray.100"}
            fontWeight={"semibold"}
            fontFamily={"Inter"}
          >
            My Tech Stack
          </Heading>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={"center"}
            gap={{ base: 10, lg: 24 }}
            minH={"lg"}
          >
            <Technology />
            <Skills />
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

const Skills = () => {
  const skills = [
    { id: 1, name: "python", logo: "python" },
    { id: 2, name: "java", logo: "java" },
    { id: 3, name: "node", logo: "node" },
    { id: 4, name: "postgres", logo: "postgres" },
    { id: 5, name: "flutter", logo: "flutter" },
    { id: 6, name: "git", logo: "git" },
    { id: 7, name: "html", logo: "html" },
    { id: 8, name: "docker", logo: "docker" },
    { id: 9, name: "javascript", logo: "javascript" },
    { id: 10, name: "tailwind", logo: "tailwind" },
    { id: 11, name: "react", logo: "react" },
    { id: 12, name: "css", logo: "css" },
  ];
  return (
    <Grid
      templateColumns={{ base: "repeat(3, 1fr)", sm: "repeat(4, 1fr)" }}
      columnGap={{ base: "16", sm: "20" }}
      rowGap={{ base: "12", sm: "16" }}
    >
      {skills.map((value) => (
        <Box key={value.id}>
          <Image src={`/${value.logo}.svg`} width={40} height={40} alt="" />
        </Box>
      ))}
    </Grid>
  );
};

const Technology = () => {
  const technologies = [
    { id: 1, name: "Web Development", value: 90 },
    { id: 2, name: "App Development", value: 40 },
    { id: 3, name: "Devops", value: 60 },
  ];
  return (
    <Flex gap={6} direction={"column"}>
      {technologies.map((value) => (
        <Flex
          gap={2}
          direction={{ base: "column", sm: "row" }}
          align={"center"}
          key={value.id}
        >
          <Text
            fontFamily={"Roboto"}
            width={"44"}
            fontSize={"lg"}
            fontWeight={"semibold"}
            textColor={"gray.300"}
          >
            {value.name}
          </Text>
          <Progress colorScheme={"blue"} width={"64"} value={value.value} />
        </Flex>
      ))}
    </Flex>
  );
};

export default TechStack;
