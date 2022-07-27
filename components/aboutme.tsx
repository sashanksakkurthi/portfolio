import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  return (
    <Box mt={"-1"}>
      <Flex justify={"center"} py={"14"} >
        <VStack gap={10}>
          <Heading
            textColor={"gray.700"}
            fontWeight={"bold"}
            fontFamily={"Inter"}
          >
            About Me
          </Heading>
          <Flex
            direction={"column"}
            fontSize={{ base: "lg", md: "2xl" }}
            gap={6}
            align={"start"}
            px={"6"}
            minH={"md"}
            textColor={"gray.800"}
          >
            <Text fontFamily={"Roboto"}>
              😊 I am currently studying Computer Science and diving deep into
              tech.
            </Text>
            <Text fontFamily={"Roboto"}>❤️ I love to code what I design.</Text>
            <Text fontFamily={"Roboto"}>📦 Building OpenLean Community.</Text>
            <Text fontFamily={"Roboto"}>
              🤝 Happy to meet Like-Minded people.
            </Text>
            <Text fontFamily={"Roboto"}>
              💻 I am passionate about becoming a software engineer.
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AboutMe;
