import { Box } from "@chakra-ui/react"

export default function Container({ children }) {
  return (
    <Box
      px={{ base: "10", xl: "20" }}
      w="full"
      maxW="7xl"
      mx="auto"
    >
      {children}
    </Box>
  )
}
