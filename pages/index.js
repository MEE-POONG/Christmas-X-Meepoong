import Navbar from "../components/navbar";
import Head from "next/head";
import CardLeft from "../components/CardLeft";
import ParticleBackground from "./ParticleBackground";
import Footer from "../components/Footer";
import CardAds from "../components/CardAds";
import AOS from 'aos';
import "aos/dist/aos.css"
import Cardtwo from "../components/Cardtwo";
AOS.init();



export default function Home() {
  return (
    <div className="h-screen ">
      <Head>
        {" "}
        <title>Christmas X Meepoong</title>
      </Head>
      <Navbar />

      <CardLeft /> 
    
      <CardAds />

      <Cardtwo /> 
      <div className="z-0">
        {" "}
        {/* <ParticleBackground /> */}
      </div>

      <Footer />
 
    </div>
  );
}
