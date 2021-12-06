import React from 'react'
import Image from 'next/image'

function Card() {
    return (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <Image src="/assets/bg-bg.jpg" height={400} width={2000} />
      </div>
    )
}

export default Card
