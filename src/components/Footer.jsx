import React from 'react'
import Link from "next/link";
import { Forum } from 'next/font/google';
import { PiShoppingCart } from "react-icons/pi";    

const forum = Forum({ subsets: ['latin'], weight: ['400'] });

function Footer() {
  return (
    <footer className={`${forum.className} h-fit flex items-center justify-between w-screen px-10 py-3 bg-amber-200`}>
        <h1 className="w-1/2 text-3xl text-amber-950"><Link href="/">Footer</Link></h1>
        <div className="md:w-1/6">
            <ul className="flex flex-col items-end justify-between font-medium text-lg">
                <li className="px-3 rounded-full duration-700 ease-in-out hover:bg-amber-950 hover:text-white"><Link href="/">Series</Link></li>
                <li className="px-3 rounded-full duration-700 ease-in-out hover:bg-amber-950 hover:text-white"><Link href="/">Shop</Link></li>
            </ul>
        </div>
        <div className="md:w-1/6">
            <ul className="flex flex-col items-end justify-between font-medium text-lg">
                <li className="px-3 rounded-full duration-700 ease-in-out hover:bg-amber-950 hover:text-white"><Link href="/">Series</Link></li>
                <li className="px-3 rounded-full duration-700 ease-in-out hover:bg-amber-950 hover:text-white"><Link href="/">Shop</Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer