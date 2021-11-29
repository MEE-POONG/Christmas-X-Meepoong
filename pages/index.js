// import react, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Head from "next/head";
import CardLeft from "../components/CardLeft";

import CountdownTimer from "../components/CountdownTimer";





export default function Home() {
  return (
    <div >

{/* 
   <Make/> */}
      <Head>
        {" "}
        <title>Christmas X Meepoong</title>
      </Head>
      <Navbar/>
      <CardLeft/>
    </div>
    
  );
}
