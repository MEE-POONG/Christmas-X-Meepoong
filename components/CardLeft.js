import React from 'react'
import Image from 'next/image';

function card() {
    return (
      
       
<section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 h-screen ">
  <header className="flex items-center justify-between  ">
    <h2 className="text-lg leading-6 font-medium text-black">Projects</h2>
   
  
  </header>
 
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
  <li className=" flex rounded-lg">
      
       
      <div className="flex p-6">
  <div className="flex-none w-44 relative">
    <Image src="/assets/giftbox.png" width={176} height={ 224} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
  </div>
  <form className="flex-auto pl-6">
    <div className="flex flex-wrap items-baseline">
      <h1 className="w-full flex-none font-semibold mb-2.5">
        Kids Jumpsuit
      </h1>
      <div className="text-4xl leading-7 font-bold text-purple-600">
        $39.00
      </div>
      <div className="text-sm font-medium text-gray-400 ml-3">
        In stock
      </div>
    </div>
    <div className="flex items-baseline my-8">
      
      <div className="ml-3 text-sm text-gray-500 underline">Size Guide</div>
    </div>
    <div className="flex space-x-3 mb-4 text-sm font-semibold">
      <div className="flex-auto flex space-x-3">
        <button className="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white" type="submit">Buy now</button>
        <button className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700" type="button">Add to bag</button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like">
        <svg width="20" height="20" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-gray-500">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>







    </li>
    <li className=" flex rounded-lg">
      <div className=" w-full flex items-center justify-center rounded-lg border-2 border-gray-200 text-sm font-medium py-4">
        New Project
      </div>
    </li>
  </ul>
</section>
    )
}

export default card;
