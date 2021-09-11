import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import Container from "./container"
import Rating from "./rating"
import ResponsiveImage from "./responsive-image"

function ReceiptCard({ bg, image, title, category, rating }) {
  return (
    <Flex
      boxShadow="0px 11px 39px 0px #00000012"
      flexDirection="column"
      px="5"
      py="6"
      rounded="lg"
      position="relative"
      role="group"
    >
      <Box rounded="lg" overflow="hidden" w="max-content" mb="4">
        <ResponsiveImage
          src={image}
          width="86px"
          height="86px"
        />
      </Box>
      <Text
        color="dark.500"
        fontSize="xl"
        fontWeight="medium"
        mb="0.5"
      >
        {title}
      </Text>
      <Text
        color="primary.500"
        fontSize="sm"
        fontWeight="medium"
        mb="2"
      >
        {category}
      </Text>
      <Rating total={rating} />
      <Box
        position="absolute"
        rounded="lg"
        inset="0"
        bg={bg}
        zIndex="-2"
      />
      <Box
        position="absolute"
        rounded="lg"
        inset="0"
        bgImage="url('/background.png')"
        bgSize="cover"
        opacity="0"
        zIndex="-1"
        transition="opacity .2s ease"
        _groupHover={{
          opacity: "0.08",
        }}
      />
    </Flex>
  )
}

const items = [
  {
    image: "/recipes/pexels-brett-jordan-842519.png",
    title: "Pizza Paperoni",
    category: "Pizza",
    rating: 4,
    bg: "#E4F2F4",
  },
  {
    image: "/recipes/pexels-daria-shevtsova-1260968.png",
    title: "Pizza Meat",
    category: "Pizza",
    rating: 3,
    bg: "#E4F2F4",
  },
  {
    image: "/recipes/pexels-daria-shevtsova-1260968.png",
    title: "Doner Kebab",
    category: "Kebab",
    rating: 5,
    bg: "#EAEEFA",
  },
  {
    image: "/recipes/pexels-olga-lioncat-7245464.png",
    title: "Salmon Roll",
    category: "Salmon",
    rating: 4,
    bg: "#F9EEF3",
  },
  {
    image: "/recipes/pexels-oleg-magni-1908674.png",
    title: "Cupcake Choco",
    category: "Cupcake",
    rating: 4,
    bg: "#F0FEEB",
  },
  {
    image: "/recipes/pexels-alena-shekhovtcova-6940978.png",
    title: "Doughnut Milk",
    category: "Doughnut",
    rating: 5,
    bg: "#F3F7D9",
  },
  {
    image: "/recipes/pexels-karley-saagi-2064449.png",
    title: "Doughnut Unicorn",
    category: "Doughnut",
    rating: 4,
    bg: "#F3F7D9",
  },
  {
    image: "/recipes/pexels-polina-tankilevitch-6419736.png",
    title: "Kathi Kebab",
    category: "Kebab",
    rating: 4,
    bg: "#EAEEFA",
  },
]

export default function BrowseTrendings() {
  return (
    <Container>
      <Box py="7">
        <Text
          color="dark.500"
          fontSize={{ base: "2xl", lg: "3xl" }}
          fontWeight="medium"
          lineHeight="short"
        >
          Browse Our Trending
        </Text>
        <Text
          color="primary.500"
          fontSize={{ base: "2xl", lg: "3xl" }}
          fontWeight="medium"
          lineHeight="short"
        >
          Receipt
        </Text>
        <Box h="7" />
        <SimpleGrid
          columns={{ base: "1", md: "2", lg: "4" }}
          columnGap="6"
          rowGap="8"
        >
          {items.map((item, i) => (
            <ReceiptCard
              key={i}
              {...item}
            />
          ))}
        </SimpleGrid>
        <Box h="14" />
        <Flex>
          <Button colorScheme="primary" mx="auto">
            All Receipt
          </Button>
        </Flex>
      </Box>
    </Container>
  )
}
