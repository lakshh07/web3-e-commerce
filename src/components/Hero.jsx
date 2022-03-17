import bg from "../assets/bg.jpeg";
import HeroNav from "./HeroNav";
import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <Box h="100vh">
      <HeroNav />
      <Image className="main-bg" src={bg} />

      <Box align="center" top="20%" position="relative">
        <Heading
          className="logo3"
          // fontWeight={700}
          fontFamily="Raleway"
          fontSize="250px"
        >
          L N C
        </Heading>
        <Text fontSize="70px" color="white">
          Colorful. Conscious. Cozy.
        </Text>
        <Flex mt="30px" justifyContent="center">
          <Button
            bg="transparent"
            color="white"
            border="2px"
            borderColor="white"
            p="2em"
            rounded="40px"
            mr="4em"
          >
            Shop Retail
          </Button>
          <Button
            bg="transparent"
            color="white"
            border="2px"
            borderColor="white"
            p="2em"
            rounded="40px"
            ml="4em"
          >
            Shop Bussiness
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Hero;
