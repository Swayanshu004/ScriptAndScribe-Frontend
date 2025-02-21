import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { HiCursorClick } from "react-icons/hi";

function page() {
  return (
    <div>
        <div className="min-h-screen px-10 bg-amber-100">
            <div>
                <h2 className="pt-10 text-amber-950 text-3xl font-medium ">Create Your Own Book</h2>
                <p className='text-amber-700 border-b-[1px] border-amber-900 pb-1 mb-5'>Customise according to your personal story and charecter</p>
                <div className='w-full h-fit flex items-center justify-center'>
                    <Link href={"/"} className="px-5 py-2 text-lg bg-amber-950 text-amber-100 font-medium flex items-center gap-4 hover:scale-105 duration-500 ">Create Your Storybook <HiCursorClick /></Link>
                </div>
            </div>
            <h2 className="pt-10 text-amber-950 text-3xl font-medium border-b-[1px] border-amber-900 mb-5">Our Prebuild Book Collection</h2>
            <div className="flex flex-col gap-10 md:gap-5 md:flex-row justify-between items-center">
            <div className="w-60 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                <Image 
                src={`/image.jpg`}
                width={1000}
                height={1000}
                alt="picture"
                />
            </div>
            <div className="w-60 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                <Image 
                src={`/image2.jpg`}
                width={1000}
                height={1000}
                alt="picture"
                />
            </div>
            <div className="w-60 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                <Image 
                src={`/image3.jpg`}
                width={1000}
                height={1000}
                alt="picture"
                />
            </div>
            <div className="w-60 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                <Image 
                src={`/image4.jpg`}
                width={1000}
                height={1000}
                alt="picture"
                />
            </div>
            <div className="w-60 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                <Image 
                src={`/image5.jpg`}
                width={1000}
                height={1000}
                alt="picture"
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default page