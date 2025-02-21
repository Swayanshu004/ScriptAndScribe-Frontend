'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { HiCursorClick } from "react-icons/hi";

function page() {
    const [book , setBook] = useState(true);
    function handleToggle(val){
        setBook(val);
    }
  return (
    <div className='min-h-screen px-10 pb-20 bg-amber-100'>
        <div className='w-full flex justify-around text-amber-800 pt-10'>
            <button onClick={()=>{handleToggle(true)}} className={`${book ? 'bg-amber-950 text-amber-100' : 'bg-amber-100 border-[1px] border-amber-950'} py-3 text-xl font-semibold w-1/2 hover:scale-95 duration-300`}>Book</button>
            <button onClick={()=>{handleToggle(false)}} className={`${book ? 'bg-amber-100 border-[1px] border-amber-950' : 'bg-amber-950 text-amber-100'} py-3 text-xl font-semibold w-1/2 hover:scale-95 duration-300`}>Series</button>
        </div>
        {
            book ? 
            <div>
                <h2 className="pt-10 text-amber-950 text-3xl font-medium border-b-[1px] border-amber-900 mb-5">Our Prebuild Book Collection</h2>
                <div className="flex flex-col gap-10 md:gap-5 md:flex-row justify-between items-center">
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image2.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image3.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image4.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image5.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                </div>
                <h2 className="pt-10 text-amber-950 text-3xl font-medium ">Create Your Own Book</h2>
                <p className='text-amber-700 border-b-[1px] border-amber-900 pb-1 mb-5'>Customise according to your personal story and charecter</p>
                <div className='w-full h-fit flex items-center justify-center'>
                    <Link href={"/"} className="px-5 py-2 text-lg bg-amber-950 text-amber-100 font-medium flex items-center gap-4 hover:scale-105 duration-500 ">Create Your Storybook <HiCursorClick /></Link>
                </div>
            </div> :
            <div>
                <h2 className="pt-10 text-amber-950 text-3xl font-medium border-b-[1px] border-amber-900 mb-5">Our Prebuild Series Collection</h2>
                <div className="flex flex-col gap-10 md:gap-5 md:flex-row justify-between items-center">
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image2.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image3.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image4.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden hover:scale-105 duration-700">
                    <Image 
                    src={`/image5.jpg`}
                    width={1000}
                    height={1000}
                    alt="picture"
                    />
                </div>
                </div>
                <h2 className="pt-10 text-amber-950 text-3xl font-medium ">Create Your Own Series of Book</h2>
                <p className='text-amber-700 border-b-[1px] border-amber-900 pb-1 mb-5'>Customise according to your personal story and charecter</p>
                <div className='w-full h-fit flex items-center justify-center'>
                    <Link href={"/"} className="px-5 py-2 text-lg bg-amber-950 text-amber-100 font-medium flex items-center gap-4 hover:scale-105 duration-500 ">Create Your Series <HiCursorClick /></Link>
                </div>
            </div>
        }
    </div>
  )
}

export default page