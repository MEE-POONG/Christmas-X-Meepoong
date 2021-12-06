import React from 'react'
import Image from 'next/image'

export default function CardAds() {
    return (



<section className="relative pt-12 bg-blueGray-50">
<div className="items-center flex flex-wrap">
  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
    <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"/>
  </div>
  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div className="md:pr-12">
      <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-40 h-40 mb-6 shadow-lg rounded-full bg-black mt-8">
      <Image  className="max-w-full rounded-lg shadow-lg" src="/assets/logo.webp" width = {150} height = {120} />
      </div>
      <h3 className="text-3xl font-semibold">WHO ARE WE?</h3>
      <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
      เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต
      </p>
      <ul className="list-none mt-6">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-black mr-3"><i className="fas fa-fingerprint"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
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
              <h4 className="text-blueGray-500">สร้างแอปพลิเคชั่น</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-black  mr-3"><i className="far fa-paper-plane"></i></span>
                </div>
            <div>
              <h4 className="text-blueGray-500">รองรับทุกแพลทฟอร์ม</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<footer className="relative  pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
      
      </div>
    </div>
  </div>
</footer>
</section>
    )
}