import React from 'react'

function page() {
  return (
    <div className='min-h-screen px-10 pt-10 pb-10 bg-amber-100'>
      <h2 className='text-3xl'>Shipping & Delivery Policy</h2>
      <p className='text-lg'>
        Orders are processed within the specified time and shipped to the provided address.<br/>
        Delivery timelines vary based on location.<br/>
        We are not responsible for delays caused by shipping carriers or unforeseen circumstances.
      </p>
    </div>
  )
}

export default page