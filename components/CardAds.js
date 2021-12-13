import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
export default function CardAds() {
    return (


<div className=''>

<section   data-aos="fade-up"
data-aos-duration="20000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"



className="relative pt-12 bg-blueGray-50 z-40  ">


<div className="items-center flex flex-wrap  py-5" >
  <motion.div    
       whileHover={{ scale: 1.02 }}
       transition={{
         type: "spring",
         stiffness: 260,
         damping: 20
       }}data-aos="fade-up"
      data-aos-duration="5000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" className="w-full md:w-4/12 ml-auto mr-auto px-4">

    <Image className="max-w-full rounded-lg shadow-lg" src="/assets/go.jpg" width={1000} height={1000}/>

  </motion.div>
  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div className="md:pr-12">

      <div data-aos="fade-up"
      data-aos-duration="5000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"className=" p-3 text-center inline-flex items-center justify-center w-40 h-40 mb-6 rounded-full  mt-8">

      <Image  className="max-w-full rounded-lg " src="/assets/ch2-01.png" width = {250} height = {250} />

      </div>
    
   
      <h3 data-aos="fade-up"
      data-aos-duration="5000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"className="text-3xl font-semibold">WHO ARE WE?</h3>
      <p data-aos="fade-up"
      data-aos-duration="5000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"className="mt-4 text-lg leading-relaxed text-blueGray-500">
      เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต
      </p>
      <ul data-aos="fade-up"
      data-aos-duration="5000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" className="list-none mt-6">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-black mr-3"><i className="fas fa-fingerprint"></i></span>
            </div>
            <div>
              <h4 className="text-blue-700">
                รับงานออกแบบเว็บไซต์
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-black mr-3"><i className="fab fa-html5"></i></span>
            </div>
            <div>
              <h4 className="text-blue-700">สร้างแอปพลิเคชั่น</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-black  mr-3"><i className="far fa-paper-plane"></i></span>
                </div>
            <div>
              <h4 className="text-blue-700">รองรับทุกแพลทฟอร์ม</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

</section>
</div>
    )
}