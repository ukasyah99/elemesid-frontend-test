import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/rubik/400.css"
import "@fontsource/rubik/500.css"
import theme from "src/theme"
import "swiper/css"
import "src/styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
