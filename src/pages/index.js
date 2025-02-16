import Head from "next/head";
import { useState, useEffect } from "react";

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
    </div>
  );
}
