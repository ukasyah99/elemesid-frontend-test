import { Box } from "@chakra-ui/react"
import Image from "next/image"

export default function ResponsiveImage({
  width,
  height,
  src,
}) {
  return (
    <Box
      width={width}
      height={height}
    >
      <Box className="responsive-image">
        <Image
          src={src}
          className="image"
          layout="fill"
        />
      </Box>
    </Box>
  )
}
