import React from "react";
import Image from "next/image";

function navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src="/assets/logo.webp" width={90} height={54} />

          <span className="px-5 font-semibold text-xl tracking-tight">
            Meepong X Christmas
          </span>
        </div>
        <div className="block lg:hidden"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
      </nav>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="w-full  mx-auto">
          <Image src="/assets/bg-bg.jpg" height={400} width={2000} />
        </div>
        
      </div>
      <div className=" w-screen">
      <div className='box-content  w-4/5 h-28 mb-3 border-2 border-gray-300 rounded-lg px-3 py-2 bg-white  '></div>
      </div>  
    </div>
  );
}

export default navbar;
