import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Cardtwo() {

  return (  
<div>

<section className="pt-20 pb-20">
<div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold  text-blueGray-700">Here are our heroes</h2>
              <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          </div>
  <div className="flex flex-wrap">
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <Image alt="..." src="/assets/tess.jpg" width={350} height={350} className="shadow-lg rounded-full mx-auto max-w-120-px"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold text-blueGray-700">Ryan Tompson</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold"> Web Developer</p>
          <div className="mt-6">
            <button className="bg-indigo-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-twitter"></i></button><button className="bg-indigo-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-facebook-f"></i></button><button className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-dribbble"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <Image alt="..." src="/assets/tess.jpg" width={350} height={350} className="shadow-lg rounded-full mx-auto max-w-120-px"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold text-blueGray-700">Romina Hadid</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
            Marketing Specialist
          </p>
          <div className="mt-6">
            <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-google"></i></button><button className="bg-indigo-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <Image alt="..." src="/assets/tess.jpg" width={350} height={350}className="shadow-lg rounded-full mx-auto max-w-120-px"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold text-blueGray-700">Alexa Smith</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">UI/UX Designer </p>
          <div className="mt-6">
            <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-google"></i></button><button className="bg-indigo-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-twitter"></i></button><button className="bg-gray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>


    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div className="px-6">
        <Image alt="..." src="/assets/tess.jpg" width={350} height={350} className="shadow-lg rounded-full mx-auto max-w-120-px"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold text-blueGray-700">Jenna Kardi</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">Founder and CEO</p>
          <div className="mt-6">
            <button className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-dribbble"></i></button><button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-google"></i></button><button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-twitter"></i></button><button className="bg-gray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
     
  );
}
