import Head from "next/head";
import HexGrid from "../components/HexGrid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hexagonal Grid</title>
      </Head>
      <HexGrid />
    </div>
  );
}