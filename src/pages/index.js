import Head from "next/head";
import "../styles/globals.css";
import ModulesPathway from "../components/ModulesPathway";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center">
      <Head>
        <title>Adulting - A Guide to Becoming Independent</title>
        <meta name="description" content="A no BS guide to becoming independent" />
      </Head>

      {/* Title */}
      <h1 className="text-6xl font-bold text-gray-100 mb-4 mt-12">Adulting</h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-400 mb-12">A no BS guide to becoming independent</p>

      {/* Vertical Modules Pathway */}
      <ModulesPathway />
    </div>
  );
}
