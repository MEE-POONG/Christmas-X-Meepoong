import react from "react";
import Navbar from "../components/navbar";
import Head from "next/head";


import CountdownTimer from "../components/CountdownTimer";


export default function Home() {
  return (
    <div>

{/* 
   <Make/> */}
      <Head>
        {" "}
        <title>Christmas X Meepoong</title>
      </Head>
      <Navbar/>
      <CountdownTimer
      CountdownTimestampMs={164367300000} />
    
    </div>
  );
}
