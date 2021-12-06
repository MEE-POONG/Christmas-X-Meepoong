import Navbar from "../components/navbar";
import Head from "next/head";
import CardLeft from "../components/CardLeft";
import ParticleBackground from "./ParticleBackground";
import Footer from "../components/Footer";
import CardAds from "../components/CardAds";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import Card from "../components/card";
import Cardtwo from "../components/Cardtwo";


  
export default function Home() {
  useEffect (() =>{
Aos.init({duration: 2000});
   },[])
  return (
    <div>

      <Head>
        {" "}
        <title>Christmas X Meepoong</title>
      </Head>
    <Navbar />
 <Card/>
      <CardLeft />
      <CardAds/>
      <Cardtwo/>
      {/* <ParticleBackground /> */}

      <Footer />
    
    </div>
  );
}
