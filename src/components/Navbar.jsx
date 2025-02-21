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
                    <li className="px-3 rounded-full ease-in-out hover:-translate-y-1 hover:font-bold duration-500"><Link href="/store">Store</Link></li>
                    <li className="px-3 rounded-full ease-in-out hover:-translate-y-1 hover:font-bold duration-500"><Link href="/series">Series</Link></li>
                    <li className="px-3 rounded-full ease-in-out hover:-translate-y-1 hover:font-bold duration-500"><Link href="/book">Book</Link></li>
                    <li className="p-2 rounded-full ease-in-out hover:-translate-y-1 hover:font-bold duration-500"><Link href="/cart"><PiShoppingCart className="text-2xl"/></Link></li>
                </ul>
            </div>
        </nav>
    )
}