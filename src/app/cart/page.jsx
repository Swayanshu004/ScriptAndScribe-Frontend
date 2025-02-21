import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <div>
        <div className="min-h-screen px-10 bg-amber-100">
            <h2 className="pt-10 text-amber-950 text-3xl border-b-[1px] border-amber-900">Cart</h2>
            <div className='bg-neutral-50 w-full h-fit p-5 flex flex-col md:flex-row items-start justify-between my-5'>
                <Image 
                className='h-30 w-20 border-[1px] border-amber-950'
                src={'/image.jpg'}
                width={1000}
                height={1000}
                alt='image'/>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-xl font-semibold'>name of the book</h2>
                    <p>description of the book</p>
                </div>
                <div className='md:w-1/6 py-5 md:py-0'>
                    <h2 className='text-xl font-semibold'>Quantity</h2>
                    <div className='w-full md:w-2/5 flex items-center justify-between gap-3 mt-2'>
                        <button className='border-[1px] border-amber-950 w-6 h-6 rounded-full hover:bg-amber-950 hover:text-white'>-</button>
                        <p>2</p>
                        <button className='border-[1px] border-amber-950 w-6 h-6 rounded-full hover:bg-amber-950 hover:text-white'>+</button>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Subtotal</h2>
                    <p>1998 ₹</p>
                </div>
            </div>
            <div className='bg-neutral-50 w-full h-fit p-5 flex flex-col md:flex-row items-start justify-between my-5'>
                <Image 
                className='h-30 w-20 border-[1px] border-amber-950'
                src={'/image3.jpg'}
                width={1000}
                height={1000}
                alt='image'/>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-xl font-semibold'>name of the book</h2>
                    <p>description of the book</p>
                </div>
                <div className='md:w-1/6 py-5 md:py-0'>
                    <h2 className='text-xl font-semibold'>Quantity</h2>
                    <div className='w-full md:w-2/5 flex items-center justify-between gap-3 mt-2'>
                        <button className='border-[1px] border-amber-950 w-6 h-6 rounded-full hover:bg-amber-950 hover:text-white'>-</button>
                        <p>2</p>
                        <button className='border-[1px] border-amber-950 w-6 h-6 rounded-full hover:bg-amber-950 hover:text-white'>+</button>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Subtotal</h2>
                    <p>1998 ₹</p>
                </div>
            </div>
            <div className='bg-neutral-50 w-full h-fit p-5 flex flex-col md:flex-row items-start justify-between my-5'>
                <Image 
                className='h-30 w-20 border-[1px] border-amber-950'
                src={'/image5.jpg'}
                width={1000}
                height={1000}
                alt='image'/>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-xl font-semibold'>name of the book</h2>
                    <p>description of the book</p>
                </div>
                <div className='md:w-1/6 py-5 md:py-0'>
                    <h2 className='text-xl font-semibold'>Quantity</h2>
                    <div className='w-full md:w-2/5 flex items-center justify-between gap-3 mt-2'>
                        <button className='border-[1px] border-amber-950 w-6 h-6 rounded-full hover:bg-amber-950 hover:text-white'>-</button>
                        <p>1</p>
                        <button className='border-[1px] border-amber-950 w-6 h-6 rounded-full hover:bg-amber-950 hover:text-white'>+</button>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Subtotal</h2>
                    <p>1998 ₹</p>
                </div>
            </div>
            <div className='w-full border-t-[1px] border-amber-900 flex justify-between'>
            <h2 className='text-3xl'>Total</h2>
            <h2 className='text-3xl'>5994 ₹</h2>
            </div>
            <div className='w-full flex justify-end pt-3 pb-10'>
            <button className='px-5 py-3 bg-amber-950 text-amber-100 hover:scale-95 duration-500'>Place Order</button>
            </div>
        </div>
    </div>
  )
}

export default page