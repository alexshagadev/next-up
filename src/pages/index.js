import Head from "next/head";
import { useState, useEffect } from "react";
import DotGrid from "../components/DotGrid";

export default function Home() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <Head>
        <title>Dot Grid</title>
      </Head>
      {/* Ensure the DotGrid only renders after dimensions are available */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <DotGrid width={dimensions.width} height={dimensions.height} />
      )}
    </div>
  );
}
