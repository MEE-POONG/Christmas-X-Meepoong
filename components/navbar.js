import React from "react";
import Image from "next/image";
import Count from "./count";


function navbar() {
  return (
    <div className=" sticky top-0 z-50">
      <nav className=" flex items-center justify-between flex-wrap bg-black p-6 z-50">
        <div className="flex items-center flex-shrink-0 text-white  z-50 ">
          <div className="res-one">
            <Image
              className=""
              src="/assets/logo.webp"
              width={90}
              height={54}
            />
          </div>
          <span className=" font-semibold text-xl tracking-tight lg:flex lg:items-center lg:w-auto hidden md:block  ">
            Meepong X Christmas
          </span>
        </div>
        <div className=" font-semibold text-xl tracking-tight lg:flex lg:items-center lg:w-auto  md:block place-con-right">
          <Count />
        </div>
      </nav>
    
    </div>
    
  );
}

export default navbar;
