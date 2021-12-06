/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Pray from "./RandomArray/modal";

export default function Card() {
  return (
    <div className="w-full bg-card">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 ">
          <div className="w-full bg-white rounded-lg shadow-lg p-12 flex flex-col justify-center items-center z-50">
            <div className="mb-8">
              <Image
                className="object-center object-cover rounded-full "
                src="/assets/ch1-01.png"
                width={144}
                height={144}
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-red-500 font-bold mb-2">
                ดวงของคุณในปี 2022 (ดูครั้งเดียวพอ){" "}
              </p>

              <hr></hr>
              <div className="mt-2">
                <Pray />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
