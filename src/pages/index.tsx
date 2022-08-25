import Head from "next/head";

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
