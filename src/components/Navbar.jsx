import React from "react";
import Link from "next/link";
import { PiShoppingCart } from "react-icons/pi";
import { Forum } from 'next/font/google';

const forum = Forum({ subsets: ['latin'], weight: ['400'] });

export default function Navbar() {
    return (
        <nav className={`${forum.className} flex flex-col md:flex-row items-center justify-between w-screen px-10 py-3 bg-amber-100`}>
            <h1 className="text-3xl text-amber-950"><Link href="/">ScriptAndScribe</Link></h1>
            <div className="">
                <ul className="flex items-center gap-5 font-medium text-lg">
                    <li className="px-3 rounded-full duration-700 ease-in-out hover:bg-amber-950  hover:text-white"><Link href="/">Series</Link></li>
                    <li className="px-3 rounded-full duration-700 ease-in-out hover:bg-amber-950  hover:text-white"><Link href="/">Shop</Link></li>
                    <li className="p-2 rounded-full duration-700 ease-in-out hover:bg-amber-950  hover:text-white"><Link href="/"><PiShoppingCart className="text-2xl"/></Link></li>
                </ul>
            </div>
        </nav>
    )
}