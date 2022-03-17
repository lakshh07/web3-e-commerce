import {
  Box,
  Grid,
  Stack,
  Text,
  Select,
  Flex,
  FormLabel,
  FormControl,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  GridItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { BiHeart } from "react-icons/bi";
import girl from "../assets/girl.webp";
import Navbar from "./Navbar";

function ProductPage() {
  return (
    <>
      <Navbar />
      <Box mt="4em" mx="4%">
        <Flex>
          <Text>Home / Women / Puffer jackets /</Text>{" "}
          <Text ml="5px" fontWeight={600}>
            {" "}
            LNC LONG – Women’s down puffer jacket
          </Text>
        </Flex>
        <Grid mt="2em" templateColumns="repeat(3, 1fr)" gap={2}>
          <GridItem colSpan={2}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <Image src="https://fosfopuffer.com/wp-content/uploads/2021/06/032521_AUDVIK_ECOMM_FOSFO_LONG_ORANGE_1075.jpg" />
              </GridItem>
              <GridItem>
                <Image src="https://fosfopuffer.com/wp-content/uploads/2021/06/032521_AUDVIK_ECOMM_FOSFO_LONG_ORANGE_1086.jpg" />
              </GridItem>
              <GridItem>
                <Image src="https://fosfopuffer.com/wp-content/uploads/2021/06/032521_AUDVIK_ECOMM_FOSFO_LONG_ORANGE_1080.jpg" />
              </GridItem>
              <GridItem>
                <Image src="https://fosfopuffer.com/wp-content/uploads/2021/06/032521_AUDVIK_ECOMM_FOSFO_LONG_ORANGE_1085.jpg" />
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={1}>
            <Box>
              <Stack
                ml="3em"
                justifyContent="flex-start"
                alignItems="left"
                textAlign="left"
              >
                <Text
                  fontWeight="400"
                  my="0"
                  mb="-10px"
                  fontSize="2.5em"
                  color="#575757"
                >
                  LNC LONG – WOMEN’S DOWN PUFFER JACKET
                </Text>
                <Text color="#707070" mt="0px">
                  SKU: 0001
                </Text>
                <Flex
                  py="0.8em"
                  fontWeight="500"
                  fontSize="2.3em"
                  color="#575757"
                >
                  <Text mr="1em" textDecoration="line-through">
                    $320.00
                  </Text>
                  <Text>$256.00</Text>
                </Flex>

                <FormControl pt="0.9em">
                  <Text color="#2B2B2B" my="0" className="box-h">
                    Size: <strong>M</strong>
                  </Text>
                  <Wrap pt="15px">
                    <WrapItem>
                      <Flex
                        className="box"
                        align="center"
                        justifyContent="center"
                      >
                        <Text>XS</Text>
                      </Flex>
                    </WrapItem>
                    <WrapItem>
                      <Flex
                        className="box"
                        align="center"
                        justifyContent="center"
                      >
                        <Text>S</Text>
                      </Flex>
                    </WrapItem>
                    <WrapItem>
                      <Flex
                        className="box box-selected"
                        align="center"
                        justifyContent="center"
                      >
                        <Text>M</Text>
                      </Flex>
                    </WrapItem>
                    <WrapItem>
                      <Flex
                        className="box"
                        align="center"
                        justifyContent="center"
                      >
                        <Text>L</Text>
                      </Flex>
                    </WrapItem>
                    <WrapItem>
                      <Flex
                        className="box"
                        align="center"
                        justifyContent="center"
                      >
                        <Text>XL</Text>
                      </Flex>
                    </WrapItem>
                  </Wrap>
                </FormControl>

                <FormControl pt="20px">
                  <FormLabel className="box-h">
                    Color: <strong>Orange</strong>
                    <Wrap pt="15px">
                      <WrapItem>
                        <Flex
                          className="box black"
                          align="center"
                          justifyContent="center"
                        ></Flex>
                      </WrapItem>
                      <WrapItem>
                        <Flex
                          className="box red"
                          align="center"
                          justifyContent="center"
                        ></Flex>
                      </WrapItem>
                      <WrapItem>
                        <Flex
                          className="box box-selected orange"
                          align="center"
                          justifyContent="center"
                        ></Flex>
                      </WrapItem>
                      <WrapItem>
                        <Flex
                          className="box blueviolet"
                          align="center"
                          justifyContent="center"
                        ></Flex>
                      </WrapItem>
                      <WrapItem>
                        <Flex
                          className="box blue"
                          align="center"
                          justifyContent="center"
                        ></Flex>
                      </WrapItem>
                      <WrapItem>
                        <Flex
                          className="box gray"
                          align="center"
                          justifyContent="center"
                        ></Flex>
                      </WrapItem>
                    </Wrap>
                  </FormLabel>
                </FormControl>

                <FormControl pt="20px">
                  <FormLabel className="box-h" color="#2B2B2B">
                    Quantity: (Min: 50){" "}
                  </FormLabel>
                  <NumberInput w="90%" min={50}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <Text pt="2em" textDecoration="underline">
                  Find your fit
                </Text>
                <Stack pt="3em" w="90%">
                  <Flex>
                    <Button
                      flex="1"
                      rounded="null"
                      color="black"
                      bg="transparent"
                      border="1px"
                      py="1.5em"
                      textTransform="uppercase"
                    >
                      Add to cart
                    </Button>
                    <Button
                      ml="15px"
                      rounded="null"
                      color="red"
                      bg="transparent"
                      border="1px"
                      py="1.5em"
                    >
                      <BiHeart />
                    </Button>
                  </Flex>
                  <Button
                    textTransform="uppercase"
                    rounded="null"
                    color="white"
                    bg="#1c719c"
                    py="1.5em"
                  >
                    Buy Now
                  </Button>
                  <Link>
                    <Text textDecoration="underline">Need a sample?</Text>
                  </Link>
                </Stack>

                <Text pt="4em" textAlign="justify">
                  This is the coat you won’t want to live without! With its
                  mid-thigh length, our long FOSFO is the ultimate all-rounder.
                  Super versatile, it’s perfect for everyday activities as well
                  as winter sports (family skating, tubing, walking in the
                  woods, etc.) Finally, the midnight blue fabric brings a fresh
                  and dreamy side to everyday life, so why not dare it?
                </Text>
                <Text fontWeight={500} textAlign="justify">
                  LNCs are warm and eco-friendly jackets, made from recycled
                  fabrics weaved from fishing nets collected in the ocean.
                  FOSFOs are warm and eco-friendly jackets, made from recycled
                  fabrics weaved from fishing nets collected in the ocean.
                </Text>

                <Accordion w="90%" pt="3em">
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left" fontSize="1.5em">
                          Details
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      2 way front zip, easy to use <br /> Side zipped pockets
                      <br />
                      Fixed hood <br />
                      Soft and antistatic <br />
                      lining
                      <br /> Microfleece inner wrist
                      <br /> Zipped inner chest pocket
                      <br /> Reflective Audvik logo
                      <br />
                      Back length: 35″ (89 cm)
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left" fontSize="1.5em">
                          Warranty
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Our warranty covers all manufacturing defects: seams,
                      snaps, zippers, fabrics and insulation during its normal
                      lifespan (between 4 to 5 years). We do not guarantee
                      damage caused by accident (tears), improper maintenance,
                      neglect, normal wear and tear, or the natural decay of
                      colors and materials over time.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
        {/* <Grid templateColumns="repeat(2, 1fr)" align="center">
          <Box>
            <Image src={girl} height={950} />
            <Text pt="2em">
              I'm a product description. I'm a great place to add more details
              about your product such as sizing, material, care instructions and
              cleaning instructions. I'm a product description. I'm a great
              place to add more details about your product such as sizing,
              material, care instructions and cleaning instructions.
            </Text>
          </Box>

          <Stack
            ml="3em"
            justifyContent="flex-start"
            alignItems="left"
            textAlign="left"
          >
            <Text
              fontWeight="400"
              my="0"
              mb="-10px"
              fontSize="2.5em"
              color="#575757"
            >
              I'm a Product
            </Text>
            <Text color="#707070" mt="0px">
              SKU: 0001
            </Text>
            <Text py="0.8em" fontWeight="500" fontSize="2.3em" color="#575757">
              $ 170.00
            </Text>

            <FormControl pt="0.9em">
              <Text color="#2B2B2B" my="0" fontsize="14em">
                Size:
              </Text>
              <Select w="90%" variant="outline" placeholder="Select">
                <option value="option1">Small</option>
                <option value="option2">Medium</option>
                <option value="option3">Large</option>
              </Select>
            </FormControl>

            <FormControl pt="20px">
              <FormLabel>Color:</FormLabel>
              <RadioGroup>
                <Stack spacing={5} direction="row">
                  <Radio size="lg" bg="red" value="1"></Radio>
                  <Radio size="lg" bg="green" value="2"></Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl pt="20px">
              <FormLabel color="#2B2B2B">Quantity: (Min: 50) </FormLabel>
              <NumberInput w="90%" min={50}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Stack pt="3em" w="90%">
              <Flex>
                <Button
                  flex="1"
                  rounded="null"
                  color="black"
                  bg="transparent"
                  border="1px"
                  py="1.5em"
                  textTransform="uppercase"
                >
                  Add to cart
                </Button>
                <Button
                  ml="15px"
                  rounded="null"
                  color="red"
                  bg="transparent"
                  border="1px"
                  py="1.5em"
                >
                  <BiHeart />
                </Button>
              </Flex>
              <Button
                textTransform="uppercase"
                rounded="null"
                color="white"
                bg="#1c719c"
                py="1.5em"
              >
                Buy Now
              </Button>
              <Link>
                <Text textDecoration="underline">Need a sample?</Text>
              </Link>
            </Stack>

            <Accordion w="90%" pt="3em">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize="1.5em">
                      Company Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Grid> */}
      </Box>
    </>
  );
}

export default ProductPage;
