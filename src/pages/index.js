import Head from "next/head";
import Honeycomb from "../components/Honeycomb";

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <Head>
        <title>Honeycomb Grid</title>
      </Head>
      <Honeycomb />
    </div>
  );
}
