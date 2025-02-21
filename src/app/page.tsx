'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Forum } from 'next/font/google';

const forum = Forum({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <main className={`${forum.className} min-h-screen bg-amber-100 px-10 py-20`}>
      <div className="text-5xl text-amber-950 font-medium">
        <h1>Turn Your Memories into a Storybook</h1>
        <h1>A Gift to Cherish Forever!</h1>
        <div className="h-16 relative">
        <Link href={"/"} className="px-5 py-2 text-lg bg-amber-950 text-amber-100 hover:scale-105 duration-500 ease-in-out absolute mt-4">Create Your Storybook</Link>
        </div>
      </div>
      <h2 className="pt-14 text-amber-950 text-3xl font-medium border-b-[1px] border-amber-900 mb-5">Our Collection</h2>
      <div className="flex flex-col gap-10 md:gap-5 md:flex-row justify-between items-center">
        <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden">
          <Image 
          src={`/image.jpg`}
          width={1000}
          height={1000}
          alt="picture"
          />
        </div>
        <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden">
          <Image 
          src={`/image2.jpg`}
          width={1000}
          height={1000}
          alt="picture"
          />
        </div>
        <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden">
          <Image 
          src={`/image3.jpg`}
          width={1000}
          height={1000}
          alt="picture"
          />
        </div>
        <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden">
          <Image 
          src={`/image4.jpg`}
          width={1000}
          height={1000}
          alt="picture"
          />
        </div>
        <div className="w-56 h-fit border-amber-950 border-[1px] bg-white overflow-hidden">
          <Image 
          src={`/image5.jpg`}
          width={1000}
          height={1000}
          alt="picture"
          />
        </div>
      </div>
      <Link 
      href={"/"}
      className="text-xl text-amber-950 hover:font-bold">
        <div className="text-right mt-2 hover:-translate-x-4 ease-in-out duration-500 ">See All..</div>
      </Link>
      <Link href={"/"} 
      className="px-5 py-2 flex items-center gap-5 w-fit text-lg bg-amber-950 text-amber-100 hover:scale-105 duration-500 ease-in-out">Create Your Own</Link>
      <div>
        <h2 className="pt-20 text-amber-950 text-3xl font-medium border-b-[1px] border-amber-900 mb-5">Gifting Option For</h2>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-around">
        <div className="w-56 h-32 flex items-center justify-center bg-transparent border-amber-700 border-[2px] overflow-hidden text-3xl hover:text-5xl hover:border-amber-100 duration-1000 ease-in-out">
          <h2 className="text-amber-950 font-semibold">Childrens</h2>
        </div>
        <div className="w-56 h-32 flex items-center justify-center bg-transparent border-amber-700 border-[2px] overflow-hidden text-3xl hover:text-5xl hover:border-amber-100 duration-1000 ease-in-out">
          <h2 className="text-amber-950 font-semibold">Couples</h2>
        </div>
        <div className="w-56 h-32 flex items-center justify-center bg-transparent border-amber-700 border-[2px] overflow-hidden text-3xl hover:text-5xl hover:border-amber-100 duration-1000 ease-in-out">
          <h2 className="text-amber-950 font-semibold">Friends</h2>
        </div>
        <div className="w-56 h-32 flex items-center justify-center bg-transparent border-amber-700 border-[2px] overflow-hidden text-3xl hover:text-4xl hover:border-amber-100 duration-1000 ease-in-out">
          <h2 className="text-amber-950 font-semibold">Grand Parents</h2>
        </div>
      </div>
      </div>
      <div>
        <h2 className="pt-20 text-amber-950 text-3xl font-medium border-b-[1px] border-amber-900 mb-5">5 Step Personalization Flow</h2>
        <div>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">Step 1: Upload referance photos (used to design the character).</h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">Step 2: Choose a story theme (adventure, love story, learning, tour Own).</h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">Step 3: Select book format (Softcover, Hardcover, Collector’s Edition).</h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">Step 4: Add deatails </h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">Step 5: Preview & Place Order.</h2>
        </div>
      </div>
    </main>
  );
}
