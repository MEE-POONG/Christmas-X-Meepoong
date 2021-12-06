import React from "react";
import Image from "next/image";
import Count from "./count";
import { useEffect, useState } from "react";

function navbar() {
  return (
    <div className="">
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white  ">
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
      {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <Image src="/assets/bg-bg.jpg" height={400} width={2000} />
      </div> */}
    </div>
  );
}

export default navbar;
