/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import Count from "./count";
import { useEffect, useState } from "react";




function navbar() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");


  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  return (
    <div className="z-50">
     
 
  
      <nav className=" navbar navbar-expand-lg navbar-light fixed-top mb-12 flex items-center justify-between flex-wrap bg-nav p-6 z-50 " style={{
        background: `rgba(100, 150, 155, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}>
  
        <div className="flex items-center flex-shrink-0 text-white z-50 ">
          
          <div className="res-one  ">
            <Image
              className=""
              src="/assets/mc-01.png"
              width={90}
              height={90}
            />
          </div>
          <span  className=" h1 text-4xl sm:text-xl md:text-2xl lg:text-4xl font-semibold  tracking-tight lg:flex lg:items-center  fontnav  ">
          EEPOONG
          </span>
        

   

 

	

        </div>
        <div className=" font-semibold text-xl tracking-tight lg:flex lg:items-center lg:w-auto  md:block place-con-right mr-12 hidden sm:hidden md:hidden lg:block ">
          <Count />
        </div>
      </nav>
    
    </div>


  );
}

export default navbar;
