import React from 'react'
import Image from 'next/image'

function Card() {
    return (
        <div data-aos="zoom-right"
        data-aos-duration="2500" 
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <Image src="/assets/bg-bg.jpg" height={400} width={2000} />
      </div>
    )
}

export default Card
