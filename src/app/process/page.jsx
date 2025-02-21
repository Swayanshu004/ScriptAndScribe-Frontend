import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='min-h-screen px-10 py-10 bg-amber-100'>
      <h2 className='text-2xl '>At <b>ScriptAndScribe</b>, we craft personalized storybooks that are uniquely tailored to you or your loved ones.<br/>Every story is carefully designed to reflect your vision, capturing emotions, memories, and dreams in a beautifully illustrated book. </h2>
      <h2 className='text-3xl font-bold '>Here’s how we make it happen:</h2>
      <div className='pt-5'>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">
            1. Share Your Vision 
            <p className='font-medium'>Begin by telling us about your story idea! Whether it's a heartfelt gift, a childhood adventure, or a romantic tale, we customize everything based on your preferences.</p>
            </h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">2. Personalized Characters
          <p className='font-medium'>Upload few photos, and we’ll create a stunning illustrated character that resembles the person you want to feature in the story. <br/>From facial features to clothing styles, we ensure the character truly represents the story.</p>  
          </h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">
            3. Customized Storyline
            <p className='font-medium'>Our AI-driven storytelling process adapts the narrative to your selected theme, personality traits, and special moments you want to include. 
            <br/>Whether it’s an adventurous journey, a fairy tale, or a heartwarming memoir, we bring it to life.</p>
          </h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">4. Beautiful Illustrations
            <p className='font-medium'>Each page is carefully designed with vibrant illustrations that match the story’s tone and setting.
            <br/>The art style can be adjusted based on your preferences—modern, classic, whimsical, dreamy ..etc.</p>
          </h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">5. Review & Refine
            <p className='font-medium'>Before finalizing, we share a digital preview so you can suggest changes, ensuring every detail is just right.
            <br/>We’ll tweak the story, artwork, or characters to meet your expectations.</p>
          </h2>
          <h2 className="py-5 px-5 border-[1px] border-amber-700 mb-5 font-semibold text-xl hover:bg-amber-950 hover:translate-x-5 hover:text-amber-200 duration-700 ease-in-out">6. Print & Deliver
            <p className='font-medium'>Once perfected, we print your personalized storybook on high-quality materials and ship it to your doorstep</p>
          </h2>
          <h2 className='text-3xl font-bold py-10'>
          Whether it’s for a child’s bedtime story, a couple’s love story, or a family keepsake, ScriptAndScribe transforms your ideas into timeless, personalized books that tell stories the way you imagine them.
          </h2>
          <div className='h-fit relative pb-20'>
            <Link href={"/"} className="px-5 py-2 text-lg bg-amber-950 text-amber-100 hover:text-amber-200 hover:scale-105 duration-500 ease-in-out absolute">Gift a Tale That Lasts Forever!</Link>
          </div>
        </div>
    </div>
  )
}

export default page