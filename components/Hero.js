import React from "react";
import Image from "next/image";

import { BsFacebook,BsLine,BsInstagram} from 'react-icons/bs';


export default function Hero() {
  return (
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
   
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">

<div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <Image src="/assets/jame.jpg" width={200} height={250}
             alt=""
             className="h-full w-full"/>
    </div>

    <h2 className="mt-4 font-bold text-xl">Sebastian Bennett</h2>
    <h6 className="mt-2 text-sm font-medium">Founder</h6>

    <p className="text-xs text-gray-500 text-center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
    </p>

    <ul className="flex flex-row mt-4 space-x-2">
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-facebook"></i>
            </a>
        </li>
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-instagram"></i>
            </a>
        </li>
    </ul>
</div>
<div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <Image src="/assets/jame.jpg" width={200} height={250}
             alt=""
             className="h-full w-full"/>
    </div>

    <h2 className="mt-4 font-bold text-xl">Sebastian Bennett</h2>
    <h6 className="mt-2 text-sm font-medium">Founder</h6>

    <p className="text-xs text-gray-500 text-center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
    </p>

    <ul className="flex flex-row mt-4 space-x-2">
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-facebook"></i>
            </a>
        </li>
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-instagram"></i>
            </a>
        </li>
    </ul>
</div>
<div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <Image src="/assets/jame.jpg" width={200} height={250}
             alt=""
             className="h-full w-full"/>
    </div>

    <h2 className="mt-4 font-bold text-xl">Sebastian Bennett</h2>
    <h6 className="mt-2 text-sm font-medium">Founder</h6>

    <p className="text-xs text-gray-500 text-center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
    </p>

    <ul className="flex flex-row mt-4 space-x-2">
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-facebook"></i>
            </a>
        </li>
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-instagram"></i>
            </a>
        </li>
    </ul>
</div>
<div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <Image src="/assets/jame.jpg" width={200} height={250}
             alt=""
             className="h-full w-full"/>
    </div>

    <h2 className="mt-4 font-bold text-xl">Sebastian Bennett</h2>
    <h6 className="mt-2 text-sm font-medium">Founder</h6>

    <p className="text-xs text-gray-500 text-center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
    </p>

    <ul className="flex flex-row mt-4 space-x-2">
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-facebook"></i>
            </a>
        </li>
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                <i className="fab fa-instagram"></i>
            </a>
        </li>
    </ul>
</div>


</div>
</section>
  );
}
