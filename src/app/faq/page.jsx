import React from 'react'
import Link from 'next/link'
import { LuExternalLink } from "react-icons/lu";
import { BiUnderline } from 'react-icons/bi';

function page() {
  return (
    <div className='min-h-screen px-10 py-10 bg-amber-100'>
      <h2 className='text-2xl pt-5 font-bold'>How do I create a personalized storybook?</h2>
      <p className='text-amber-800 pl-5'>
      Creating a personalized storybook is simple:<br/>
      Choose a story theme.<br/>
      Provide character details, including names and photos.<br/>
      Customize the storyline.<br/>
      Place your order, and we’ll craft your unique book!<br/>
      <span className='flex items-center gap-2'>
        For more details <Link href={"/process"} className='w-fit px-2 text-neutral-900 bg-neutral-300 font-semibold border-[1px] border-neutral-500 flex items-center gap-1'>visit <LuExternalLink /></Link>
      </span>
      </p>
      <h2 className='text-2xl pt-5 font-bold'>Can the characters in my book look like the people I choose?</h2>
      <p className='text-amber-800 pl-5'>
      Yes! Our AI-powered illustrations generate characters based on the photos you provide, ensuring a close resemblance to real-life individuals.
      </p>

      <h2 className='text-2xl pt-5 font-bold'>How long does it take to receive my book?</h2>
      <p className='text-amber-800 pl-5'>
      Digital Books: Delivered via email within 3-5 business days.
      </p>
      <p className='text-amber-800 pl-5'>
      Printed Books: Shipped within 7-10 business days (delivery time depends on your location).
      </p>
      <h2 className='text-2xl pt-5 font-bold'>What occasions are best for a personalized book?</h2>
      <p className='text-amber-800 pl-5'>
      Our books make perfect gifts for:</p>
      <ul className='text-amber-800 pl-5'>
        <li className='pl-5'>
        Birthdays & Anniversaries
        </li>
        <li className='pl-5'>
        Valentine’s Day & Weddings
        </li>
        <li className='pl-5'>
        Baby Showers & New Parents
        </li>
        <li className='pl-5'>
        Family & Friendship Celebrations
        </li>
        <li className='pl-5'>
        Employee Appreciation & Corporate Gifting
        </li>
        <li className='pl-5'>
        . . . and many more
        </li>
      </ul>
      <h2 className='text-2xl pt-5 font-bold'>Can I write my own story?</h2>
      <p className='text-amber-800 pl-5'>
      Yes! If you have a special story in mind, you can provide details, and we’ll craft a book around your idea while keeping it engaging and visually appealing.
      </p>

      <h2 className='text-2xl pt-5 font-bold'>Do you offer refunds or cancellations?</h2>
      <p className='text-amber-800 pl-5'>
      Since all books are personalized, we <u>do not offer cancellations or refunds.</u> However, if there is any damage or printing issue, we will replace it.
      </p>

      <h2 className='text-2xl pt-5 font-bold'>What are the payment options?</h2>
      <p className='text-amber-800 pl-5'>
      We accept secure payments via credit/debit cards, UPI, and digital wallets.
      </p>

      <h2 className='text-2xl pt-5 font-bold'>Can I order books in bulk?</h2>
      <p className='text-amber-800 pl-5'>
      Yes! We offer bulk orders for corporate gifting, schools, and events. Contact us for special pricing.
      </p>

      <h2 className='text-2xl pt-5 font-bold'>How do I contact customer support?</h2>
      <p className='w-full text-amber-800 pl-5 flex-warp items-center gap-2'>
      For any inquiries, reach out to us via email at <b>[ swayanshusahoo734@gmail.com ]</b> or through our <Link href={"/process"} className='w-fit px-2 text-neutral-900 bg-neutral-300 font-semibold border-[1px] border-neutral-500 flex items-center gap-1'>Contact Us<LuExternalLink /></Link> page.
      </p>
    </div>
  )
}

export default page