import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/rubik/400.css"
import "@fontsource/rubik/500.css"
import "src/styles/global.css"
import theme from "src/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
