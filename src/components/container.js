import { Box } from "@chakra-ui/react"

export default function Container({ children }) {
  return (
    <Box
      px={{ base: "20px", sm: "28px", md: "40px", xl: "80px" }}
      w="full"
      maxW="1280px"
      mx="auto"
    >
      {children}
    </Box>
  )
}
