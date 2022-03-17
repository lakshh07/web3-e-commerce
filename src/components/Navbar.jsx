import { Box, Flex, Text, Alert, Grid, AlertTitle } from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt1, HiOutlineShoppingBag } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <Box>
        <Alert
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          status="info"
          bg="#1B729C"
          py="0.8em"
          color="white"
          letterSpacing="2px"
        >
          <AlertTitle textTransform="uppercase" alignItems="center" mr={2}>
            Free shipping worldwide
          </AlertTitle>
        </Alert>

        <Box>
          <Grid
            templateColumns="repeat(3, 1fr)"
            alignItems="center"
            justifyContent="center"
            // py="20px"
            borderBottom="2px"
            borderColor="#1B729C"
            align="center"
          >
            <Flex alignItems="center">
              <Box borderRight="2px" borderColor="#1B729C" py="20px" px="30px">
                <HiMenuAlt1 size="32px" />
              </Box>
              <Flex
                py="20px"
                pl="40px"
                fontSize="16px"
                textTransform="capitalize"
              >
                <Text fontSize="18px" mr="1em">
                  Women
                </Text>
                <Text fontSize="18px" mr="1em">
                  Men
                </Text>
                <Text fontSize="18px" mr="1em">
                  babies
                </Text>
              </Flex>
            </Flex>
            <Box
              align="center"
              fontSize="2.4em"
              className="logo"
              fontWeight={700}
            >
              L N C
            </Box>
            <Flex justifyContent="right">
              <Box borderLeft="2px" borderColor="#1B729C" py="20px" px="30px">
                <HiOutlineShoppingBag fontSize="32px" />
              </Box>
            </Flex>
          </Grid>
        </Box>

        {/* <Grid
          templateColumns="repeat(3, 1fr)"
          justifyContent="space-between"
          px="5%"
          alignItems="center"
          py="20px"
          borderBottom="2px"
          borderColor="#1B729C"
        >
          <Flex textTransform="uppercase">
            <Text mr="1em">Shop</Text>
            <Text mr="1em">About</Text>
            <Text mr="1em">Faq</Text>
            <Text>Contact</Text>
          </Flex>
          <Box align="center">
            <Heading fontWeight="500">LNC.</Heading>
          </Box>
          <Flex justifyContent="flex-end">
            <FaRegUser style={{ marginRight: "1em" }} fontSize="25px" />
            <FiShoppingCart fontSize="25px" />
          </Flex>
        </Grid> */}
      </Box>
    </>
  );
}

export default Navbar;
