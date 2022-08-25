import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image"; //usar essa img no chakra
import { Landing } from "../components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Accounted</title>
      </Head>
      <Landing />
    </>
  );
}
