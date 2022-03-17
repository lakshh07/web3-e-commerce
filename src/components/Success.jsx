import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Clothes from "../assets/clothes-list";
import confirm from "../assets/confirm.jpg";

function Success() {
  return (
    <>
      <Navbar />

      <Text ml="4%" mt="2.5em" textDecoration="underline">
        Back to homepage
      </Text>
      <Box mt="2em" align="center">
        <Image src={confirm} h="500px" w="500px" />
        <Heading fontWeight={600}>Order Confirmed!</Heading>
        <Text mt="1em" fontSize="18px">
          Thank you for shopping with us.
        </Text>
      </Box>
      <Box mt="5em">
        <Heading mx="1em" fontWeight={400}>
          You might also like…
        </Heading>
        <Wrap spacing="60px" justify="center" mt="4em">
          {Clothes.slice(0, 4).map((list, index) => {
            return (
              <WrapItem key={index}>
                <Box>
                  <Image src={list.url} width="400" height="600" />
                  <Text fontWeight={500}>{list.name}</Text>
                  <Flex>
                    <Text mr="1em" textDecoration="line-through">
                      ${list.price_b}.00
                    </Text>
                    <Text>${list.price_a}.00</Text>
                  </Flex>
                </Box>
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </>
  );
}

export default Success;
