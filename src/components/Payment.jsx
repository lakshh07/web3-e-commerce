import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import payment from "../assets/payment.png";

function Payment() {
  return (
    <>
      <Navbar />

      <Box mt="2em" align="center">
        <Image h="1500px" w="1500px" src={payment} />
      </Box>
    </>
  );
}

export default Payment;
