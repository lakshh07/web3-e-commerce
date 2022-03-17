import {
  Box,
  Flex,
  Heading,
  Text,
  Select,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Clothes from "../assets/clothes-list";
import Navbar from "./Navbar";

function Shop() {
  return (
    <>
      <Navbar />
      <Box mt="3em" mx="5em">
        <Heading fontWeight={500}>Women</Heading>

        <Flex w="40%" mt="1.6em">
          <Select mr="1em" variant="filled" placeholder="Categories">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select mr="1em" variant="filled" placeholder="Color">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select variant="filled" placeholder="Sizes">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>

        <Box mt="5em" mx="1%">
          <Wrap spacing="60px" justify="left">
            {Clothes.map((list, index) => {
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
      </Box>
    </>
  );
}

export default Shop;
