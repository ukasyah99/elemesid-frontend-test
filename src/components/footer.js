import { Box, Icon, IconButton } from "@chakra-ui/react"
import Container from "./container"
import Mail from "./vectors/mail"

export default function Footer() {
  return (
    <Box bg="#F9FFF6">
      <Container>
        <IconButton
          icon={<Icon as={Mail} w="5" h="5" />}
          colorScheme="primary"
        />
      </Container>
    </Box>
  )
}
