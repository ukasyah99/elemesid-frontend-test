import { Box } from "@chakra-ui/react"
import Head from "next/head"
import BrowseCategories from "src/components/browse-categories"
import BrowseTrendings from "src/components/browse-trendings"
import Footer from "src/components/footer"
import Header from "src/components/header"
import Hero from "src/components/hero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elemes.id Frontend Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        position="relative"
      >
        <Header />
        <Hero />
        <Box h="32px" />
        <Box
          position="absolute"
          inset="0"
          backgroundImage="url('/background.png')"
          zIndex="-1"
          opacity="0.015"
        />
      </Box>
      <BrowseCategories />
      <BrowseTrendings />
      <Footer />
    </div>
  )
}
