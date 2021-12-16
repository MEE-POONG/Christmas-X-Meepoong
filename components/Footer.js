import React from "react";
import Image from 'next/image'
import Wave from 'react-wavify'

function Footer() {
  return (
<div data-aos="fade-right"
    data-aos-duration="100"  >
<Wave fill='#F0EDE7'
         data-aos="flip-left"
         data-aos-duration="1000"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.45,
          points: 3
        }}
  />
    <footer className="bg-snow w-full py-6 px-4  z-40 -mt-10" 
        >
    
        <div className="flex items-center justify-between my-4 z-40">
            <p className="text-black">All rights reserved</p>
            <p className="inline-flex text-black px-2 pt-6">
               <div className="res-one"> <Image src = "/" width={50} height={30} fill="#e53e3e" viewBox="0 0 24 24"  className="w-5 h-5 mx-1 pt-px text-red-600" stroke="currentColor"/> </div>
                    Copyright by 2021 MEE POONG CO., LTD</p>
            <div className="flex items-center">
                <a href="https://www.facebook.com/meepoong">
                    <svg className="h-6 w-6 fill-current text-blue-600 mr-6" viewBox="0 0 512 512">
                        <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
                    </svg>
                </a>
         
            </div>
        </div>
    </footer></div>
  );
}

export default Footer;
