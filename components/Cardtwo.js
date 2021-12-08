import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CardAds() {
  return (
    <section
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      className="relative pt-12 bg- z-40 pt-10 "
    >
      <div className="items-center flex flex-wrap gird grid-cols-2 ">
        
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className=" p-3 text-center inline-flex items-center justify-center w-40 h-40 mb-6 shadow-lg rounded-full bg-black mt-8"
            >
        
      <Image  className="max-w-full rounded-lg shadow-lg" src="/assets/logo.webp" width = {150} height = {120} />
            </div>

            <h3
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-3xl font-semibold text-Black"
            >
              อยากมีเว็บไซต์หน้าร้าน รองรับทุกแพลทฟอร์ม 
            </h3>
            <p
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="mt-4 text-lg leading-relaxed text-blue-500"
            >
              มองหาคนทำเว็บ  อยากมีเว็บไซต์หน้าร้าน ปรึกษาเรามีพุง กับราคาสบายกระเป๋า เริ่มต้นที่ 5,500 ฿ หรือสนใจติดต่อสอบถามเพิ่มเติม 
            </p>
            <ul
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="list-none mt-6"
            >
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-black mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blue-700">รับงานออกแบบเว็บไซต์</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-black mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blue-700">สร้างแอปพลิเคชั่น</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-black  mr-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blue-700">รองรับทุกแพลทฟอร์ม</h4>
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
          data-aos-duration="500"
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
