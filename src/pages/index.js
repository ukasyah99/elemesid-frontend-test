import Head from "next/head"
import Header from "src/components/header"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elemes.id Frontend Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}
