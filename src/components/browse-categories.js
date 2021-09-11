import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Container from "./container"
import ResponsiveImage from "./responsive-image"

function CategoryCard({ image, bg, label, description }) {
  return (
    <Box h="210px">
      <Stack
        p="7"
        alignItems="center"
        rounded="lg"
        spacing="1.5"
        overflow="hidden"
        position="relative"
        transition="padding-bottom .15s ease"
        role="group"
        _hover={{
          pb: "12",
        }}
      >
        <Box pb="3">
          <ResponsiveImage
            src={image}
            width="50px"
            height="50px"
          />
        </Box>
        <Text
          color="dark.500"
          fontSize="16px"
          fontWeight="medium"
          lineHeight="22px"
        >
          {label}
        </Text>
        <Text
          color="dark.400"
          fontSize="14px"
          fontWeight="normal"
          lineHeight="16px"
        >
          {description}
        </Text>
        <Box
          position="absolute"
          rounded="lg"
          inset="0"
          bg={bg}
          bgSize="contain"
          zIndex="-2"
        />
        <Box
          position="absolute"
          rounded="lg"
          inset="0"
          bgImage="url('/background.png')"
          bgSize="contain"
          opacity="0"
          zIndex="-1"
          transition="opacity .2s ease"
          _groupHover={{
            opacity: "0.1",
          }}
        />
      </Stack>
    </Box>
  )
}

const items = [
  {
    image: "/cupcake.png",
    bg: "#F0FEEB",
    label: "Cupcake",
    description: "22 items",
  },
  {
    image: "/pizza.png",
    bg: "#E4F2F4",
    label: "Pizza",
    description: "25 items",
  },
  {
    image: "/kebab.png",
    bg: "#EAEEFA",
    label: "Kebab",
    description: "12 items",
  },
  {
    image: "/salmon.png",
    bg: "#F9EEF3",
    label: "Salmon",
    description: "22 items",
  },
  {
    image: "/doughnut.png",
    bg: "#F3F7D9",
    label: "Doughnut",
    description: "11 items",
  },
  {
    image: "/cupcake.png",
    bg: "#F0FEEB",
    label: "Cupcake",
    description: "22 items",
  },
  {
    image: "/pizza.png",
    bg: "#E4F2F4",
    label: "Pizza",
    description: "25 items",
  },
  {
    image: "/kebab.png",
    bg: "#EAEEFA",
    label: "Kebab",
    description: "12 items",
  },
  {
    image: "/salmon.png",
    bg: "#F9EEF3",
    label: "Salmon",
    description: "22 items",
  },
  {
    image: "/doughnut.png",
    bg: "#F3F7D9",
    label: "Doughnut",
    description: "11 items",
  },
]

export default function BrowseCategories() {
  const [swiper, setSwiper] = useState(null)

  const handleSlidePrev = () => {
    if (swiper) swiper.slideTo(swiper.activeIndex - 2)
  }

  const handleSlideNext = () => {
    if (swiper) swiper.slideTo(swiper.activeIndex + 2)
  }

  return (
    <Box py="7">
      <Container>
        <Text
          color="dark.500"
          fontSize={{ base: "2xl", lg: "3xl" }}
          fontWeight="medium"
          lineHeight="short"
        >
          Browse Our Category
        </Text>
        <Text
          color="primary.500"
          fontSize={{ base: "2xl", lg: "3xl" }}
          fontWeight="medium"
          lineHeight="short"
        >
          Receipt
        </Text>
      </Container>
      <Box h="7" />
      <Swiper
        spaceBetween={12}
        slidesPerView="auto"
        onInit={setSwiper}
      >
        <SwiperSlide />
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <CategoryCard {...item} />
          </SwiperSlide>
        ))}
        <SwiperSlide />
      </Swiper>
      <Container>
        <HStack
          justifyContent="flex-end"
          spacing="3"
          display={{ base: "none", lg: "flex" }}
        >
          <Button
            h="45px"
            pl="10px"
            pr="14px"
            colorScheme="primary"
            onClick={handleSlidePrev}
            leftIcon={(
              <Flex
                w="30px"
                h="30px"
                bg="white"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <ResponsiveImage
                  src="/chevron-left.png"
                  width="12px"
                  height="18px"
                />
              </Flex>
            )}
          >
            PREV
          </Button>
          <Button
            h="45px"
            pl="14px"
            pr="10px"
            colorScheme="primary"
            onClick={handleSlideNext}
            rightIcon={(
              <Flex
                w="30px"
                h="30px"
                bg="white"
                alignItems="center"
                justifyContent="center"
                rounded="full"
                transform="rotate(180deg)"
                pr="3px"
              >
                <ResponsiveImage
                  src="/chevron-left.png"
                  width="11px"
                  height="17px"
                />
              </Flex>
            )}
          >
            NEXT
          </Button>
        </HStack>
      </Container>
    </Box>
  )
}
