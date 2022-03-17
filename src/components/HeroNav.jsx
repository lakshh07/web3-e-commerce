import { Box, Flex, Text, Alert, Grid, AlertTitle } from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt1, HiOutlineShoppingBag } from "react-icons/hi";

function HeroNav() {
  return (
    <>
      <Box>
        <Alert
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          status="info"
          //   bg="#FFFFFF"
          py="0.8em"
          letterSpacing="2px"
        >
          <AlertTitle textTransform="uppercase" alignItems="center" mr={2}>
            Free shipping worldwide
          </AlertTitle>
        </Alert>

        <Box bg="transparent">
          <Grid
            templateColumns="repeat(3, 1fr)"
            alignItems="center"
            justifyContent="center"
            // py="20px"
            borderBottom="2px"
            borderColor="#FFFFFF"
            align="center"
            bg="transparent"
            zIndex="999"
          >
            <Flex alignItems="center">
              <Box
                borderRight="2px"
                borderColor="#FFFFFF"
                color="white"
                py="20px"
                px="30px"
              >
                <HiMenuAlt1 size="32px" />
              </Box>
              <Flex
                py="20px"
                pl="40px"
                fontSize="16px"
                textTransform="capitalize"
                color="white"
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
              className="logo2"
              fontWeight={700}
            >
              L N C
            </Box>
            <Flex justifyContent="right">
              <Box
                borderLeft="2px"
                borderColor="#FFFFFF"
                color="white"
                py="20px"
                px="30px"
              >
                <HiOutlineShoppingBag fontSize="32px" />
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default HeroNav;
