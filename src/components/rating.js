import { HStack } from "@chakra-ui/react"
import ResponsiveImage from "./responsive-image"

export default function Rating() {
  const n = 4
  return (
    <HStack spacing="4px">
      {Array(5).fill(1).map((_, i) => (
        <ResponsiveImage
          key={i}
          src={n >= i + 1 ? "/star-full.png" : "/star-empty.png"}
          width="10px"
          height="10px"
        />
      ))}
    </HStack>
  )
}
