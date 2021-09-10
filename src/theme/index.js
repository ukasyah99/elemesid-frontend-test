import { extendTheme } from "@chakra-ui/react"
import colors from "./colors"
import components from "./components"
import fonts from "./fonts"

const theme = extendTheme({
  colors,
  components,
  fonts,
})

export default theme
