import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import WhyCat from "@/components/WhyCat";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CatWiki | Built by @muda2bir</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Cat Recommendation Website" />
      </Head>
      <Hero />
      <WhyCat />
    </>
  );
}
