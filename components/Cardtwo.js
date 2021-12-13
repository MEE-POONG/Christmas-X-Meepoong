import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsFacebook,BsLine,BsInstagram} from 'react-icons/bs';


export default function CardAds() {
  return (
    <section
    data-aos="fade-up"
    data-aos-duration="20000" 
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      className="relative pt-12 bg- z-40 pt-10 mt-4  "
    >
      <div className="items-center flex flex-wrap gird grid-cols-2 ">
        
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className=" p-3 text-center inline-flex items-center justify-center w-40 h-40 mb-6  rounded-full bg-white mt-8"
            >
        
      <Image  className="max-w-full rounded-lg shadow-lg" src="/assets/ch4-01.png" width = {250} height = {260} />
            </div>

            <h3
              data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-3xl font-semibold text-Black"
            >
              อยากมีเว็บไซต์หน้าร้าน รองรับทุกแพลทฟอร์ม 
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="mt-4 text-lg leading-relaxed text-black pb-6 "
            >
              มองหาคนทำเว็บ  อยากมีเว็บไซต์หน้าร้าน ปรึกษาเรามีพุง กับราคาสบายกระเป๋า เริ่มต้นที่ 5,500 ฿ หรือสนใจติดต่อสอบถามเพิ่มเติม 
            </p>
            <ul >
              <li className="" data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false">
                <div className="flex items-center">
                  <div >
                    <span className="text-xl text-blue-500 font-semibold px-8  py-1  inline-block" >
                    <a href="https://www.facebook.com/meepoong">     <BsFacebook/></a>
                    </span>
                  </div>
                  <div>
               <a href="https://www.facebook.com/meepoong">   <h4  className="text-black">Mee Poong Group - รับทำเว็บไซต์ กราฟิกดีไซน์</h4></a>  
                  </div>
                </div>
              </li>
              <li className="" data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false">
                <div className="flex items-center">
                  <div>
                  <span className="text-xl text-green-500 font-semibold uppercase  py-1 px-8 inline-block"
                  >
                    <a href="https://lin.ee/bIG6HiG">  <BsLine/></a>
                    </span>
                  </div>
                  <div>
                  <a href="https://lin.ee/bIG6HiG"> <h4 className="text-black">Mee Poong Group</h4></a> 
                  </div>
                </div>
              </li>
              <li className="" data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false">
                <div className="flex items-center">
                  <div>
                  <span className="text-xl text-indigo-800 font-semibold uppercase   py-1 px-8  inline-block">
                  <a href="https://www.instagram.com/meepoonggroup/">  <BsInstagram/> </a>
                    </span>
                  </div>
                  <div>
                <a href="https://www.instagram.com/meepoonggroup/"> <h4 className="text-black">meepoonggroup</h4></a>   
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>


        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          data-aos="flip-left"
          data-aos-duration="8000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-full md:w-4/12 ml-auto mr-auto px-4"
        >
          <Image
            className="max-w-full rounded-lg shadow-lg"
            src="/assets/pack.jpg"
            width={1000}
            height={1000}
          />
        </motion.div>

      </div>
    </section>
  );
}
