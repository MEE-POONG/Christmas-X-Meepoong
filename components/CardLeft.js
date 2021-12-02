/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";


function card() {
  return (
    <div className="w-full bg-card">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-red-600">
            สุขสันต์วันคริสต์มาสและสวัสดีปีใหม่
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Mery Christmas And Happy NewYears!
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center z-50">
            <div className="mb-8">
              <Image
                className="object-center object-cover rounded-full "
                src="/assets/ch1-01.png"
                width={144}
                height={144}
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-white font-bold mb-2">
                ดวงของคุณในปี 2022 (ดูครั้งเดียวพอ){" "}
              </p>

              <p className="text-base text-gray-400 font-normal border border-2 border-white rounded-lg mt-5 p-5 ">
                ความรัก : สำหรับคนโสดคุณจะมีเสน่ห์ขึ้นมาก จะมีคนเข้าหา
                อยากพัฒนาความสัมพันธ์กับคุณ
                แต่คุณก็จะยังอยากเลือกอยู่โดยที่ยังไม่ตัดสินใจกับใคร
                ส่วนคนที่มีคู่แล้ว คนรักจะทำตัวโรแมนติก
                หรืออยากพัฒนาความสัมพันธ์กับเรามากขึ้น{" "}
              </p>
              <p className="text-base text-gray-400 font-normal border border-2 border-white rounded-lg mt-5 p-5 ">
                การเงิน : ค่าใช้จ่ายของคุณยังคงเยอะอยู่
                อาจมีค่าใช้จ่ายเกี่ยวกับบุตร บริวารเข้ามามากขึ้น
                และอาจมีรายจ่ายแอบแฝงเยอะ
                ต้องระวังการหมุนเงินไม่ค่อยทันในช่วงปลายเดือนอีกด้วย
                และต้องพยายามกันเงินสำรองเอาไว้มากหน่อย{" "}
              </p>
              <p className="text-base text-gray-400 font-normal border border-2 border-white rounded-lg mt-5 p-5 ">
                การงาน : ถ้าคิดจะเปลี่ยนแปลงอะไรในช่วงนี้ก็จะมีโอกาสมาให้เลือก
                มีคนช่วยเหลือ หรืออุ้มคุณไปวางในที่ที่คุณอยากจะไปเลย
                คิดหรือเสนออะไรไปมีคนเห็นด้วยหมด ขออะไรก็ได้{" "}
              </p>

              <div className="mt-2">
                <button className="cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  เช็คดวงของคุณ
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center z-50">
            <div className="mb-8">
              <Image
                className="object-center object-cover rounded-full "
                src="/assets/ch1-01.png"
                width={144}
                height={144}
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-white font-bold mb-1 ">
                ร่วมอวยพรปีใหม่ ปี 2022{" "}
              </p>
              <hr></hr>
              <p className="text-80 text-white font-bold mb-2">
                คำอวยพรทั้งหมด{" "}
              </p>

              <div className="text-base  text-gray-400 font-normal border border-2 border-white rounded-lg mt-5 p-5 ">
                ปลาหยุดลาออก
              </div>
              <div className="text-base text-gray-400 font-normal border border-2 border-white rounded-lg mt-5 p-5 ">
                ทรงพระเจริญ
              </div>
              <div className="text-base text-gray-400 font-normal border border-2 border-white rounded-lg mt-5 p-5 ">
                ปลาหยุดลาออก
              </div>
              <div className="text-base text-gray-400 font-normal border border-2 border-white rounded-lg mt-5 p-5 ">
                ปลาหยุดลาออก
              </div>
              <div className="text-base text-gray-400 font-normal border border-2 border-white rounded-lg mt-5 p-5 ">
                ปลาหยุดลาออก
              </div>
              </div>
              <div className="mt-2">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  ร่วมอวยพร
                </button>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default card;
