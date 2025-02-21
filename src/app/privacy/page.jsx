import React from 'react'

function page() {
  return (
    <div className='min-h-screen px-10 pt-10 pb-10 bg-amber-100'>
      <h2 className='text-2xl font-bold'>Privacy Policy</h2>
      <p className='font-thin text-amber-700'>Last updated on Feb 21th, 2025</p>
      <p className='text-lg text-amber-800'>At ScriptAndScribe, we are committed to protecting your privacy.
        <br/>This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website and purchase our personalized storybooks.
      </p>
      
      <ul>
        <li className='pt-5'>
          <b className='text-xl'>1. Information We Collect</b><br/>
          Personal details such as name, email address, shipping address, and payment information.<br/>
          Photos and details submitted for personalized book creation.<br/>
          Browsing and purchase history for improving user experience.
        </li>
        <li className='pt-5'>
          <b className='text-xl'>2. How We Use Your Information</b><br/>
          To process and fulfill your orders.<br/>
          To create personalized storybooks as per your provided details.<br/>
          To communicate updates, promotions, and order-related information.<br/>
          To improve our website and customer experience.
        </li>
        <li className='pt-5'>
          <b className='text-xl'>3. Data Protection & Security</b><br/>
          Your data is stored securely and is not shared with third parties except for payment processing and order fulfillment.<br/>
          We use encryption and secure payment gateways to protect your financial information.
        </li>
        <li className='pt-5'>
          <b className='text-xl'>4. Cookies & Tracking</b><br/>
          We use cookies to enhance user experience and collect analytics.<br/>
          You can disable cookies in your browser settings if preferred.
        </li>
        <li className='pt-5'>
          <b className='text-xl'>5. Cancellation & Refund Policy</b><br/>
          Due to the personalized nature of our books, cancellations are not allowed once an order is placed.<br/>
          Refunds are only applicable for damaged or incorrect products upon delivery.
        </li>
        <li className='pt-5'>
          <b className='text-xl'>6. Third-Party Links</b><br/>
          Our website may contain links to external sites. We are not responsible for their privacy practices.
        </li>
        <li className='pt-5'>
          <b className='text-xl'>7. Changes to Privacy Policy</b><br/>
          We reserve the right to update this policy at any time. Changes will be reflected on this page.
        </li>
      </ul>
      <p className='text-lg pt-10 text-amber-700'>By using our website, you consent to our Privacy Policy. For any questions, feel free to contact us.</p>
    </div>
  )
}

export default page