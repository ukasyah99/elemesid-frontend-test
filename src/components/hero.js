import { Box, Button, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import Container from "./container"
import Rating from "./rating"
import ResponsiveImage from "./responsive-image"

function CircleImage() {
  return (
    <Box
      display="flex"
      position="relative"
      w="full"
    >
      <Box mr="auto" display={{ base: "none", lg: "block" }} />
      <ResponsiveImage
        src="/hero-circle-background.png"
        width={{ base: "200px", md: "260px", lg: "440px" }}
        height={{ base: "200px", md: "260px", lg: "440px" }}
      />
      <Box
        position="absolute"
        top={{ base: "20px", md: "25px", lg: "40px" }}
        left={{ base: "20px", md: "25px", lg: "auto" }}
        right={{ base: "auto", md: "auto", lg: "40px" }}
      >
        <ResponsiveImage
          src="/hero-circle.png"
          width={{ base: "160px", md: "210px", lg: "360px" }}
          height={{ base: "160px", md: "210px", lg: "360px" }}
        />
      </Box>
    </Box>
  )
}

function HorizontalReceiptCard() {
  return (
    <HStack
      px={{ base: "15px", lg: "23px" }}
      py={{ base: "11px", lg: "16px" }}
      boxShadow="0px 11px 39px 0px #00000012"
      bg="rgba(255, 255, 255, 0.74)"
      rounded="17px"
      spacing={{ base: "14px", lg: "19px" }}
      w={{ base: "250px", lg: "292px" }}
    >
      <ResponsiveImage
        src="/hero-circle.png"
        width="53px"
        height="53px"
      />
      <Box>
        <Text
          color="black"
          fontSize="14px"
          fontWeight="medium"
          lineHeight="22px"
        >
          Green Salad Tomato
        </Text>
        <Text
          color="dark.400"
          fontSize="12px"
          lineHeight="14px"
        >
          Tomato
        </Text>
        <Box h="7px" />
        <Rating total={4} />
      </Box>
    </HStack>
  )
}

export default function Hero() {
  return (
    <Container>
      <SimpleGrid
        py="5"
        columns={{ base: "1", lg: "2" }}
        gap="50px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          py={{ base: "25px", lg: "0" }}
        >
          <Text
            color="primary.500"
            fontSize={{ base: "38px", md: "48px", lg: "64px" }}
            fontWeight="medium"
            lineHeight={{ base: "48px", md: "56px", lg: "64px" }}
          >
            Good Food Us<br />Good Mood
          </Text>
          <Box h="32px" />
          <Box position="relative" display={{ base: "block", lg: "none" }}>
            <CircleImage />
            <Box
              position="absolute"
              left={{ base: "auto", sm: "80px", md: "140px" }}
              right={{ base: "0px", sm: "auto", md: "auto" }}
              bottom="5px"
            >
              <HorizontalReceiptCard />
            </Box>
          </Box>
          <Box h="50px" display={{ base: "block", lg: "none" }} />
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            maxW={{ base: "100%", sm: "87%", md: "75%" }}
          >
            I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
          </Text>
          <Box h="32px" />
          <HStack spacing="16px">
            <Button
              colorScheme="primary"
              boxShadow="0px 8px 32px 0px #666BE259"
            >
              Daftar Sekarang
            </Button>
            <Button
              bg="#F2F2F2"
              color="dark.500"
            >
              About Us
            </Button>
          </HStack>
        </Box>
        <Flex
          justifyContent="flex-end"
          position="relative"
          display={{ base: "none", lg: "flex" }}
        >
          <CircleImage />
          <Box
            position="absolute"
            right="250px"
            bottom="20px"
          >
            <HorizontalReceiptCard />
          </Box>
        </Flex>
        {/* <Box position="relative" display={{ base: "none", lg: "block" }}>
        <CircleImage />
          
        </Box>
      </Box> */}
      </SimpleGrid>
    </Container>
  )
}
