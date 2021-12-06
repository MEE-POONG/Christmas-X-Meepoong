import Navbar from "../components/navbar";
import Head from "next/head";
import CardLeft from "../components/CardLeft";
import ParticleBackground from "./ParticleBackground";
import Footer from "../components/Footer";
import CardAds from "../components/CardAds";

export default function Home() {
  return (
    <div>
      <Head>
        {" "}
        <title>Christmas X Meepoong</title>
      </Head>
      <Navbar />

      <CardLeft />
      <CardAds/>
      <ParticleBackground />

      <Footer />
    </div>
  );
}
