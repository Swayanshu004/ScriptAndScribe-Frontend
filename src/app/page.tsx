import React from "react";
import { Forum } from 'next/font/google';

const forum = Forum({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <main className={`${forum.className} min-h-screen bg-amber-200 flex flex-row justify-start px-10`}>
      <div className="mt-16 text-5xl text-amber-950 font-medium">
        <h1>Turn Your Memories into a Storybook</h1>
        <h1>A Gift to Cherish Forever!</h1>
        <button className="px-5 py-2 text-lg bg-amber-950 text-amber-100 font-bold hover:text-amber-300 duration-500 ease-in-out">Create Your Storybook</button>
      </div>
    </main>
  );
}
