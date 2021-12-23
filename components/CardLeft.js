/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Pray from "./RandomArray/modal";




export default function Card() {
  return (
    <div   className="py-24 w-full  bg-card lg:h-screen sm:h-1/2 md:h-screen z-40">
      <section className=" lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-24 z-40 ">
 
        <div className=" z-40  ">
          <div className=" bg-gray-100 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center z-40">
            <div className="mb-8 -mt-28 z-40">
              <Image
                className="object-center object-cover rounded-full "
                src="/assets/ch5-01.png"
                width={200}
                height={200}
              />
              
            </div>
            <div  className="text-center ">
              <p className="text-xl text-red-500 font-bold mb-2">
                ดวงของคุณในปี 2022 {" "}
              </p>

              <div className="mt-2 z-40">
                <Pray />


              </div>
            </div>
          </div>
     
   
        </div>
     
      </section>
    </div>
  );
}
