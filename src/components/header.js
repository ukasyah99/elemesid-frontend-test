import { Badge, Box, Button, HStack, Link } from "@chakra-ui/react"
import Image from "next/image"
import Container from "./container"
import ResponsiveImage from "./responsive-image"

const links = [
  { label: "Home" },
  { label: "About" },
  { label: "Promotions", badge: { bg: "red.500", color: "white", label: "HOT" } },
  { label: "Blogs" },
  { label: "Contact Us" },
]

export default function Header() {
  return (
    <Container>
      <HStack
        py="5"
        spacing="0"
      >
        <ResponsiveImage
          width={{ base: "150px", lg: "207px" }}
          height={{ base: "36px", lg: "50px" }}
          src="/elemesid.png"
        />
        <Box flex="1" />
        <HStack
          spacing="32px"
          display={{ base: "none", lg: "flex" }}
        >
          {links.map((link, i) => (
            <Box key={i} position="relative">
              <Link href={"#"}>
                {link.label}
              </Link>
              {link.badge && (
                <Badge
                  position="absolute"
                  right="-15px"
                  top="-15px"
                  colorScheme="danger"
                  variant="solid"
                  size="sm"
                >
                  {link.badge.label}
                </Badge>
              )}
            </Box>
          ))}
        </HStack>
        <Box flex="1" />
        <HStack
          spacing="24px"
        >
          <Link
            href={"#"}
            color="#333333"
            display={{ base: "none", lg: "block" }}
          >
            Masuk
          </Link>
          <Button colorScheme="primary">
            Daftar Sekarang
          </Button>
        </HStack>
      </HStack>
    </Container>
  )
}
