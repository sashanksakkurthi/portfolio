import { Box, Text, Flex, Heading, Image, IconButton } from "@chakra-ui/react";

import React from "react";

const Header = () => {
  return (
    <Box bgGradient={"radial(gray.900,gray.800)"}>
      <Flex
        direction={"column"}
        minH={"2xl"}
        align={"center"}
        justify={"center"}
        gap={6}
      >
        <Box>
          <Image
            rounded={"full"}
            src={"/sashank.png"}
            width={"300"}
            height={"300"}
            bg={"white"}
            alt={""}
          />
        </Box>
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            textColor={"gray.100"}
            fontFamily={"Inter"}
          >
            Hey I&#39;m Sashank Saskkurthi
          </Heading>
          <Text
            textColor={"gray.100"}
            fontSize={{ base: "xs", md: "xl" }}
            fontFamily={"Roboto"}
          >
            Web Developer / Devops / App Developer / UI & UX
          </Text>
        </Flex>
        <IconButton aria-label={""} rounded={"full"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
          </svg>
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Header;
