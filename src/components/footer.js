import { Box, HStack, Icon, IconButton, Input, InputGroup, InputRightAddon, Link, Stack, Text } from "@chakra-ui/react"
import { Fragment } from "react"
import Container from "./container"
import ResponsiveImage from "./responsive-image"
import Instagram from "./vectors/instagram"
import Mail from "./vectors/mail"
import Menu from "./vectors/menu"
import Phone from "./vectors/phone"

const mobileItems = [
  { icon: Menu, label: "Home" },
  { icon: Menu, label: "Promotions" },
  { icon: Menu, label: "Others" },
]

export default function Footer() {
  return (
    <>
      <HStack
        bg="white"
        position="sticky"
        bottom="0"
        h="20"
        px={{ base: "4" }}
        display={{ base: "flex", md: "none" }}
        zIndex="3"
      >
        {mobileItems.map((item, i) => (
          <Fragment key={i}>
            <Stack spacing="0.5" alignItems="center">
              <Icon as={Menu} w="7" h="7" />
              <Text fontSize="xs" fontWeight="medium">
                {item.label}
              </Text>
            </Stack>
            {i < mobileItems.length - 1 && <Box flex="1" />}
          </Fragment>
        ))}
      </HStack>
      <Box bg="#F9FFF6" display={{ base: "none", md: "block" }} py="10">
        <Container>
          <HStack alignItems="flex-start" flexWrap="wrap">
            <Box w={{ base: "100%", lg: "40%" }} mb={{ base: "7", lg: "0" }}>
              <ResponsiveImage
                src="/elemesid.png"
                width="180px"
                height="45px"
              />
              <Box h="5" />
              <Text fontSize="sm">
                Jl. Prof. DR. Satrio No. 7, RT.3/RW.3, Karet Kuningan,<br />
                Kecamatan Setiabudi, Kota Jakarta Selatan,<br />
                Daerah Khusus Ibukota Jakarta 12950
              </Text>
              <Box h="5" />
              <HStack>
                {[Mail, Phone, Instagram].map((icon, i) => (
                  <IconButton
                    key={i}
                    icon={<Icon as={icon} w="4" h="4" />}
                    px="0"
                    py="0"
                    minW="0"
                    w="9"
                    h="9"
                    bg="white"
                    color="primary.500"
                    _hover={{
                      bg: "primary.500",
                      color: "white",
                    }}
                  />
                ))}
              </HStack>
            </Box>
            <Box w={{ base: "25%", lg: "15%" }}>
              <Text color="dark.500" fontSize="md" fontWeight="medium">
                Categories
              </Text>
              <Box h="5" />
              <Stack alignItems="flex-start" spacing="2.5">
                <Link href="#">Cupcake</Link>
                <Link href="#">Pizza</Link>
                <Link href="#">Kebab</Link>
                <Link href="#">Salmon</Link>
                <Link href="#">Doughnut</Link>
              </Stack>
            </Box>
            <Box w={{ base: "30%", lg: "15%" }}>
              <Text color="dark.500" fontSize="md" fontWeight="medium">
                About Us
              </Text>
              <Box h="5" />
              <Stack alignItems="flex-start" spacing="2.5">
                <Link href="#">About Us</Link>
                <Link href="#">FAQ</Link>
                <Link href="#">Report Problem</Link>
              </Stack>
            </Box>
            <Box w={{ base: "auto" }} flex="1">
              <Text color="dark.500" fontSize="md" fontWeight="medium">
                Newsletter
              </Text>
              <Box h="5" />
              <Text fontSize="sm">
                Get now free 50% discount for all products on your first order
              </Text>
              <Box h="3" />
              <InputGroup size="sm">
                <Input
                  roundedLeft="md"
                  focusBorderColor="dark.500"
                  placeholder="Your email address"
                />
                <InputRightAddon
                  cursor="pointer"
                  bg="primary.500"
                  color="white"
                  fontWeight="medium"
                  roundedRight="md"
                  fontSize="xs"
                >
                  SEND
                </InputRightAddon>
              </InputGroup>
              <Box h="4" />
              <HStack>
                <Icon as={Mail} w="4" h="4" color="primary.500" />
                <Text color="dark.500" fontSize="sm">
                  elemesid@gmail.com
                </Text>
              </HStack>
              <Box h="2" />
              <HStack>
                <Icon as={Phone} w="4" h="4" color="primary.500" />
                <Text color="dark.500" fontSize="sm">
                  0888 1111 2222
                </Text>
              </HStack>
            </Box>
          </HStack>
        </Container>
      </Box>
      <Box display={{ base: "none", md: "block" }} py="8">
        <Text color="" fontSize="xs" fontWeight="medium" textAlign="center">
          &copy; 2021 ELEMES ID. ALL RIGHTS RESERVED
        </Text>
      </Box>
    </>
  )
}
