import Navbar from "../components/navbar";
import React,{useEffect} from "react";
import Head from "next/head";
import CardLeft from "../components/CardLeft";
import ParticleBackground from "./ParticleBackground";
import Footer from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'
import ChatBox from "../components/ChatBox";


  const Sliding = () => {
    useEffect(() => {
    Aos.init({duration : 2000});
    }, []);
  return (
    <body>
    <div className="h-screen ">
      <Head>
        {" "}
        <title>Christmas X Meepoong</title>
      </Head>
      <Navbar />

      <CardLeft />  
 
      {/* <Signin/> */}

      <div className="z-0">
        {" "}
        <ParticleBackground />
    {/* <ChatBox/> */}
    
      </div>
 
      <Footer /> 
 
    </div>
    </body>
  );
}
export default Sliding;
