import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <Box mt="4%" mx="10%">
        <Heading fontWeight={400}>My Account</Heading>

        <Flex mt="4em">
          <Box flex="1">
            <Text fontSize="20px" fontWeight={600}>
              Login
            </Text>

            <FormControl mt="2em" isRequired>
              <FormLabel htmlFor="email">Username or email address</FormLabel>
              <Input w="80%" borderColor="black" id="email" type="email" />
            </FormControl>
            <FormControl mt="1em" isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                w="80%"
                borderColor="black"
                id="password"
                type="password"
              />
            </FormControl>

            <Checkbox mt="1em">Remember Me</Checkbox>

            <Text mt="1em" textDecoration="underline">
              Lost your password?
            </Text>

            <Button
              bg="#1C719C"
              color="white"
              border="2px"
              borderColor="white"
              p="2em"
              rounded="40px"
              mt="2em"
            >
              Login In
            </Button>
          </Box>

          <Box flex="1">
            <Text fontSize="20px" fontWeight={600}>
              Register
            </Text>

            <FormControl mt="2em" isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input w="80%" borderColor="black" id="email" type="email" />
              <FormHelperText fontSize="16px">
                A password will be sent to your email address.
              </FormHelperText>
            </FormControl>

            <Text mt="2em">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </Text>

            <Button
              bg="#1C719C"
              color="white"
              border="2px"
              borderColor="white"
              p="2em"
              rounded="40px"
              mt="2em"
            >
              Register
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Login;
