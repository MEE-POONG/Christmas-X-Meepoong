import Navbar from "../components/navbar";
import React,{useEffect} from "react";
import Head from "next/head";
import CardLeft from "../components/CardLeft";
import ParticleBackground from "./ParticleBackground";
import Footer from "../components/Footer";
import CardAds from "../components/CardAds";
import Cardtwo from "../components/Cardtwo";
import Aos from "aos";
import 'aos/dist/aos.css'
import Form from "../components/Form";
import TodoList from "../components/TodoList";





  const Sliding = () => {
    useEffect(() => {
    Aos.init({duration : 2000});
    }, []);
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
        <Form/>
        <TodoList/>
 
      </div>

      <Footer />
 
    </div>
  );
}
export default Sliding;
